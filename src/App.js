import "./App.css";
import Navbar from "./components/Navbar";
import HeroContainer from "./HeroContainer";
import MenuGrid from "./components/MenuGrid";
import Events from "./components/Events";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </BrowserRouter>
      <HeroContainer />
      <MenuGrid />
      <Events />

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
