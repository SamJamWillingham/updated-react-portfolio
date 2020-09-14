import React from "react";
import "./App.css";
import Navbar from "./Navbar.js";
import Welcome from "./Welcome";
import Technologies from "./Technologies";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
