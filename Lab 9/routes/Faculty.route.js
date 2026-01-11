const mongoose = require('mongoose')
const express = require('express')
const Faculty = require('../models/Faculty')

const facultyRoutes = express.Router()

const m2 =  mongoose.connect("mongodb+srv://PrinceKaroliya:Prince123@cluster0.0fz9bm5.mongodb.net/Faculty").then(()=>{

    facultyRoutes.get('/',async (req,res)=>{
        const data = await Faculty.find()
        res.send(data)
    })

    facultyRoutes.get('/:id',async (req,res)=>{
        const data = await Faculty.findOne({_id:req.params.id})
        res.send(data)
    })

    facultyRoutes.post('/',async (req,res)=>{
        const faculty = new Faculty(req.body)
        await faculty.save()
        res.send("Faculty added")
    })

    facultyRoutes.put('/:id',async (req,res)=>{
        await Faculty.findByIdAndUpdate(req.params.id,req.body)
        res.send("Faculty updated")
    })

    facultyRoutes.delete('/:id',async (req,res)=>{
        await Faculty.findByIdAndDelete(req.params.id)
        res.send("Faculty deleted")
    })

})

module.exports.facultyRoutes = facultyRoutes 