const express = require("express");
const authenticateToken = require("../middleware/auth");
const notesController = require("../controllers/notesController");

const router = express.Router();

router.get("/", authenticateToken, notesController.getAllNotes);

router.post("/add", authenticateToken, notesController.addNotes);

router.delete("/:id", authenticateToken, notesController.deleteNotes);

// router.put("/:id", authenticateToken, notesController.updateNote);

module.exports = router;
