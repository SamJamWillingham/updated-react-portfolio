import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header id="navbar">
      <h3 id="brand">SamJam</h3>
      <nav>
        <ul>
          <li>
            <a href="#welcome-section" class="nav-link">
              Hello
            </a>
          </li>
          <li>
            <a href="#technologies" class="nav-link">
              Technologies
            </a>
          </li>
          <li>
            <a href="#projects" class="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" class="nav-link">
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
