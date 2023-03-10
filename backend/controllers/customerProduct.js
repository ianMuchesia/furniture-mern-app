const Product = require("../models/product");

const getSingleProduct = async (req, res) => {
  const { id: ProductID } = req.params;

  const product = await Product.findOne({ _id: ProductID });
  res.status(200).json({ msg: product });
};

const getAllProductsByCategory = async (req, res) => {
  const { featured, category, search, sort, fields, numericFilters , page} = req.query;

  const queryObject = {};
  //featured
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  //category
  if (category) {
    queryObject.category = category;
  }
  //search for an item
  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }
  if(numericFilters){
    const opertorMap ={
        '>':'$gt',
        '>=':'$gte',
        '=':'$eq',
        '<':'$lt',
        '<=':'$lte',
    }
    const regEx = /\b(<|>|>=|=|<|<=)\b/g
    let filters = numericFilters.replace(regEx,(match)=>`-${opertorMap[match]}-`)
    const options = ['price', 'rating']
    filters =filters.split(',').forEach((item)=>{
       const [field, operator, value] =  item.split('-') 
       if(options.includes(field)){
        queryObject[field] = {[operator]:Number(value)}
       }
    })
    //console.log(queryObject)
  }

  let result = Product.find(queryObject);
  if (sort) {
    const sortArray = sort.split(",").join(" ");
    result = result.sort(sortArray);
  } else {
    result = result.sort("createdAt");
  }
  //select the only one you want to see
  if (fields) {
    const fieldList = fields.split(",").join(" ");
    result = result.select(fieldList);
  }
  //setting up pagination functionality
  if(page){
    const pagination = Number(page);
    const limit = Number(req.query.limit) || 9;
    const skip = (pagination - 1) * limit;
  
    result = result.skip(skip).limit(limit);  
  }
  
  const products = await result;
  res.status(200).json({ msg: products, nbHits: products.length });
};

module.exports = { getAllProductsByCategory, getSingleProduct };
