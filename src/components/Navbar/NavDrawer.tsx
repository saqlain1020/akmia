/** @jsxImportSource @emotion/react */

import { SwipeableDrawer, Typography } from "@mui/material";
import React from "react";
import Burger from "@animated-burgers/burger-slide";
import { Link } from "react-router-dom";
import { makeStyles } from "../../utils/makeStyles";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useStyles = makeStyles()(() => ({
  root: {
    // height: "100%",
  },
  closeIcon: {
    position: "absolute",
    right: 20,
    top: 20,
    fontSize: 10,
    "& .burger-lines,.burger-lines:after,.burger-lines:before": {
      backgroundColor: "black",
    },
  },
  linksContainer: {
    padding: "40px 30px",
  },
  link: {
    color: "#5a6878",
    height: 50,
    fontSize: 24,
    padding: "10px 24px",
    display: "block",
    textDecoration: "none",
    marginBottom: 2,
    fontWeight: 600,
  },
}));

const Navdrawer: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const { classes } = useStyles();
  return (
    <SwipeableDrawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
      <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className={classes.closeIcon} />
      <div css={classes.linksContainer}>
        <Typography component={Link} to="/" onClick={() => setIsOpen(false)} className={classes.link}>
          Home
        </Typography>
        <Typography component={Link} to="/" onClick={() => setIsOpen(false)} className={classes.link}>
          About
        </Typography>
        <Typography component={Link} to="/" onClick={() => setIsOpen(false)} className={classes.link}>
          Gallery
        </Typography>
        <Typography component={Link} to="/" onClick={() => setIsOpen(false)} className={classes.link}>
          Employees
        </Typography>
        <Typography component={Link} to="/" onClick={() => setIsOpen(false)} className={classes.link}>
          Contact
        </Typography>
      </div>
    </SwipeableDrawer>
  );
};

export default Navdrawer;
