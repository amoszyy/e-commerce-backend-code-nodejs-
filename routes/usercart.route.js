const express = require("express")
const{savecartdetails, findusercartdetails} = require("../controllers/usercart.controller")
const router = express.Router()
router.post("/savecart", savecartdetails)
router.post("/cartdetails", findusercartdetails)
module.exports = router;