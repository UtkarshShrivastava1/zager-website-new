import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Auth/Login'
import ForgotPassword from './pages/Auth/ForgotPassword'
import ResetPassword from './pages/Auth/ResetPassword'
import CreateBlog from './pages/Blog/CreateBlog'
import EditBlog from './pages/Blog/EditBlog'
import BlogDetails from './pages/Blog/BlogDetails'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/blogs/create" element={<CreateBlog />} />
              <Route path="/blogs/:id/edit" element={<EditBlog />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App