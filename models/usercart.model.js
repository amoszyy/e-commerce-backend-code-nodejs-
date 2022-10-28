const mongoose = require("mongoose");
let cartSchema = mongoose.Schema({
    cartimage:{required:true, type:String},
    itemdescription:{required:true, type:String},
    itemname:{required:true, type:String},
    itemprice:{required:true, type:String},
    token:{required:true, type:String},
    uid:{required:true, type:String}
  
})
let cartModel = mongoose.model("cart_collections", cartSchema)
module.exports = cartModel;