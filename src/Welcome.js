import React from "react";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div id="welcome-section" className="flexbox-container">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="profile flexbox-item flexbox-item-1">
        <img
          src="https://lh3.googleusercontent.com/pw/ACtC-3e9frAHTo_pOrKK-oAAkhVKC-9aIsCyunEuZ_DJm1nzHDq6b6GOy5vWdeZINZxo0eyESSCVFVGgZij0D-xqP-iDSte8KnByLMUAQo1fQ7KSJ3NnY_lVbsP-qwknrlOQgXIxIzpd_k7Ef3l-_h8bkHta=w714-h643-no?authuser=0"
          alt="Sam"
          className="profile"
        />
      </div>

      <div className="profile flexbox-item flexbox-item-2">
        <h1>Sam Willingham</h1>
        <h3>
          Front End Web Developer
          <br /> Charlotte, NC, US
        </h3>

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
  );
}
