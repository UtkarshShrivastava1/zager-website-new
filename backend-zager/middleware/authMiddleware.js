const jwt = require("jsonwebtoken");
const Admin = require("../models/AdminModel");

// Middleware for admin verification
const verifyAdminToken = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log("Authorization Header:", req.header("Authorization"));
  console.log("Token received:", token);

  if (!token) {
    console.error("No token provided. Authorization denied.");
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);

    // Handle Default Admin
    if (
      decoded.id === "default_admin" &&
      decoded.adminID === process.env.DEFAULT_ADMIN_ID
    ) {
      req.admin = {
        _id: "default_admin",
        adminID: process.env.DEFAULT_ADMIN_ID,
        role: "admin",
      };
      console.log("Default Admin authenticated.");
      return next();
    }

    // Fetch database admin
    const loggedInAdmin = await Admin.findById(decoded.id, "name adminID");
    if (!loggedInAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    req.admin = loggedInAdmin;
    console.log("Admin data attached to request:", req.admin);
    next();
  } catch (error) {
    handleTokenError(error, res);
  }
};

// Common error handler for JWT verification issues
const handleTokenError = (error, res) => {
  console.error("Error verifying token:", error);

  if (error.name === "TokenExpiredError") {
    console.error("Token has expired");
    return res.status(401).json({ message: "Token has expired" });
  }
  if (error.name === "JsonWebTokenError") {
    console.error("Token is not valid");
    return res.status(401).json({ message: "Token is not valid" });
  }

  return res
    .status(500)
    .json({ message: "Token verification failed", error: error.message });
};

module.exports = { verifyAdminToken };
