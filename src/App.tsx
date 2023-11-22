import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="" />
      </Routes>
    </Box>
  );
}

export default App;

