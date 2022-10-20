const express = require("express");
const { registerUser, authenticateUser, testredux } = require("../controllers/user.controller");
const router = express.Router()
router.post("/signup", registerUser)
router.post("/login", authenticateUser)
router.get("/testredux", testredux)
module.exports = router;