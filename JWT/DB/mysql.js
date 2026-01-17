const { createPool } = require("mysql2/promise");
require("dotenv").config();

const pool = createPool({
  host: process.env.host,
  database: process.env.database,
  user: process.env.user,
  password: process.env.password,
  connectionLimit: 10
});

module.exports = { pool };
