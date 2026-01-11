const express = require('express')
const { studentRoute } = require('./routes/Students.route')

const app = express()

app.use(express.json())
app.use('/students',studentRoute)

app.listen(3000,()=>{
    console.log("Server start @3000 port");
})