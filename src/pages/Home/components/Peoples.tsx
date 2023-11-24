import { Box, Container, Card, Typography, Grid, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Fonts } from "src/utils";
import { makeStyles } from "src/utils/makeStyles";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import { Link } from "react-router-dom";
import peoples from "src/config/peoples";

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
      "& .boxCard": {
        opacity: 1,
      },
    },
    [theme.breakpoints.down("md")]: {
      filter: "saturate(1)",
    },
  },
  boxCard: {
    transition: "all 300ms ease-in-out",
    position: "absolute",
    opacity: 0,
    width: "calc(100% - 40px)",
    left: 20,
    bottom: 20,
    borderRadius: 0,
    padding: 16,
    [theme.breakpoints.down("md")]: {
      padding: 8,
      width: "calc(100% - 20px)",
      left: 10,
      opacity: 1,
      bottom: 10,
    },
  },
}));
const Peoples = () => {
  const { classes } = useStyles();

  return (
    <Box sx={{ background: "#f2f3f5" }}>
      <Container maxWidth="lg" sx={{ pt: 5, pb: 5 }}>
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
        <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
          {/* <Grid item xs={6} sm={6} md={4}>
            <Slide bottom>
              <Box className={classes.box} component={Link} to="/person/badar">
                <img src={badar} alt="Badar Iqbal" width="100%" />
                <Card className={clsx(classes.boxCard, "boxCard")}>
                  <Typography variant="h5" fontWeight={"bold"} fontSize={{ xs: 12, sm: 16, md: 20 }}>
                    Badar Iqbal
                  </Typography>
                  <Typography color="primary" fontSize={{ xs: 10, sm: 12, md: 16 }}>
                    Founder Chairman
                  </Typography>
                </Card>
              </Box>
            </Slide>
          </Grid> */}
          {peoples.map((item, i) => (
            <Grid item xs={6} key={i} sm={6} md={4}>
              <Slide bottom>
                <Link to={`/person/${item.tag}`}>
                  <Card elevation={5}>
                    <CardActionArea>
                      <CardMedia component="img" image={item.image} alt={item.name} sx={{ aspectRatio: "1/1" }} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" fontWeight={600}>
                          {item.name}
                        </Typography>
                        {item.titleCardLines.map((item) => (
                          <Typography key={item} variant="body2" color="primary">
                            {item}
                          </Typography>
                        ))}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Peoples;
