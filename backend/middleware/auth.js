const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin'); // Add this import

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ message: 'Not authorized - No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);
    
    if (!admin) {
      return res.status(401).json({ message: 'Not authorized - Admin not found' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    console.error('Auth Error:', error);
    return res.status(401).json({ message: 'Not authorized - Invalid token' });
  }
};