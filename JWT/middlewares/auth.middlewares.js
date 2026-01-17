require('dotenv').config()
const jwt = require('jsonwebtoken')
const key = process.env.key
const express = require('express')
const { checkLogin } = require('../Services/User.services')


function checkToken(req,res,next){
    if(req.url === '/user/login'){
        next()
    }

    else{

        try{
            let decode = jwt.verify(req.headers.token,key)
            next()
        }
        catch(err){
            res.send("not valid user")
        }
    }
}

module.exports = checkToken