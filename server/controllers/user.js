const router = require('express').Router();
const model = require('../database/queries');
const bcrypt = require('bcrypt');
const authenticate = require('../middlewares/authenticate.js');

const serverErr = { ERR: { status: 500, message: 'Something went wrong. So Sorry!' } };

router.get('/:userId', authenticate, (req, res) => {
  model.getUser(req.params.userId)
  .then(response => {
    //shoudln't send password back to client!
    res.status(200).send(response[0]);
  })
  .catch(err => {
    res.satus(400).send('Wrong password');
  });
});

router.post('/:userId/changePassword', authenticate, (req, res) => {
  model.changeUserPassword(req.body.userId, req.body.password)
  .then(response => {
    res.status(201).send('changed password');
  })
  .catch(err => {
    res.status(400).send('failed to change password');
  });
});

module.exports = router;