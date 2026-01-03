const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('/contact',(req,res)=>{
    res.send("Contact Page")
})

app.get('/details',(req,res)=>{
    res.send("Details page")
})


app.get('/about_us',(req,res)=>{
    res.send("About Us page")
})

app.get('/login',(req,res)=>{
    res.send("Login Page")
})

app.use((req,res)=>{
    res.send("Page not found")
})

app.listen(3000,()=>{
    console.log("Start");
    
})