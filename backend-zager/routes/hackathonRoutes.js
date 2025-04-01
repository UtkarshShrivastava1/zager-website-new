const express = require("express");
const router = express.Router();
const {
  registerForHackathon,
  uploadHackathonFile,
} = require("../controllers/hackathonFormController");

// Ensure this matches the frontend URL
router.post("/register", uploadHackathonFile, registerForHackathon);

module.exports = router;
