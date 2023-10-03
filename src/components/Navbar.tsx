import { navItems } from "../data/data";
import { useState } from "react";

function Navbar() {
  const [current, setCurrent] = useState("");
  const sections = document.querySelectorAll<HTMLElement>(
    "#home, #about, #projects, #contact"
  );
  const navLi = document.querySelectorAll(".nav-link");

  // Logic for changing active nav element on scroll
  window.onscroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 120) {
        setCurrent(section.getAttribute("id")!);
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };

  return (
    <nav className="navbar">
      <ul>
        {navItems.map((item, index) => (
          <li className={`nav-link ${item.name.toLowerCase()}`} key={index}>
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
