import React from "react";
import { experience } from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="p-6 bg-white">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {experience.map((job, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold">
              {job.position} - {job.company}
            </h3>
            <p className="text-gray-600">{job.date}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
