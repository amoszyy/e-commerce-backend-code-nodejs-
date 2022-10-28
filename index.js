const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
require ("dotenv").config()
app.use(cors())
app.use(bodyParser.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true, limit:"50mb"}))
app.use(express.json())
const PORT = process.env.PORT
const URI = process.env.MONGO_URI
mongoose.connect(URI,(err)=>{
    if(err){
        console.log("mongoose is not connecting...")
    } else{
        console.log("mongoose has connected")
    }
   

})
const userRouter = require("./routes/user.route")
const productRouter = require("./routes/product.route")
const traderRouter = require("./routes/seller.route")
const cartRouter = require("./routes/usercart.route")
app.use("/product", productRouter);
app.use("/user",userRouter);
app.use("/trader", traderRouter)
app.use("/cart", cartRouter)



app.listen(PORT,()=>{
    console.log("app is listening at " + PORT)

})