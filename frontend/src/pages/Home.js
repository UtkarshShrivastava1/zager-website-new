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
import { AnimatedTestimonials } from '../components/AnimatedTestimonials';
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


  const products = [
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      name: "Smart Technology Hub",
      description: "Advanced technology solution for seamless integration of your smart devices. Features include AI-powered automation, real-time monitoring, and enhanced security protocols.",
      link: "/products/smart-hub"
    },
    {
      image: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?q=80&w=1919&auto=format&fit=crop",
      name: "Digital Assistant Pro",
      description: "Next-generation digital assistant with voice recognition, task automation, and intelligent scheduling capabilities.",
      link: "/products/digital-assistant"
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1928&auto=format&fit=crop",
      name: "Cloud Security Suite",
      description: "Comprehensive cloud security solution offering advanced threat detection and real-time monitoring.",
      link: "/products/security-suite"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      name: "Smart Technology Hub",
      description: "Advanced technology solution for seamless integration of your smart devices. Features include AI-powered automation, real-time monitoring, and enhanced security protocols.",
      link: "/products/smart-hub"
    },
];

  const testimonials = [
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&h=500",
      name: "John Doe",
      designation: "CEO at TechCorp",
      quote: "This product has transformed how we do business. The results have been nothing short of amazing."
    },
    {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&h=500",
      name: "Jane Smith",
      designation: "Marketing Director",
      quote: "I've never seen such impressive results. The implementation was smooth and the support is fantastic."
    },
    {
      src: "https://images.unsplash.com/photo-1527082395-e939b847da0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dayle Smith",
      designation: "Sales Director",
      quote: "I've never seen such impressive results. The implementation was smooth and the support is fantastic."
    },
    // Add more testimonials as needed
  ];

  return (
    <>
      {/* Hero Section */}
      <Box className="hero-section">
        {/* <Slider {...carouselSettings} className="banner-carousel">
          <div className="banner-slide">
            <img
              src={csitBanner}
              alt="Seminar on Latest Tech"
              className="banner-slide-image"
            />
          </div>
        </Slider>{" "} */}
        <div className="hero-section-background-cover"></div>
        <div className="hero-section-content">
          {/* <h1>Empowering Businesses with <br/> IT Solutions <br/>&<br/> Digital Marketing</h1> */}
          <h1>Empowering Businesses with <br/> <span style={{color:"#ffbe00"}}>IT</span> Solutions <br/>&<br/> Digital <span style={{color:"#ffbe00"}}>Marketing</span> </h1>
          <p>We provide cutting-edge solutions to elevate your business.</p>
          <a href={""} className="product-button">
                    Get Started
          </a>
        </div>
      </Box>

      {/* News Ticker Section */}
        {/* <Box className="news-ticker">
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
        </Box> */}

      {/* Our Services Section */}
      <OurServicesSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Our Products Section */}
      {/* <Container className="section">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "700", fontSize: "2.5rem", color:"#ffbe00", textShadow:"0 0 12px rgba(238, 201, 115, 0.753)" }}
        >
          Our Products
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Slider {...carouselSettings}>
              <img
                src="https://images.unsplash.com/photo-1581868608505-ace259397b88?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Technology 1"
                className="carousel-image"
              />
              <img
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Technology 2"
                className="carousel-image"
              />
              <img
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      </Container> */}

      {/* Our Products Section */}
      <Container className="section">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "700",
          fontSize: "2.5rem",
          color: "#ffbe00",
          textShadow: "0 0 12px rgba(238, 201, 115, 0.753)"
        }}
      >
        Our Products
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Slider {...carouselSettings}>
            {products.map((product, index) => (
              <Grid container key={index} className="product-slide">
                <Grid item xs={12} md={6} className="image-container">
                  <img src={product.image} alt={product.name} className="carousel-image" />
                </Grid>
                <Grid item xs={12} md={6} className="product-details">
                  <Typography variant="h5" className="product-name">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" className="product-description">
                    {product.description}
                  </Typography>
                  <a href={product.link} className="product-button">
                    See Product
                  </a>
                </Grid>
              </Grid>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Container>    

      {/* <Divider className="custom-divider" variant="middle" /> */}

      {/* Gallery Section */}
      {/* <Container className="section">
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
      </Container> */}

      {/* <Divider className="custom-divider" variant="middle" /> */}

      {/* Promotional Video Section */}
      <Container className="section">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "700", fontSize: "2.5rem", color:"#ffbe00", textShadow:"0 0 12px rgba(238, 201, 115, 0.753)" }}
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
      {/* <Box className="clients-section" py={5}>
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
                src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffusion.png?alt=media&token=95dea704-ce1c-4b1b-87c7-60d7c7896d7d"
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
              /> */}
              {/* Duplicate logos for seamless looping */}
              {/* <img
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
      </Box> */}


      {/* Our Clients Section */}
      <Box className="clients-section" py={5}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom className="clients-heading" >
            Our Clients
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            We partner with leading organizations to deliver innovative digital
            solutions.
          </Typography>
          <Box className="logo-marquee">
            <div className="marquee">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fchurch.png?alt=media&token=eed5fec7-f791-4411-afab-6b24de04cc85"
                alt="Client 1"
                className="client-logo"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ffusion.png?alt=media&token=95dea704-ce1c-4b1b-87c7-60d7c7896d7d"
                alt="Client 2"
                className="client-logo"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Flpc.png?alt=media&token=c7236b6b-4b59-40e5-8b0e-e0bbb593955b"
                alt="Client 3"
                className="client-logo"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fmomos_nation2.png?alt=media&token=636db2fd-46f3-47b7-a0f6-aea8c949317e"
                alt="Client 4"
                className="client-logo"
              />
              {/* Duplicate logos for seamless looping */}
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fargo.png?alt=media&token=29f0c24f-2f7b-4d20-8aba-1e0d36f26d0f"
                alt="Client 1"
                className="client-logo"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Ftimepass.png?alt=media&token=4a37737d-5661-4a6a-98d0-e54b497794db"
                alt="Client 2"
                className="client-logo"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fnidaanmonopng.PNG.png?alt=media&token=2a4349bf-2714-4b7f-920a-70cede7ae914"
                alt="Client 3"
                className="client-logo"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Farise.jpg?alt=media&token=88c4161d-8988-419c-970a-53ef8169b8ae"
                alt="Client 4"
                className="client-logo"
              />
              
              <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2FFront4x.png?alt=media&token=46b10c41-8e70-4a1e-a51b-633779a491dc"
              alt="client 5"
              className="client-logo"
              />
             <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2Fvkb.png?alt=media&token=0657bc05-fed8-4d29-8013-bd16240ee991"
              alt="client 5"
              className="client-logo"
              />

              <img
              src="https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/companiesImages%2FSANKALPA.png?alt=media&token=676ff2e2-1c00-4983-a657-a61e48d269af"
              alt="client 5"
              className="client-logo"
              />

            </div>
          </Box>
        </Container>
      </Box>

      {/* Success Metrics Section */}
      {/* <Box className="success-metrics-section" py={5} textAlign="center">
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
      </Box> */}

      {/* Testimonials Section */}
      {/* <Box py={5} className="testimonials-section"> */}
        {/* <Container> */}
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ fontWeight: "700", fontSize: "2.5rem", color:"#ffbe00", textShadow:"0 0 12px rgba(238, 201, 115, 0.753)", marginBottom:"0px" }}
          >
            Testimonials
          </Typography>
          {/* <Slider {...carouselSettings}> */}
            {/* Testimonial 1 */}
            {/* <Box className="testimonial-item">
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
            </Box> */}
            {/* Testimonial 2 */}
            {/* <Box className="testimonial-item">
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
            </Box> */}
            {/* Testimonial 3 */}
            {/* <Box className="testimonial-item">
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
      </Box> */}

      <AnimatedTestimonials 
        testimonials={testimonials} 
        autoplay={true} 
      />
    </>
  );
};

export default Home;
