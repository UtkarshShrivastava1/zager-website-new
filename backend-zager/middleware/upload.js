const multer = require("multer");

// Configure memory storage
const storage = multer.memoryStorage();

// File filter function
const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Invalid file type. Only images are allowed."), false);
  }
  cb(null, true);
};

// Multer instance with limits
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Increased limit to 10MB
  fileFilter,
}).single("image");

// Middleware function
const uploadMiddleware = (req, res, next) => {
  upload(req, res, (err) => {
    console.log(
      `Upload Attempt: ${req.file ? "File Uploaded" : "No File"} | Size: ${
        req.file?.size || "N/A"
      } bytes`
    );

    if (err) {
      console.error("Upload Error:", err.message);
      return res.status(400).json({ success: false, message: err.message });
    }

    // If no file is uploaded, we just move forward without error
    if (!req.file) {
      console.log("⚠️ No file uploaded.");
    }

    next();
  });
};

module.exports = uploadMiddleware;
