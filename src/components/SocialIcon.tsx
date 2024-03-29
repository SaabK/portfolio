import { useState } from "react";
import { ISocialIcon } from "../types";

function SocialIcon({ social }: ISocialIcon) {
  const [hovered, setHovered] = useState<boolean>(false);

  const getBackgroundColor = () => {
    if (hovered) {
      return social.color;
    }
    return "#ffffff";
  };

  return (
    <>
      <li
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: getBackgroundColor(),
        }}
      >
        <a href={social.href} target="_blank">
          <img src={social.icon} alt={social.name} loading="lazy" />
        </a>
      </li>
    </>
  );
}

export default SocialIcon;
