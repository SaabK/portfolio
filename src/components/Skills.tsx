import { skills } from "../data/data";

function Skills() {
  return (
    <section id="skills">
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <img src={skill.image} alt={skill.name} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
