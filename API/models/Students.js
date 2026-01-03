const mongoose = require("mongoose")

const schema = mongoose.Schema({
    StuName: String,
    StuRoll: Number,
    StuEmail:String,
    StuPhone:Number,
})

module.exports = mongoose.model("Students",schema) 