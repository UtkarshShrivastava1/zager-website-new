const Blog = require('../models/Blog');
const cloudinary = require('../config/cloudinary');

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort('-createdAt');
    res.status(200).json({
      success: true,
      data: blogs
    });
  } catch (error) {
    console.error('Error in getAllBlogs:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs'
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    res.status(200).json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Error in getBlogById:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blog'
    });
  }
};

const createBlog = async (req, res) => {
  try {
    console.log('Create blog request received');
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title and content'
      });
    }

    let imageData = null;

    if (req.file) {
      try {
        console.log('Processing image upload...');
        const fileStr = req.file.buffer.toString('base64');
        const fileType = req.file.mimetype;
        
        console.log('Attempting Cloudinary upload...');
        const uploadResponse = await cloudinary.uploader.upload(
          `data:${fileType};base64,${fileStr}`,
          {
            resource_type: 'auto',
            folder: 'blog_images'
          }
        );

        console.log('Cloudinary upload successful:', uploadResponse.public_id);
        imageData = {
          public_id: uploadResponse.public_id,
          url: uploadResponse.secure_url
        };
      } catch (uploadError) {
        console.error('Cloudinary upload error:', uploadError);
        return res.status(500).json({
          success: false,
          message: 'Error uploading image to Cloudinary',
          error: uploadError.message
        });
      }
    }

    const blog = await Blog.create({
      title,
      content,
      image: imageData
    });

    res.status(201).json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Error in createBlog:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error creating blog'
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    const updateData = { ...req.body };

    if (req.file) {
      if (blog.image && blog.image.public_id) {
        await cloudinary.uploader.destroy(blog.image.public_id);
      }

      const fileStr = req.file.buffer.toString('base64');
      const fileType = req.file.mimetype;
      
      const uploadResponse = await cloudinary.uploader.upload(
        `data:${fileType};base64,${fileStr}`,
        {
          resource_type: 'auto',
          folder: 'blog_images'
        }
      );

      updateData.image = {
        public_id: uploadResponse.public_id,
        url: uploadResponse.secure_url
      };
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedBlog
    });
  } catch (error) {
    console.error('Error in updateBlog:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating blog'
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    if (blog.image && blog.image.public_id) {
      await cloudinary.uploader.destroy(blog.image.public_id);
    }

    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Error in deleteBlog:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting blog'
    });
  }
};



module.exports = {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById
};
