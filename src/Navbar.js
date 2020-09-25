import React from "react";
import "./Navbar.css";
import "./App.css";

export default function Navbar() {
  return (
    <header id="navbar">
      <h3 id="brand">SamJam</h3>
      <nav>
        <ul>
          <li>
            <a href="#welcome-section" className="nav-link hello">
              Hello
            </a>
          </li>
          <li>
            <a href="#technologies" className="nav-link tech">
              Technologies
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" className="nav-link certs">
              Certifications
            </a>
          </li>
          <li>
            <a href="mailto:SamanthaLF8@gmail.com">
              <button>Contact</button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
