import { makeStyles } from "src/utils/makeStyles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";

const useStyles = makeStyles()((_theme) => ({}));

const Whatsapp = () => {
  const {} = useStyles();
  return (
    <IconButton
      href="https://wa.me/+923139292654"
      target="_blank"
      sx={{
        background: "#25d366",
        color: "white",
        "&:hover": { background: "#25d366" },
        position: "fixed",
        bottom: 18,
        zIndex: 100,
        // left: 20,
        right: 20,
      }}
    >
      <WhatsAppIcon fontSize="large" />
    </IconButton>
  );
};

export default Whatsapp;
