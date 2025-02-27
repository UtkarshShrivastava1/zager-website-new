import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { toast } from 'react-toastify'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setLoading(false)
        return
      }

      try {
        const { data } = await api.get('/auth/me')
        setAdmin(data)
      } catch (error) {
        logout()
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [])

  const login = async (credentials) => {
    try {
      const { data } = await api.post('/auth/login', credentials)
      localStorage.setItem('token', data.token)
      setAdmin(data.admin)
      navigate('/')
    } catch (error) {
      toast.error('Invalid credentials')
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setAdmin(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ admin, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)