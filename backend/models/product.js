const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  description: {
    type: String,
    required: [true, "product description must be provided"],
  },
   price: {
    type: Number,
    required: [true, "product price must be provided"],
  }, 
  rating: {
    type: Number,
    default: 4,
  },
  brand: {
    type: String,
    enum: {
      values: ["Furniture Co", "Outdoor Co", "Kitchen Co"],
      message: "{VALUE} is not supported",
    },
  },
  category: {
    type: String,
    enum: {
      values: [
        "Living Room",
        "Kitchen",
        "Outdoor",
        "Bedroom",
        "Entryway",
        "Office",
        "Dining Room",
      ],
    },
  },
 material: {
    type: String,
    required: [true, "please provide type of material"],
  }, 

  imageUrl: {
    type: String,
    required: [true, "please provide an image"],
  },
  featured: {
    type: Boolean,
    default: false,
  },

   InStock: {
    type: Number,
    required: [true, "Number of products in stock must be provided"],
  }, 
  createdAt:{
    type:Date,
    default:Date.now()
  }
});

module.exports = mongoose.model("Product", productSchema);
