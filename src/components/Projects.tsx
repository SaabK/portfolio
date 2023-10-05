import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="bg-lightBlack">
      <div className="container">
        <span className="tagline">MY WORK</span>
        <h2>Projects</h2>
        <div className="my-projects">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
