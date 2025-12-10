import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">{project.title}</h3>
      <p className="mb-2">{project.description}</p>
      <p className="text-gray-500 mb-2">
        <strong>Tech:</strong> {project.tech}
      </p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          className="text-blue-500 underline"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
