import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
// import projectImage4 from "../assets/project4.jpeg";
// import projectImage5 from "../assets/project5.jpeg";
// import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "SAGAR",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a year.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "",
  },
  {
    id: 2,
    name: "Note-Keeper",
    description:
      "A note-keeper application developed using react.js. Offers a simple and efficient way to manage and organize notes with a sleek user interface.",
    image: projectImage2,
    githubLink: "https://github.com/parzivalsagar/note-keeper",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "",
  },
  
];

export const BIO = [
  "I’m S M Sagar, a 20-year-old front-end developer with a passion for coding and a commitment to pursuing my BCA course. My journey in technology began with a fascination for how websites and applications come to life. As I delve deeper into the world of programming, I love creating visually appealing and user-friendly interfaces that enhance user experiences. I continually strive to refine my skills and stay updated with the latest trends and technologies in web development, which fuels my ambition to become a proficient developer.",

"In addition to my academic pursuits, I have a strong desire to learn new things beyond the classroom. I believe that curiosity is the key to personal growth, and I enjoy exploring various topics that interest me, from software development to design principles. My dedication to learning extends to the gaming world, where I find joy in playing Valorant. The game not only provides a thrilling competitive experience but also allows me to hone my strategic thinking and teamwork skills, which I value in both gaming and my academic endeavors.",

"As I navigate through my studies and passion for coding, I embrace every opportunity to connect with like-minded individuals in both the tech and gaming communities. I believe in the power of collaboration and sharing knowledge, and I am always excited to engage with others who share my interests. Whether it’s working on a coding project, discussing the latest gaming strategies, or exploring new technologies, I am committed to making the most of my experiences and growing both personally and professionally.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Application",
    institution: "PES Institute Of Advanced Management, Shivamoga",
    duration: "September 2022 - June 2025",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/parzival__08/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/parzival__08/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/smsagar08",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/parzivalsagar",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/s-m-sagar-a7387a316/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
