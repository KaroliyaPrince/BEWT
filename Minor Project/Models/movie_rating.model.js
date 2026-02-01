const pool = require("../DB/mySql");

async function getAll() {
    const [data] = await pool.query(`Select * from movie_rating`)
    return data
}

async function getByID(id) {
    const [data] = await pool.query(`Select * from movie_rating where RatingID = ${id}`)
    return data
}

async function insert(formData) {
    const [data] = await pool.query(`Insert Into movie_rating values (null,${formData.MovieID},${formData.UserID},${formData.RatingStar},'${formData.RatingComment}')`)
    return data
}

async function update(id,formData) {
    const [data] = await pool.query(`update movie_rating set MovieID = ${formData.MovieID},UserID = ${formData.UserID},RatingStar = ${formData.RatingStar},RatingComment = '${formData.RatingComment}' where RatingID = ${id}`)
    return data
}

async function deleteMovieRating(id) {
    const [data] = await pool.query(`delete from movie_rating where RatingID = ${id}`)
    return data
}

module.exports = {getAll,getByID,insert,update,deleteMovieRating}
