const jwt = require("jsonwebtoken");
const db = require("../models/db");

// Middleware to authenticate JWT token

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  const bearer = token && token.startsWith("Bearer ");
  console.log("Authorization Header:", req.headers["authorization"]);
  console.log("Token:", token);

  if (!bearer) return res.status(401).json({ error: "Access denied" });

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
