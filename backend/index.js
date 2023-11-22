const express = require('express');
const app = express();
const port = process.env.PORT || 8080 ;
const connect = require('./db/mongoDB');
const morgan = require('morgan');
const USER_ROLE = require('./model/userRoleModel');
const userRouter = require('./router/userRouter');
const cors = require('cors');
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// API's

app.use('/api/user',userRouter)
app.use(errorHandlerMiddleware)

// home page route
app.get('/',(req,res)=>{
    res.json({
        message: "app is running",
      });})


// db connection and server
connect()
.then(()=>{
    try{

        app.listen(port,()=>console.log(`server connected to http://localhost:${port}`))

    }catch(error){
     
        console.log('cannot connect to the server');

    }
})
.catch((error)=>{
    console.log('invalid database connection...!', error)
})