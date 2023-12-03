import { Masonry } from "@mui/lab";
import { Box, Container, MenuItem, Select, Typography } from "@mui/material";
import { Fonts } from "src/utils";
import { makeStyles } from "src/utils/makeStyles";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import pics from "src/config/pics";

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

const Gallery = () => {
  const { classes } = useStyles();
  const [select, setSelect] = useState("2");

  return (
    <div id="gallery">
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography
          className={classes.heading}
          variant="h3"
          align="center"
          fontFamily={Fonts.Monteserrat}
          fontWeight={800}
        >
          Marbles
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 2, mt: 2 }}>
          <Select fullWidth sx={{ ml: "auto" }} value={select} onChange={(e) => setSelect(e.target.value)}>
            <MenuItem value={"2"}>Machinery</MenuItem>
            <MenuItem value={"3"}>Venetes</MenuItem>
            <MenuItem value={"4"}>Flooring</MenuItem>
            <MenuItem value={"5"}>Working</MenuItem>
          </Select>
        </Box>
        <Box className="center" sx={{ mt: 4 }}>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={4}>
            {/* @ts-ignore */}
            {pics[select]?.map((item, index) => (
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
