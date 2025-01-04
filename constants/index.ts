import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
  RxHome,
  RxPerson,
  RxDashboard,
} from "react-icons/rx";

export const Socials = [
  {
    name: "Cv",
    src: "/assets/icons/cv.svg",
    link: "https://transparent-aspen-664.notion.site/Evgeny-Malko-CV-171bb48de254806c8161d8965c69fd96",
  },
  {
    name: "GitHub",
    src: "/assets/icons/gitHub.svg",
    link: "https://github.com/CaptainGinny",
  },
  {
    name: "Telegram",
    src: "/assets/icons/telegram.svg",
    link: "https://t.me/CaptainGinny",
  },
  {
    name: "Twitter",
    src: "/assets/icons/twitter.svg",
    link: "https://twitter.com/Captain__Ginny",
  },
  {
    name: "Linkedin",
    src: "/assets/icons/linkedin.svg",
    link: "https://linkedin.com/in/evgenymalko",
  },
];

export const NavLinks = [
  {
    name: "Home",
    icon: RxHome,
    link: "/",
  },
  {
    name: "About me",
    icon: RxPerson,
    link: "/about-me",
  },
  {
    name: "Projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
];

export const ServiceData = [
  {
    icon: RxCrop,
    title: "Development",
    content:
      "Proficient in HTML, CSS, and JavaScript. Utilizing frameworks like " +
      "React, Next.js for dynamic web development. Continuous learning and " +
      "adapting to emerging trends in front-end JavaScript development.",
    backgroundImage: "/assets/myskills/development.jpg",
  },
  {
    icon: RxAccessibility,
    title: "Management",
    content:
      "Organizing and prioritizing tasks effectively in projects. " +
      "Collaborating with team members to meet project deadlines in front-end " +
      "development. Taking ownership of assigned tasks and seeking assistance " +
      "when needed.",
    backgroundImage: "/assets/myskills/management.jpg",
  },
  {
    icon: RxDesktop,
    title: "Backend Development",
    content:
      "Transforming business logic into robust server-side solutions with PHP. Building APIs, managing databases, and ensuring seamless communication between front-end and back-end systems.",
    backgroundImage: "/assets/myskills/design.jpg",
  },
  {
    icon: RxReader,
    title: "Fullstack Development",
    content:
    "Building seamless end-to-end solutions with JavaScript and PHP. " +
    "Creating dynamic and scalable applications by integrating front-end and back-end technologies.",
    backgroundImage: "/assets/myskills/seo.jpg",
  },
  {
    icon: RxPencil2,
    title: "Deployment",
    content:
      "Efficiently deploying fullstack applications to live servers. " +
      "Collaborating with teams to ensure seamless production environments and high-quality standards.",
    backgroundImage: "/assets/myskills/branding.jpg",
  },
  {
    icon: RxRocket,
    title: "Database Management",
    content:
      "Managing databases, optimizing queries, and ensuring smooth data flow between front-end and back-end systems. " +
      "Building robust data architectures for scalable applications.",
    backgroundImage: "/assets/myskills/production.jpg",
  },
];