// import images
import Hero_person from "./assets/images/hero/person.png";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import javascript from "./assets/images/Skills/javascript.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import redux from "./assets/images/Skills/redux.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import express from "./assets/images/Skills/express.png";
import firebase from "./assets/images/Skills/firebase.png";
import typescript from "./assets/images/Skills/typescript.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "FAHIM",
    LastName: "RIMON",
    btnText: "Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: javascript,
      },
      {
        name: "Tailwind",
        para: "Lorem ipsum text  dummy",
        logo: tailwind,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Redux",
        para: "Lorem ipsum text  dummy",
        logo: redux,
      },
      {
        name: "TypeScript",
        para: "Lorem ipsum text  dummy",
        logo: typescript,
      },
      {
        name: "Firebase",
        para: "Lorem ipsum text  dummy",
        logo: firebase,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Express js",
        para: "Lorem ipsum text  dummy",
        logo: express,
      },
      {
        name: "MongoDB",
        para: "Lorem ipsum text  dummy",
        logo: mongodb,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Frontend Development",
        para: "I will create a complete responsive website using tailwind, javaScript, reactjs and redux.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "I will create modern website for you. When I build websites I always design according to ui/ux design.",
        logo: services_logo2,
      },
      {
        title: "MERN-Stack Development",
        para: "I will create a complete responsive website using reactjs, nodejs, mongodb and also use firebase for authentication.",
        logo: services_logo1,
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    projects_content: [
      {
        title: "CoderAccess",
        type:"FULL-STACK",
        image:"https://i.ibb.co/f8QGK32/coder-Access.png",
        para: "This is a team project. Users can enrol in any courses and get certificates by skill test. Learn DS and algorithms from here & get preparation for tech jobs. Users can participate in our competitive programming contest.",
        live:"https://coder-access.web.app/",
        code:"https://github.com/raselcsedev/coder-byte"
      },
      {
        title: "Delta CarParts",
        type:"FULL-STACK",
        image:"https://i.ibb.co/6m6nwFR/deltaCar.png",
        para: "This is a car parts buying website. Dashboard for users and admins. Users can see their order history. Admin can see payment history. The order status can be controlled by admin.",
        live:"https://delta-car-parts.vercel.app/",
        code:"https://github.com/fahimrimon/delta-car-parts-client"
      },
      {
        title: "groceBari",
        type:"FRONTEND",
        image:"https://i.ibb.co/5LCns8K/groce-Bari.png",
        para: "This is a grocery business website. User can see all grocery products without login. User can filter category wise  and buy it. Payment method will be implemented soon.",
        live:"https://groce-bari.vercel.app/",
        code:"https://github.com/fahimrimon/groce-bari"
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};