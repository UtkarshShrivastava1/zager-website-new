import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Ensure your custom styles are updated as needed
import zagerlogo from "../assets/Logo_round_white.png";
import zagerlogo2 from "../assets/Log_ Final_txt.png";

const NavBar = ({ isLoggedIn, userRole, handleLogout }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL =
    process.env.REACT_APP_NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL // Production API URL
      : process.env.REACT_APP_DEVELOPMENT_URL; // Development API URL

  useEffect(() => {
    const fetchUserData = async () => {
      if (!isLoggedIn) return;

      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Authentication token is missing.");
        setLoading(false);
        return;
      }
      try {
        let response;
        if (userRole === "admin") {
          response = await axios.get(`${API_URL}/api/admin/auth/adminprofile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }

        // Adjust this line based on your actual API response structure
        const fetchedData = response.data[userRole];
        setUser(fetchedData);
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [isLoggedIn, userRole, API_URL]);

  // Handle login button click
  const handleLoginClick = () => {
    navigate("/admin-login");
  };

  // Handle profile button click
  const handleProfileClick = () => {
    if (userRole === "admin") {
      navigate("/admin/profile");
    }
  };

  return (
    <>
      {/* Fixed Navbar Section */}
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="custom-navbar shadow fixed-top"
        sticky="top"
      >
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/" className="zager-brand-logo-round">
            <img
              src={zagerlogo}
              alt="Zager Digital Services"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <img
              src={zagerlogo2}
              alt="Zager Digital Services"
              style={{ width: "150px", height: "auto" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" className="custom-nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="custom-nav-link">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="custom-nav-link">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio" className="custom-nav-link">
                Porduct
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="custom-nav-link">
                Testimonial
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="custom-nav-link">
                Contact
              </Nav.Link>
              {isLoggedIn && (
                <Nav.Link
                  as={Link}
                  to={userRole === "admin" ? "/admin-dashboard" : "/account"}
                  className="custom-nav-link"
                >
                  Dashboard
                </Nav.Link>
              )}
            </Nav>
            <div className="d-flex align-items-center">
              {!isLoggedIn ? (
                <Button
                  variant="outline-light"
                  className="login-btn me-2"
                  onClick={handleLoginClick}
                >
                  Login
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline-light"
                    className="profile-btn me-2"
                    onClick={handleProfileClick}
                  >
                    {loading
                      ? "Loading..."
                      : `${userRole?.toUpperCase()}: ${
                          user?.name || "Profile"
                        }`}
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="logout-btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
