const db = require("../models/db");

// Add new transaction
exports.addTransaction = async (req, res) => {
  const user_id = req.user.id;
  const { type, category, amount, description, date } = req.body;

  const sql =
    "INSERT INTO transactions (user_id, type, category, amount, description, date) VALUES (?, ?, ?, ?, ?, ?)";
  try {
    const [result] = await db.query(sql, [
      user_id,
      type,
      category,
      amount,
      description,
      date,
    ]);
    res.status(201).json({ message: "Transaction added", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all transactions by user
exports.getTransactions = async (req, res) => {
  const userId = req.user.id;
  const sql = "SELECT * FROM transactions WHERE user_id = ? ORDER BY date DESC";
  try {
    const [results] = await db.query(sql, [userId]);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update transaction
exports.updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { type, category, amount, description, date } = req.body;
  const sql =
    "UPDATE transactions SET type = ?, category = ?, amount = ?, description = ?, date = ? WHERE id = ?";
  try {
    await db.query(sql, [type, category, amount, description, date, id]);
    res.status(200).json({ message: "Transaction updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete transaction
exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM transactions WHERE id = ?";
  try {
    await db.query(sql, [id]);
    res.status(200).json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
