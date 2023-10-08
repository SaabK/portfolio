// import { navItems } from "../data/data";
// import { useEffect, useState } from "react";

// function Navbar() {
//   const sections = document.querySelectorAll<HTMLElement>(
//     "#home, #about, #projects, #contact"
//   );
//   const navLi = document.querySelectorAll(".nav-link");

//   useEffect(() => {
//     console.log(sections);
//     window.onscroll = () => {
//       sections.forEach((section) => {
//         console.log("hi");
//         let top = window.scrollY;
//         let offset = section.offsetTop - 120;
//         let height = section.offsetHeight;
//         let id = section.getAttribute("id");

//         if (top >= offset && top < offset + height) {
//           navLi.forEach((link) => {
//             link.classList.remove("active");

//             if (link.classList.contains(id!)) {
//               link.classList.add("active");
//               console.log(link);
//             }
//           });
//         }
//       });
//     };
//   }, [sections]);

//   return (
//     <nav className="navbar">
//       <ul>
//         {navItems.map((item, index) => (
//           <li className={`nav-link ${item.name.toLowerCase()}`} key={index}>
//             <a href={item.href}>
//               <img src={item.image} alt={item.name} />
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import { navItems } from "../data/data";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      navItems.forEach((item) => {
        const section: HTMLElement | null = document.querySelector(item.href);
        if (!section) return;

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveLink(item.name.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        {navItems.map((item, index) => (
          <li
            className={`nav-link ${
              activeLink === item.name.toLowerCase() ? "active" : ""
            }`}
            key={index}
          >
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
