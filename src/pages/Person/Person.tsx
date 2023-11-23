import { Box, Container,  IconButton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { makeStyles } from "src/utils/makeStyles";
import badar from "src/assets/images/people/badar.png";
import { Fonts } from "src/utils";
import clsx from "clsx";
import fb from "src/assets/icons/facebook.svg";
import email from "src/assets/icons/email.svg";
import bisma from "src/assets/images/bisma.jpeg";

import Masonry from "@mui/lab/Masonry";

const useStyles = makeStyles()((theme) => ({
  imgWrapper: {
    padding: 6,
    border: `4px dashed ${theme.palette.secondary.main}`,
    maxWidth: 400,
  },
  leftBoder: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: 6,
  },
  hoverText: {
    transition: "all 200ms ease-in-out",
    cursor: "default",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
  masImg: {
    // position: "relative",
    borderRadius: 4,
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    transition: "all 200ms ease-in-out",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    // "&::after": {
    //   content: "''",
    //   width: "100%",
    //   height: "100%",
    //   position: "absolute",
    //   background: "inherit",
    //   backgroundPosition: "center center",
    //   filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.50)) blur(20px)",
    //   zIndex: "-1",
    // },
  },
}));

const Person = () => {
  const { name } = useParams();
  const { classes } = useStyles();
  console.log(name);
  return (
    <Box sx={{ mt: 4, pb: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          <Box className={classes.imgWrapper}>
            <img src={badar} width="100%" style={{ maxWidth: 300 }} />
          </Box>
          <Box>
            <Typography
              fontFamily={Fonts.Monteserrat}
              fontWeight={800}
              variant="h3"
              className={clsx(classes.hoverText, classes.leftBoder)}
            >
              Badar Iqbal
            </Typography>
            <Typography color="primary" fontWeight={600} variant="h5">
              Founder Chairman
            </Typography>
            <Typography fontWeight={"bold"} className={classes.hoverText}>
              All Karachi Marbles Industries Association
            </Typography>
            <Typography fontWeight={"bold"} className={classes.hoverText}>
              Bisma Marbles
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }} fontWeight={800}>
              Contact
            </Typography>
            <Typography variant="body1" sx={{ mt: 0 }}>
              +92-313-9292654 <br />
              +92-300-2292654
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }} fontWeight={800}>
              Socials
            </Typography>
            <Box>
              <IconButton sx={{ width: 60, height: 60 }}>
                <img src={fb} width={35} />
              </IconButton>
              <IconButton sx={{ width: 60, height: 60 }}>
                <img src={email} width={50} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
      <Typography
        variant="h2"
        fontWeight={800}
        fontFamily={Fonts.Monteserrat}
        align="center"
        sx={(theme) => ({ background: theme.palette.primary.main, color: "white", mt: 4, py: 4 })}
      >
        Gallery
      </Typography>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={4}>
          <div>
            <img
              src={badar}
              alt="img"
              loading="lazy"
              className={classes.masImg}
              style={{
                display: "block",
                width: "100%",
              }}
            />
          </div>
          <div>
            <img
              src={bisma}
              alt="img"
              loading="lazy"
              className={classes.masImg}
              style={{
                display: "block",
                width: "100%",
              }}
            />
          </div>
        </Masonry>
      </Container>
    </Box>
  );
};

export default Person;
