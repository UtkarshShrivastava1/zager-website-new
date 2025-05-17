const express = require("express");
const router = express.Router();
const { registerForTraining } = require("../controllers/VTFormController");

// POST route for vocational training registration
router.post("/register", registerForTraining);

module.exports = router;
