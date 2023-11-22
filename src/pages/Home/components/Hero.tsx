import React from "react";

import { Box, Container, Typography } from "@mui/material";
import Bg from "src/assets/images/marble.jpg";
import Img1 from "src/assets/images/slider/1.png";
import Img2 from "src/assets/images/slider/2.png";
import Img3 from "src/assets/images/slider/3.png";
import Img4 from "src/assets/images/slider/4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "src/utils/makeStyles";
const useStyles = makeStyles()((theme) => ({
  container: {
    // minHeight: "calc(100vh - 112px)",
    background: "linear-gradient(0deg, rgb(242,242,242,0.1),rgb(242,242,242))",
  },
  carousel: {
    // width: "80%",
    height: "60vh",
    margin: "auto",
    "& img": {
      objectFit: "cover",
      height: "60vh !important",
    },
  },
  imageTextWrapper: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.4)",
    // backdropFilter: "blur(5px)",
  },
  imageText: {
    maxWidth: 1000,
    width: "80%",
    color: "white",
  },
}));

const Hero = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        className={classes.carousel}
      >
        <Box sx={{ position: "relative" }}>
          <img src={Img1} alt="" />
          <Box className={classes.imageTextWrapper}>
            <Typography variant="h3" fontWeight="bold" className={classes.imageText}>
              Elevate Your Space With Our exquisite Marbles, Delivered With Care As They Conquer Every Hill.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={Img2} alt="" />
          <Box className={classes.imageTextWrapper}>
            <Typography variant="h3" fontWeight="bold" className={classes.imageText}>
              Embark On A Journey Of Elegance As Our Dedicated Trucks Ascend, Carrying The Finest Marbles To Enhance
              Your Spaces.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={Img3} alt="" />
          <Box className={classes.imageTextWrapper}>
            <Typography variant="h3" fontWeight="bold" className={classes.imageText}>
              Commanding Bulldozer Effortlessly Carries Exquisite Marble, Culminating in Opulent Elevation of Your
              Spaces.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src={Img4} alt="" />
          <Box className={classes.imageTextWrapper}>
            <Typography variant="h3" fontWeight="bold" className={classes.imageText}>
              Fine quality and symbol of excellence, All Karachi Marbles Industries Association.
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </Box>
  );
};

export default Hero;
