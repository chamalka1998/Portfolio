import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
