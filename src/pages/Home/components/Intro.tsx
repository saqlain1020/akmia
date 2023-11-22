import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Fonts } from "src/utils";
import { makeStyles } from "src/utils/makeStyles";

const useStyles = makeStyles()((theme) => ({
  introHeading: {
    position: "relative",
    width: "max-content",
    margin: "auto",
    "&::after": {
      content: "''",
      bottom: -5,
      left: 0,
      position: "absolute",
      width: "100%",
      height: 4,
      background: "white",
      //   background: theme.palette.primary.main,
    },
  },
  introPara: {
    borderLeft: `10px solid ${theme.palette.primary.main}`,
    color: "black",
    transition: "all 300ms ease-in-out",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
    [theme.breakpoints.down("md")]: {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
}));

const Intro = () => {
  const { classes } = useStyles();
  return (
    <Box>
      <Box sx={{ height: 2, my: 2, background: "linear-gradient(90deg, white,rgba(0,0,0,0.4),white)" }}></Box>
      <Box className={classes.introPara}>
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Typography
            color="inherit"
            variant="h4"
            fontFamily={Fonts.Monteserrat}
            fontWeight={700}
            className={classes.introHeading}
          >
            Introduction
          </Typography>
          <Typography color="inherit" sx={{ mt: 2 }}>
            Al Karachi Marble Market Pak Colony Marble Market Main Central Executive Body with its Manghopir Marble
            Industrial Area with its central position like its Zeli Markets. Water pump market. UP Sarjani Marble
            Market. Jamali Pul Gulshan maamar Marble Market. Malir Marble Market. Korangi Landhi Quaidabad Marble
            Market. of the whole and the market around them keeps them involved with their problems. And takes help from
            higher authorities to solve their problems.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Intro;
