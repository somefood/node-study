// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: '172.31.128.66',
//     user: 'root',
//     database: 'seokju',
//     password: 'tjrwn12'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('seokju', 'root', 'tjrwn12', {
    dialect: 'mysql',
    host: '172.31.128.66'
});

// 커넥션 풀 불러오기
module.exports = sequelize;