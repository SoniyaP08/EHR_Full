const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const User = require("../models/User");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
