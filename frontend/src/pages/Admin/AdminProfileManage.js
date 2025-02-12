import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AdminProfileManage.module.css";
import {
  Button,
  Form,
  Spinner,
  Card,
  Table,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import ChangeAdminPassword from "../../components/Admin/ChangeAdminPassword";

const AdminProfileManage = () => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [photo, setPhoto] = useState(null);

  const API_URL =
    process.env.REACT_APP_NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL;

  useEffect(() => {
    const fetchAdminData = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Authentication token is missing. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${API_URL}/api/admin/auth/adminprofile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAdminData(response.data.admin);
        setFormData(response.data.admin);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch admin data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [API_URL]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) setFormData(adminData);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Authentication token is missing. Please log in.");
      setIsUpdating(false);
      return;
    }

    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });
      if (photo) {
        formDataToSubmit.append("photo", photo);
      }

      const response = await axios.put(
        `${API_URL}/api/admin/auth/updateadmininfo`,
        formDataToSubmit,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setAdminData(response.data.admin);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to update profile.");
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.textCenter}>
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.textCenter}>
        <h4>Error</h4>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Manage Profile</h2>
      <Card className="shadow-sm">
        {!isEditing ? (
          <div className="p-4">
            <Row>
              <Col md={4} className="text-center">
                <Image
                  src={`${API_URL}/uploads/Admin/${adminData.photo}`}
                  alt="Admin Profile"
                  className="rounded-circle mb-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="mt-2">{adminData.name || "N/A"}</h5>
                <p className="text-muted">{adminData.designation || "N/A"}</p>
              </Col>
              <Col md={8}>
                <Table bordered hover>
                  <tbody>
                    <tr>
                      <th>Role</th>
                      <td>{adminData.role || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Gender</th>
                      <td>{adminData.gender || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Department</th>
                      <td>{adminData.department || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{adminData.email || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>{adminData.phone || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>{adminData.address || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>AADHAR Number</th>
                      <td>{adminData.AADHARnumber || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Blood Group</th>
                      <td>{adminData.bloodgroup || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Category</th>
                      <td>{adminData.category || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Religion</th>
                      <td>{adminData.religion || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Highest Qualification</th>
                      <td>{adminData.highestQualification || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Experience</th>
                      <td>{adminData.experience || "N/A"} years</td>
                    </tr>
                    <tr>
                      <th>Joining Date</th>
                      <td>
                        {new Date(adminData.joiningDate).toLocaleDateString() ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th>Salary</th>
                      <td>₹{adminData.salary || "N/A"}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <div className="text-center mt-3">
              <Button
                onClick={handleEditToggle}
                variant="primary"
                disabled={isUpdating}
              >
                Edit Profile
              </Button>
              <ChangeAdminPassword />
            </div>
          </div>
        ) : (
          <Form onSubmit={handleFormSubmit} className="p-4">
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formDesignation">
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    type="text"
                    name="designation"
                    value={formData.designation || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formDepartment">
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    type="text"
                    name="department"
                    value={formData.department || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formDob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={formData.dob || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEmergencyContactName">
                  <Form.Label>Emergency Contact Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="emergencyContact.name"
                    value={formData.emergencyContact?.name || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEmergencyContactRelation">
                  <Form.Label>Emergency Contact Relation</Form.Label>
                  <Form.Control
                    type="text"
                    name="emergencyContact.relation"
                    value={formData.emergencyContact?.relation || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEmergencyContactPhone">
                  <Form.Label>Emergency Contact Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="emergencyContact.phone"
                    value={formData.emergencyContact?.phone || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBloodGroup">
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Control
                    type="text"
                    name="bloodgroup"
                    value={formData.bloodgroup || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={formData.category || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formReligion">
                  <Form.Label>Religion</Form.Label>
                  <Form.Control
                    type="text"
                    name="religion"
                    value={formData.religion || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formHighestQualification">
                  <Form.Label>Highest Qualification</Form.Label>
                  <Form.Control
                    type="text"
                    name="highestQualification"
                    value={formData.highestQualification || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formExperience">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control
                    type="number"
                    name="experience"
                    value={formData.experience || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formJoiningDate">
                  <Form.Label>Joining Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formSalary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="number"
                    name="salary"
                    value={formData.salary || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formCertifications">
                  <Form.Label>Certifications</Form.Label>
                  <Form.Control
                    type="text"
                    name="certifications"
                    value={formData.certifications?.join(", ") || ""}
                    onChange={(e) => {
                      const certifications = e.target.value
                        .split(",")
                        .map((item) => item.trim());
                      setFormData({ ...formData, certifications });
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBankDetails">
                  <Form.Label>Bank Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="bankDetails.accountNumber"
                    value={formData.bankDetails?.accountNumber || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBankName">
                  <Form.Label>Bank Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="bankDetails.bankName"
                    value={formData.bankDetails?.bankName || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formIfscCode">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="bankDetails.ifscCode"
                    value={formData.bankDetails?.ifscCode || ""}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-between mt-3">
              <Button type="submit" variant="success" disabled={isUpdating}>
                {isUpdating ? "Saving..." : "Save Changes"}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={handleEditToggle}
                disabled={isUpdating}
              >
                Cancel
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default AdminProfileManage;
