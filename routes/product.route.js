const express = require("express")
const {saveProduct, addImage} = require("../controllers/product.controller")
const router = express.Router()

router.post("/uploadproduct", addImage)
router.post("/saveproduct", saveProduct)

module.exports = router;