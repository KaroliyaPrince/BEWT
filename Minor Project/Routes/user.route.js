const express = require('express')
const { getAllUser, getUserbyID, addUser, deleteUserById, updateUserByID } = require('../Services/user.service')

const userRoute = express.Router()

userRoute.get('/', async (req,res)=>{
    const data = await getAllUser()
    res.status(data.status).send(data)
})

userRoute.get('/:id',async (req,res)=>{
    const data = await getUserbyID(req.params.id);
    res.status(data.status).send(data)
})

userRoute.post('/',async (req,res)=>{
    const data = await addUser(req.body)
    res.status(data.status).send(data)
})

userRoute.put('/:id',async (req,res)=>{
    const data = await updateUserByID(req.params.id,req.body)
    res.send(data)
})

userRoute.delete('/:id',async (req,res)=>{
    const data = await deleteUserById(req.params.id)
    res.send(data)
})

module.exports = userRoute