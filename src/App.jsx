import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

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
