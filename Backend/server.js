const express = require("express");
const cors = require("cors");
const db = require("./models/db");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173", // allow only your React app
  })
);

app.use(express.json());

// Import routes
const financeRoutes = require("./routes/financeRoutes");
const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const goalRoutes = require("./routes/goals");
const budgetRoutes = require("./routes/budgetRoutes");
const notesRoutes = require("./routes/notes");

app.use("/api/finance", financeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/budgets", budgetRoutes);

// app.get("/", (req, res) => {
//   res.send("Welcome to the Personal Finance API");
// });

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
