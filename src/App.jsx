import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import HostEvent from "./pages/HostEvent";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hostEvent" element={<HostEvent />} />
      </Routes>

      <About />
    </>
  );
}

export default App;
