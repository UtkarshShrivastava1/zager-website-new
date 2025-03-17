import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import api from "../services/api";

const BlogForm = ({ initialData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    content: initialData?.content || "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get stored token from localStorage
  const getToken = () => {
    const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
    return adminInfo?.token || null;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const token = getToken();
    if (!token) {
      setError("No token, authorization denied.");
      setLoading(false);
      return;
    }

    try {
      const formPayload = new FormData();
      formPayload.append("title", formData.title);
      formPayload.append("content", formData.content);
      if (imageFile) formPayload.append("image", imageFile);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      if (initialData?._id) {
        await api.put(`/blogs/${initialData._id}`, formPayload, config);
        toast.success("Blog updated successfully!");
      } else {
        await api.post("/blogs", formPayload, config);
        toast.success("Blog added successfully!");
      }

      setTimeout(() => {
        navigate("/admin/admin-dashboard");
      }, 1500); // Navigate after 1.5s
    } catch (error) {
      console.error("Submission error:", error);
      setError(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {/* Title Input */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Content Input */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Content
        </label>
        <textarea
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-64"
          required
        />
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Blog Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {initialData?.image?.url && (
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Current Image:</p>
            <img
              src={initialData.image.url}
              alt="Current blog"
              className="h-32 w-auto rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <FaSpinner className="animate-spin" />
            Saving...
          </>
        ) : (
          "Save Blog Post"
        )}
      </button>
    </form>
  );
};

BlogForm.propTypes = {
  initialData: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
};

export default BlogForm;
