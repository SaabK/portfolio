import { IProject } from "../types";

function ProjectCard({ project }: IProject) {
  return (
    <div className="project-card">
      <div className="project-image">
        <a href={project.href}>
          <img src={project.image} alt={project.name} />
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
    </div>
  );
}

export default ProjectCard;
