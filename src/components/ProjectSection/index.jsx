import { projects } from "../../data/projects.js";
import { ProjectCard } from "./ProjectCard";

export function ProjectSection() {
  return (
    <section className="section-black">
      <div className="container">
        <div>
          <h3 className="title three">My projects</h3>
          <p className="paragraph sm pink">
            Projects created at Kenzie Academy
          </p>
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
      </div>
    </section>
  );
}
