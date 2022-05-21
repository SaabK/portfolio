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
