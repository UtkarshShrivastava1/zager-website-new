import axios from "axios";
import { toast } from "react-toastify";

// Determine the API URL based on the environment
const API_URL =
  import.meta.env.VITE_NODE_ENV === "production"
    ? `${import.meta.env.VITE_PRODUCTION_URL}/api`
    : `${import.meta.env.VITE_DEVELOPMENT_URL}/api`;

const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      toast.error("Network error! Please check your connection.");
      return Promise.reject(error);
    }

    const { status, data } = error.response;

    if (status === 403) {
      toast.error("You don't have permission to perform this action.");
    } else if (status === 404) {
      toast.error("Requested blog not found.");
    } else if (status >= 500) {
      toast.error("Server error! Please try again later.");
    } else if (status >= 400) {
      toast.error(data?.message || "Something went wrong.");
    }

    return Promise.reject(error);
  }
);

export default api;
