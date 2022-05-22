import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFileWaveform } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Form from "../../Components/Form";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-section">
          <div className="contact-me">
            <h1>Contact me</h1>
            <div className="contact-info">
              <div className="email">
                <h2>Email:</h2>
                <p>ContactIbnNaseer@gmail.com</p>
              </div>
              <div className="insta">
                <h2>Instagram:</h2>
                <p>@BakwasBoye</p>
              </div>
              <div className="location">
                <h1>Based in</h1>
                <p>Khanewal,</p>
                <p>Pakistan</p>
              </div>
            </div>
            <div className="icons">
              <ul>
                <li>
                  <a href="https://github.com/SaabK" target="_blank">
                    {/* <img
                      className="icon"
                      src={require("../../Images/icons/Github Icon Transparent Not Filled Black.png")}
                      alt="github profile"
                    /> */}
                    <FontAwesomeIcon
                      className="icon"
                      icon={faGithub}
                      size="2x"
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
                      size="2x"
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
                      size="2x"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="form-background">
            <Form />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
