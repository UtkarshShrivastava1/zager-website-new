const mongoose = require("mongoose");
const Blog = require("../models/BlogModel");
const cloudinary = require("../config/cloudinary");

/**
 * @desc Get all blogs
 * @route GET /api/blogs
 * @access Public
 */
const getAllBlogs = async (req, res) => {
  try {
    // Fetch blogs, select only required fields, and sort by latest
    const blogs = await Blog.find()
      .select("title content image createdAt")
      .sort("-createdAt")
      .lean();

    res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error("Error in getAllBlogs:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching blogs",
    });
  }
};

/**
 * @desc Get a single blog by ID
 * @route GET /api/blogs/:id
 * @access Public
 */
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID",
      });
    }

    // Find blog by ID
    const blog = await Blog.findById(id).lean();
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Error in getBlogById:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching blog",
    });
  }
};

/**
 * @desc Create a new blog
 * @route POST /api/blogs
 * @access Private (Admin/Author Only)
 */
const createBlog = async (req, res) => {
  try {
    console.log("Create blog request received");

    // Validate request body
    const { title, content } = req.body;
    if (!title?.trim() || !content?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
      });
    }

    let imageData = null;

    // Handle image upload if present
    if (req.file) {
      try {
        console.log("Processing image upload...");
        const fileStr = req.file.buffer.toString("base64");
        const fileType = req.file.mimetype;

        console.log("Uploading image to Cloudinary...");
        const uploadResponse = await cloudinary.uploader.upload(
          `data:${fileType};base64,${fileStr}`,
          { resource_type: "auto", folder: "blog_images" }
        );

        console.log("Cloudinary upload successful:", uploadResponse.public_id);
        imageData = {
          public_id: uploadResponse.public_id,
          url: uploadResponse.secure_url,
        };
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        return res.status(500).json({
          success: false,
          message: "Error uploading image to Cloudinary",
        });
      }
    }

    // Create blog entry
    const blog = await Blog.create({
      title: title.trim(),
      content: content.trim(),
      image: imageData,
    });

    res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Error in createBlog:", error);
    res.status(500).json({
      success: false,
      message: "Error creating blog",
    });
  }
};

/**
 * @desc Update an existing blog
 * @route PUT /api/blogs/:id
 * @access Private (Admin/Author Only)
 */
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID",
      });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    const updateData = {};

    // Trim and update fields if provided
    if (req.body.title) updateData.title = req.body.title.trim();
    if (req.body.content) updateData.content = req.body.content.trim();

    // Handle image update
    if (req.file) {
      try {
        // Delete old image from Cloudinary if exists
        if (blog.image?.public_id) {
          await cloudinary.uploader.destroy(blog.image.public_id);
        }

        const fileStr = req.file.buffer.toString("base64");
        const fileType = req.file.mimetype;

        const uploadResponse = await cloudinary.uploader.upload(
          `data:${fileType};base64,${fileStr}`,
          { resource_type: "auto", folder: "blog_images" }
        );

        updateData.image = {
          public_id: uploadResponse.public_id,
          url: uploadResponse.secure_url,
        };
      } catch (uploadError) {
        console.error("Cloudinary update error:", uploadError);
        return res.status(500).json({
          success: false,
          message: "Error updating image",
        });
      }
    }

    // If no valid fields are provided for update
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields provided for update",
      });
    }

    // Update blog in DB
    const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: updatedBlog,
    });
  } catch (error) {
    console.error("Error in updateBlog:", error);
    res.status(500).json({
      success: false,
      message: "Error updating blog",
    });
  }
};

/**
 * @desc Delete a blog
 * @route DELETE /api/blogs/:id
 * @access Private (Admin/Author Only)
 */
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID",
      });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Delete blog image from Cloudinary if exists
    if (blog.image?.public_id) {
      await cloudinary.uploader.destroy(blog.image.public_id);
    }

    // Delete blog from DB
    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error in deleteBlog:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting blog",
    });
  }
};

// Export all functions
module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
