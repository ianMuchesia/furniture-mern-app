const express = require('express')
const fileUpload = require('express-fileupload')
var cloudinary = require('cloudinary').v2;
const products = require('./products')
const app = express();

app.get('/', (req, res)=>{
    res.status(200).json({msg:products})
})

const port = 3000


app.listen(port, ()=>{
    console.log(`${products.length}`)
})