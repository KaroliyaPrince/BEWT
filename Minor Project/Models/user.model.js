const pool  = require("../DB/mySql")

async function getAll(){
    const [data] = await pool.query("Select * from users")
    return data
}

async function getById(id) {
    const [data] = await pool.query(`Select * from users where userID = ${id}`)
    return data
}

async function insert(newdata) {
    const [data] = await pool.query(`Insert Into users values (null,'${newdata.userName}','${newdata.password}')`)
    return data
}

async function deleteUser(id) {
    const [data] = await pool.query(`Delete From users where userId = ${id}`)        
    return data
}

async function updateUser(id,newData){
    const [data] = await pool.query(`Update users set userName = '${newData.userName}',password='${newData.password}' where userId = ${id}`)
    return data
}

module.exports = {getAll,getById,insert,deleteUser,updateUser}