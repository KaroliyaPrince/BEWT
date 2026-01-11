const mongoose = require('mongoose')

const schema = mongoose.Schema({
    productName:String,
    productPrice:Number,
    productCompany:String,
    productDiscription:String
})

module.exports = mongoose.model('products',schema)