import React from "react";
import "./Projects.css";
import "./App.css";
import ViewProjectBtns from "./ViewProjectBtns";

export default function Projects() {
  return (
    <div id="projects">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <h3>Projects</h3>
      <div className="project-flex">
        <div className="card">
          <i className="fas fa-cloud-sun"></i>
          <h4>Vanilla JS Weather App</h4>
          <p>
            I created this app during the SheCodes Front End Development
            workshop. It uses vanilla javascript to call an OpenWeather API for
            current weather data. Styling was done with CSS and Bootstrap.
          </p>
          <ViewProjectBtns
            link="https://gifted-tereshkova-4aa25e.netlify.app/"
            buttonName="App"
          />
          <ViewProjectBtns
            link="https://github.com/SamJamWillingham/Weather-App-SheCodesPlus"
            buttonName="Code"
          />
        </div>
        <div className="card">
          <i className="fas fa-hand-sparkles"></i>
          <h4>Tarot Card Drawer</h4>
          <p>
            I created this small widget as a side project for fun to practice
            HTML, CSS, and JS. It uses vanilla javascript to select a random
            card and show you an interpretation of the cards meaning and it's
            advice.
          </p>
          <ViewProjectBtns
            link="https://ecstatic-leakey-e874b0.netlify.app/"
            buttonName="App"
          />
          <ViewProjectBtns
            link="https://github.com/SamJamWillingham/Tarot-Card-Drawer"
            buttonName="Code"
          />
        </div>
        <div className="card">
          <i className="fab fa-react projects"></i>
          <h4>React Weather App</h4>
          <p>
            I created this app during the SheCodes React Development workshop.
            It uses React and JSX to call an API for current weather data.
            Animated styling was done with CSS and React-Bootstrap.
          </p>
          <ViewProjectBtns
            link="https://clever-hugle-333d69.netlify.app/"
            buttonName="App"
          />
          <ViewProjectBtns
            link="https://github.com/SamJamWillingham/react-weather-app"
            buttonName="Code"
          />
        </div>
        <div className="card">
          <i class="fas fa-om"></i>
          <h4>Meditation App</h4>
          <p>
            I created this Meditation timer with Dev Ed. It uses vanilla
            JavaScript to animate a timer, count down different set amounts of
            time, and change the audio track between two different ambient
            sounds.
          </p>
          <ViewProjectBtns
            link="https://lucid-clarke-3b55e8.netlify.app/"
            buttonName="App"
          />
          <ViewProjectBtns
            link="https://github.com/SamJamWillingham/Meditation-App"
            buttonName="Code"
          />
        </div>
      </div>
      <ViewProjectBtns
        link="https://dazzling-perlman-5655fe.netlify.app/"
        buttonName="Want to see more projects? Check out my progress on the Javascript
            30 Day Challenge from Wes Bos!"
      />
    </div>
  );
}
