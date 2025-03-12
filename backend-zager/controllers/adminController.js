const Admin = require("../models/AdminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Default Admin Credentials (Stored in .env)
const DEFAULT_ADMIN_ID = process.env.DEFAULT_ADMIN_ID || "ZAGER12345";
const DEFAULT_ADMIN_PASSWORD = process.env.DEFAULT_ADMIN_PASSWORD || "admin";

// Generate a unique admin ID
const generateAdminID = async () => {
  let newID;
  do {
    newID = `ZAGER${Math.floor(1000 + Math.random() * 9000)}`;
  } while (await Admin.findOne({ adminID: newID }));
  return newID;
};

// Create an admin
const createAdmin = async (req, res) => {
  try {
    const { email, role = "admin" } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin)
      return res.status(400).json({ message: "Admin already exists" });

    const adminID = await generateAdminID();
    const hashedPassword = await bcrypt.hash("admin123", 10);

    const newAdmin = await Admin.create({
      adminID,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: "Admin created successfully", adminID });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Admin Login
const loginAdmin = async (req, res) => {
  try {
    const { adminID, password } = req.body;

    if (!adminID || !password) {
      return res
        .status(400)
        .json({ message: "Admin ID and password are required" });
    }

    // Check if the provided credentials match the hardcoded admin
    if (adminID === DEFAULT_ADMIN_ID && password === DEFAULT_ADMIN_PASSWORD) {
      const token = jwt.sign(
        { id: "default_admin", role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      return res.json({
        token,
        adminID: DEFAULT_ADMIN_ID,
        role: "admin",
        message: "Default admin logged in",
      });
    }

    // Otherwise, check in the database
    const admin = await Admin.findOne({ adminID });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, adminID: admin.adminID, role: admin.role });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { createAdmin, loginAdmin };
