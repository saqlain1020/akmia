import React, { useState } from "react";
import { makeStyles } from "../../utils/makeStyles";
import logo from "./../../assets/logo.png";
import logoBig from "./../../assets/logoBig.png";
import { Box, Container, Typography } from "@mui/material";
import Navdrawer from "./NavDrawer";

import Burger from "@animated-burgers/burger-slide";
import "@animated-burgers/burger-slide/dist/styles.css";

const useStyles = makeStyles()((theme) => ({
  root: {
    // backgroundColor: "#f2f2f2",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  logo: {
    height: 80,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: 30,
    paddingRight: 20,
  },
  link: {
    color: "#5a6878",
    transition: "all 200ms ease-in-out",
    position: "relative",
    fontWeight: 600,
    "&::after": {
      position: "absolute",
      bottom: 0,
      left: 0,
      content: "''",
      transition: "all 200ms ease-in-out",
      width: "0%",
      height: 3,
      background: theme.palette.primary.main,
    },
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
      "&::after": {
        width: "100%",
      },
    },
  },
  burger: {
    position: "absolute",
    right: 20,

    "& .burger-lines,.burger-lines:after,.burger-lines:before": {
      backgroundColor: "black",
    },
    fontSize: 10,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const { classes } = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ pt: 2, pb: 2 }} className={classes.root}>
      <Container className={classes.container}>
        <Box className="center">
          {/* <Typography fontWeight={600} align="right">All Karachi <br/>Marbles <br/>Industries<br/> Association</Typography> */}
          <img className={classes.logo} alt="logo" src={logoBig} />
        </Box>
        <Box className={classes.links} sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <Typography className={classes.link}>Home</Typography>
          <Typography className={classes.link}>About</Typography>
          <Typography className={classes.link}>Gallery</Typography>
          <Typography className={classes.link}>Employees</Typography>
          <Typography className={classes.link}>Contact</Typography>
        </Box>
        <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className={classes.burger} />
        <Navdrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </Box>
  );
};

export default Navbar;
