import { IProject } from "../types";
import { motion } from "framer-motion";

function ProjectCard({ project, delay }: IProject) {
  const animate = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
  return (
    <motion.div
      className="project-card"
      variants={animate}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="project-image">
        <a href={project.href}>
          <img src={project.image} alt={project.name} loading="lazy" />
        </a>
      </div>
      <div className="project-content">
        <h3>
          <a href={project.href}>{project.name}</a>
        </h3>
        <p className="text-sm body">{project.description}</p>
        <ul className="tags">
          {project.tags.map((tag, index) => (
            <li key={index} className="text-xs">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
