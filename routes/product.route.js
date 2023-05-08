const express = require("express")
const { displaytraderProduct, uploadproduct, displayallProducts, deleteItem} = require("../controllers/product.controller")
const router = express.Router()

router.post("/uploadproduct", uploadproduct)
router.post("/displaytraderproduct", displaytraderProduct)
router.get("/displayallproducts", displayallProducts)
router.post("/deleteTraderitem", deleteItem)


module.exports = router;