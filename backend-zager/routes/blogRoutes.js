const express = require("express");
const router = express.Router();
const { verifyAdminToken } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");
const {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById, // Added
} = require("../controllers/blogController");

// Test route
router.get("/test", (req, res) => {
  res.json({ message: "Blog routes working" });
});

// Blog routes
router.get("/", getAllBlogs); // Get all blogs
router.get("/:id", getBlogById); // Get single blog (NEW)
router.post("/", upload, createBlog);
router.put("/:id", upload, updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
