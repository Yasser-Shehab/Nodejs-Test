const express = require("express");
const mongoose = require("mongoose");
const {userRouter} = require("./routes/user.routes")
const {authMiddleware} = require("./Middlewares/auth")
const app = express();

//Middleware
app.use(express.json())
app.use(authMiddleware)
app.use(userRouter)


//Connect DB & Listen For server
const appService = async () =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/sandBox')
        console.log("Connected To DB")
    
        app.listen(3000,()=>{
            console.log("Connected On 3000");
        })
    }catch(err){
      console.log(err.message)
    }

}
appService();