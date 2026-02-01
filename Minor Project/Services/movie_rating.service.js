const { getAll, getByID, insert, update, deleteMovieRating } = require("../Models/movie_rating.model")

async function getAllMovieRating() {
    try {
        const data = await getAll()

        if (data.length != 0) {
            return {
                status: 200,
                error: false,
                data,
                massage: 'Movie ratings fetch successfull...!'
            }
        }
        else {
            return {
                status: 404,
                error: true,
                massage: 'Data not found...!'
            }
        }
    }
    catch (err) {
        return {
            status: 404,
            error: true,
            massage: err
        }
    }
}

async function getMovieRatingById(id) {
    try {
        const data = await getByID(id)

        if (data.length != 0) {
            return {
                status: 200,
                error: false,
                data,
                massage: 'Movie ratings fetch successfull...!'
            }
        }
        else {
            return {
                status: 404,
                error: true,
                massage: 'Data not found...!'
            }
        }
    }
    catch (err) {
        return {
            status: 404,
            error: true,
            massage: err
        }
    }
}

async function addMovieRating(formData) {
    try {
        const data = await insert(formData)
        return {
            status: 200,
            error: false,
            data,
            massage: 'Movie Rating Added Successfull...!'
        }
    }
    catch (err) {
        return {
            status: 404,
            error: true,
            massage: err
        }
    }
}

async function updateMovieRating(id,formData) {
    try {
        const data = await update(id,formData)
        return {
            status: 200,
            error: false,
            data,
            massage: 'Movie Rating updated Successfull...!'
        }
    }
    catch (err) {
        return {
            status: 404,
            error: true,
            massage: err
        }
    }
}

async function deleteMovieRatingByID(id) {
    try {
        const data = await deleteMovieRating(id)
        return {
            status: 200,
            error: false,
            data,
            massage: 'Movie Rating deleted Successfull...!'
        }
    }
    catch (err) {
        return {
            status: 404,
            error: true,
            massage: err
        }
    }
}

module.exports = { getAllMovieRating, getMovieRatingById ,addMovieRating,updateMovieRating,deleteMovieRatingByID}