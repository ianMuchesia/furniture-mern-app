const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema


const userSchema = new Schema({
    firstName:{
        type:String,
        required:[true , "Customer Name is required"],
        minlength: 3,
        maxlenght: 50,

    },
    lastName:{
        type:String,
        required:[true , "Customer Name is required"],
        minlength: 3,
        maxlenght: 50,

    },
    CustomerEmail:{
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "please provie valid email",
          ],
          unique: true,

    },
    CustomerPassword:{
        type: String,
        required: [ true, "please provide password"],
        minlength: 6
    },
    avatar:{
        type:String,
    }
},
{timestamps:true})


userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt(10);
    this.CustomerPassword = await bcrypt.hash(this.CustomerPassword, salt)
    next()
})

userSchema.methods.createJWT = function(){
    return jwt.sign(
        
           { userId: this._id, name: this.firstName},
            process.env.JWT_SECRET,
            {expiresIn : process.env.JWT_LIFETIME}
        
    )
}

userSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.CustomerPassword);
    return isMatch
    
    }

const User = mongoose.model('User' , userSchema)

module.exports = User