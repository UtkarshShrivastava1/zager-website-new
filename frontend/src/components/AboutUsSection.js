import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <Container className="about-section">
      <Grid container spacing={4} justifyContent="center">
        {/* About Us Section */}
        <Grid item xs={12} md={4}>
          <Box className="about-block">
            <Typography variant="h5" className="section-title" align="center">
              About Us
            </Typography>
            <Typography
              variant="body1"
              className="section-description"
              align="justify"
            >
              Zager Digital Services is a leading technology company committed
              to transforming businesses through innovative digital solutions.
              Our expert team delivers end-to-end services, ensuring that our
              clients stay ahead in an ever-evolving digital landscape.
            </Typography>
          </Box>
        </Grid>

        {/* Our Vision Section */}
        <Grid item xs={12} md={4}>
          <Box className="about-block">
            <Typography variant="h5" className="section-title" align="center">
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              className="section-description"
              align="justify"
            >
              To be the catalyst for digital transformation, empowering
              businesses worldwide with technology that drives growth,
              efficiency, and sustainability.
            </Typography>
          </Box>
        </Grid>

        {/* Our Mission Section */}
        <Grid item xs={12} md={4}>
          <Box className="about-block">
            <Typography variant="h5" className="section-title" align="center">
              Our Mission
            </Typography>
            <List className="mission-list">
              <ListItem disableGutters className="mission-item">
                <ListItemText primary="Deliver tailor-made digital solutions that meet our clients’ unique needs." />
              </ListItem>
              <ListItem disableGutters className="mission-item">
                <ListItemText primary="Cultivate a culture of innovation and continuous improvement." />
              </ListItem>
              <ListItem disableGutters className="mission-item">
                <ListItemText primary="Leverage technology to solve complex business challenges." />
              </ListItem>
              <ListItem disableGutters className="mission-item">
                <ListItemText primary="Build long-term partnerships based on trust and exceptional service." />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUsSection;
