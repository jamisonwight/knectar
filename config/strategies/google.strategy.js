var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../../models/userModel');

module.exports = function(){
    passport.use(new GoogleStrategy({
      clientID: '823762135906-kpkrbf697234dd8bqchtbdvn21ab4qcq.apps.googleusercontent.com',
      clientSecret: 'iZgpDI5IMUJfZJBwxHezUqQj',
      callbackURL: 'http://localhost:3000/auth/google/callback'
      },
      function(req, accessToken, refreshToken, profile, done) {
          var user= {};
          var query = {
              'google.id': profile.id
          };
          User.findOne(query, function(error, user){
              if (user) {
                  console.log('found');
                  done(null, user);
              } else {
                  console.log('not found');
                  var user = new User;
                  user.email = profile.emails[0].value;
                  user.image = profile._json.image.url;
                  user.displayName = profile.displayName;

                  user.google = {};
                  user.google.id = profile.id;
                  user.google.token = accessToken;

                 user.save();
                 done(null, user);
              }
          });
      }));
};
