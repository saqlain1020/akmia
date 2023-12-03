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
        <Grid alignItems={"flex-start"} justifyContent={"center"} container sx={{ mt: 2 }} spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
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
          </Grid>{" "}
          <Grid item xs={12} sm={12} md={4}>
            <Box className="center">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fakmia.org.pk&tabs=timeline%2Cevents%2Cmessages&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=689938818617474"
                width="340"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box className="center">
              <iframe
                scrolling="no"
                frameBorder="0"
                height="500"
                src="https://syndication.twitter.com/srv/timeline-profile/screen-name/Akmiamarble?dnt=true&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&lang=en&limit=4&origin=https%3A%2F%2Fiframely.net%2FdA6St3h%3Fapp%3D1%26demo%3D1&sessionId=095a908f1e360ec84d4df6a3751f00519357f687&showHeader=true&showReplies=false&siteScreenName=Twitter&transparent=false&widgetsVersion=01917f4d1d4cb%3A1696883169554"
              ></iframe>
            </Box>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={4}>
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
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
