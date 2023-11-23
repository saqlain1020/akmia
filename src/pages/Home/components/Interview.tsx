import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Fonts } from "src/utils";
import { makeStyles } from "src/utils/makeStyles";
import vid from "src/assets/vids/interview1.mp4";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles()((theme) => ({
  root: {
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
      borderLeft: 0,
    },
  },
}));

const Interview = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Typography
        variant="h3"
        fontWeight={800}
        fontFamily={Fonts.Monteserrat}
        align="center"
        color="inherit"
        sx={{ mt: 4, pt: 2, cursor: "pointer" }}
      >
        Founder Chairman Interview
      </Typography>
      <Container maxWidth="lg" sx={{ pb: 4 }}>
        <Fade bottom>
          <Box
            component="video"
            src={vid}
            controls
            width={"100%"}
            sx={{
              maxWidth: 600,
              borderRadius: 1,
              margin: "auto",
              display: "block",
              mt: 4,
              boxShadow: "0px 10px 16px rgba(0,0,0,0.8)",
            }}
          />
        </Fade>
      </Container>
    </Box>
  );
};

export default Interview;
