import { FC } from "react";
import { makeStyles } from "../../utils/makeStyles";

import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SurveyReport from "./components/SurveyReport";
import Manifesto from "./components/Manifesto";
import Intro from "./components/Intro";
import Peoples from "./components/Peoples";
import Interview from "./components/Interview";
const useStyles = makeStyles()(() => ({
  root: {
    // height: "100%",
    // background: `url(${Bg})`,
    // backgroundSize: "cover",
    // backgroundPositionX: "center",
    // backgroundPositionY: "center",
  },
}));

const Home: FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root} sx={{ pb: 10 }}>
      {/* <Hero /> */}
      <SurveyReport />
      <Intro />
      <Manifesto />
      <Peoples />
      <Interview/>
    </Box>
  );
};

export default Home;
