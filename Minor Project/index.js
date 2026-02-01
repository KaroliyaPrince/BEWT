const { config } = require('dotenv')
const express = require('express')
const userRoute = require('./Routes/user.route')
const movieRoute = require('./Routes/movie.route')
const checkToken = require('./Middlewares/auth')
const movieRatingRoute = require('./Routes/movie_rating.routes')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(checkToken)
app.use('/user',userRoute)
app.use('/movie',movieRoute)
app.use('/movie_rating',movieRatingRoute)

app.listen(process.env.PORT_NUMBER,()=>{
    console.log("Server start at "+process.env.port_number);
})