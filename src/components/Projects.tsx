import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const animate = {
    hidden: {
      x: -300,
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
    <section id="projects" className="bg-lightBlack">
      <div className="container">
        <motion.span
          variants={animate}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="tagline">MY WORK</span>
          <h2>Projects</h2>
        </motion.span>
        <div className="my-projects">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} delay={index * 0.25} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
