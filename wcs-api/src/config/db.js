require('dotenv').config();

const mysql = require('mysql2/promise');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;


/**
 * 
 * @date 09/06/2023 - 11:02:35
 *
 * @type {*}
 */
const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

db.getConnection().catch(() => {
  console.warn(
    "Warning: DB failed",
  );
});

module.exports = db;