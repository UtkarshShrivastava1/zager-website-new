import React, { useEffect, useState } from 'react'
import api from '../services/api';
import { Link, useNavigate } from 'react-router-dom';
import Heading from '../Components/Heading';
import BlogList from '../components/BlogList';
import PublicBlogList from '../Components/PublicBlogList';


function Blogs() {
      const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');


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
          console.log(blogs)
    }, [])

    const filteredBlogs = blogs.filter(blog => 
        blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );


    if (loading) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center p-8 bg-white rounded-xl shadow-xl max-w-md w-full">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute top-0 w-full h-full border-4 border-blue-100 rounded-full"></div>
                <div className="absolute top-0 w-full h-full border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Retrieving your content</h3>
              <p className="text-gray-600">Please wait while we load your blog posts...</p>
            </div>
          </div>
        );
      }
    
  return (
    <>
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          {filteredBlogs.length > 0 ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-[#ffbe00]">
                  {searchTerm ? `Search Results (${filteredBlogs.length})` : 'Your Blog Posts'}
                </h2>
                <div className="text-gray-500 text-sm">
                  {searchTerm && `Showing ${filteredBlogs.length} of ${blogs.length} posts`}
                </div>
              </div>
              
              <PublicBlogList blogs={filteredBlogs} setBlogs={setBlogs} viewMode="grid" />
            </div>
          ) : (
            <div>
                <Heading value={"No blogs yet"}/>
            </div>
          )}
        </div>
    </>
  )
}

export default Blogs