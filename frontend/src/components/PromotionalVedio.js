import React from 'react'
import {
  Container,
  Typography,
  Box,
  Grid,
  // Card,
  // CardContent,
  // Button,

} from "@mui/material";

const PromotionalVedio = () => {
  return (
    <div>
       {/* Promotional Video Section */}
       <Container className="section">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold", fontSize: "2.5rem" }}
        >
          Promotional Video
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box className="promo-video-container">
              <video controls className="carousel-video">
                <source
                  src="https://www.example.com/path/to/promo_video.mp4" // Replace with your promotional video URL
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className="promo-video-container">
              <video controls className="carousel-video">
                <source
                  src="https://www.example.com/path/to/promo_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}

export default PromotionalVedio
