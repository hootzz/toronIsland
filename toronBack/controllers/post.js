// config > db.js에서 DB와 연결 
// init -> mysql.createConnection db랑 연결
// db_toron -> 연결 정보 전달  
// connect -> 연결 객체 전달 받음 
const mysqlModule = require('../config/db.js');
const connection = mysqlModule.init();

const express = require('express');
const app = express();

connection.query('SELECT * FROM board', (err, result)=> {
    if(err) throw err;
    console.log(result);
});



mysqlModule.connect(connection);