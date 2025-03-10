import { useState, useEffect } from "react";
import api from "../../services/api";
import Heading from "../../Components/Heading";
import PublicBlogList from "../../Components/BlogList";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await api.get("/blogs");
        setBlogs(data.data || []);
      } catch (error) {
        console.error(error);
        setError("Unable to load blog posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen p-4">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 rounded w-full md:w-1/3"
        />
      </div>

      {/* Blog Cards Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#ffbe00]">
            {searchTerm
              ? `Search Results (${filteredBlogs.length})`
              : "Your Blog Posts"}
          </h2>
          {searchTerm && (
            <div className="text-gray-500 text-sm">
              Showing {filteredBlogs.length} of {blogs.length} posts
            </div>
          )}
        </div>

        {loading ? (
          // Show a spinner inside the blog section while loading
          <div className="flex flex-col items-center justify-center py-10">
            <div className="relative w-20 h-20 mb-4">
              <div className="absolute top-0 w-full h-full border-4 border-blue-100 rounded-full"></div>
              <div className="absolute top-0 w-full h-full border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Retrieving your content
            </h3>
            <p className="text-gray-600">
              Please wait while we load your blog posts...
            </p>
          </div>
        ) : error ? (
          // If there's an error, show a fallback message for the blog section
          <div className="text-center py-10">
            <Heading value={"No blogs available"} />
            <p className="text-gray-500">{error}</p>
          </div>
        ) : filteredBlogs.length > 0 ? (
          <PublicBlogList
            blogs={filteredBlogs}
            setBlogs={setBlogs}
            viewMode="grid"
          />
        ) : (
          <div className="text-center py-10">
            <Heading value={"No blogs yet"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
