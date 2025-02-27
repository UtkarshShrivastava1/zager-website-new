import BlogForm from '../../components/BlogForm'

const CreateBlog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Create New Blog Post
          </h1>
          <BlogForm />
        </div>
      </div>
    </div>
  )
}

export default CreateBlog