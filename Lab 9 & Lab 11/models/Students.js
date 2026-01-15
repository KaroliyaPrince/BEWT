const mongoose = require('mongoose')

const schema = mongoose.Schema({
    stuName:String,
    stuRoll:Number,
    stuEmail:String,
    stuPhone:Number
})

module.exports = mongoose.model('students',schema)