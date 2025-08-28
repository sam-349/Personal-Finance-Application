const express = require("express");
const router = express.Router();
const db = require("../models/db");
const authenticateToken = require("../middleware/auth");

// Create a new goal
router.post("/", authenticateToken, async (req, res) => {
  const { title, target_amount, target_date } = req.body;
  const user_id = req.user.id;

  const sql = `
    INSERT INTO goals (user_id, title, target_amount, target_date)
    VALUES (?, ?, ?, ?)
  `;

  await db.query(
    sql,
    [user_id, title, target_amount, target_date],
    (err, result) => {
      if (err) return res.status(500).json({ error: "DB error" });
      res
        .status(201)
        .json({ message: "Goal created", goalId: result.insertId });
    }
  );
});

// Get all goals for the logged-in user
router.get("/", authenticateToken, async (req, res) => {
  const sql = "SELECT * FROM goals WHERE user_id = ?";
  await db.query(sql, [req.user.id], (err, rows) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json(rows);
  });
});

// Update a goal (e.g., update saved amount)
router.put("/:id", authenticateToken, async (req, res) => {
  const { title, target_amount, saved_amount, target_date } = req.body;
  const sql = `
    UPDATE goals
    SET title = ?, target_amount = ?, saved_amount = ?, target_date = ?
    WHERE id = ? AND user_id = ?
  `;

  await db.query(
    sql,
    [
      title,
      target_amount,
      saved_amount,
      target_date,
      req.params.id,
      req.user.id,
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: "DB error" });
      res.json({ message: "Goal updated" });
    }
  );
});
// Delete a goal
router.delete("/:id", authenticateToken, async (req, res) => {
  const sql = "DELETE FROM goals WHERE id = ? AND user_id = ?";
  await db.query(sql, [req.params.id, req.user.id], (err, result) => {
    if (err) return res.status(500).json({ error: "DB error" });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Goal not found" });
    res.json({ message: "Goal deleted" });
  });
});

module.exports = router;
