const Product = require('../models/product')

const getSingleProduct=async(req,res)=>{
    const {id:ProductID} = req.params;

    const product = await Product.findOne({_id:ProductID})
    res.status(200).json({msg:product})

}

const getAllProducts = async(req,res)=>{
    

    const {featured , category , search , sort} = req.query

    const queryObject = {}

    if(featured){
        queryObject.featured = featured === "true"? true: false;
    }
    if(category){
        queryObject.category = category
    }if(search){
        queryObject.name = {$regex:search, $options: "i"}
    }
    
    let result = Product.find(queryObject)
    if(sort){
        const sortArray = sort.split(",").join(" ")
        result = result.sort(sortArray)
    }else{
        result = result.sort('createdAt')
    }
    const products = await result
    res.status(200).json({msg:products , nbHits:products.length})
}

module.exports = {getAllProducts, getSingleProduct}