import { Box, Container, Card, Typography, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Fonts } from "src/utils";
import { makeStyles } from "src/utils/makeStyles";
import LightSpeed from "react-reveal/LightSpeed";
import { Link } from "react-router-dom";
import peoples from "src/config/peoples";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const useStyles = makeStyles()((theme) => ({
  root: {
    "& .swiper-button-next,.swiper-button-prev": {
      color: "black !important",
    },
    "& .swiper-pagination-bullet": {
      backgroundColor: "black !important",
    },
  },
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
    <Box id="executives" sx={{ background: "#f2f3f5" }} className={classes.root}>
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
        <Swiper
          slidesPerView={1}
          autoHeight
          // centeredSlides={true}
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {peoples.map((item, i) => (
            <SwiperSlide key={i}>
              <Link to={`/person/${item.tag}`}>
                <Card elevation={1} sx={{ mb: 3 }}>
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
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
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
        </Grid> */}
      </Container>
    </Box>
  );
};

export default Peoples;
