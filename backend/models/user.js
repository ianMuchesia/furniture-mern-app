const mongoose = require('mongoose')


const Schema = mongoose.Schema


const userSchema = new Schema({
    CustomerName:{
        type:String,
        required:[true , "Customer Name is required"]
    },
    CustomerEmail:{

    },
    Customerpassword:{

    },
    avatar:{
        type:String,
    }
},
{timestamps:true})


const User = mongoose.model('User' , userSchema)

module.exports = User