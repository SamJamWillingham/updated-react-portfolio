import React from "react";
import "./Projects.css";
import "./App.css";
import "./BackgroundAnimation.css";
import ViewProjectBtns from "./ViewProjectBtns";

export default function Projects() {
  return (
    <div id="projects">
      <div className="bg2">
        <div id="projects-container">
          <h2>Projects</h2>
          <div className="project-flex">
            <div className="card">
              <i className="fas fa-cloud-sun"></i>
              <h3>Vanilla JS Weather App</h3>
              <div id="project-button-container">
                <ViewProjectBtns
                  link="https://gifted-tereshkova-4aa25e.netlify.app/"
                  buttonName="app"
                />
                <ViewProjectBtns
                  link="https://github.com/SamJamWillingham/Weather-App-SheCodesPlus"
                  buttonName="code"
                />
              </div>
            </div>
            <div className="card">
              <i className="fas fa-hand-sparkles"></i>
              <h3>Tarot Card Drawer</h3>
              <div id="project-button-container">
                <ViewProjectBtns
                  link="https://ecstatic-leakey-e874b0.netlify.app/"
                  buttonName="app"
                />
                <ViewProjectBtns
                  link="https://github.com/SamJamWillingham/Tarot-Card-Drawer"
                  buttonName="code"
                />
              </div>
            </div>
            <div className="card">
              <i className="fab fa-react projects"></i>
              <h3>React Weather App</h3>
              <div id="project-button-container">
                <ViewProjectBtns
                  link="https://clever-hugle-333d69.netlify.app/"
                  buttonName="app"
                />
                <ViewProjectBtns
                  link="https://github.com/SamJamWillingham/react-weather-app"
                  buttonName="code"
                />
              </div>
            </div>
            <div className="card">
              <i className="fas fa-om"></i>
              <h3>Meditation App</h3>
              <div id="project-button-container">
                <ViewProjectBtns
                  link="https://lucid-clarke-3b55e8.netlify.app/"
                  buttonName="app"
                />
                <ViewProjectBtns
                  link="https://github.com/SamJamWillingham/Meditation-App"
                  buttonName="code"
                />
              </div>
            </div>
          </div>
          <ViewProjectBtns
            link="https://dazzling-perlman-5655fe.netlify.app/"
            buttonName="Want to see more projects? Check out my progress on the Javascript
              30 Day Challenge from Wes Bos!"
          />
        </div>
      </div>
    </div>
  );
}
