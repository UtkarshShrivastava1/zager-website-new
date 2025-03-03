import { useState } from 'react';
import BlogForm from '../../Components/BlogForm';

const CreateBlog = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleBlogSaved = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000); // Hide after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Blog Post
          </h1>
          <p className="text-gray-500 mb-8">Share your thoughts with the world</p>
          
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <BlogForm onSaveSuccess={handleBlogSaved} />
          </div>

          {/* Success popup notification */}
          {showSuccess && (
            <div className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg flex items-center space-x-3 animate-bounce">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-green-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <div>
                <p className="font-medium">Success!</p>
                <p>Your blog post has been saved successfully.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;