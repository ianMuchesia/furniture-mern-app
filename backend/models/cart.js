const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: Number,
  purchasePrice: {
    type: Number,
    default: 0,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
});


const CartItem = mongoose.model('CartItem', cartItemSchema)

module.exports = CartItem


const CartSchema = new Schema({
    products: [cartItemSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    updated: Date,
    created: {
      type: Date,
      default: Date.now
    }
})

const Cart = mongoose.model('Cart', CartSchema)

module.exports = Cart