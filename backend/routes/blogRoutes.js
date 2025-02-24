const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Blog routes working' });
});

// Blog routes
router.get('/', getAllBlogs);  // Public route
router.post('/', protect, upload, createBlog);  // Protected route
router.put('/:id', protect, upload, updateBlog);  // Protected route
router.delete('/:id', protect, deleteBlog);  // Protected route

module.exports = router;