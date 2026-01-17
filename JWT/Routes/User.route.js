const express = require('express')
const { getAllUser, getUserById, checkLogin } = require('../Services/User.services')

const userRoute = express.Router()

userRoute.use(express.json())

userRoute.get('/',async (req,res)=>{
    const data = await getAllUser()
    res.send(data)
})

userRoute.get('/:id',async (req,res)=>{
    const data = await getUserById(req.params.id)
    res.send(data)
})


userRoute.post('/login', async (req,res)=>{
    let data = await checkLogin(req.body)
    res.send(data)
})

module.exports = {userRoute}