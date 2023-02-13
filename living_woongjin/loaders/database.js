const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'woongjin',
    user: 'woongjin',
    password: 'woongjin12!',
    connectionLimit: 30
});

function getConnection(callback) {
    pool.getConnection((error, connection) => {
        if (!error) {
            callback(connection);
        }
    });
}

module.exports = getConnection;
