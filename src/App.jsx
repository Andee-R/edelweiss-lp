import "./App.css";
import Resident from "./Components/Resident/Resident";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Special from "./Components/Special/Special";
import About from "./Components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
`//import { HashRouter, Route, Routes, Link } from "react-router-dom";``//import events from "./pages/events";``//import gallery from "./pages/gallery";`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Hero />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
      <Hero />
      <Resident />
      <Special />
      <About />
    </>
  );
}

export default App;
