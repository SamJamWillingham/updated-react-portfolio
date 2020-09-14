import React from "react";
import "./Welcome.css";

export default function Welcome() {
  return (
    <section id="welcome-section">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGbsqEpJcP2oA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=H6vTZMVntY6X1oRVNacPKGbhZxFguygFZX9cxum0Vuo"
        width="200"
        alt="Sam"
        class="profile"
      />
      <h1>Sam Willingham</h1>
      <h3>Front End Web Developer</h3>
    </section>
  );
}
