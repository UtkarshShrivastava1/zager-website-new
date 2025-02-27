import axios from 'axios'
import { toast } from 'react-toastify'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const expectedError = error.response && 
      error.response.status >= 400 && 
      error.response.status < 500

    if (!expectedError) {
      toast.error('An unexpected error occurred')
    }

    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location = '/login'
    }

    return Promise.reject(error)
  }
)

export default api