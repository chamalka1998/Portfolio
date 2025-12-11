import React from "react";
import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import { Briefcase, Calendar } from "lucide-react";

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Briefcase className="w-4 h-4" />
            CAREER JOURNEY
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Experience
            </span>
          </h2>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-500"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-8`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.2 + 0.3,
                  }}
                  className="absolute left-0 md:left-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50 transform -translate-x-1/2 z-10"
                ></motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="w-full md:w-[calc(50%-3rem)] group relative"
                >
                  {/* Card glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                  <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-xl">
                    {/* Date Badge */}
                    <div className="flex items-center gap-2 text-blue-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">{job.date}</span>
                    </div>

                    {/* Position */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {job.position}
                    </h3>

                    {/* Company */}
                    <p className="text-indigo-400 font-semibold mb-4 text-lg">
                      {job.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-3rem)]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
