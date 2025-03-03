import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'


const BlogForm = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData || { 
    title: '', 
    content: '' 
  })
  const [imageFile, setImageFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formPayload = new FormData()
    formPayload.append('title', formData.title)
    formPayload.append('content', formData.content)
    if (imageFile) formPayload.append('image', imageFile)

    try {
      if (initialData) {
        await api.put(`/blogs/${initialData._id}`, formPayload, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      } else {
        await api.post('/blogs', formPayload, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      }
      navigate('/Dashboard')
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
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

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Content
        </label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-64"
          required
        />
      </div>

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

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
      >
        {loading ? 'Saving...' : 'Save Blog Post'}
      </button>
    </form>
  )
}

export default BlogForm