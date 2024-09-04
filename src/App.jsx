import "./App.css";
import Resident from "./Components/Resident/Resident";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Special from "./Components/Special/Special";
import AboutUs from "./Components/AboutUs/AboutUs";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Special />
      <Resident />
      <Gallery />
      <AboutUs />
    </>
  );
}

export default App;
