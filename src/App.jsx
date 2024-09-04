import "./App.css";
import Resident from "./Components/Resident/Resident";
import Hero from "./Components/Hero/Hero";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Navbar/Navbar";
import Special from "./Components/Special/Special";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import gallery from "./pages/gallery";
import events from "./pages/events";

function App() {
  return (
    
    <>
      <Navbar />
      <Hero />
      <Resident />
      <Special />
      <about />
      <Menu />
      
      <footer className="Footer">
        <div className="Contact Us">
          <p>website: www.edelweissbiergarten.com</p>
          <p>Facebook: Edelweiss Biergarten</p>
          <p> Phone: 602-404-5919</p>
        </div>
      </footer>
    </>
  );
}

export default App;
