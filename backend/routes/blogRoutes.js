const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById // Added
} = require('../controllers/blogController');

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Blog routes working' });
});

// Blog routes
router.get('/', getAllBlogs);          // Get all blogs
router.get('/:id', getBlogById);       // Get single blog (NEW)
router.post('/', protect, upload, createBlog);
router.put('/:id', protect, upload, updateBlog);
router.delete('/:id', protect, deleteBlog);


module.exports = router;