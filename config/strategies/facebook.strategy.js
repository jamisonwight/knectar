var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../models/userModel');


module.exports = function() {
    passport.use(new FacebookStrategy({
      clientID: '492137460988072',
      clientSecret: 'fddfa59fb4369b43c23a99e238f46b1a',
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
