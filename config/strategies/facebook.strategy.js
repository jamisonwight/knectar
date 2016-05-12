var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../models/userModel');


module.exports = function() {
    passport.use(new FacebookStrategy({
      clientID: '788648667933151',
      clientSecret: '23fac985edf237650e4ba1b98a39952f',
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      passReqToCallback: true
      },
      function(req, accessToken, refreshToken, profile, done) {
          var query = {
              'facebook.id': profile.id
          };
          var user = {};
            User.findOne(query, function(error, user){
                if (user) {
                    console.log('found');
                    done(null, user);
                } else {
                    console.log('not found');
                    var user = new User;
                    //user.email = profile.emails[0].value;
                    //user.image = pro
                    user.displayName = profile.displayName;

                    user.facebook = {};
                    user.facebook.id = profile.id;
                    user.facebook.token = accessToken;

                   user.save();
                   done(null, user);
                }
            });
      }));
}
