import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api";
import BlogForm from "../../Components/BlogForm";

const getToken = () => {
  const adminInfo = localStorage.getItem("adminInfo");
  return adminInfo ? JSON.parse(adminInfo).token : null;
};

const EditBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const token = getToken();
      if (!token) {
        console.error("No token, authorization denied.");
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get(`/Blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlog(data.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Edit Blog Post</h1>
      <BlogForm initialData={blog} />
    </div>
  );
};

export default EditBlog;
