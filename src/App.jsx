import React from "react";
import "./App.css";
import "./css/About.css";
import "./css/Demo.css";
import "./css/Team.css";
import "./css/Footer.css";
import "./css/BackgroundEffects.css";
import Navbar from "./Components/Navbar.jsx";
import { Home } from "./Components/Home.jsx";
import { About } from "./Components/About.jsx";
import { Demo } from "./Components/Demo.jsx";
import { Team } from "./Components/Team.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      {/* Background effects container */}
      <div className="background-container">
        <div className="bg-effect-1"></div>
        <div className="bg-effect-2"></div>
      </div>

      <Navbar />
      <Home />
      <About />
      <Demo />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
