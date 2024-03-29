require('dotenv').config()
require('express-async-errors')

//express
const express = require('express')
const app = express()

//rest of the packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');


//database
const connectDB = require('./database/connectDB')

//routers
const authRoute = require('./routes/auth')
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')
const orderRouter = require('./routes/orderRoutes')
const reviewRouter = require('./routes/reviewRouter')


//middleware
const notFoundMiddleWare = require('./middleware/notFound')
const errorHandlerMiddleWare = require('./middleware/error-handler')


app.set('trust proxy', 1);
/* app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
); */
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_SIDE_URL, credentials: true}));
app.use(xss());
app.use(mongoSanitize());




app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET));

//routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRouter)
app.use("/api/v1/products",productRouter)
app.use("/api/v1/orders",orderRouter)
app.use("/api/v1/reviews",reviewRouter)




app.use(errorHandlerMiddleWare)
app.use(notFoundMiddleWare)



//port
const port = process.env.PORT || 3000

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