import React from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { socialLinks } from "../../config";
import { motion } from "framer-motion";
import ProfilePic from "../../assets/profile2.png";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-center md:text-left px-6 overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Left Side: Text Content */}
      <div className="relative z-10 max-w-3xl md:mr-12">
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm font-semibold backdrop-blur-sm">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black mb-4 text-white"
        >
          Chamalka{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">
            Deshan
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl mb-6 text-gray-300 font-light"
        >
          Full Stack Developer{" "}
          <span className="text-blue-400">(MERN + WordPress + DevOps)</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-lg mb-8 text-gray-400 leading-relaxed"
        >
          Passionate Full Stack Developer specializing in JavaScript, MERN
          Stack, and modern web technologies. I build{" "}
          <span className="text-blue-400 font-semibold">fast</span>,{" "}
          <span className="text-indigo-400 font-semibold">scalable</span>, and{" "}
          <span className="text-blue-400 font-semibold">user-focused</span>{" "}
          applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start mb-8"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg shadow-blue-500/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              View Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-slate-800 border-2 border-blue-500/50 text-white rounded-xl font-semibold hover:bg-slate-700 hover:border-blue-400 transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex gap-4 md:gap-6 justify-center md:justify-start"
        >
          {[
            {
              icon: <Github className="w-6 h-6" />,
              href: socialLinks.github,
              label: "GitHub",
            },
            {
              icon: <Linkedin className="w-6 h-6" />,
              href: socialLinks.linkedin,
              label: "LinkedIn",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Right Side: Profile Photo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative mb-12 md:mb-0 md:w-80 md:h-80 w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mx-auto md:mx-0"
      >
        <img
          src={ProfilePic}
          alt="Chamalka Deshan"
          className="w-full h-full object-cover"
        />
        {/* Optional glowing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { repeat: Infinity, duration: 1.5 },
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </motion.div>
    </section>
  );
}

export default Hero;
