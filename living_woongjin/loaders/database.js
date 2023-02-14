const db = require('mariadb');

const pool = db.createPool({
    host: 'localhost',
    database: 'woongjin',
    user: 'root',
    password: 'tjrwn12',
    connectionLimit: 30
});

module.exports.query = async function (sql, array) {
    try {
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const result = await connection.query(sql, array);
            await connection.commit();
            console.log('Query Success');
            console.log(result);
            return result;
        } catch (err) {
            await connection.rollback();
            console.log('Query Error : ', sql, array, err);
            return false;
        } finally {
            await connection.release();
        }
    } catch (err) {
        console.log('DB Error', err);
        return false;
    }
}