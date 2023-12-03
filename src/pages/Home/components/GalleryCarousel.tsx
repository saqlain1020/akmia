import React, { useState } from "react";
import { makeStyles } from "src/utils/makeStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import pics from "src/config/pics";
import Lightbox, { ControllerRef } from "yet-another-react-lightbox";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Container, Typography } from "@mui/material";
import { Fonts } from "src/utils";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Share from "yet-another-react-lightbox/plugins/share";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";

const useStyles = makeStyles()((theme) => ({
  heading: {
    position: "relative",
    margin: "auto",
    color: "white",
    transition: "all 100ms ease-in-out",
    width: "max-content",
    fontWeight: 800,
    fontFamily: Fonts.Monteserrat,
    textShadow: "0px 5px 10px rgba(0,0,0,0.6)",
    cursor: "default",
    zIndex: 1,
    // margin: "auto",
    "&::before": {
      content: "''",
      boxShadow: "0px 5px 10px rgba(0,0,0,0.6)",

      transition: "all 100ms ease-in-out",
      bottom: -5,
      left: 0,
      position: "absolute",
      width: "100%",
      height: 4,
      background: "white",
      zIndex: -1,
    },
    "&:hover": {
      color: theme.palette.primary.main,
      textShadow: "0px 0px 0px rgba(0,0,0,0.6)",
      "&::before": {
        boxShadow: "0px 0px 0px rgba(0,0,0,0.6)",
        height: "100%",
      },
    },
  },
  image: {
    height: 300,
    objectFit: "contain",
    background: "black",
    cursor: "pointer",
    width: "100%",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
    borderRadius: 5,
  },
}));

const GalleryCarousel = () => {
  const { classes } = useStyles();
  const ref = React.useRef<ControllerRef>(null);
  const [index, setIndex] = React.useState(-1);

  const handleImageClick = (index: number) => {
    setIndex(index);
  };

  return (
    <Box sx={(theme) => ({ background: theme.palette.primary.main, py: 4 })}>
      <Typography variant="h3" className={classes.heading}>
        Gallery
      </Typography>
      <Container maxWidth="lg" sx={{ mt: 2 }}>
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
          {pics["1"].map((item, i) => (
            <SwiperSlide key={i}>
              <img onClick={() => handleImageClick(i)} src={item} className={classes.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Lightbox
        controller={{ ref }}
        index={index}
        plugins={[Download, Fullscreen, Share, Slideshow, Thumbnails, Zoom]}
        open={index >= 0}
        close={() => setIndex(-1)}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
        slides={pics["1"].map((ele) => ({ src: ele }))}
      />
    </Box>
  );
};

export default GalleryCarousel;
