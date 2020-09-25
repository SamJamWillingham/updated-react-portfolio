import React from "react";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications">
      <h3>Certifications</h3>
      <a href="https://www.shecodes.io/certificates/cb0ef7f22d93dfdb629e6f97198482b4">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/students/certificates/000/008/403/original/result.png?1594837766"
          alt="Introduction to Coding Certificate"
          width={300}
          id="certImg"
        />
      </a>
      <a href="https://www.shecodes.io/certificates/1be2599ee6b555613e53f8e6a84b8328">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/students/certificates/000/009/110/original/result.png?1597756708"
          alt="Front End Development"
          width={300}
          id="certImg"
        />
      </a>
      <a href="https://www.shecodes.io/certificates/370d835ecda3fd24895ade35bcb679ed">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/students/certificates/000/011/119/original/result.png?1601044095"
          alt="React Development"
          width={300}
          id="certImg"
        />
      </a>
      <a href="https://www.freecodecamp.org/certification/samjamwillingham/responsive-web-design">
        <button>
          <i class="fab fa-free-code-camp"></i>
          view cetifications in freeCodeCamp
        </button>
      </a>
    </section>
  );
}
