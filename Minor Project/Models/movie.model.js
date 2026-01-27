const pool  = require("../DB/mySql");

async function getAll(){
    const [data] = await pool.query(`Select * from movies`)
    return data
}

async function getById(id){
    const [data] = await pool.query(`Select * from movies where MovieID = ${id}`)
    return data
}

async function insert(formData) {
    const [data] = await pool.query(`Insert Into Movies values (null,'${formData.movieName}','${formData.movieImage}')`)
    return data
}

async function update(id,formData) {
    const [data] = await pool.query(`Update movies set movieName = '${formData.movieName}',movieImage = '${formData.movieImage}' where movieId = ${id}`)
    return data
}

async function deleteMovie(id){
    const [data] = await pool.query(`Delete from Movies where movieId = ${id}`)
    return data
}

module.exports = {getAll,getById,insert,update,deleteMovie}