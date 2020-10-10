import React from "react";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div id="welcome-section" className="flexbox-container">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="profile flexbox-item flexbox-item-2">
        <div id="name">
          <h1>Sam Willingham</h1>
          <div id="title-location">
            <h3>
              Front End Web Developer
            </h3>
            <h3>Charlotte, NC, US</h3>
          </div>
        </div>

        <div id="button-container">
        <a
          href="https://www.linkedin.com/in/samantha-willingham-79576a1a8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social">
            <i className="fab fa-linkedin-in"></i>
          </button>
        </a>

        <a
          href="https://github.com/SamJamWillingham"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social">
            <i className="fab fa-github"></i>
          </button>
        </a>

        <a
          href="https://www.shecodes.io/students/174-sam-fields"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social">
            <i className="fas fa-laptop-code"></i>
          </button>
        </a>
        <a
          href="https://www.freecodecamp.org/samjamwillingham"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social">
            <i className="fab fa-free-code-camp"></i>
          </button>
        </a>
        </div>

      </div>
    </div>
  );
}
