import { projects } from "../../data/projects.js";
import { ProjectCard } from "./ProjectCard";
import styles from "./style.module.scss";

export function ProjectSection() {
  return (
    <section id="projects" className="section-black">
      <div className="container">
        <div className={styles.projectBox}>
          <div>
            <h3 className="title three">My projects</h3>
            <p className="paragraph sm">
              Projects created at{" "}
              <span className="paragraph sm pink">Kenzie Academy</span>
            </p>
          </div>
          <ul>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
