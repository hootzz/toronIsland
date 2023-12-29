//로그인 및 인증 관련 로직
const passport = require('passport');
const mysql = require('../models/userModel');

exports.googleLogin = passport.authenticate('google', {scope : ['profile', 'email']});
exports.googleCallback = passport.authenticate('google', {
    failureRedirect : '/',  //실패 시 :3000 으로, 즉 처음 로그인 화면
    successRedirect : '/main'   //성공 시, :3000/main으로, 메인 화면으로
});