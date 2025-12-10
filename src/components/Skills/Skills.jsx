import React from "react";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((category) => (
          <div key={category.name} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">{category.name}</h3>
            <ul className="list-disc list-inside">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
