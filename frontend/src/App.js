import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home"; // Import Home Page
import AdminLogin from "./pages/Admin/AdminLogin"; // Import Admin Login Page (if separate)
import AdminDashboardPage from "./pages/Admin/AdminDashboardPage"; // Admin Dashboard Page
import ProfilePage from "./pages/Admin/AdminProfileManage"; // Admin Profile Page (Ensure this is created)
import RegisterAdminPage from "./pages/Admin/AdminRegisterForm"; // Admin Register Admin Page (Ensure this is created)
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // To store user's role
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state to wait for token validation

  // Ensure correct environment variable setup
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"; // Fallback to local URL if env variable is missing

  useEffect(() => {
    console.log("Checking for token in local storage...");
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Token found, validating...");
      validateToken(token); // Validate token before assuming login
    } else {
      console.log("No token found, setting loading to false.");
      setIsLoggedIn(false);
      setLoading(false); // No token, done loading
    }
  }, []);

  const validateToken = async (token) => {
    console.log("Validating token...");
    try {
      const response = await fetch(`${API_URL}/api/admin/auth/validate`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Token is valid.");
        const data = await response.json();
        setIsLoggedIn(true);
        setUserRole(data.role);
        setUser(data);
        console.log("User data set:", data);
      } else {
        console.error("Token validation failed. Logging out.");
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setUser(null);
        setUserRole(null);
      }
    } catch (error) {
      console.error("Error validating token:", error);
      setIsLoggedIn(false);
      setUser(null);
      setUserRole(null);
    } finally {
      console.log("Token validation complete.");
      setLoading(false); // Finished loading
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    setUserRole(null);
  };

  if (loading) {
    console.log("Loading state: true");
    return <div>Loading...</div>; // Show loading state while validating the token
  }

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        user={user} // Pass user data to Navbar
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Home />} />

        <Route
          path="/admin-login"
          element={
            <AdminLogin
              setIsLoggedIn={setIsLoggedIn}
              setUserRole={setUserRole}
            />
          }
        />
        {/* Admin Dashboard Route */}
        <Route
          path="/admin-dashboard"
          element={
            isLoggedIn && userRole === "admin" ? (
              <AdminDashboardPage />
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
        {/* Admin Profile Route */}
        <Route
          path="/admin/profile"
          element={
            isLoggedIn && userRole === "admin" ? (
              <ProfilePage />
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
        {/* Admin Register Route */}
        <Route
          path="/admin/register-admin"
          element={
            isLoggedIn && userRole === "admin" ? (
              <RegisterAdminPage />
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
