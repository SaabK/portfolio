import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <span className="text-xs">my work</span>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </section>
  );
}

export default Projects;
