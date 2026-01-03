const express = require("express");
const fs = require('fs');

const app = express();

app.get('/about',(req,res)=>{
    fs.readFile('about.txt',(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
})

app.get('/contact',(req,res)=>{
    fs.readFile('contact.txt',(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
})

app.listen(3000,()=>{
    console.log("Start");
    
})