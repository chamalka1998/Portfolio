import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import { Code, Zap } from "lucide-react";

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="skills"
      className="
        relative py-24 px-6 overflow-hidden
        bg-gradient-to-br from-slate-100 via-blue-100 to-slate-200
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        text-slate-900 dark:text-white
      "
    >
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/30 dark:border-blue-400/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            TECHNICAL EXPERTISE
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-500">
              Skills
            </span>
          </h2>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, index) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative bg-slate-200/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-300/50 dark:border-slate-700/50 shadow-xl h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30">
                  <Code className="w-7 h-7" />
                </div>

                {/* Category Name */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.name}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
                      <span className="text-base">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
