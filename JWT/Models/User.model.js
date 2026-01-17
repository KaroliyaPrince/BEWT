const { pool } = require("../DB/mysql");

async function getAll(){
    let [data] = await pool.query("Select * from User_table")
    return data
}


async function getById(id) {
    let [data] = await pool.query(`Select * from user_table where userId = ${id}`)
    return data
}

async function getUserByUserName(userName){
    let [data] = await pool.query(`select * from user_table where userName = '${userName}'`)
    return data
}

module.exports = {getAll,getById,getUserByUserName}