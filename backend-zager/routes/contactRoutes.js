// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const { createContact } = require("../controllers/contactController");

// POST /api/contacts - Send contact form submission email
router.post("/", createContact);

module.exports = router;
