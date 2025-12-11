import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }) {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative h-full"
    >
      {/* Card glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

      <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-xl h-full flex flex-col">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-3 font-semibold uppercase tracking-wider">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.split(", ").map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {project.link && (
          <div className="flex gap-4">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              View Project
            </motion.a>

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
