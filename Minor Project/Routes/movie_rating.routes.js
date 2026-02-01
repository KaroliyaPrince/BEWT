const express = require('express')
const { getAllMovieRating, getMovieRatingById, addMovieRating, updateMovieRating, deleteMovieRatingByID } = require('../Services/movie_rating.service')

const movieRatingRoute = express.Router()

movieRatingRoute.get('/', async (req,res)=>{
    const data = await getAllMovieRating()
    res.status(data.status).send(data)
})

movieRatingRoute.get('/:id', async (req,res)=>{
    const data = await getMovieRatingById(req.params.id)
    res.status(data.status).send(data)
})

movieRatingRoute.post('/', async (req,res)=>{
    const data = await addMovieRating(req.body)
    res.status(data.status).send(data)
})

movieRatingRoute.put('/:id', async (req,res)=>{
    const data = await updateMovieRating(req.params.id,req.body)
    res.status(data.status).send(data)
})

movieRatingRoute.delete('/:id', async (req,res)=>{
    const data = await deleteMovieRatingByID(req.params.id)
    res.status(data.status).send(data)
})

module.exports = movieRatingRoute