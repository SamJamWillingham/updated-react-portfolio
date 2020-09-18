import React from "react";
import "./Technologies.css";

export default function Technologies() {
  return (
    <section id="technologies" className="main-wrapper">
      <h3>Technologies</h3>

      <div className="badge yellow">
        <div className="circle">
          <i className="fab fa-html5" aria-hidden="false"></i>
        </div>

        <div className="ribbon">HTML</div>
      </div>

      <div className="badge blue-dark">
        <div className="circle">
          <i className="fab fa-css3-alt" aria-hidden="false"></i>
        </div>
        <div className="ribbon">CSS3</div>
      </div>

      <div className="badge orange">
        <div className="circle">
          <i className="fab fa-js-square" aria-hidden="false"></i>
        </div>
        <div className="ribbon">ES6</div>
      </div>

      <div className="badge teal">
        <div className="circle">
          <i className="fas fa-cog" aria-hidden="false"></i>
        </div>
        <div className="ribbon">API</div>
      </div>

      <div className="badge purple">
        <div className="circle">
          <i className="fab fa-bootstrap" aria-hidden="false"></i>
        </div>
        <div className="ribbon">Bootstrap</div>
      </div>

      <div className="badge blue">
        <div className="circle">
          <i className="fab fa-react" aria-hidden="false"></i>
        </div>
        <div className="ribbon">React</div>
      </div>

      <div className="badge silver">
        <div className="circle">
          <i className="fas fa-code" aria-hidden="false"></i>
        </div>
        <div className="ribbon">VS Code</div>
      </div>

      <div className="badge red">
        <div className="circle">
          <i className="fab fa-codepen" aria-hidden="false"></i>
        </div>
        <div className="ribbon">Code Pen</div>
      </div>

      <div className="badge pink">
        <div className="circle">
          <i className="fab fa-github" aria-hidden="false"></i>
        </div>
        <div className="ribbon">GitHub</div>
      </div>
    </section>
  );
}
