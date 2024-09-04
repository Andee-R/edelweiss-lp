import "./App.css";
import Resident from "./Components/Resident/Resident";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Special from "./Components/Special/Special";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Resident />
      <Special />
      <AboutUs />
    </>
  );
}

export default App;
