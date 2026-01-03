const express = require("express");

const app = express();

app.use(express.json())

app.post('/login',(req,res)=>{
    const {name,email,password} = req.body

    res.send(`Name = ${name} , Email = ${email} , Password = ${password}`)
})

app.get('/details/:id',(req,res)=>{
    res.send(req.params.id)
})

app.get('/',(req,res)=>{
    res.send(req.query)
})

app.listen(3000,()=>{
    console.log("Start");
})