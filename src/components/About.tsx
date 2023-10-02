import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../data/data";
import ExperienceCard from "./ExperienceCard";
import Skills from "./Skills";

function About() {
  return (
    <section id="about" className="bg-overlay to-bottom relative">
      <h2>About Me</h2>

      <VerticalTimeline lineColor="#ebff00">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>

      <Skills />
    </section>
  );
}

export default About;
