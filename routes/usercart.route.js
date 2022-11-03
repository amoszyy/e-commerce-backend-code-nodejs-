const express = require("express")
const{savecartdetails, findusercartdetails, deleteItem} = require("../controllers/usercart.controller")
const router = express.Router()
router.post("/savecart", savecartdetails)
router.post("/cartdetails", findusercartdetails)
router.post("/deleteitem", deleteItem)
module.exports = router;