const express = require("express")
const mongoose = require("mongoose")
const productModel = require("../models/product.model")
const sellerModel = require("../models/seller.model")
const cloudinary = require("cloudinary")
cloudinary.config({ 
    cloud_name: process.env.Cloud_name, 
    api_key: process.env.API_key, 
    api_secret: process.env.api_secret
  });

const addImage = (req, res)=>{
    console.log(req.body)
    // let {myfile, token, image} = req.body
    const myfile = req.body.myfile
    const token = req.body.token
    const productname = req.body.productname
    const price = req.body.price
    const description = req.body.description
    
  
    cloudinary.v2.uploader.upload(myfile,(err,result)=>{
        if(err){
            console.log(err,"File no gree upload")
            // res.send({message:"couldn't upload image", err})
        }else{
            console.log(result)
            imageurl = result.secure_url
            // res.send({message:"Image upload successful",status:true,uploadedimage:image}) 
            let uploadDeets = {imageurl, productname, price, description, token}  
            sellerModel({_id:token}, (err, result)=>{})
            let form = new productModel(uploadDeets)
            form.save((err)=>{
              if(err){
                res.send({message:"an error occured", err})
                console.log(err)
              
              } else{
                res.send({message:"product saved successfully", details:form ,status:true})
                console.log(details)

              }
            })
        }
    }
  );

}
const saveProduct = (req, res)=>{
  let token = req.body.token
  sellerModel({_id:token}, (err, result)=>{})
  let form = new productModel(req.body)
  form.save((err)=>{
    if(err){
      res.send({message:"an error occured", err})
      console.log(err)
    } else{
      res.send({message:"product saved successfully", details:form ,status:true})
      console.log(details)
    }
  })


}
module.exports= {addImage, saveProduct}
