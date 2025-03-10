import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import CarrerPage from "./Pages/CarrerPage";
import Gyaanadari from "./Pages/Gyaanadari";
import JKWorks from "./Pages/JKWorks";
import IRMediaAndProductions from "./Pages/IRMediaAndProductions";
import Signin from "./Pages/Auth/Signin";
import Dashboard from "./Pages/Auth/AdminDashboardPage";
import AdminBlogListPage from "./Pages/Auth/AdminBlogListPage";

import CreateBlog from "./Pages/Blog/CreateBlog";
import EditBlog from "./Pages/Blog/EditBlog";
import BlogDetails from "./Pages/Blog/BlogDetails";
import { AuthProvider } from "./context/AuthContext";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Blogs from "./Pages/Blogs";
import Services from "./Pages/Services";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsofService from "./Pages/TermsofService";
import ZagerManagementSystem from "./Pages/Zms";
import ScrollToTop from "./ScrollToTop";
function App() {
  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  return (
    <AuthProvider>
      <ScrollToTop />
      <NavBar />
      <div className="min-h-screen">
        <Routes>
          {/* Redirect root to /homepage */}
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          {/* Public Routes */}
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/admin/admin-login" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/carrer" element={<CarrerPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsofService />} />
          <Route path="/ourplatforms/gyaanadari" element={<Gyaanadari />} />
          <Route path="/ourplatforms/zms" element={<ZagerManagementSystem />} />
          <Route path="/ourplatforms/jkworks" element={<JKWorks />} />
          <Route
            path="/ourplatforms/ira-media-and-productions"
            element={<IRMediaAndProductions />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          {/* Protected Routes */}
          <Route
            path="/admin/admin-dashboard"
            element={
              isAuthenticated() ? (
                <Dashboard />
              ) : (
                <Navigate to="/admin/admin-login" />
              )
            }
          />
          <Route
            path="/admin/add-blogs"
            element={
              isAuthenticated() ? (
                <CreateBlog />
              ) : (
                <Navigate to="/admin/admin-login" />
              )
            }
          />
          <Route
            path="/blogs/:id/edit"
            element={
              isAuthenticated() ? (
                <EditBlog />
              ) : (
                <Navigate to="/admin/admin-login" />
              )
            }
          />

          <Route
            path="/admin/edit-blogs"
            element={
              isAuthenticated() ? (
                <AdminBlogListPage />
              ) : (
                <Navigate to="/admin/admin-login" />
              )
            }
          />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
