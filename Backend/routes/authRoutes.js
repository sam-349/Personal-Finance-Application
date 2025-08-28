const { login, register } = require("../controllers/authController");

const express = require("express");
const router = express.Router();

router.post("/register", register); // https://localhost:5000/api/auth/register
router.post("/login", login); // https://localhost:5000/api/auth/login

module.exports = router;
