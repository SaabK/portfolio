import { IProject } from "../types";

function ProjectCard({ project }: IProject) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
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
