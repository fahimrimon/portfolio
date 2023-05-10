// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
// import { BsInstagram } from "react-icons/bs";
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
    btnText: "Hire Me",
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
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
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
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "MERN-Stack Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
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
        image:"https://luique.bslthemes.com/wp-content/uploads/2021/11/work7.jpg",
        para: "This is a team project. Users can enrol in any courses and get certificates by skill test. Learn DS and algorithms from here & get preparation for tech jobs. Users can participate in our competitive programming contest.",
        live:"https://coder-access.web.app/",
        code:"https://github.com/raselcsedev/coder-byte"
      },
      {
        title: "Delta CarParts",
        type:"FULL-STACK",
        image:"https://luique.bslthemes.com/wp-content/uploads/2021/11/work7.jpg",
        para: "This is a car parts buying website. Dashboard for users and admins. Users can see their order history. Admin can see payment history. The order status can be controlled by admin.",
        live:"https://coder-access.web.app/",
        code:"https://github.com/raselcsedev/coder-byte"
      },
      {
        title: "groceBari",
        type:"FRONTEND",
        image:"https://luique.bslthemes.com/wp-content/uploads/2021/11/work7.jpg",
        para: "This is a grocery business website. User can see all grocery products without login. User can filter category wise  and buy it. Payment method will be implemented soon.",
        live:"https://coder-access.web.app/",
        code:"https://github.com/raselcsedev/coder-byte"
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
    //   {
    //     text: "codeaprogram",
    //     icon: BsInstagram,
    //     link: "https://www.instagram.com/codeaprogram/",
    //   },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};