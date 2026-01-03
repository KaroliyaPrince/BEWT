const express = require('express')

const app = express()

app.use('/public',express.static("public"))

app.listen(3000,()=>{
    console.log("Server start at 3000 port");
})