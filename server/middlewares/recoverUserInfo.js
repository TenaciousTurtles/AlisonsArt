const router = require('express').Router();
const jwt = require('jsonwebtoken');
const decode = require('jwt-decode');
const model = require('../database/queries');

const recoverUserInfo = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];

  let authToken;
  if (authorizationHeader) {
    authToken = authorizationHeader.split(' ')[1];
  } else {
    authToken = req.cookies.jwt;
  }

  if(authToken !== 'null') {
    jwt.verify(authToken, process.env.jwtSecret, (err, decoded) => {
      if (err) {
        //if failed to authenticate, front end should delete the token
        res.status(403).json({
          error: 'Failed to authenticate.'
        });
        next();
      } else {
        //attach decoded user info to res.headers:
        let decodedInfo = decode(authToken);
        res.setHeader('x-username', decodedInfo.username);
        res.setHeader('x-userId', decodedInfo.userId);
        res.setHeader('x-type', decodedInfo.type);
        res.status(200).send('authenticated');
      }
    });
  } else {
    //there's no auth token provided in the request headers

    res.status(200).send('no authentication token');
  }
};

module.exports = recoverUserInfo;
