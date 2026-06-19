// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpeg";
// Tech stack images
import ansible from "./assets/techstack/Ansible.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import redhat from "./assets/techstack/redhat.png";
import linux from "./assets/techstack/linux.png";
import aws from "./assets/techstack/aws.png";
import git from "./assets/techstack/git.png";
import docker from "./assets/techstack/docker.png";
import terraform from "./assets/techstack/terraform.png";
import jenkins from "./assets/techstack/Jenkins.png";
import kubernetes from "./assets/techstack/Kubernetes.png";
import maven from "./assets/techstack/maven.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Pankaj Kumar Gupta",
  tagline: "Aspiring DevOps Engineer passionate about Cloud, Automation, CI/CD, and Infrastructure as Code.",
  img: profile,
  about: `RHCSA-certified Linux Administrator and DevOps enthusiast with hands-on experience in Linux administration, Ansible automation, Docker, Kubernetes, Terraform, Jenkins, and AWS Cloud. Skilled in automating infrastructure, deploying containerized applications, and implementing CI/CD pipelines through practical projects. Currently preparing for RHCE and seeking an entry-level Linux System Administrator or DevOps Engineer role.`
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/pankajkumar-gupta/",
  github: "https://github.com/techpankajkr",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "MCA",
    Company: "Dr. APJ Abdul Kalam University, Indore",
    Location: "Indore",
    Type: "Full Time",
    Duration: "2022 - 2024",
  },
  {
    Position: "B.Sc. in Hospitality & Hotel Administration",
    Company: `IHM Hyderabad	`,
    Location: "Hyderabad",
    Type: "Full Time",
    Duration: "2017 - 2020",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  ansible: ansible,
  docker: docker,
  terraform: terraform,
  jenkins: jenkins,
  kubernetes:kubernetes,
  vscode: vscode,
  git: git,
  github: github,
  redhat : redhat,
  linux : linux,
  aws : aws,
  maven: maven
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Real-Time Chat Application",
    image: projectImage1,
    description: `A production-ready full-stack chat application built with a modern JavaScript stack that supports 
    real-time messaging, user authentication, and responsive UI. The project demonstrates experience in developing, 
    containerizing, and deploying full-stack applications using DevOps best practices.`,
    techstack: "Kubernetes, Docker, AWS EC2, Nginx, MongoDB",
    previewLink: "https://full-stack-chat-app-xi.vercel.app/login",
    githubLink: "https://github.com/techpankajkr/ChatApp",
  },
  {
    title: "Real-Time Chat Application",
    image: projectImage1,
    description: `A production-ready full-stack chat application built with a modern JavaScript stack that supports 
    real-time messaging, user authentication, and responsive UI. The project demonstrates experience in developing, 
    containerizing, and deploying full-stack applications using DevOps best practices.`,
    techstack: "Kubernetes, Docker, AWS EC2, Nginx, MongoDB",
    previewLink: "https://full-stack-chat-app-xi.vercel.app/login",
    githubLink: "https://github.com/techpankajkr/ChatApp",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "pankaj.iten1@gmail.com",
  phone: "+91 87090 78588",
};
