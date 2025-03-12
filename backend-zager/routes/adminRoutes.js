// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const multer = require("multer");
const path = require("path");
const Admin = require("../models/AdminModel"); // Ensure this import is correct

// Import verifyAdminToken middleware
const { verifyAdminToken } = require("../middleware/authMiddleware");
const bcrypt = require("bcryptjs");
// Import controller functions
const { createAdmin, loginAdmin } = require("../controllers/adminController");
// Set up multer for file storage (handling file uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/Admin/";
    const fs = require("fs");

    // Ensure the 'uploads' directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir); // Store files in "uploads" folder
  },
  filename: (req, file, cb) => {
    // Generate a unique filename based on current timestamp
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Configure multer to handle file type validation
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpg|jpeg|png|gif/; // Allowed file types
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedTypes.test(file.mimetype);

    // Only allow images with specific file extensions and MIME types
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      return cb(new Error("Only image files are allowed"));
    }
  },
});

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation error",
      errors: errors.array(),
    });
  }
  next();
};
//------------------------------------------------------------------------------------------------
// Route: Create an admin using POST "/api/admin/auth/createadmin"
router.post(
  "/createadmin",
  [body("email").isEmail().withMessage("Valid email is required")],
  handleValidationErrors,
  createAdmin
);

//------------------------------------------------------------------------------------------------
// Route: Admin login using POST "/api/admin/auth/login"
router.post(
  "/login",
  [
    body("adminID").notEmpty().withMessage("Admin ID is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  handleValidationErrors,
  loginAdmin
);

//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
// Route: Get admin profile using GET "/api/admin/auth/adminprofile"
router.get("/adminprofile", async (req, res) => {
  try {
    const adminID = req.admin?.id; // Ensure `admin` object is available in the request
    if (!adminID) {
      return res.status(400).json({ message: "Admin ID is missing in token" });
    }

    // Fetch admin profile from the database using the admin ID
    const admin = await Admin.findById(adminID);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Return the admin profile data
    res.status(200).json({ admin });
    console.log(admin);
  } catch (error) {
    console.error("Error fetching admin profile:", error);
    res.status(500).json({ error: "Server error" });
  }
});

//------------------------------------------------------------------------------------------------
// Route: Update admin info using PUT "/api/admin/auth/updateadmininfo"
router.put(
  "/updateadmininfo",
  // Middleware to verify admin token
  [
    body("adminID").notEmpty().withMessage("Admin ID is required"),
    body("email").optional().isEmail().withMessage("Invalid email format"),
    body("password")
      .optional()
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ],
  handleValidationErrors, // Middleware to handle validation errors
  async (req, res) => {
    try {
      const { adminID, email, password } = req.body;

      // Fetch the admin document using adminID
      const admin = await Admin.findOne({ adminID });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }

      // Ensure `registeredBy` fields are not updated
      const { registeredBy } = admin.toObject();

      // Update only the allowed fields
      if (email) admin.email = email;
      if (password) {
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(password, salt);
      }

      // Save the updated admin document
      const updatedAdmin = await admin.save();

      res.status(200).json({
        message: "Admin information updated successfully",
        admin: {
          adminID: updatedAdmin.adminID,
          email: updatedAdmin.email,
          registeredBy: updatedAdmin.registeredBy, // Preserve registeredBy
        },
      });
    } catch (error) {
      console.error("Error updating admin info:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

//----------------------------------------------------------------
// Route: Update/change admin password using PUT "/api/admin/auth/changeadminpassword"
router.put(
  "/changeadminpassword",

  [
    body("adminID").notEmpty().withMessage("Admin ID is required"),
    body("newPassword")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/\d/)
      .withMessage("Password must contain at least one number")
      .matches(/[!@#$%^&*]/)
      .withMessage("Password must contain at least one special character"),
    body("confirmNewPassword")
      .custom((value, { req }) => value === req.body.newPassword)
      .withMessage("Passwords do not match"),
  ],
  handleValidationErrors,
  async (req, res) => {
    try {
      console.log("Request received:", req.body); // Log incoming request body

      const { adminID, newPassword } = req.body;

      // Fetch the admin document using adminID
      console.log("Fetching admin from DB with adminID:", adminID);
      const admin = await Admin.findOne({ adminID });
      if (!admin) {
        console.log("Admin not found for adminID:", adminID); // Log if admin is not found
        return res.status(404).json({ message: "Admin not found" });
      }

      console.log("Admin found:", admin); // Log the admin document

      // Hash the new password and update it
      console.log("Generating salt for password hashing...");
      const salt = await bcrypt.genSalt(10);
      console.log("Salt generated:", salt);

      console.log("Hashing new password...");
      admin.password = await bcrypt.hash(newPassword, salt);

      console.log("Saving updated admin document...");
      await admin.save();

      // Respond with a success message
      console.log("Password updated successfully for adminID:", adminID);
      res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error updating password:", error); // Log the error details
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
);
//----------------------------------------------------------------

module.exports = router;
