const express = require("express");
const {registerSeller, authenticateSeller} = require("../controllers/seller.controller");
const router = express.Router()
router.post("/tradersignup", registerSeller)
router.post("/authenticateseller", authenticateSeller)
module.exports = router;