import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Resident from "./Components/Resident";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Resident />
      <About />
    </>
  );
}

export default App;
