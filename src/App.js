import React from "react";
import "./App.css";
import Navbar from "./Navbar.js";
import Welcome from "./Welcome";
import HiddenPlaylist from "./HiddenPlaylist";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Certifications from "./Certifications";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <HiddenPlaylist />
      <Technologies />
      <Projects />
      <Certifications />
    </div>
  );
}

export default App;
