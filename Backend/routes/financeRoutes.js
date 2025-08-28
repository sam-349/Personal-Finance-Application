const express = require("express");
const router = express.Router();
const { getStockQuote } = require("../controllers/financeController");

router.get("/quote/:symbol", getStockQuote);

module.exports = router;
