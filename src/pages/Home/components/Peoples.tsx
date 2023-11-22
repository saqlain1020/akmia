import React from "react";
import { Box, Container, Card, Typography, Grid, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Fonts } from "src/utils";
import { makeStyles } from "src/utils/makeStyles";
import badar from "src/assets/images/people/badar.png";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";

const useStyles = makeStyles()((theme) => ({
  heading: {
    position: "relative",
    width: "fit-content",
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
  box: {
    position: "relative",
    display: "flex",
    filter: "saturate(0) brightness(1)",
    transition: "all 200ms ease-in-out",
    cursor: "pointer",
    boxShadow: "0px 8px 14px rgba(0,0,0,0.4)",
    "&:hover": {
      filter: "saturate(1)",
    },
    [theme.breakpoints.down("md")]: {
      filter: "saturate(1)",
    },
  },
  boxCard: {
    position: "absolute",
    width: "calc(100% - 40px)",
    left: 20,
    bottom: 20,
    borderRadius: 0,
    padding: 16,
    [theme.breakpoints.down("md")]: {
      padding: 8,
      width: "calc(100% - 20px)",
      left: 10,
      bottom: 10,
    },
  },
}));
const Peoples = () => {
  const { classes } = useStyles();

  return (
    <Box sx={{ background: "#f2f3f5" }}>
      <Container maxWidth="lg" sx={{ pt: 5 }}>
        <LightSpeed left>
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
            fontFamily={Fonts.Monteserrat}
            fontWeight={700}
            className={classes.heading}
          >
            Executive Title Members
          </Typography>
        </LightSpeed>
        <Slide cascade bottom>
          <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Grid item xs={6} sm={6} md={4}>
              {/* <Slide bottom> */}
              <Box className={classes.box}>
                <img src={badar} alt="Badar Iqbal" width="100%" />
                <Card className={classes.boxCard}>
                  <Typography variant="h5" fontWeight={"bold"}>
                    Badar Iqbal
                  </Typography>
                  <Typography color="primary">Founder Chairman</Typography>
                </Card>
              </Box>
              {/* </Slide> */}
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              {/* <Slide bottom> */}
              <Box className={classes.box}>
                <img src={badar} alt="Badar Iqbal" width="100%" />
                <Card className={classes.boxCard}>
                  <Typography variant="h5" fontWeight={"bold"}>
                    Badar Iqbal
                  </Typography>
                  <Typography color="primary">Founder Chairman</Typography>
                </Card>
              </Box>
              {/* </Slide> */}
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              {/* <Slide bottom> */}
              <Box className={classes.box}>
                <img src={badar} alt="Badar Iqbal" width="100%" />
                <Card className={classes.boxCard}>
                  <Typography variant="h5" fontWeight={"bold"}>
                    Badar Iqbal
                  </Typography>
                  <Typography color="primary">Founder Chairman</Typography>
                </Card>
              </Box>
              {/* </Slide> */}
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              {/* <Slide bottom> */}
              <Box className={classes.box}>
                <img src={badar} alt="Badar Iqbal" width="100%" />
                <Card className={classes.boxCard}>
                  <Typography variant="h5" fontWeight={"bold"}>
                    Badar Iqbal
                  </Typography>
                  <Typography color="primary">Founder Chairman</Typography>
                </Card>
              </Box>
              {/* </Slide> */}
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              {/* <Slide bottom> */}
              <Box className={classes.box}>
                <img src={badar} alt="Badar Iqbal" width="100%" />
                <Card className={classes.boxCard}>
                  <Typography variant="h5" fontWeight={"bold"}>
                    Badar Iqbal
                  </Typography>
                  <Typography color="primary">Founder Chairman</Typography>
                </Card>
              </Box>
              {/* </Slide> */}
            </Grid>
            {/* <Grid item xs={6} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={badar} alt="Badar Iqbal" />
                <CardContent>
                  <Typography gutterBottom variant="h5" fontWeight={600}>
                    Badar Iqbal
                  </Typography>
                  <Typography variant="body2" color="primary">
                    Founder Chairman
                    <br />
                    M/S Bisma Marble
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid> */}
          </Grid>
        </Slide>
      </Container>
    </Box>
  );
};

export default Peoples;
