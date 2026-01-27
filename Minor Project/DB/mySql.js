const {createPool} = require('mysql2/promise')
require('dotenv').config()

const pool = createPool({
    host:process.env.HOST,
    user:process.env.USER,    
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    connectionLimit:process.env.CONNECTION_LIMIT
})

module.exports = pool