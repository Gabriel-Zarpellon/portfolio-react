import { IoLogoGithub } from "react-icons/io";
import { FaShare } from "react-icons/fa";

export function ProjectCard({ project, length, index }) {
  return (
    <li>
      <div>
        <h2 className="title two">{project.title}</h2>
        {length == index ? <span>New</span> : null}
      </div>
      <div>
        <p className="paragraph sm">Linguagens:</p>
        <p className="paragraph sm">{project.language}</p>
      </div>
      <div>
        <p className="paragraph">{project.description}</p>
      </div>
      <div>
        <a href={project.github} className="link">
          <IoLogoGithub size={21} /> Github Code
        </a>
        <a href="#" className="link">
          <FaShare size={21} /> Aplicação
        </a>
      </div>
    </li>
  );
}
