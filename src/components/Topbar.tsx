import logo from "../assets/logo.svg";
import email from "../assets/icons/email.svg";

function Topbar() {
  return (
    <header className="topbar p-6 bg-black">
      <img src={logo} />
      <p className="wordmark">
        Ali <span className="text-yellow">Bin Naseer</span>
      </p>
      <img src={email} alt="Let's chat" />
    </header>
  );
}

export default Topbar;
