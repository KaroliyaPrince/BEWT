const mongoose = require('mongoose')

const schema = mongoose.Schema({
    facName:String,
    facId:Number,
    facEmail:String,
    facPhone:Number
})

module.exports = mongoose.model('facultys',schema)