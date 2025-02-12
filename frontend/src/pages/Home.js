import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import Slider from "react-slick";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import zagerBanner from "../assets/zagerBanner.png"; // New banner image for Zager Digital Services
//import zagerLogo from "../assets/zagerLogo.png"; // Main company logo
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import OurServicesSection from "../components/OurServicesSection";
import AboutUsSection from "../components/AboutUsSection";
import csitBanner from "../assets/zager_banner.png";
const Home = () => {
  // Carousel settings for react-slick
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <ArrowForwardIos fontSize="small" />,
    prevArrow: <ArrowBackIos fontSize="small" />,
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box className="hero-section">
        <Slider {...carouselSettings} className="banner-carousel">
          <div className="banner-slide">
            <img
              src={csitBanner}
              alt="Seminar on Latest Tech"
              className="banner-slide-image"
            />
          </div>
        </Slider>{" "}
      </Box>

      {/* News Ticker Section */}
      <Box className="news-ticker">
        <Slider
          dots={false}
          infinite
          autoplay
          speed={1}
          autoplaySpeed={0}
          cssEase="linear"
          className="news-ticker-slider"
        >
          <Typography>
            Innovating digital solutions for a smarter, connected world.
          </Typography>
          <Typography>
            Empowering businesses through cutting-edge technology.
          </Typography>
          <Typography>
            Zager Digital Services – Your partner in digital transformation.
          </Typography>
        </Slider>
      </Box>

      {/* Our Services Section */}
      <OurServicesSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Our Products Section */}
      <Container className="section">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold", fontSize: "2.5rem" }}
        >
          Our Products
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Slider {...carouselSettings}>
              <img
                src="https://via.placeholder.com/600x400?text=Innovation+1"
                alt="Technology 1"
                className="carousel-image"
              />
              <img
                src="https://via.placeholder.com/600x400?text=Innovation+2"
                alt="Technology 2"
                className="carousel-image"
              />
            </Slider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Slider {...carouselSettings}>
              <img
                src="https://via.placeholder.com/600x400?text=Digital+Transformation+1"
                alt="Digital Transformation 1"
                className="carousel-image"
              />
              <img
                src="https://via.placeholder.com/600x400?text=Digital+Transformation+2"
                alt="Digital Transformation 2"
                className="carousel-image"
              />
            </Slider>
          </Grid>
        </Grid>
      </Container>

      <Divider className="custom-divider" variant="middle" />

      {/* Gallery Section */}
      <Container className="section">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold", fontSize: "2.5rem" }}
        >
          Gallery
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Slider {...carouselSettings}>
              <img
                src="https://via.placeholder.com/600x400?text=Office+Vibes+1"
                alt="Gallery 1"
                className="carousel-image"
              />
              <img
                src="https://via.placeholder.com/600x400?text=Office+Vibes+2"
                alt="Gallery 2"
                className="carousel-image"
              />
            </Slider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Slider {...carouselSettings}>
              <img
                src="https://via.placeholder.com/600x400?text=Team+Culture+1"
                alt="Gallery 3"
                className="carousel-image"
              />
              <img
                src="https://via.placeholder.com/600x400?text=Team+Culture+2"
                alt="Gallery 4"
                className="carousel-image"
              />
            </Slider>
          </Grid>
        </Grid>
      </Container>

      <Divider className="custom-divider" variant="middle" />

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

      {/* Our Clients Section */}
      <Box className="clients-section" py={5}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Our Clients
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            We partner with leading organizations to deliver innovative digital
            solutions.
          </Typography>
          <Box className="logo-marquee">
            <div className="marquee">
              <img
                src="https://via.placeholder.com/150x80?text=Client+1"
                alt="Client 1"
                className="client-logo"
              />
              <img
                src="https://via.placeholder.com/150x80?text=Client+2"
                alt="Client 2"
                className="client-logo"
              />
              <img
                src="https://via.placeholder.com/150x80?text=Client+3"
                alt="Client 3"
                className="client-logo"
              />
              <img
                src="https://via.placeholder.com/150x80?text=Client+4"
                alt="Client 4"
                className="client-logo"
              />
              {/* Duplicate logos for seamless looping */}
              <img
                src="https://via.placeholder.com/150x80?text=Client+1"
                alt="Client 1"
                className="client-logo"
              />
              <img
                src="https://via.placeholder.com/150x80?text=Client+2"
                alt="Client 2"
                className="client-logo"
              />
              <img
                src="https://via.placeholder.com/150x80?text=Client+3"
                alt="Client 3"
                className="client-logo"
              />
              <img
                src="https://via.placeholder.com/150x80?text=Client+4"
                alt="Client 4"
                className="client-logo"
              />
            </div>
          </Box>
        </Container>
      </Box>

      {/* Success Metrics Section */}
      <Box className="success-metrics-section" py={5} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Success Metrics
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h6">Projects Delivered</Typography>
              <CountUp start={0} end={250} duration={3} suffix="+">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <Typography
                      variant="h4"
                      ref={countUpRef}
                      className="highlight-number"
                    />
                  </VisibilitySensor>
                )}
              </CountUp>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h6">Satisfied Clients</Typography>
              <CountUp start={0} end={120} duration={3} suffix="+">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <Typography
                      variant="h4"
                      ref={countUpRef}
                      className="highlight-number"
                    />
                  </VisibilitySensor>
                )}
              </CountUp>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h6">Awards Won</Typography>
              <CountUp start={0} end={15} duration={3}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <Typography
                      variant="h4"
                      ref={countUpRef}
                      className="highlight-number"
                    />
                  </VisibilitySensor>
                )}
              </CountUp>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box py={5} className="testimonials-section">
        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ fontWeight: "bold", fontSize: "2.5rem" }}
          >
            Testimonials
          </Typography>
          <Slider {...carouselSettings}>
            {/* Testimonial 1 */}
            <Box className="testimonial-item">
              <Box className="testimonial-content">
                <img
                  src="https://via.placeholder.com/100?text=Client+1"
                  alt="Client 1"
                  className="testimonial-image"
                />
                <Box>
                  <Typography variant="h6" className="testimonial-quote">
                    "Zager Digital transformed our business with innovative
                    solutions."
                  </Typography>
                  <Typography variant="caption" className="testimonial-author">
                    - CEO, TechCorp
                  </Typography>
                  <Typography variant="body2" className="testimonial-detail">
                    Their expertise in software development and digital
                    marketing helped us achieve unprecedented growth.
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Testimonial 2 */}
            <Box className="testimonial-item">
              <Box className="testimonial-content">
                <img
                  src="https://via.placeholder.com/100?text=Client+2"
                  alt="Client 2"
                  className="testimonial-image"
                />
                <Box>
                  <Typography variant="h6" className="testimonial-quote">
                    "Professional, innovative, and reliable. Highly
                    recommended!"
                  </Typography>
                  <Typography variant="caption" className="testimonial-author">
                    - CTO, InnovateX
                  </Typography>
                  <Typography variant="body2" className="testimonial-detail">
                    Zager Digital Services exceeded our expectations in every
                    way.
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Testimonial 3 */}
            <Box className="testimonial-item">
              <Box className="testimonial-content">
                <img
                  src="https://via.placeholder.com/100?text=Client+3"
                  alt="Client 3"
                  className="testimonial-image"
                />
                <Box>
                  <Typography variant="h6" className="testimonial-quote">
                    "Their digital transformation strategies are a
                    game-changer."
                  </Typography>
                  <Typography variant="caption" className="testimonial-author">
                    - Founder, StartupHub
                  </Typography>
                  <Typography variant="body2" className="testimonial-detail">
                    Working with Zager Digital Services has revolutionized our
                    operations.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Slider>
        </Container>
      </Box>
    </>
  );
};

export default Home;
