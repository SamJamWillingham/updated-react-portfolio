import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <h3>Projects</h3>

      <div class="projects-grid">
        <nav id="projectsbar">
          <a
            href="https://gifted-tereshkova-4aa25e.netlify.app/"
            className="project-tile"
            target="_blank"
          >
            <button>Weather App (Vanilla JS)</button>
          </a>

          <a
            href="https://ecstatic-leakey-e874b0.netlify.app/"
            className="project-tile"
            target="_blank"
          >
            <button>Tarot Card Drawer</button>
          </a>
          <a
            href="https://codepen.io/SamJamWillingham/full/YzqLBNO"
            className="project-tile"
            target="_blank"
          >
            <button>Technical Documentation Webpage</button>
          </a>
        </nav>
      </div>
    </section>
  );
}
