import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { IExperienceCard } from "../types";

function ExperienceCard({ experience }: IExperienceCard) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: "rgba(31, 31, 31, .85)" }}
      icon={
        <div className="flex justify-center items-center h-full">
          <img
            src={experience.icon}
            alt={experience.sub_heading}
            className="experience-icon"
          />
        </div>
      }
    >
      <h3>{experience.heading}</h3>
      <span className="text-xs">{experience.sub_heading}</span>
      <ul>
        {experience.experienceList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
