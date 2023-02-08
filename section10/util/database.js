const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '172.31.128.66',
    user: 'root',
    database: 'seokju',
    password: 'tjrwn12'
});

module.exports = pool.promise();