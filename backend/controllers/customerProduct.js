const Product = require('../models/product')

const getSingleProduct=async(req,res)=>{
    const {id:ProductID} = req.params;

    const product = await Product.findOne({_id:ProductID})
    res.status(200).json({msg:product})

}

const getAllProducts = async(req,res)=>{
    const products = await Product.find({})

    res.status(200).json({msg:products})
}

module.exports = {getAllProducts, getSingleProduct}