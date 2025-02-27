const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const { sendOTPEmail } = require('../utils/mailer');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const admin = await Admin.findOne({ email });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = generateToken(admin._id);
    res.status(200).json({ token, admin: { id: admin._id, email: admin.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    admin.resetPasswordOTP = otp;
    admin.resetPasswordExpires = Date.now() + 600000; // 10 minutes
    await admin.save();

    await sendOTPEmail(email, otp);
    res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending OTP' });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  try {
    const admin = await Admin.findOne({ 
      email,
      resetPasswordOTP: otp,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!admin) return res.status(400).json({ message: 'Invalid or expired OTP' });
    
    admin.password = newPassword;
    admin.resetPasswordOTP = undefined;
    admin.resetPasswordExpires = undefined;
    await admin.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error resetting password' });
  }
};

// Add to authController.js
exports.getMe = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id).select('-password')
    res.json(admin)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}