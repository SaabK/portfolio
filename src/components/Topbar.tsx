import Logo from "../assets/logo.svg";
import email from "../assets/icons/email.svg";
import { Img } from "react-optimized-image";

function Topbar() {
  return (
    <header
      className="p-6 bg-black flex items-center justify-between"
      id="topbar"
    >
      <img src={Logo} className="logo" />
      <span className="wordmark">
        Ali <span className="text-yellow">Bin Naseer</span>
      </span>
      <a href="mailto:contactibnnaseer@gmail.com">
        <img src={email} alt="Let's chat" className="chat" />
      </a>
    </header>
  );
}

export default Topbar;
