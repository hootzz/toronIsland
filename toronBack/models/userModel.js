//user table을 DB에서 가져와 저장하는 로직 

const mysql = require('mysql2');
//config/db에서 연동한 데베 가져옴 (module.exports의 return문)
const db = require('../config/db');
//user table
const user = db['user'];

