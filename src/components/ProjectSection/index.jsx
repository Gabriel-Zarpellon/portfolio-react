import { projects } from "../../data/projects.js";
import { ProjectCard } from "./ProjectCard";

export function ProjectSection() {
  return (
    <section>
      <div>
        <h3>My projects</h3>
        <p>Projects created at Kenzie Academy</p>
      </div>
      <ul>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            length={projects.length}
          />
        ))}
      </ul>
    </section>
  );
}
