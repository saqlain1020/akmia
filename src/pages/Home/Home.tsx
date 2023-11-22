import { FC } from "react";
import { makeStyles } from "../../utils/makeStyles";

import { Box, Container } from "@mui/material";

const useStyles = makeStyles()((theme) => ({
  root: {
    // height: "100%",
  },
}));

const Home: FC = () => {
  const { classes } = useStyles();
  return (
    <Box>
      <Container>container</Container>
      Home
    </Box>
  );
};

export default Home;
