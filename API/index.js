const express = require('express')
const mongoose = require('mongoose')
const Students = require('./models/Students')

const app = express()

mongoose.connect("mongodb+srv://PrinceKaroliya:Prince123@cluster0.0fz9bm5.mongodb.net/Students")
    .then(() => {

        app.use(express.json())

        app.get("/students", async (req, res) => {
            let students = await Students.find()
            res.send(students)
        })

        app.get("/student/:id", async (req, res) => {
            let student = await Students.findOne({ _id: req.params.id })
            res.send(student)
        })

        app.post("/student", async (req, res) => {
            let student = new Students(req.body)
            await student.save()
            res.send("Student added")
        })

        app.put("/student/:id", async (req, res) => {

            await Students.findByIdAndUpdate(req.params.id,req.body)
            res.send("Student updated")
        })

        app.delete("/student/:id", async (req,res)=>{
            await Students.findByIdAndDelete(req.params.id)
            res.send("Student Deleted")
        })

        app.listen("3000", () => {
            console.log("Server start at 3000 port");
        })
    })  