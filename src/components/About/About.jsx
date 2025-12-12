import React from "react";
import { Code2, Rocket, Users, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "JavaScript, React, Node.js, PHP & WordPress",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance Focused",
      description: "Optimized, user-friendly applications",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Agile Experience",
      description: "CI/CD pipelines & team collaboration",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Final year at UCSC",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="about"
      className="
        relative py-24 px-6 overflow-hidden
        bg-gradient-to-br 
        from-slate-100 via-blue-100 to-slate-200
        dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950
        text-slate-900 dark:text-white
      "
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/10 dark:bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 dark:bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2 
              bg-blue-500/10 dark:bg-blue-400/10 
              border border-blue-500/30 dark:border-blue-400/30
              text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            WHO I AM
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 animate-gradient dark:from-blue-400 dark:via-blue-500 dark:to-indigo-500">
              Me
            </span>
          </h2>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left: Description */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-slate-200/90 dark:bg-slate-800/90 backdrop-blur-xl p-10 rounded-2xl border border-slate-300/50 dark:border-slate-700/50 shadow-2xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I'm an{" "}
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    Associate Software Engineer
                  </span>{" "}
                  with hands-on experience in full-stack development using{" "}
                  <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                    JavaScript, React.js, Node.js, Express.js, PHP, and
                    WordPress
                  </span>
                  .
                </p>

                <motion.div
                  className="my-8 border-l-4 border-blue-500 dark:border-blue-400 pl-6 bg-blue-500/5 dark:bg-blue-400/10 py-4 rounded-r-xl relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent dark:from-blue-400/20"></div>
                  <p className="text-gray-700 dark:text-gray-300 italic relative z-10 flex items-start gap-3">
                    <span className="text-blue-400 text-2xl">"</span>
                    <span>
                      Building performance-optimized, user-friendly web
                      applications that make a difference.
                    </span>
                    <span className="text-blue-400 text-2xl">"</span>
                  </p>
                </motion.div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I have experience working with{" "}
                  <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                    Agile teams
                  </span>
                  , deploying applications with{" "}
                  <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                    CI/CD tools
                  </span>
                  , and building both frontend and backend systems.
                </p>

                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Currently serving as a{" "}
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      Jr. Full Stack Developer
                    </span>{" "}
                    at
                    <span className="font-bold text-indigo-500 dark:text-indigo-400">
                      {" "}
                      M Data Zone
                    </span>
                    , while completing my final year at
                    <span className="font-bold text-indigo-500 dark:text-indigo-400">
                      {" "}
                      UCSC
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative"
              >
                {/* Card glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                <div className="relative bg-slate-200/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-slate-300/50 dark:border-slate-700/50 shadow-xl h-full">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg shadow-blue-500/50"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: "1+", label: "Years Experience" },
            { number: "15+", label: "Projects Completed" },
            { number: "10+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

              <div className="relative bg-slate-200/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl text-center border border-slate-300/50 dark:border-slate-700/50">
                <motion.h3
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-3 dark:from-blue-400 dark:to-indigo-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.1,
                  }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
