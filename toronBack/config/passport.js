//authenticating module
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');
//router 작업할 때 밑에 두 줄 라우터로 옮겨두기
const jwt = require('jsonwebtoken');
const session = require('express-session');

passport.use(new GoogleStrategy({
    clientID : '1082978828191-bhh1rrdv4preg21gtsvkhbtn2pafahnt.apps.googleusercontent.com',
    clientSecret : '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',
    callbackURL : 'http://localhost:3000/login/auth/google'
}, (accessToken, refreshToken, profile, done) => {
    const data = {
        id : profile.id,
        email : profile.email[0].value,
        provider : profile.provider
    }
    User.save(data, (err, result) =>{
        if(err) throw err;
        console.log('[RESULT] ' + result);
    });
    return done(null.profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});
  
  passport.deserializeUser((user, done) => {
    done(null, user);
});

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  };
  
module.exports = isAuthenticated;