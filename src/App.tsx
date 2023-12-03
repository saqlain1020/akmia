import { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Person from "./pages/Person/Person";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="" />
        <Route element={<Person />} path="/person/:name" />
      </Routes>
    </Box>
  );
}

export default App;

