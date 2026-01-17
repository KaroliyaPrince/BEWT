const express = require('express');
const { userRoute } = require('./Routes/User.route');
const checkToken = require('./middlewares/auth.middlewares');

const app = express()


app.use(checkToken)
app.use('/user',userRoute)

app.listen(3000,()=>{
    console.log("Server start @3000 poer");
})