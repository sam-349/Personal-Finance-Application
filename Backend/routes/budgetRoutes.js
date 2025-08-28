const express = require("express");
const router = express.Router();

const budgetController = require("../controllers/budgetController");
const authenticateToken = require("../middleware/auth");

// Add new budget
router.post("/", authenticateToken, budgetController.createBudget);
// Get all budgets for the logged-in user
router.get("/", authenticateToken, budgetController.getBudget);
// Update a budget
router.put("/:id", authenticateToken, budgetController.updateBudget);
// Delete a budget
router.delete("/:id", authenticateToken, budgetController.deleteBudget);

module.exports = router;
