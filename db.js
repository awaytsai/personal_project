require("dotenv").config();
const mysql = require("mysql2/promise");
const env = process.env.NODE_ENV || "production";

const mysqlConfig = {
  production: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
  test: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE_TEST,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
};

let mysqlEnv = mysqlConfig[env];

const db = mysql.createPool(mysqlEnv);

db.getConnection((err) => {
  if (err) throw err;
  console.log(`mysql connected! ${mysqlEnv}`);
});

module.exports = db;
