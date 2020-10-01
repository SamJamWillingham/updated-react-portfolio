import React from "react";
import "./Projects.css";
import "./App.css";

export default function ViewProjectBtns(props) {
  return (
    <a
      href={props.link}
      className="cta"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>{props.buttonName}</button>
    </a>
  );
}
