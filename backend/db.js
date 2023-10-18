const { createPool } = require('mysql2/promise');

require('dotenv').config();

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

module.exports = {
    pool
};
