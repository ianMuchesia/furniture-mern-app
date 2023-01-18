require('dotenv').config()

//connection database
const connectDB = require('./database/connectDB')

//Schema Models
const Product = require('./models/product')

//Manually added products
const JSONproducts = require('./products.json')

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
         await Product.deleteMany();
        await Product.create(JSONproducts)
 
        console.log('success!!!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

start()



