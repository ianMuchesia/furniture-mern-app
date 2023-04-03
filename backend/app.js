require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
//cors
var cors = require('cors');
app.use(cors())
//database
const connectDB = require('./database/connectDB')

//router
const productRouter = require('./routes/product')
const notFoundMiddleWare = require('./middleware/notFound')
const errorMiddleWare = require('./middleware/error-handler')
const authRoute = require('./routes/auth')
//port
const port = process.env.PORT 

//middleware
app.use(express.json())

//routes
app.use("/api/v1/products",productRouter)
app.use('/api/v1', authRoute)
app.use(notFoundMiddleWare)
app.use(errorMiddleWare)

//server
const start = async()=>{
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{console.log(`server listening on port ${port}`)})
    } catch (error) {
        console.log(error)        
    }
}

start()