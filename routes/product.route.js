const express = require("express")
const { displaytraderProduct, uploadproduct, displayallProducts} = require("../controllers/product.controller")
const router = express.Router()

router.post("/uploadproduct", uploadproduct)
router.post("/displaytraderproduct", displaytraderProduct)
router.get("/displayallproducts", displayallProducts)

module.exports = router;