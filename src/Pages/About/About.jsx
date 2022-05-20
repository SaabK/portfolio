import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about-me-page">
      <div className="container">
        <div className="sub-container">
          <div className="my-image"></div>
          <section className="about-me">
            <h2 className="heading">About me</h2>
            <h3 className="sub-heading">ali bin naseer - developer</h3>
            <article className="about-me-para">
              I am a YouTuber, Web Developer & UI/UX Designer. I am 15 years
              old. I live in Pakistan. I am working from 2020. I also freelance
              at <strong>Fiverr.</strong> I am on the way to become a{" "}
              <strong>full-stack</strong> web developer. I also have a YouTube
              Channel named <strong>BakwasBoy.</strong> I upload educational
              videos mixed with entertainment. I love creating videos and
              content.
            </article>
            <div className="icons">
              <ul>
                <li>
                  <a href="https://github.com/SaabK" target="_blank">
                    <img
                      className="icon"
                      src={require("../../Images/icons/Github Icon Transparent Not Filled Black.png")}
                      alt="github profile"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100073245827769"
                    target="_blank">
                    <img
                      className="icon"
                      src={require("../../Images/icons/Facebook Icon Colorful.png")}
                      alt="facebook profile"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ali-bin-naseer/"
                    target="_blank">
                    <img
                      className="icon"
                      src={require("../../Images/icons/LinkedIn icon transparent not filled blue.png")}
                      alt="LinkedIn Profile"
                    />
                  </a>
                </li>
                {/* <!-- TODO: Make a modal for this, Coming Soon! --> */}
                <li>
                  <a href="#">
                    <img
                      className="icon"
                      src={require("../../Images/icons/Fiverr icon transparent filled green.png")}
                      alt="Fiverr Profile"
                      target="_blank"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
