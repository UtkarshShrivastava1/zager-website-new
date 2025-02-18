import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  // Grid,
  // Card,
  // CardContent,
  // Button,
  // Divider,
} from "@mui/material";
import Slider from "react-slick";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import zagerBanner from "../assets/zagerBanner.png"; // New banner image for Zager Digital Services
//import zagerLogo from "../assets/zagerLogo.png"; // Main company logo
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import OurServicesSection from "../components/OurServicesSection";
import AboutUsSection from "../components/AboutUsSection";
import zagerBanner from "../assets/zager_banner.png";
import { AnimatedTestimonials } from "../components/AnimatedTestimonials";
// import VisibilitySensor from "react-visibility-sensor";
// import AOS from "aos";
import "aos/dist/aos.css";
// import { yellow } from "@mui/material/colors";
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
  <Slider {...carouselSettings} className="banner-carousel">
    <div className="banner-slide">
      <img src={zagerBanner} alt="Seminar on Latest Tech" className="banner-slide-image" />
    </div>
  </Slider>
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
      <Container className="section">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold", fontSize: "2.5rem" }}
        >
          Our Products
        </Typography>
        {/* <Grid container spacing={3}>
          <Grid item xs={5} sm={6}>
            <Slider {...carouselSettings}>
              <img
                src="https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Technology 1"
                className="carousel-image"
              />
              <img
                src="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Technology 2"
                className="carousel-image"
              />
            </Slider>
          </Grid>
          <Grid item xs={5} sm={6}>
            <Slider {...carouselSettings}>
              <img
                src="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Transformation 1"
                className="carousel-image"
              />
              <img
                src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Digital Transformation 2"
                className="carousel-image"
              />
            </Slider>
          </Grid>
        </Grid> */}
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
          <Grid item xs={10} sm={6}>
            <Slider {...carouselSettings}>
              <img
                src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery 1"
                className="carousel-image"
              />
              <img
                src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery 2"
                className="carousel-image"
              />
            </Slider>
          </Grid>
          <Grid item xs={10} sm={6}>
            <Slider {...carouselSettings}>
              <img
                src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery 3"
                className="carousel-image"
              />
              <img
                src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gallery 4"
                className="carousel-image"
              />
            </Slider>
          </Grid>
        </Grid>
      </Container> */}

      {/* <Divider className="custom-divider" variant="middle" /> */}

     
      {/* Our Clients Section */}
      <Box className="clients-section" py={5}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom color={"#ffeb00"}>
            Our Clients
            <hr  border="2px" color={"#051224"}/>
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
      <AnimatedTestimonials 
        testimonials={testimonials} 
        autoplay={true} 
      />
    </>
  );
};

export default Home;
