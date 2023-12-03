import { useState } from "react";
import { Box, Container, Card, Typography, Grid } from "@mui/material";
import { Fonts } from "src/utils";
import { makeStyles } from "src/utils/makeStyles";
import LightSpeed from "react-reveal/LightSpeed";
import Img from "src/assets/images/membership.png";
import Lightbox from "yet-another-react-lightbox";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Share from "yet-another-react-lightbox/plugins/share";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Slide from "react-reveal/Slide";

const useStyles = makeStyles()((theme) => ({
  root: {},
  point: {
    cursor: "default",
    transition: "all 100ms ease-in-out",
    "&:hover": {
      color: "white",
      background: theme.palette.primary.main,
    },
  },
  heading: {
    position: "relative",
    margin: "auto",
    transition: "all 100ms ease-in-out",
    width: "fit-content",
    textAlign: "center",
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

const membershipPoints = [
  "Membership is for two years. In which registration fee Rs.1000/. Form Rs.300/ and monthly fee is Rs.300/. Association card and certificate fee is Rs.1500/.",
  "Criminal activity. Ethical. A person cannot become a member based on legal procedures.",
  "Membership will not be done three months before the election. And only the member who has cleared two years fee can vote.",
  "It is necessary to have a firm to become a member. And each firm has one vote. The condition is that it is a member association.",
  "Every member will welcome the policy of the association and the government initiatives. The association will lose its membership for creating market chaos with its negative thinking. The Founders shall maintain membership. The Founder-Chairman shall be responsible for lifetime membership in membership formation and election of the Association.",
];

const Articles = () => {
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box id="executives" sx={{ background: "#f2f3f5" }} className={classes.root}>
      <Container maxWidth="lg" sx={{ pt: 5, pb: 5 }}>
        <LightSpeed left>
          <Typography variant="h3" className={classes.heading}>
            Articles & Memorandum
          </Typography>
        </LightSpeed>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h5" sx={{ mt: 5 }} fontWeight={600}>
              Membership
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Slide bottom cascade>
                {membershipPoints.map((item, i) => (
                  <Typography sx={{ mt: 1 }} className={classes.point}>
                    <b>{i + 1}.</b> {item}
                  </Typography>
                ))}
              </Slide>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{ p: 4 }}>
              <Card onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
                <img src={Img} width="100%" />
              </Card>
            </Box>
          </Grid>
        </Grid>
        <Lightbox
          plugins={[Download, Fullscreen, Share, Zoom]}
          open={open}
          close={() => setOpen(false)}
          slides={[{ src: Img }]}
        />
      </Container>
    </Box>
  );
};

export default Articles;
