// Importing required modules
const express = require("express");
const router = express.Router();

// Middleware to authenticate admin users
const authenticateAdmin = require("../middleware/authMiddleware");

// Protect a route
// This route is accessible only to authenticated admin users
router.get("/dashboard", authenticateAdmin, (req, res) => {
  // Respond with a welcome message for the admin dashboard
  res.json({ message: "Welcome to the Admin Dashboard!" });
});

// Export the router to be used in other parts of the application
module.exports = router;
