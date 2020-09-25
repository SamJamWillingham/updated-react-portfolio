import React from "react";
import "./Projects.css";
import "./App.css";

export default function Projects() {
  return (
    <div id="projects">
      <h3>Projects</h3>
      <div className="project-flex">
        <div className="card">
          <i class="fas fa-cloud-sun"></i>
          <h4>Vanilla JS Weather App</h4>
          <p>
            I created this app during the SheCodes Front End Development
            workshop. It uses vanilla javascript to call an API for current
            weather data. Styling was done with CSS and Bootstrap.
          </p>
          <a
            href="https://gifted-tereshkova-4aa25e.netlify.app/"
            className="cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>
        <div className="card">
          <i class="fas fa-hand-sparkles"></i>
          <h4>Tarot Card Drawer</h4>
          <p>
            I created this small widget as a side project for fun to practice
            HTML, CSS, and JS.
          </p>
          <a
            href="https://ecstatic-leakey-e874b0.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>
        <div className="card">
          <i class="fab fa-react projects"></i>
          <h4>React Weather App</h4>
          <p>
            I created this app during the SheCodes React Development workshop.
            It uses React and JSX to call an API for current weather data.
            Animated styling was done with CSS and React-Bootstrap.
          </p>
          <a
            href="https://clever-hugle-333d69.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
}
