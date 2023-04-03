const Cart = require("../models/cart");
const {StatusCodes} = require('http-status-codes')
const {NotFoundError} = require('../errors');
const Product = require("../models/product");

const addCart = async(req, res)=>{
  req.body.user = req.user.userId
  
    
    const {products, user} = req.body.products;

    

    const cart = new Cart({
        user,
        products
      });

      const cartDoc = await cart.save();

      decreaseQuantity(products);
      
      res.status(StatusCodes.CREATED).json({
        success: true,
        cartId: cartDoc.id
      }); 

}



const addItemToCart = async(req, res)=>{
  const  {products} = req.body
  const  { cartId} = req.params 

 const itemAddedToCart =  await Cart.updateOne({_id:cartId}, { $push: { products: products } }).exec();

  if(!itemAddedToCart){
    throw new NotFoundError(`not cart details found with id:${cartId}`)
  }
  res.status(StatusCodes.OK).json({
    success: true
  }); 
}


const removeCart = async(req, res)=>{

  const  { cartId} = req.params
 
  const deletedCartItem = await Cart.deleteOne({_id:cartId})
  if(!deletedCartItem){
    throw new NotFoundError(`no cart found with id:${cartId}`)
  }

  res.status(StatusCodes.OK).json({success:true})

}

const removeItemFromCart = async(req, res)=>{
  const product = { product: req.params.productId };
    const query = { _id: req.params.cartId };

    const itemToBeRemoved =  await Cart.updateOne(query, { $pull: { products: product } }).exec();

    if(!itemToBeRemoved){
      throw new NotFoundError(`product not included in this cart`)
    }
    res.status(StatusCodes.OK).json({
      success: true
    });
  
}

const decreaseQuantity = (products) => {
  let bulkOptions = products.map(item => {
    return {
      updateOne: {
        filter: { _id: item.product },
        update: { $inc: { Instock: -item.InStock } }
      }
    };
  });

  Product.bulkWrite(bulkOptions);
};

module.exports ={ addCart, addItemToCart, removeCart, removeItemFromCart}