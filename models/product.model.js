const mongoose = require ("mongoose")
const productSchema= mongoose.Schema({
    productname:{required:true, type:String},
    price:{required:true, type:Number},
    description:{required:true, type:String},
    imageurl:{required:true, type:String},
    token:{required:true, type:String},
    uid:{required:true, type:String}


})
let productModel = mongoose.model("product_collection", productSchema)
module.exports = productModel;
