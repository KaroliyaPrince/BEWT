const { getAll, getById, insert, update, deleteMovie } = require("../Models/movie.model")
const { getUserByName } = require("../Models/user.model")
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function getAllMovie(){
    try{
        const data = await getAll()

        if(data.length != 0){
            return {
                status:200,
                error:false,
                data,
                massage:"All movie fetched successfull...!"
            }
        }
        else{
            return {
                status:404,
                error:true,
                massage:"Movies not found"
            }
        }

    }
    catch(err){
        return {
            status:404,
            error:true,
            massage:err
        }
    }
}

async function getMovieById(id){
    try{
        const data = await getById(id)

        if(data.length != 0){
            return {
                status:200,
                error:false,
                data,
                massage:"Movie details by id fetched successfull...!"
            }
        }
        else{
            return {
                status:404,
                error:true,
                massage:"Movie not found"
            }
        }

    }
    catch(err){
        return {
            status:404,
            error:true,
            massage:err
        }
    }
}

async function addMovie(formData){
    try{
        const data = await insert(formData)

        return {
            status:200,
            error:false,
            data,
            massage:"Movie added successfull...!"
        }
    }
    catch(err){
        return {
            status:404,
            error:true,
            massage:err
        }
    }
}

async function updateMovie(id,formData){
    try{
        const data = await update(id,formData)

        return {
            status:200,
            error:false,
            data,
            massage:"Movie updated successfull...!"
        }
    }
    catch(err){
        return {
            status:404,
            error:true,
            massage:err
        }
    }
}

async function deleteMovieByID(id){
    try{
        const data = await deleteMovie(id)

        return {
            status:200,
            error:false,
            data,
            massage:"Movie deleted successfull...!"
        }
    }
    catch(err){
        return {
            status:404,
            error:true,
            massage:err
        }
    }
}


async function checkLogin(formData){
    try{
        const data = await getUserByName(formData.userName)
        
        if(data.length != 0){


            if(data[0].Password === formData.password){
                const token = jwt.sign({userID:formData.userId,userName:data.userName},process.env.KEY)

                return {
                    status:200,
                    error:false,
                    token,
                    massage:"Login successfull...!"
                }
            }

        }
        else{
            return {
                status:404,
                error:true,
                massage:"User Not Found"
            }
        }
    }
    catch(err){
        return {
            status:404,
            error:true,
            massage:err
        }
    }
}


module.exports = {getAllMovie,getMovieById,addMovie,updateMovie,deleteMovieByID,checkLogin}