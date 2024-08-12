import "./App.css";
import Events from "./Components/Events/Events";
import Hero from "./Components/Hero/Hero";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Navbar/Navbar";
import Reservations from "./Components/Reservations/Reservations";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
      <Reservations />
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
