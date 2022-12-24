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

const uploadproduct = (req, res)=>{
    // console.log(req.body)
    // let {myfile, token, image} = req.body
    const myfile = req.body.myfile
    const token = req.body.token
    const productname = req.body.productname
    const price = req.body.price
    const description = req.body.description
    let uid = req.body.uid

  
    cloudinary.v2.uploader.upload(myfile,(err,result)=>{
        if(err){
            console.log(err,"File no gree upload")
            // res.send({message:"couldn't upload image", err})
        }else{
            console.log(result)
            imageurl = result.secure_url
            // res.send({message:"Image upload successful",status:true,uploadedimage:image}) 
            let uploadDeets = {imageurl, productname, price, description, token, uid}  
            sellerModel({_id:token}, (err, result)=>{})
            let form = new productModel(uploadDeets)
            form.save((err)=>{
              if(err){
                res.send({message:"an error occured", err})
                console.log(err)
              
              } else{
                res.send({message:"product uploaded successfully", details:form ,status:true})
                // console.log(details)

              }
            })
        }
    }
  );

}
const displaytraderProduct = (req, res)=>{
  const token = req.body.token
  productModel.find({token:token}, (err, result)=>{
    if(err){
      res.send({message:"an error occured"})
      console.log(err)
    } else {
      if(!result){
        res.send({message:"couldn't find products"})

      } else{
        res.send({message:"here are the results", result})
        console.log(result)

      }
     
      // console.log(result)

    } 

  })

}


const displayallProducts = (req, res)=>{
  productModel.find((err, result)=>{
    if(err){
      res.send({message:"an error occured", err})
      console.log(err)
    } else{
      res.send({message:"here are the products",result})
      // console.log(result)
    }
  })

}

const deleteItem=(req, res)=>{
  let {id} = req.body;
  productModel.findOneAndDelete({_id:id}, (err, result)=>{
      if(err){
          console.log("an err occured ", err)
          res.send({message:"an error occured", err})
      } else{
          console.log("deleted successfully")
          res.send({message:"deleted successfully", result})
      }

  })
  

}
module.exports= {uploadproduct, displaytraderProduct, displayallProducts, deleteItem}
