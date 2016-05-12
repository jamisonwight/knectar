var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../../models/userModel');

module.exports = function() {
    passport.use(new TwitterStrategy({
        consumerKey: 'NLooKrs6hecQNdyIAggpyP3A3',
        consumerSecret: 'sg6rXkoEmAk5aI5KodHIoOxzz2Cc82wp4TP0ZG2bJuBXPnClGA',
        callbackURL: 'http://127.0.0.1:5000/auth/twitter/callback',
        passReqToCallback: true
    },
    function(req, token, tokenSecret, profile, done){
         var user= {};
         var query = {
            'twitter.id': profile.id
         };
          User.findOne(query, function(error, user){
              if (user) {
                  console.log('found');
                  done(null, user);
              } else {
                  console.log('not found');
                  var user = new User;
                  //user.email = profile.emails[0].value;
                  user.image = profile.profile_image_url;
                  user.displayName = profile.displayName;


                  user.twitter = {};
                  user.twitter.id = profile.id;
                  user.twitter.token = token;

                  user.save();
                  done(null, user);
              }
          });
    }));
}
