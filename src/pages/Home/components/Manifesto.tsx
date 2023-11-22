import React from "react";
import { makeStyles } from "src/utils/makeStyles";
import { Box, Container, Grid, ListItem, ListItemText, Typography, List } from "@mui/material";
import { Fonts } from "src/utils";
import Lottie from "react-lottie";
import animationData from "src/assets/lottie/manifesto.json";

const manifestoPoints = [
  "Converting marbles from feet system to meters.",
  "Shifting logistics from truck mafia to train.",
  "To dry the marble leachate powder and enter it in other industries.",
  "To generate revenue by crushing vestiges into grains and seeds.",
  "After the announcement of the transfer of Pak Colony marble market in 2010, the acquisition of the land located at Methani.",
  "Purpose of establishment of Marble City Northern Bypass",
  "Export of value addition marble instead of raw material.",
  "Decision to take a principled stand to get cheap electricity from winds and solar with private partner Shab on the mountain range from Nadran to Hub Nadi Deha Maithani.",
  "Establishment of modern marble air conditioning complete mall on Super Highway M9. and the establishment of a labor colony. And establishment of accident prevention insurance policy with welfare health center is also included.",
  "Reforms are included to promote exports along with establishment of Marble and Granight Research Institute with expo facilities and local modern missionaries. And material element preparation is also included.",
];

const useStyles = makeStyles()((theme) => ({
  manifestoHeading: {
    position: "relative",
    width: "max-content",
    // margin: "auto",
    "&::after": {
      content: "''",
      bottom: -5,
      left: 0,
      position: "absolute",
      width: "100%",
      height: 4,
      background: theme.palette.primary.main,
    },
  },
  point: {
    cursor: "default",
    transition: "all 100ms ease-in-out",
    "&:hover": {
      color: "white",
      background: theme.palette.primary.main,
    },
  },
}));

const Manifesto = () => {
  const { classes } = useStyles();
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h4"
              fontFamily={Fonts.Monteserrat}
              fontWeight={700}
              className={classes.manifestoHeading}
            >
              Manifesto
            </Typography>
            <Box sx={{ mt: 3 }}>
              {manifestoPoints.map((item, i) => (
                <Typography sx={{ mt: 1 }} className={classes.point}>
                  <b>{i + 1}.</b> {item}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="center">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={400}
                width={400}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Manifesto;
