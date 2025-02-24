
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Test the configuration
const testCloudinaryConfig = async () => {
  try {
    const result = await cloudinary.api.ping();
    console.log('Cloudinary configuration is valid:', result);
  } catch (error) {
    console.error('Cloudinary configuration error:', error.message);
    console.log('Current Cloudinary Config:', {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY ? '****' : 'not set',
      api_secret: process.env.CLOUDINARY_API_SECRET ? '****' : 'not set'
    });
  }
};

testCloudinaryConfig();

module.exports = cloudinary;
