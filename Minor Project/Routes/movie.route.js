const express = require('express')
const { getAllMovie, getMovieById, addMovie, updateMovie, deleteMovieByID } = require('../Services/movie.service')

const movieRoute = express.Router()

movieRoute.get('/',async (req,res)=>{
    const data = await getAllMovie()
    res.status(data.status).send(data)
})

movieRoute.get('/:id',async (req,res)=>{
    const data = await getMovieById(req.params.id)
    res.status(data.status).send(data)
})

movieRoute.post('/',async (req,res)=>{
    const data = await addMovie(req.body)
    res.status(data.status).send(data)
})

movieRoute.put('/:id',async (req,res)=>{
    const data = await updateMovie(req.params.id,req.body)
    res.status(data.status).send(data)
})

movieRoute.delete('/:id',async (req,res)=>{
    const data = await deleteMovieByID(req.params.id)
    res.status(data.status).send(data)
})
module.exports = movieRoute