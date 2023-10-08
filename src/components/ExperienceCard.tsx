import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { IExperienceCard } from "../types";

function ExperienceCard({ experience }: IExperienceCard) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#0a0a0a", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #0a0a0a" }}
      iconStyle={{
        background: "rgba(31, 31, 31, .85)",
      }}
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
      <ul className="px-5 pt-3 gap-1 flex flex-col justify-between" id="points">
        {experience.experienceList.map((item, index) => (
          <li key={index} className="text-sm body">
            {item}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
