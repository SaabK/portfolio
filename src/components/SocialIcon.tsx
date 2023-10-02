import { ISocialIcon } from "../types";

function SocialIcon({ social }: ISocialIcon) {
  return (
    <li>
      <a href={social.href}>
        <img src={social.icon} alt={social.name} />
      </a>
    </li>
  );
}

export default SocialIcon;
