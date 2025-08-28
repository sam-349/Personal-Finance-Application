const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/db");

// REGISTER
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const [existingUsers] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await db.query(
      "INSERT INTO users (name, email, password) VALUES (?,?, ?)",
      [name, email, hashedPassword]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (users.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = users[0];

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { register, login };
