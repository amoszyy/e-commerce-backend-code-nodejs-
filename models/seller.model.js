const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
let sellerSchema = mongoose.Schema({
    businessname:{required:true, type:String},
    businesscategory:{required:true, type:String},
    email:{required:true, type:String},
    password:{required:true, type:String},
    phonenumber:{required:true, type:String}

})
let saltRound =10
sellerSchema.pre("save", function(next){
    console.log(this.password)
    bcrypt.hash(this.password, saltRound, (err, hashedPassword)=>{
        console.log(hashedPassword)
        if(!err){
            this.password= hashedPassword
            next()
        } else{
            console.log(err)
        }
    })
})
sellerSchema.methods.validatePassword= function(password, callback) {
    console.log(password)
    console.log(this.password)
    bcrypt.compare(password, this.password, (err, same)=>{
        if(!err){
            callback(err, same)
        } else{
            next()
        }
    })
}

let sellerModel = mongoose.model("seller_collection", sellerSchema)
module.exports = sellerModel