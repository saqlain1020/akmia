import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "src/utils/makeStyles";
import { IconButton } from "@mui/material";

const useStyles = makeStyles()((theme) => ({
  root: {
    borderRadius: 4,
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    position: "fixed",
    bottom: 80,
    right: 24,
    zIndex: 100,
  },
}));

const ScrollDown = () => {
  const { classes } = useStyles();
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  };

  useEffect(() => {
    const fn = () => {
      if (window.scrollY > 0) {
        setVisible(true);
      } else setVisible(false);
    };
    window.addEventListener("scroll", fn);
    return () => {
      window.removeEventListener("scroll", fn);
    };
  }, []);
  return (
    <IconButton
      className={classes.root}
      sx={{
        borderRadius: 0,
        display: visible ? "initial" : "none",
        height: 45,
        width: 45,
        background: "rgba(255,255,255,0)",
        backdropFilter: "blur(5px)",
      }}
      onClick={handleClick}
    >
      <ExpandMoreIcon sx={{ transform: "rotate(180deg)" }} />
    </IconButton>
  );
};

export default ScrollDown;
