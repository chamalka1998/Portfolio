import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Terminal,
  Copy,
  Check,
} from "lucide-react";
import { socialLinks } from "../../config";
import { motion } from "framer-motion";

// Profile images
import ProfilePicLight from "../../assets/ProPic_Light.png";
import ProfilePicDark from "../../assets/ProPic_Dark.png";

// CV
import ProfileCV from "../../assets/Chamalka Deshan CV Assosiate SE.pdf";

function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npx chamalka");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center md:justify-start"
        >
          <span
            className="
      inline-flex items-center gap-2 px-5 py-2
      bg-blue-500/10 dark:bg-blue-400/10
      border border-blue-500/30 dark:border-blue-400/30
      text-blue-600 dark:text-blue-300
      rounded-full text-sm font-semibold
      backdrop-blur-sm
    "
          >
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* NPX COMMAND */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-sm mb-3 text-gray-600 dark:text-gray-400 font-medium">
            Run this to know more about me
          </p>

          <div
            onClick={handleCopy}
            className="
              group cursor-pointer inline-flex items-center gap-4 px-5 py-3 rounded-xl
              bg-slate-900 dark:bg-black text-green-400
              border border-slate-700 dark:border-slate-800
              shadow-lg hover:shadow-green-500/20
              transition-all
            "
          >
            <div className="flex items-center gap-2 font-mono text-sm md:text-base">
              <Terminal className="w-4 h-4" />
              <span>$ npx chamalka</span>
            </div>

            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition" />
            )}
          </div>

          <p className="mt-2 text-xs text-gray-500">Click to copy</p>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-4"
        >
          Chamalka{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-500">
            Deshan
          </span>
        </motion.h1>

        {/* Title */}
        <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300 font-light">
          Full Stack Developer{" "}
          <span className="text-blue-600 dark:text-blue-400">
            (MERN + WordPress)
          </span>
        </p>

        {/* Description */}
        <p className="text-base md:text-lg mb-8 text-gray-600 dark:text-gray-400 leading-relaxed">
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
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start mb-8">
          <a
            href={ProfileCV}
            target="_blank"
            className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/40 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            View Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold border-2 border-blue-500/40 dark:border-blue-400/40 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a href={socialLinks.github} target="_blank" className="icon-btn">
            <Github />
          </a>
          <a href={socialLinks.linkedin} target="_blank" className="icon-btn">
            <Linkedin />
          </a>
        </div>
      </div>

      {/* RIGHT SECTION — Profile Picture */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto md:mx-0 mb-12 md:mb-0">
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
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </motion.div>
    </section>
  );
}

export default Hero;
