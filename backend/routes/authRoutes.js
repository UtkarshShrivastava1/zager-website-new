// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { 
  login, 
  forgotPassword, 
  resetPassword, 
  getMe  // Add this line
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Keep these routes as-is
router.get('/me', protect, getMe);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;