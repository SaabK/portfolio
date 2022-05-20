import React from "react";
import "./Skills.scss";

function Skills() {
  return (
    <div className="skills-page">
      <div className="container">
        <section className="skill-section">
          <h1>skills</h1>
          <div className="sub-container">
            <article className="skills-para">
              I've learned web development from <strong>freeCodeCamp</strong>,
              And Web Design from <strong>DesignCourse.</strong>
              <p>Here's what I can do:</p>
              <ul className="skills-list">
                <div>
                  <li className="skill-left skill">Response Design</li>
                  <li className="skill-left skill">Mobile UI</li>
                  <li className="skill-left skill">Video Editing</li>
                  <li className="skill-left skill">Web Design</li>
                </div>
                <div>
                  <li className="skill-right skill">Color Selection</li>
                  <li className="skill-right skill">Typography</li>
                  <li className="skill-right skill">Logical-Approach</li>
                  <li className="skill-right skill">Problem Solving</li>
                </div>
              </ul>
            </article>
            <div className="skills-image">
              <img src={require("../../Images/Skills Tab.png")} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
