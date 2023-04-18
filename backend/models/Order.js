const mongoose = require('mongoose')


const Schema = mongoose.Schema


const OrderSchema = new Schema({
    
    tax: {
        type: Number,
        required: true,
      },
      shippingFee: {
        type: Number,
        required: true,
      },
      subtotal: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
      orderItems: [SingleOrderItemSchema],
      status: {
        type: String,
        enum: ['pending', 'failed', 'paid', 'delivered', 'canceled'],
        default: 'pending',
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      clientSecret: {
        type: String,
        required: true,
      },
      paymentIntentId: {
        type: String,
      },
      
}, { timestamps: true })


const Order = mongoose.model('Order' , OrderSchema)

module.exports = Order