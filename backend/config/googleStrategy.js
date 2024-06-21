import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    callbackURL: 'YOUR_CALLBACK_URL'
  },
  (accessToken, refreshToken, profile, done) => {
    // Add your logic here to handle the user's profile data
    // and authentication process
    // For example, you can save the user to the database or
    // create a new user if it doesn't exist
    // You can also pass additional data to the done() function
    // if needed

    // Example:
    const user = {
      id: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value
    };

    done(null, user);
  }
));

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});