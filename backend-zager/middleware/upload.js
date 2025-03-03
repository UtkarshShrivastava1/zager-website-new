const multer = require('multer');

const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  // Check if a file was actually uploaded
  if (!file) {
    return cb(new Error('No file uploaded'), false);
  }
  
  // Check file type
  if (!file.mimetype.startsWith('image/')) {
    return cb(new Error('Only image files are allowed'), false);
  }
  
  cb(null, true);
};

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 1
  },
  fileFilter
}).single('image');

// Enhanced error handling middleware
const uploadMiddleware = (req, res, next) => {
  upload(req, res, function(err) {
    // Log the request details for debugging
    console.log('Upload request received:', {
      headers: req.headers,
      files: req.file ? 'File present' : 'No file',
      body: req.body
    });

    if (err instanceof multer.MulterError) {
      console.error('Multer error:', err);
      return res.status(400).json({
        success: false,
        message: `Upload error: ${err.message}`
      });
    } else if (err) {
      console.error('Upload error:', err);
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }

    // If no file was uploaded, continue without error
    if (!req.file) {
      console.log('No file uploaded, continuing...');
    }

    next();
  });
};

module.exports = uploadMiddleware;