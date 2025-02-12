import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./OurServicesSection.css";
const OurServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Digital Marketing",
      path: "/services/digital-marketing",
      description:
        "Cutting-edge strategies to enhance your brand’s online presence.",
    },
    {
      name: "Web Development",
      path: "/services/web-development",
      description:
        "Custom-built websites and applications tailored to your business needs.",
    },
    {
      name: "IT Solutions",
      path: "/services/it-solutions",
      description:
        "Comprehensive IT services to optimize and secure your infrastructure.",
    },
    {
      name: "Designing",
      path: "/services/designing",
      description:
        "Stunning graphic, UI/UX, and branding designs to elevate your business.",
    },
    {
      name: "Content Creation",
      path: "/services/content-creation",
      description:
        "Engaging and high-quality content tailored to your audience.",
    },
    {
      name: "Media Production",
      path: "/services/media-production",
      description:
        "High-quality photography, videography, and multimedia production.",
    },
    {
      name: "Architecture",
      path: "/services/architecture",
      description:
        "Innovative architectural designs for modern and functional spaces.",
    },
    {
      name: "Influencer Marketing",
      path: "/services/influencer-marketing",
      description:
        "Connect with top influencers to boost your brand’s reach and engagement.",
    },
  ];

  return (
    <Container className="section">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
      >
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              className="service-card"
              onClick={() => navigate(service.path)}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                },
                borderRadius: "16px",
                background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
              }}
            >
              <CardContent sx={{ textAlign: "center", padding: "24px" }}>
                <Typography
                  variant="h5"
                  className="service-name"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  {service.name}
                </Typography>
                <Typography variant="body2" className="service-description">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurServicesSection;
