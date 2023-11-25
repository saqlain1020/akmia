import { Masonry } from "@mui/lab";
import { Box, Container, Typography } from "@mui/material";
import { Fonts } from "src/utils";
import { makeStyles } from "src/utils/makeStyles";
import Fade from "react-reveal/Fade";
import i1 from "src/assets/images/gallery/i (1).jpeg";
import i2 from "src/assets/images/gallery/i (2).jpeg";
import i3 from "src/assets/images/gallery/i (3).jpeg";
import i4 from "src/assets/images/gallery/i (4).jpeg";
import i5 from "src/assets/images/gallery/i (5).jpeg";
import i6 from "src/assets/images/gallery/i (6).jpeg";
import i7 from "src/assets/images/gallery/i (7).jpeg";
import i8 from "src/assets/images/gallery/i (8).jpeg";
import i9 from "src/assets/images/gallery/i (9).jpeg";
import i10 from "src/assets/images/gallery/i (10).jpeg";
import i11 from "src/assets/images/gallery/i (11).jpeg";
import i12 from "src/assets/images/gallery/i (12).jpeg";
import i13 from "src/assets/images/gallery/i (13).jpeg";
import i14 from "src/assets/images/gallery/i (14).jpeg";
import i15 from "src/assets/images/gallery/i (15).jpeg";
import i16 from "src/assets/images/gallery/i (16).jpeg";
import i17 from "src/assets/images/gallery/i (17).jpeg";
import i18 from "src/assets/images/gallery/i (18).jpeg";
import i19 from "src/assets/images/gallery/i (19).jpeg";
import i20 from "src/assets/images/gallery/i (20).jpeg";
import i21 from "src/assets/images/gallery/i (21).jpeg";
import i22 from "src/assets/images/gallery/i (22).jpeg";
import i23 from "src/assets/images/gallery/i (23).jpeg";
import i24 from "src/assets/images/gallery/i (24).jpeg";
import i25 from "src/assets/images/gallery/i (25).jpeg";
import i26 from "src/assets/images/gallery/i (26).jpeg";
import i27 from "src/assets/images/gallery/i (27).jpeg";
import i28 from "src/assets/images/gallery/i (28).jpeg";
import i29 from "src/assets/images/gallery/i (29).jpeg";
import i30 from "src/assets/images/gallery/i (30).jpeg";
import i31 from "src/assets/images/gallery/i (31).jpeg";
import i32 from "src/assets/images/gallery/i (32).jpeg";
import i33 from "src/assets/images/gallery/i (33).jpeg";
import i34 from "src/assets/images/gallery/i (34).jpeg";
import i35 from "src/assets/images/gallery/i (35).jpeg";
import i36 from "src/assets/images/gallery/i (36).jpeg";
import i37 from "src/assets/images/gallery/i (37).jpeg";
import i38 from "src/assets/images/gallery/i (38).jpeg";
import i39 from "src/assets/images/gallery/i (39).jpeg";
import i40 from "src/assets/images/gallery/i (40).jpeg";

const images = [
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i11,
  i12,
  i13,
  i14,
  i15,
  i16,
  i17,
  i18,
  i19,
  i20,
  i21,
  i22,
  i23,
  i24,
  i25,
  i26,
  i27,
  i28,
  i29,
  i30,
  i31,
  i32,
  i33,
  i34,
  i35,
  i36,
  i37,
  i38,
  i39,
  i40,
];

const useStyles = makeStyles()((theme) => ({
  root: {},
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
  imageWrapper: {
    width: "100%",
    display: "flex",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
    position: "relative",
    "& img": {
      display: "flex",
      objectFit: "cover",
      objectPosition: "top",
      borderRadius: 5,
      transition: "all 200ms ease-in-out",
    },
    "&:hover": {
      "& > div > img": {
        transform: "scale(1.2)",
      },
    },
  },
  blurImage: {
    position: "absolute",
    borderRadius: 5,
    filter: "blur(12px)",
    top: 12,
    opacity: 0.5,
    left: 0,
    zIndex: -1,
  },
}));

const data = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
  },
];

const Gallery = () => {
  const { classes } = useStyles();

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography
          className={classes.heading}
          variant="h3"
          align="center"
          fontFamily={Fonts.Monteserrat}
          fontWeight={800}
        >
          Gallery
        </Typography>
        <Box className="center" sx={{ mt: 4 }}>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={4}>
            {images.map((item, index) => (
              <div key={index}>
                <Fade bottom>
                  <div className={classes.imageWrapper}>
                    <img src={item} width="100%" height="100%" className={classes.blurImage} alt="" />
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                        borderRadius: 5,
                      }}
                    >
                      <img src={item} width="100%" height="100%" alt="" />
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </Masonry>
        </Box>
      </Container>
    </div>
  );
};

export default Gallery;
