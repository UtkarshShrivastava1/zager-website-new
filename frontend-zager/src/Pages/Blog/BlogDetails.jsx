import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'

const BlogDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await api.get(`/blogs/${id}`)
        setBlog(data.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlog()
  }, [id])

  const handleBackClick = () => {
    // Redirect to the dashboard instead of '/blogs'
    navigate('/Dashboard')
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!blog) return null

  const formattedDate = blog.createdAt 
    ? new Date(blog.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-10 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* <button 
          onClick={handleBackClick}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Dashboard
        </button> */}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {blog.image?.url && (
            <div className="w-full h-80 md:h-96 overflow-hidden">
              <img 
                src={blog.image.url} 
                alt={blog.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}
          
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">{blog.title}</h1>
            
            {formattedDate && (
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <time dateTime={blog.createdAt}>{formattedDate}</time>
              </div>
            )}
            
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800 prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails