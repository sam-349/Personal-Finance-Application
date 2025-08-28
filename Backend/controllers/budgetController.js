const db = require("../models/db");

// GET budgets
exports.getBudget = async (req, res) => {
  const userId = req.user.id;
  const sql = "SELECT * FROM budgets WHERE user_id = ?";
  try {
    const [results] = await db.query(sql, [userId]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE a budget
exports.createBudget = async (req, res) => {
  const userId = req.user.id;
  const { category, limit_amount, start_date, end_date, notes } = req.body;
  const sql = `
    INSERT INTO budgets (user_id, category, limit_amount, start_date, end_date) 
    VALUES (?, ?, ?, ?, ?)`;
  try {
    const [result] = await db.query(sql, [
      userId,
      category,
      limit_amount,
      start_date,
      end_date,
    ]);
    res.status(201).json({ message: "Budget created", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a budget
exports.updateBudget = async (req, res) => {
  const { id } = req.params;
  const { category, limit_amount, start_date, end_date } = req.body;
  const sql = `
    UPDATE budgets 
    SET category = ?, limit_amount = ?, start_date = ?, end_date = ? 
    WHERE id = ? AND user_id = ?`;
  try {
    await db.query(sql, [
      category,
      limit_amount,
      start_date,
      end_date,
      id,
      req.user.id,
    ]);
    res.status(200).json({ message: "Budget updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE a budget
exports.deleteBudget = async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM budgets WHERE id = ? AND user_id = ?";
  try {
    await db.query(sql, [id, req.user.id]);
    res.status(200).json({ message: "Budget deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
