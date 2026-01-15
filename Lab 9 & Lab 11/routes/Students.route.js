require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const students = require('../models/Students')
const connection_string = process.env.connection_string
const studentRoute = express.Router()

mongoose.connect(connection_string+'Students').then(()=>{

    studentRoute.get('/',async (req,res)=>{
        const data = await students.find()
        res.send(data)
    })

    studentRoute.get('/:id',async (req,res)=>{
        const data = await students.findOne({_id:req.params.id})
        res.send(data)
    })

    studentRoute.post('/',async (req,res)=>{
        const student = new students(req.body)
        await student.save()
        res.send("Student added")
    })

    studentRoute.put('/:id',async (req,res)=>{
        await students.findByIdAndUpdate(req.params.id,req.body)
        res.send("Student updated")
    })

    studentRoute.delete('/:id',async (req,res)=>{
        await students.findByIdAndDelete(req.params.id)
        res.send("Student deleted")
    })

})

module.exports.studentRoute = studentRoute