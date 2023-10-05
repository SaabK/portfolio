import home from "../assets/icons/home.svg";
import person from "../assets/icons/person.svg";
import laptop from "../assets/icons/laptop.svg";
import phone from "../assets/icons/phone.svg";

export const navItems = [
  {
    name: "Home",
    href: "#home",
    image: home,
  },
  {
    name: "About",
    href: "#about",
    image: person,
  },
  {
    name: "Projects",
    href: "#projects",
    image: laptop,
  },
  {
    name: "Contact",
    href: "#contact",
    image: phone,
  },
];

import superiorIcon from "../assets/icons/superior.png";
import fiverrIcon from "../assets/icons/fiverr_green.png";
import youtubeIcon from "../assets/icons/youtube.webp";
import hobbiesIcon from "../assets/icons/hobby.svg";
import { experience, project, social } from "../types";

export const experiences: experience[] = [
  {
    heading: "ICS Degree",
    sub_heading: "Superior College",
    experienceList: [
      "I’ve been studying computer science in college since 2023.",
      "The next year, I’ll be able to graduate with my CS Degree from Superior College.",
      "I don’t know what to write here, so I am just trying to fill it.",
      "So I have filled it with something.",
    ],
    icon: superiorIcon,
  },
  {
    heading: "Freelancing",
    sub_heading: "Fiverr & Upwork",
    experienceList: [
      "I've been freelancing since 2021 on various platforms such as Fiverr and Upwork.",
      "I have satisfied over 13 clients in the field of web development.",
      "I don’t know what to write here, so I am just trying to fill it.",
      "So I have filled it with something.",
    ],
    icon: fiverrIcon,
  },
  {
    heading: "Full Stack Developer",
    sub_heading: "University of YouTube",
    experienceList: [
      "I’ve been learning web dev since May, 2020.",
      "I’ve become an intermediate developer. It’s been 4 years practicing web development and I’ve created tons of projects.",
      "I’ve completely learn the backend and the frontend from scratch.",
      "I have also contributed to open source.",
    ],
    icon: youtubeIcon,
  },
  {
    heading: "Hobbies",
    sub_heading: "History & Improving",
    experienceList: [
      "I’m a huge fan of history especially, the history of Muslims & Greeks.",
      "I am self-improvement guy. I use Muslim principles to improve myself.",
      "I also love playing cricket and football as a sport.",
      "I’m also a science guy. 🤓",
    ],

    icon: hobbiesIcon,
  },
];

import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import reactIcon from "../assets/icons/react.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import bootstrapIcon from "../assets/icons/bootstrap.svg";
import nodejsIcon from "../assets/icons/nodejs.svg";
import wordpressIcon from "../assets/icons/wordpress.svg";

export const skills = [
  {
    name: "HTML",
    image: htmlIcon,
  },
  {
    name: "CSS",
    image: cssIcon,
  },
  {
    name: "React",
    image: reactIcon,
  },
  {
    name: "Tailwind",
    image: tailwindIcon,
  },
  {
    name: "Bootstrap",
    image: bootstrapIcon,
  },
  {
    name: "NodeJS",
    image: nodejsIcon,
  },
  {
    name: "Wordpress",
    image: wordpressIcon,
  },
];

import easybankImage from "../assets/projects/easybank.png";
import azadchaiwalaImage from "../assets/projects/azad_chaiwala.png";
import retailStoreSoftware from "../assets/projects/bakala_software.png";

export const projects: project[] = [
  {
    name: "Easybank",
    image: easybankImage,
    description:
      "Easybank is the next generation of digital banking. It has the potential to change the future of banking. This is a landing page for the website of Easy bank, that contains information related to it.",
    tags: ["react", "tailwind"],
  },
  {
    name: "Azad Chaiwala",
    image: azadchaiwalaImage,
    description:
      "Azad Chaiwala is a Pakistani influencer and Businessman. He has a website for his courses of his institute. I redesigned and made the above website for him that has better UI and animations.",
    tags: ["react", "tailwind", "framer-motion"],
  },
  {
    name: "Retail Store Software",
    image: retailStoreSoftware,
    description:
      "Retail store software is a webapp where retail store employees can calculate the total by scanning the item or entering the barcode. It helps them to perform calculations at very fast speed.",
    tags: ["react", "tailwind"],
  },
];

import youtube from "../assets/icons/youtube.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import twitter from "../assets/icons/twitter-circle.svg";
import fiverr from "../assets/icons/fiverr.svg";

export const socials: social[] = [
  {
    name: "YouTube",
    href: "",
    icon: youtube,
  },
  {
    name: "Facebook",
    href: "",
    icon: facebook,
  },
  {
    name: "Instagram",
    href: "",
    icon: instagram,
  },
  {
    name: "Github",
    href: "",
    icon: github,
  },
  {
    name: "Twitter",
    href: "",
    icon: twitter,
  },
  {
    name: "Fiverr",
    href: "",
    icon: fiverr,
  },
];
