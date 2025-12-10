import React from "react";
import { socialLinks } from "../../config";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Chamalka Deshan</h1>
      <p className="text-lg md:text-2xl mb-6">
        Full Stack Developer (MERN + WordPress + DevOps)
      </p>
      <p className="mb-6 max-w-xl">
        Passionate Full Stack Developer specializing in JavaScript, MERN Stack,
        and modern web technologies. I build fast, scalable, and user-focused
        applications.
      </p>
      <div className="flex gap-4 mb-6">
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Resume
        </a>
        <a
          href="#contact"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Contact Me
        </a>
      </div>
      <div className="flex gap-4 text-2xl">
        <a href={socialLinks.github} target="_blank">
          GitHub
        </a>
        <a href={socialLinks.linkedin} target="_blank">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Hero;
