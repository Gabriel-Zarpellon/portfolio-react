import { IoLogoGithub } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import styles from "./style.module.scss";

export function ProjectCard({ project }) {
  return (
    <li className={styles.projectCard}>
      <div className={styles.projectTitle}>
        <h2 className="title two">{project.title}</h2>
        {project.new ? <span>New</span> : null}
      </div>
      <ul className={styles.languageBox}>
        <p className="paragraph sm">Linguagens:</p>
        {project.languages.map((language, index) => (
          <li key={index}>
            <p className={`${styles.language} paragraph sm`}>{language}</p>
          </li>
        ))}
      </ul>
      <div>
        <p className="paragraph">{project.description}</p>
      </div>
      <div className={styles.projectLinks}>
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
