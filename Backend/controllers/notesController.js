const db = require("../models/db");

exports.getAllNotes = async (req, res) => {
  const userId = req.user.id;
  const sql = "SELECT * FROM notes WHERE user_id = ?";
  try {
    const [results] = await db.query(sql, [userId]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addNotes = async (req, res) => {
  const userId = req.user.id;
  const { content } = req.body;
  const sql = "INSERT INTO Notes (user_id, note) VALUES (?, ?)";
  try {
    const [result] = await db.query(sql, [userId, content]);
    res.status(201).json({ message: "Notes Inserted Successfully", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteNotes = async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM Notes WHERE id = ?";
  try {
    const [result] = await db.query(sql, [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
