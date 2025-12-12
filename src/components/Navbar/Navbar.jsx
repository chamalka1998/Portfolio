import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  Folder,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  /* ---------------------------------- */
  /* Dynamic styles based on theme       */
  /* ---------------------------------- */
  const navBg =
    theme === "dark"
      ? "bg-slate-900/80 border-slate-800 shadow-blue-900/40"
      : "bg-white/60 border-gray-300 shadow-gray-200";

  const linkColor =
    theme === "dark"
      ? "text-gray-300 hover:text-blue-400"
      : "text-gray-700 hover:text-blue-600";

  const mobileBg = theme === "dark" ? "bg-slate-900/95" : "bg-white/95";

  /* ---------------------------------- */

  /* THEME TOGGLE BUTTON */
  const ThemeButton = () => (
    <button
      onClick={toggleTheme}
      className="
        relative group 
        flex items-center justify-center 
        w-10 h-10 rounded-xl
        transition-all duration-300
        border backdrop-blur
      "
      style={{
        background:
          theme === "dark" ? "rgba(30,41,59,0.5)" : "rgba(255,255,255,0.6)",
        borderColor: theme === "dark" ? "#334155" : "#d1d5db",
        boxShadow:
          theme === "dark"
            ? "0 0 18px rgba(59,130,246,0.4)"
            : "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <span
        className="
          absolute inset-0 rounded-xl 
          transition-all duration-300 opacity-0 group-hover:opacity-100 blur-md
        "
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(to bottom right, rgba(59,130,246,0.3), rgba(99,102,241,0.3))"
              : "linear-gradient(to bottom right, rgba(59,130,246,0.15), rgba(99,102,241,0.15))",
        }}
      ></span>

      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400 relative z-10" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600 relative z-10" />
      )}
    </button>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className={
              theme === "dark"
                ? "text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
                : "text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            }
          >
            CD
          </motion.h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map(
            (name, index) => (
              <motion.li
                key={name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${name.toLowerCase()}`}
                  className={`font-medium transition-colors duration-300 ${linkColor}`}
                >
                  {name}
                </a>
              </motion.li>
            )
          )}

          {/* Theme Button */}
          <ThemeButton />
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className={theme === "dark" ? "text-white" : "text-gray-900"} />
          ) : (
            <Menu
              className={theme === "dark" ? "text-white" : "text-gray-900"}
            />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${mobileBg} backdrop-blur-xl border-t ${
              theme === "dark" ? "border-slate-800" : "border-gray-200"
            }`}
          >
            <ul className="px-6 py-4 space-y-2">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((name, index) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${name.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-blue-400 hover:bg-slate-800"
                        : "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                    }`}
                  >
                    {name}
                  </a>
                </motion.li>
              ))}

              <div className="pt-4 flex justify-center">
                <ThemeButton />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
