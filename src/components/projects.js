import "./projects.css";
import MyProject from "./MyProjects/myProject";

import PortfolioWebAppProject from "../images/portfolio_web_app_project.png";
import GenerateQrProject from "../images/generateQr_project.png";
import TodoProject from "../images/todo_web_app_project.png";
import ChatterProject from "../images/Chatter.png";
import HospitalManagementProject from "../images/HMSS.png";
import FileSharingProject from "../images/shareMe_project.png";
import JobJunctionProject from "../images/jobJunction.png";
import ByteBattle from "../images/ByteBattle.png";
import AlgoMate from "../images/Algomate.png";

function Projects() {
  const projectData = [
  {
    img: PortfolioWebAppProject,
    topic: "Portfolio Web App",
    domain: "Web Application",
    githubLink: "#",
    websiteLink: "#",
    description:
      "A personal brand platform showcasing skills, projects, and experience with a clean responsive UI.",
  },
  {
    img: GenerateQrProject,
    topic: "GenerateQr Web App",
    domain: "Web Application",
    websiteLink: "https://generateqr-project.netlify.app/",
    githubLink: "https://github.com/Prashant-pathak-01/generateQr",
    description:
      "A quick QR generator that converts text or URLs into downloadable QR codes instantly.",
  },
  {
    img: TodoProject,
    topic: "To do Web App",
    domain: "Web Application",
    websiteLink: "https://todo-list-webapp-project.netlify.app/",
    githubLink: "https://github.com/Prashant-pathak-01/todo-app",
    description:
      "A simple task management tool to add, organize, and track daily activities efficiently.",
  },
  {
    img: ChatterProject,
    topic: "Chatting website",
    domain: "Web Application",
    websiteLink: "https://github.com/Prashant-pathak-01/Chatter-website",
    githubLink: "https://github.com/Prashant-pathak-01/Chatter-website",
    description:
      "A real-time chat platform enabling seamless conversations through an interactive and minimal UI.",
  },
  {
    img: HospitalManagementProject,
    topic: "Hospital Management",
    domain: "Web Application",
    websiteLink: "https://hospital-management-system-project.netlify.app/",
    githubLink: "https://github.com/Prashant-pathak-01/Hospital-Management-System",
    description:
      "A hospital management dashboard for handling patients, appointments, doctor details, and medical records.",
  },
  {
    img: FileSharingProject,
    topic: "File Sharing Platform",
    domain: "Web Application",
    websiteLink: "https://filesharing-project.netlify.app/",
    githubLink: "https://github.com/Prashant-pathak-01/File-Sharing-webiste.git",
    description:
      "A secure file-sharing system offering password-protected uploads, history tracking, and email sharing.",
  },
  {
    img: JobJunctionProject,
    topic: "Job-Junction",
    domain: "Web Application",
    websiteLink: "https://jobjunction-01.netlify.app/",
    githubLink: "https://github.com/Prashant-pathak-01/JobJunction",
    description:
      "A job portal connecting candidates to opportunities with a clean UI and easy navigation.",
  },
  {
    img: ByteBattle,
    topic: "ByteBattle",
    domain: "Web Application",
    websiteLink: "https://bytebattle.netlify.app/",
    githubLink: "https://github.com/Prashant-pathak-01/ByteBattle",
    description:
      "A competitive coding battle platform with challenges, submissions, leaderboards, and performance tracking.",
  },
  {
    img: AlgoMate,
    topic: "AlgoMate",
    domain: "Web Application",
    websiteLink: "https://algomate-project.netlify.app/",
    githubLink: "https://github.com/Prashant-pathak-01/AlgoMate",
    description:
      "A student-centric platform offering DSA practice, notes, articles, assessments, and mentorship support.",
  },
];

  return (
    <div className="projects">
      <h1>Projects Portfolio</h1>

      <div className="project_list">
        {[...projectData].reverse().map((p, index) => (
          <a href={p.link} target="_blank" key={index}>
            <MyProject img={p.img} topic={p.topic} domain={p.domain} description={p.description} githubLink={p.githubLink} websiteLink={p.websiteLink}/>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
