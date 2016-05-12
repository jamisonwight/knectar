var express = require('express');
var router = express.Router();
var io = require('socket.io-client');
 var socket = io('http://localhost:5000');
// var facebook = require('../services/facebook')
// ('492137460988072', 'fddfa59fb4369b43c23a99e238f46b1a');

router.use('/', function(req, res, next){
    if(!req.user){
        res.redirect('/');
    } else {
        socket.emit('username', req.user)
        res.redirect('/app');
      }
      next();
});

  // if (req.user.facebook) {
  //     facebook.getImage(req.user.facebook.token,
  //           function(results){
  //               req.user.image = results.url;
  //               res.render('users', { user: req.user } );
  //           })

module.exports = router;
