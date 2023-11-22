import { FC } from "react";
import { makeStyles } from "../../utils/makeStyles";

import { Box, Container, Typography } from "@mui/material";
import Bg from "src/assets/images/marble.jpg";
import Img1 from "src/assets/images/slider/1.png";
import Img2 from "src/assets/images/slider/2.png";
import Img3 from "src/assets/images/slider/3.png";
import Img4 from "src/assets/images/slider/4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero from "./components/Hero";
const useStyles = makeStyles()((theme) => ({
  root: {
    // height: "100%",
    background: `url(${Bg})`,
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
  },
}));

const Home: FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Hero />
    </Box>
  );
};

export default Home;
