import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import api from "../Services/api";
import { toast } from "react-toastify";

const getToken = () => {
  const adminInfo = localStorage.getItem("adminInfo");
  return adminInfo ? JSON.parse(adminInfo).token : null;
};

const BlogList = ({ blogs, setBlogs }) => {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog post?"
    );
    if (!confirmDelete) return;

    const token = getToken();
    if (!token) {
      toast.error("No token, authorization denied.");
      return;
    }

    try {
      await api.delete(`/Blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      toast.success("Blog deleted successfully");
    } catch (error) {
      toast.error("Failed to delete blog");
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {blog.image?.url && (
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image.url}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 truncate">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                {moment(blog.createdAt).format("MMMM Do YYYY, h:mm a")}
              </p>

              <div className="flex justify-between items-center">
                <div className="space-x-2">
                  <Link
                    to={`/Blogs/${blog._id}/edit`}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    Delete
                  </button>
                </div>

                <Link
                  to={`/Blogs/${blog._id}`}
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  View →
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500 text-lg">No blog posts found</p>
        </div>
      )}
    </div>
  );
};
BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
  setBlogs: PropTypes.func.isRequired,
};

export default BlogList;
