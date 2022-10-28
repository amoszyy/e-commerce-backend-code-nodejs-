const express = require("express")
const{savecartdetails} = require("../controllers/usercart.controller")
const router = express.Router()
router.post("/savecart", savecartdetails)
module.exports = router;