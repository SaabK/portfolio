import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <FontAwesomeIcon
                      className="icon"
                      icon={faGithub}
                      size="xl"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100073245827769"
                    target="_blank">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faFacebook}
                      size="xl"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ali-bin-naseer/"
                    target="_blank">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faLinkedin}
                      size="xl"
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
