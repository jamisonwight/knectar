var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../../models/userModel');

module.exports = function(){
    passport.use(new GoogleStrategy({
      clientID: '805856647399-8ie7d35jjh7iosfekbk7n7coqoa6tcks.apps.googleusercontent.com',
      clientSecret: '3f4BjKfPYSFmrcsnzj90jbbq',
      callbackURL: 'http://localhost:5000/auth/google/callback'
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
