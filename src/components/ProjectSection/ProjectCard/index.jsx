import { IoLogoGithub } from "react-icons/io";
import { FaShare } from "react-icons/fa";

export function ProjectCard({ project, length, index }) {
  return (
    <li>
      <div>
        <h2>{project.title}</h2>
        {length == index ? <span>New</span> : null}
      </div>
      <div>
        <p>Linguagens:</p>
        <p>{project.language}</p>
      </div>
      <div>
        <p>{project.description}</p>
      </div>
      <div>
        <a href={project.github}>
          <IoLogoGithub size={21} /> Github Code
        </a>
        <a href="#">
          <FaShare size={21} /> Aplicação
        </a>
      </div>
    </li>
  );
}
