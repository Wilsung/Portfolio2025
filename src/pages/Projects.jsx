import project_list from "../projects.js";
import Project from "../components/Project.jsx";

export default function ProjectsPage() {
  return (
    <section className="spacing">
      <h1 className="title">Projects</h1>
      <hr />
      <div className="py-8 space-y-4 md:space-y-6">
        <ul>
          {project_list.map((project) => (
            <li key={project.name}>
              <Project
                title={project.name}
                description={project.description}
                src={project.src}
                link={project.link}
                alt={project.alt}
                stack={project.stack}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
