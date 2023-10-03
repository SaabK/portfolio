import logo from "../assets/logo.svg";
import email from "../assets/icons/email.svg";

function Topbar() {
  return (
    <header className="topbar p-6 bg-black flex items-center justify-between">
      <img src={logo} />
      <span className="wordmark">
        Ali <span className="text-yellow">Bin Naseer</span>
      </span>
      <img src={email} alt="Let's chat" />
    </header>
  );
}

export default Topbar;
