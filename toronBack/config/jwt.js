//User Login 관련 토큰 라이브러리

const jwt = require('jsonwebtoken');

const verifyTocken = (token) => {
    try{
        const decoded = jwt.verify(token, "PASSWORD")
        return decoded;
    }catch (err){
        if(err.name === 'TokenExpriedError'){
            alert("세션이 만료되었습니다.");
            console.log(err)
        }
        else if(err.name === 'JsonWebTokenError'){
            alert("서명이 유효하지 않습니다.");
            console.log(err);
        }
        else if(err.name === 'NotBeforeError'){
            alert("토큰 형식이 아닙니다.");
            console.log(err);
        }
        console.log(err);
        return false;
    }
}

//access 토큰, 2시간 동안 유효, 요청마다 로그인 수행(cookie)
const makeAccessToken = (id) =>{
    try{
        return jwt.sign({
            id
        }, "PASSWORD", {
            expiresIn : '2h'
        })
    }catch(err){
        console.log(err);
    }
}

//refresh 토큰, 2주 유효
const makeRefreshToken = (id) => {
    try{
        return jwt.sign({
            id
        }, "PASSWORD", {
            expiresIn : '14d'
        })
    }catch(err){
        return "error"
    }
}

module.exports = {verifyTocken, makeAccessToken, makeRefreshToken}