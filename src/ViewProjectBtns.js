import React from "react";

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
