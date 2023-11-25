import React from "react";
import { makeStyles } from "src/utils/makeStyles";
import { Box, Container, Typography } from "@mui/material";
import { Fonts } from "src/utils";

const useStyles = makeStyles()((theme) => ({
  root: {},
  heading: {
    position: "relative",
    margin: "auto",
    transition: "all 100ms ease-in-out",
    width: "max-content",
    fontWeight: 800,
    fontFamily: Fonts.Monteserrat,
    cursor: "default",
    // margin: "auto",
    "&::after": {
      content: "''",
      transition: "all 100ms ease-in-out",
      bottom: -5,
      left: 0,
      position: "absolute",
      width: "100%",
      height: 4,
      background: theme.palette.primary.main,
      zIndex: -1,
    },
    "&:hover": {
      color: "white",
      "&::after": {
        height: "100%",
      },
    },
  },
}));

const AboutFounder = () => {
  const { classes } = useStyles();
  return (
    <Box sx={{ mt: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" className={classes.heading}>
          About Founder
        </Typography>
        <Typography variant="h5" sx={{ mt: 5 }} fontWeight={600}>
          Selection and Experiences in Marble Industry
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Main Badr Iqbal, my dear father, by blessing his glass factory in 1975, started Main Marble Kayin Industries
          in Pak Colony by buying a copy of Italian Marble Machineries copied by Mazar Quaid. In 1984, he was one of the
          founders of the All Pakistan Marble Industries Association, formed on the marble tax reforms.<br/><br/>I joined my
          father in 1992 as an elder son after becoming an architect with formal BSc (Bachelor of Science) education.
          Zafar Marbal Sadia Marbal later went on to build other firms.<br/><br/>In 2012, due to gang war and Taliban's extortion
          in industries and target killing of traders, Ahl Maril traders made their representative on industries and
          market protection and resorted to using government policies and measures. By adopting such association
          policies, Pakistan Marble Industries is now working to overcome its past shortcomings.<br/><br/>In 2015, All Karachi
          Marble Industries Association was founded with the help of Shoaib Ishaq and Al Karachi Marble Industries with
          his firm Bisma Marble Industry.
        </Typography>
        <Typography variant="h5" sx={{ mt: 5 }} fontWeight={600}>
          Become a Founding Member
        </Typography>
        <Typography sx={{ mt: 1 }}>
          On these facts, with the businessmen of Al Karachi Marble Industries, Al Karachi Marble Industries Association
          also supports the businessmen who are not members for the promotion of their industries. Mangho Peer Road was
          approved under CPEC and the work was started by Secretary Industries Abdul Rahim Soomro Chief Najinir Shams.
          Eliminated load shedding. Extort money from law enforcement agencies for the benefit of the market.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutFounder;
