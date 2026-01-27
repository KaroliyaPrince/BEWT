const { config } = require('dotenv')
const express = require('express')
const userRoute = require('./Routes/user.route')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use('/user',userRoute)

app.listen(process.env.PORT_NUMBER,()=>{
    console.log("Server start at "+process.env.port_number);
})