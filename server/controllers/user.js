const router = require('express').Router();
const model = require('../database/queries');
const bcrypt = require('bcrypt-promised');
const authenticate = require('../middlewares/authenticate.js');

const serverErr = { ERR: { status: 500, message: 'Something went wrong. So Sorry!' } };

router.get('/', (req, res) => {
  res.status(200).send('recovered user info');
});

router.get('/:userId', authenticate, (req, res) => {
  model.getUser(req.params.userId)
  .then(response => {
    res.status(200).send(response[0]);
  })
  .catch(err => {
    res.satus(400).send('Wrong password');
  });
});

router.post('/:userId/changePassword', authenticate, (req, res) => {
  let { currentPassword, newPassword } = req.body;
  let { userId } = req.user;

  model.getUser(userId)
  .then(response => {
    bcrypt.compare(currentPassword, response[0].password)
    .then(result => {
      const saltRounds = 10;
      bcrypt.hash(newPassword, saltRounds)
      .then(hash => {
        return model.changeUserPassword(userId, hash)
        .then(response => {
          res.status(201).send('Successfully changed password');
        })
        .catch(err => {
          res.status(400).send('Failed to change password');
        });
      });
    })
    .catch(err => {
      res.status(400).send('You entered wrong current password');
    });
  })
  .catch(err => {
    res.status(400).send('Failed to change password');
  });
});

module.exports = router;