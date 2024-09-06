import { Route, Routes } from "react-router-dom";
import "./App.css";
import Resident from "./Components/Resident/Resident";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Home />
      <Resident />
      <About />
    </>
  );
}

export default App;
