import React from "react";

import "../styles/pages/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h4>Hello My Name is</h4>
        <h2>Beyza</h2>
        <div className="prompt">
          <p>I am a web developer enjoys learning and building things</p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ul className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>
              React,Redux,React Router, HTML5, CSS3, Bootstrap, Responsive
              Design,NPM
            </span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>NodeJS, ExpressJS, MongoDB, JavaScript,PostgresQL</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
