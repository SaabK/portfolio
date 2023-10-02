import { IProject } from "../types";

function ProjectCard({ project }: IProject) {
  return (
    <div>
      <img src={project.image} alt={project.name} />
      <div>
        <h3>{project.name}</h3>
        <p className="text-sm">{project.description}</p>
        <ul>
          {project.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
