import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  // List,
  // ListItem,
  // ListItemText,
} from "@mui/material";
import "./AboutUsSection.css";
// import { BentoGridDemo } from './BentoGrid.js';
import BentoGridDemo from "./BentoGridDemo.js";

const AboutUsSection = () => {
  return (
    <Container className="about-section">
      <Grid container spacing={4} alignItems="center">
        {/* About Us Text */}
        <Grid item xs={12} md={6}>
          <Box className="about-block">
            <Typography variant="h5" className="section-title-about" align="left">
              About Us
            </Typography>
            <Typography variant="body1" className="section-description-about" align="justify">
              Zager Digital Services is a leading technology company committed
              to transforming businesses through innovative digital solutions.
              Our expert team delivers end-to-end services, ensuring that our
              clients stay ahead in an ever-evolving digital landscape.
            </Typography>
          </Box>
        </Grid>

        {/* Images Side by Side */}
        <Grid item xs={12} md={6} container spacing={2}>
          <Grid item xs={6}>
            <img
              src="https://images.unsplash.com/vector-1739369767443-9bba8a16ee78?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us 1"
              className="about-image"
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://images.unsplash.com/vector-1738932609103-d6546ada83b4?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us 2"
              className="about-image about-image-2"
            />
          </Grid>
        </Grid>
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
              align="center"
              style={{width: "100%",   margin: "auto"}}
            >
              To be the catalyst for digital transformation, empowering
              businesses worldwide with technology that drives growth,
              efficiency, and sustainability.
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
      </Grid>

      {/* Our Mission Section */}
      <Grid item xs={12} md={4}>
          <Box className="about-block" style={{marginTop: "65px"}}>
            <Typography variant="h5" className="section-title" align="center">
              Our Mission
            </Typography>
            {/* <List className="mission-list">
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
            </List> */}

            <BentoGridDemo/>
          </Box>
        </Grid>

    </Container>
  );
};

export default AboutUsSection;