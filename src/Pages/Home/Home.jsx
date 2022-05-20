import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home-page">
      <div className="container">
        <header>
          <div className="logo">LOGO</div>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#home-page">
                  <button className="nav-button">Home</button>
                </a>
              </li>
              <li>
                <a href="#about-me-page">
                  <button className="nav-button">About Me</button>
                </a>
              </li>
              <li>
                <a href="#skills-page">
                  <button className="nav-button">Skills</button>
                </a>
              </li>
              <li>
                <a href="#contact-me-page">
                  <button className="nav-button">Contact Me</button>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="intro">
          <div className="little-about">
            <h1 className="name">
              I'm <span className="black-text">Ali.</span>
            </h1>
            <h2 className="profession">
              <span className="black-text">A</span> Professional
            </h2>
            <h2 className="profession-name">Web Developer</h2>
          </div>
          <div className="home-image">
            <img src={require("../../Images/image.png")} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
