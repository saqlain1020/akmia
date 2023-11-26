import { Box, Container, Grid, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { makeStyles } from "src/utils/makeStyles";
import Lottie from "react-lottie";
import animationData from "src/assets/lottie/contact.json";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
const useStyles = makeStyles()((theme) => ({
  heading: {
    position: "relative",
    margin: "auto",
    transition: "all 100ms ease-in-out",
    width: "max-content",
    cursor: "default",
    fontWeight: 800,
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
const Contact = () => {
  const { classes } = useStyles();
  return (
    <Box id="contact" sx={{ background: "rgb(17 193 17 / 18%)", py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" className={classes.heading} sx={{ pt: 2 }}>
          Get in Touch
        </Typography>
        <Grid alignItems={"center"} justifyContent={"center"} container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <Typography sx={{ mt: 4 }} variant="h4" fontWeight={800}>
                Contact Us
              </Typography>
              <Typography className="center" sx={{ width: "fit-content", mt: 2 }}>
                <LocalPhoneIcon />
                &nbsp;&nbsp;+92-313-9292654
              </Typography>
              <Typography className="center" sx={{ width: "fit-content", mt: 1 }}>
                <LocalPhoneIcon />
                &nbsp;&nbsp;+92-300-2292654
              </Typography>

              <Typography
                className="center"
                sx={{ width: "fit-content", mt: 1 }}
                component="a"
                href="https://akmia.org.pk"
              >
                <LanguageIcon />
                &nbsp;&nbsp;https://akmia.org.pk
              </Typography>
              <Typography
                className="center"
                sx={{ width: "fit-content", mt: 1 }}
                component="a"
                href="mailto:info@akmia.org.pk"
              >
                <AlternateEmailIcon />
                &nbsp;&nbsp;info@akmia.org.pk
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              //   height={400}
              width={"100%"}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
