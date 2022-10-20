const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
let ecommerceuserSchema= mongoose.Schema({
    firstnames:{required:true, type:String},
    lastnames:{required:true, type:String},
    email:{required:true, type:String},
    password:{required:true, type:String},
    phonenumber:{required:true, type:String}
})
let saltRound =10
ecommerceuserSchema.pre("save", function(next){
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
ecommerceuserSchema.methods.validatePassword= function(password, callback) {
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
let ecommerceuserModel = mongoose.model("commerce_collection", ecommerceuserSchema)
module.exports = ecommerceuserModel;