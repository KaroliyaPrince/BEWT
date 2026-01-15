const express = require('express')
const { ProductRoutes } = require('./routes/Product.route')

const app = express()

app.use(express.json())
app.use('/products',ProductRoutes)

app.listen(3000,()=>{
    console.log("Server start @3000 port");
})