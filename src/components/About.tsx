import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../data/data";
import ExperienceCard from "./ExperienceCard";
import Skills from "./Skills";
import { motion } from "framer-motion";

function About() {
  const animate = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
      },
    },
  };
  return (
    <section id="about" className="">
      <div className="container relative">
        <motion.h2
          variants={animate}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <VerticalTimeline lineColor="#ebff00" className="timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>

        <Skills />
      </div>
    </section>
  );
}

export default About;
