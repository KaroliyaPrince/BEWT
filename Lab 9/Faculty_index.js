const express = require('express')
const { facultyRoutes } = require('./routes/Faculty.route')

const app = express()

app.use(express.json())
app.use('/facultys',facultyRoutes)

app.listen(3000,()=>{
    console.log("Server start @3000 port");
})