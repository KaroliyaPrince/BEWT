const mongoose = require('mongoose')
const express = require('express')
const Product = require('../models/Product')
require("dotenv").config()
const connection_string = process.env.connection_string

const ProductRoutes = express.Router()

mongoose.connect(connection_string+"Product").then(()=>{

    ProductRoutes.get('/',async (req,res)=>{
        const data = await Product.find()
        res.send(data)
    })

    ProductRoutes.get('/:id',async (req,res)=>{
        const data = await Product.findOne({_id:req.params.id})
        res.send(data)
    })

    ProductRoutes.post('/',async (req,res)=>{
        const product = new Product(req.body)
        await product.save()
        res.send("Product added")
    })

    ProductRoutes.put('/:id',async (req,res)=>{
        await Product.findByIdAndUpdate(req.params.id,req.body)
        res.send("Product updated")
    })

    ProductRoutes.delete('/:id',async (req,res)=>{
        await Product.findByIdAndDelete(req.params.id)
        res.send("Product deleted")
    })

})

module.exports.ProductRoutes = ProductRoutes 