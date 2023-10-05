import { navItems } from "../data/data";
import { useEffect, useState } from "react";

function Navbar() {
  const [current, setCurrent] = useState("");
  const sections = document.querySelectorAll<HTMLElement>(
    "#home, #about, #projects, #contact"
  );
  const navLi = document.querySelectorAll(".nav-link");

  // Logic for changing active nav element on scroll
  // TODO: FIX THIS NAVIGATION BY WATCHING A TUTORIAL
  function navigate() {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 70) {
        setCurrent(section.getAttribute("id")!);
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  }

  window.onscroll = () => {
    navigate();
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
