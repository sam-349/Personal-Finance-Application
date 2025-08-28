const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const authenticateToken = require("../middleware/auth");

// Create a new transaction
router.post("/add", authenticateToken, transactionController.addTransaction);

// Get all transactions for a user
router.get(
  "/all/:userId",
  authenticateToken,
  transactionController.getTransactions
);

// Update a transaction
router.put(
  "/update/:id",
  authenticateToken,
  transactionController.updateTransaction
);

// Delete a transaction
router.delete(
  "/delete/:id",
  authenticateToken,
  transactionController.deleteTransaction
);

module.exports = router;
