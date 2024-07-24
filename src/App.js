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

      <footer className="Footer">How to contact </footer>
    </div>
  );
}

export default App;
