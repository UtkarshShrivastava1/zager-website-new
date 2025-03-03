import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash, FaUserShield } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signin.css";

const Signin = () => {
  const [adminID, setAdminID] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // API URL from .env file
  const API_URL =
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_PRODUCTION_URL
      : import.meta.env.VITE_DEVELOPMENT_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/admin/auth/login`, {
        adminID, // Ensure correct field name
        password,
      });

      const data = response.data;

      if (!data.token) {
        throw new Error("Token not received");
      }

      console.log("Login Response:", data);

      // Save token & user details
      localStorage.setItem("token", data.token);
      localStorage.setItem("adminID", data.adminID);
      localStorage.setItem("role", data.role);

      // Redirect to dashboard
      toast.success("Login successful!");
      navigate("/admin/admin-dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      setError(error.response?.data?.message || "Login failed");
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="login-container">
      <Card className="login-card">
        <Card.Body>
          <h3 className="text-center">Admin Login</h3>
          {error && <Alert variant="danger">{error}</Alert>}

          <div className="role-icon-container text-center">
            <FaUserShield size={60} />
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formAdminID" className="mt-3">
              <Form.Label>Admin ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Zager Admin ID"
                value={adminID}
                onChange={(e) => setAdminID(e.target.value.toUpperCase())}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputGroup>
            </Form.Group>

            <Button type="submit" disabled={loading} className="w-100 mt-3">
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signin;
