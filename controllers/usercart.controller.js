const express = require("express")
const mongoose = require("mongoose")
const cartModel = require("../models/usercart.model")
const ecommerceuserModel = require("../models/user.model")
const productModel = require("../models/product.model")


const savecartdetails = (req, res)=>{
    let {uid, token} = (req.body)
    productModel.findOne({uid:uid}, (err, result)=>{
        if(err){
            console.log(err)
        } else{
            let itemprice = result.price;
            let itemname = result.productname;
            let cartimage = result.imageurl;
            let itemdescription = result.description;
            let cartdetails = {itemprice, itemname, cartimage, itemdescription, uid, token}
            let form = new cartModel(cartdetails)
            form.save((err)=>{
                if(err){
                    res.send({message:"couldn't save cart details please try again", err})
                    console.log(err)
                } else{
                    res.send({message:"saved cart details successfully", details:form})
                    console.log("saved")
                }
            })


            console.log(result.price)
            
        }
    })

    // ecommerceuserModel.findone({_id:token}, (err, result)=>{})
    // let form = new cartModel(req.body)
}

const findusercartdetails = (req, res)=>{
    let {token} = req.body;
    cartModel.find({token:token}, (err, result)=>{
        if(err){
            console.log(err)
        } else{
            if(!result){
                console.log("couldnt't find details")
            } else{
                res.send({message:"here are the cartdetails", result})
                console.log(result)
            }
        }
    })

}
module.exports = {savecartdetails, findusercartdetails}