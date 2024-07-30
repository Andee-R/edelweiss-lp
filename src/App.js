import "./App.css";
import Navbar from "./Navbar";
import HeroContainer from "./HeroContainer";
import MenuGrid from "./MenuGrid";
import Events from "./Events";

function App() {
  return (
    <div className="App">
      <Navbar />
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
    </div>
  );
}

export default App;
