import { Box, Container, Typography } from "@mui/material";
import { Fonts } from "src/utils";
import { makeStyles } from "src/utils/makeStyles";
import vid from "src/assets/vids/interview1.mp4";
import vid2 from "src/assets/vids/interview2.mp4";
import vid3 from "src/assets/vids/interview3.mp4";
import vid4 from "src/assets/vids/vid3.mp4";
import Fade from "react-reveal/Fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const useStyles = makeStyles()((theme) => ({
  root: {
    // borderLeft: `10px solid ${theme.palette.primary.main}`,
    color: "black",
    transition: "all 300ms ease-in-out",
    // "&:hover": {
    //   background: theme.palette.primary.main,
    //   color: "white",
    // },
    [theme.breakpoints.down("md")]: {
      // background: theme.palette.primary.main,
      // color: "white",
      // borderLeft: 0,
    },
  },
  heading: {
    position: "relative",
    margin: "auto",
    transition: "all 100ms ease-in-out",
    width: "max-content",
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
  interviewText: {
    // color: theme.palette.primary.main,
    color: "white",
    textTransform: "capitalize",
    fontWeight: 600,
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    textAlign: "center",
    background: theme.palette.primary.main,
    padding: 16,
  },
}));

const Interview = () => {
  const { classes } = useStyles();
  return (
    <Box sx={{ pt: 6 }} className={classes.root}>
      <Typography variant="h3" fontWeight={800} fontFamily={Fonts.Monteserrat} className={classes.heading}>
        Interviews
      </Typography>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Fade bottom>
          <Swiper
            slidesPerView={1}
            autoHeight
            loop={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <Box
                component="video"
                src={vid4}
                controls
                width={"100%"}
                sx={{
                  borderRadius: 1,
                  boxShadow: "0px 10px 16px rgba(0,0,0,0.8)",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Box
                component="video"
                src={vid}
                controls
                width={"100%"}
                sx={{
                  borderRadius: 1,
                  boxShadow: "0px 10px 16px rgba(0,0,0,0.8)",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Box
                component="video"
                src={vid2}
                controls
                width={"100%"}
                sx={{
                  borderRadius: 1,
                  boxShadow: "0px 10px 16px rgba(0,0,0,0.8)",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <Typography variant="body1" className={classes.interviewText}>
                  The Sindh government is engaging with these capitalist individuals, leading to advantages for NATO
                  Marble Industries rather than benefiting the country. To enhance the industrial sector, the government
                  should establish collaborative ventures with both local industrialists and foreign investors,
                  fostering improvement with the involvement of local labor.
                </Typography>
                <Box
                  component="video"
                  src={vid3}
                  controls
                  width={"100%"}
                  sx={{
                    borderRadius: 1,
                    boxShadow: "0px 10px 16px rgba(0,0,0,0.8)",
                  }}
                />
              </Box>
            </SwiperSlide>
          </Swiper>
          {/* <Box
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
          /> */}
        </Fade>
      </Container>
    </Box>
  );
};

export default Interview;
