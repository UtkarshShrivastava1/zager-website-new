import { Link } from 'react-router-dom'; // Add this import
import { useState, useEffect } from 'react';
import api from '../services/api';
import BlogList from '../components/BlogList';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await api.get('/blogs');
        setBlogs(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
        {/* This is where the Link component is used */}
        <Link
          to="/blogs/create"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create New
        </Link>
      </div>
      <BlogList blogs={blogs} setBlogs={setBlogs} />
    </div>
  );
};

export default Dashboard;