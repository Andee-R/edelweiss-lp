import "./App.css";
import Navbar from "./Navbar";
import HeroContainer from "./HeroContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroContainer />
      <div className="ContainerGrid">
        <div className="row">
          <div className="col-3">
            <img src="#"></img>
            <h4>Menu</h4>
          </div>
          <div className="col-3">
            <img src="#"></img>
            <h4>Wine & Cocktails</h4>
          </div>
          <div className="col-3">
            <img src="#"></img>
            <h4>Reservations</h4>
          </div>

          <div className="col-3">
            <img src="#"></img>
            <h4>Gallery</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src="#"></img>
            <h4>Larry Roberts</h4>
            <p>Larry is our resident Accordion player!</p>
          </div>

          <div className="col-6">
            <img src="#"></img>
            <h4>Events</h4>
          </div>
        </div>
      </div>
      <footer className="Footer">Where to find us </footer>
    </div>
  );
}

export default App;
