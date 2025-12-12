import React from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { socialLinks } from "../../config";
import { motion } from "framer-motion";

// 👉 Import BOTH profile pics with different names
import ProfilePicLight from "../../assets/ProPic_Light.png";
import ProfilePicDark from "../../assets/ProPic_Dark.png";

import ProfileCV from "../../assets/Chamalka Deshan CV Assosiate SE.pdf";

function Hero() {
  return (
    <section
      id="hero"
      className="
        relative flex flex-col-reverse md:flex-row items-center justify-center 
        min-h-screen pt-20 md:pt-0 px-6 overflow-hidden
        text-center md:text-left

        bg-gradient-to-br 
        from-slate-100 via-blue-100 to-slate-200
        dark:from-slate-950 dark:via-blue-950 dark:to-slate-950

        text-slate-900 dark:text-white
      "
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* LEFT SECTION */}
      <div className="relative z-10 max-w-3xl md:mr-12">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span
            className="inline-block px-5 py-2 
            bg-blue-500/10 dark:bg-blue-400/10 
            border border-blue-500/30 dark:border-blue-400/30 
            text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold backdrop-blur-sm"
          >
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-4
            text-slate-900 dark:text-white"
        >
          Chamalka{" "}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-500 via-blue-600 to-indigo-600 
            dark:from-blue-400 dark:via-blue-500 dark:to-indigo-500"
          >
            Deshan
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl mb-6 
            text-gray-700 dark:text-gray-300 font-light"
        >
          Full Stack Developer{" "}
          <span className="text-blue-600 dark:text-blue-400">
            (MERN + WordPress)
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base md:text-lg mb-8 
            text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          Passionate Full Stack Developer specializing in the JavaScript
          ecosystem. I build{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            fast
          </span>
          ,{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            scalable
          </span>{" "}
          and{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            user-focused
          </span>{" "}
          applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start mb-8"
        >
          <motion.a
            href={ProfileCV}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 py-3 rounded-xl font-semibold
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white shadow-lg shadow-blue-500/40
              overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              View Resume
            </span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 
              bg-gradient-to-r from-blue-700 to-indigo-700 
              transition duration-300"
            ></div>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-6 py-3 rounded-xl font-semibold
              border-2 border-blue-500/40 dark:border-blue-400/40
              bg-slate-200 dark:bg-slate-800
              text-slate-900 dark:text-white
              hover:border-blue-500 hover:dark:border-blue-400
              transition-all flex items-center gap-2
            "
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-4 md:gap-6 justify-center md:justify-start"
        >
          {[
            { icon: <Github className="w-6 h-6" />, href: socialLinks.github },
            {
              icon: <Linkedin className="w-6 h-6" />,
              href: socialLinks.linkedin,
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="
                w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm
                bg-slate-200/50 dark:bg-slate-800/50
                border border-slate-300 dark:border-slate-700
                text-slate-700 dark:text-gray-300
                hover:text-blue-600 dark:hover:text-blue-400
                hover:border-blue-500 transition-all
              "
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* RIGHT SECTION — Profile Picture */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="
          relative w-64 h-64 md:w-80 md:h-80 
          rounded-full mx-auto md:mx-0 mb-12 md:mb-0
        "
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl opacity-0 hover:opacity-100 transition duration-500"></div>

        {/* Conditional Profile Picture */}
        <img
          src={ProfilePicLight}
          alt="Chamalka Deshan"
          className="w-full h-full object-cover rounded-full block dark:hidden border-4 border-blue-600 shadow-xl"
        />

        <img
          src={ProfilePicDark}
          alt="Chamalka Deshan"
          className="w-full h-full object-cover rounded-full hidden dark:block border-4 border-blue-500 shadow-xl"
        />
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { repeat: Infinity, duration: 1.5 },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </motion.div>
    </section>
  );
}

export default Hero;
