const mongoose  = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'product name must be provided']
    },
    price:{
        type: Number,
        required:[true, 'product price must be provided']
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4,

    },
    description:{
        type:String,
        required:[true,'product description must be provided']

    },
    brand:{
        type:String,
        enum:{
            values:['Furniture Co','Outdooe Co', 'Kitchen Co'],
            message:'{VALUE} is not supported'
        }
    },
    category:{
        type:String,
        enum:{
            values:['Living Room','Kitchen','Outdoor','Bedroom','Entryway','Office','Dining Room']
        }
    },
    Instock:{
        type:Number,
        required:[true,'Number of products in stock must be provided']
    },
    imageUrl:{
        type:"string",
        required:[true,'please provide an image']
    },
    material:{
        type:String,
        required:[true, 'lease provide type of material']
    }

})

module.exports = mongoose.model('Product', productSchema)