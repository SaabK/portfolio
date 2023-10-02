import { navItems } from "../data/data";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {navItems.map((item, index) => (
          <li className="nav-link" key={index}>
            <a href={item.href}>
              <img src={item.image} alt={item.name} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
