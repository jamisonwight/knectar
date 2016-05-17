// var express = require('express');
// var passport = require('passport');
// var router = express.Router();
//
// // Google routes
// router.route('/google/callback')
//   .get(passport.authenticate('google', { successRedirect: '/users', failureRedirect: '/error' }
// ));
// router.route('/google')
//   .get(passport.authenticate('google', {
//     scope: ['https://www.googleapis.com/auth/userinfo.profile',
//             'https://www.googleapis.com/auth/userinfo.email']
//   }));
//
// // Twitter routes
// router.route('/twitter')
//   .get(passport.authenticate('twitter'));
// router.route('/twitter/callback')
//   .get(passport.authenticate('twitter', { successRedirect: '/users', failureRedirect: '/error' }
//   ));
//
//   // Facebook routes
// router.route('/facebook')
//   .get(passport.authenticate('facebook', {
//       scope: ['email']
//   }));
// router.route('/facebook/callback')
//   .get(passport.authenticate('facebook', { successRedirect: '/users', failureRedirect: '/error' }
//   ));
//
// module.exports = router;
