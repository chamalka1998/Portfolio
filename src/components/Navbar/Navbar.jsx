import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  Folder,
  Mail,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Skills", href: "#skills", icon: <Code className="w-4 h-4" /> },
    {
      name: "Experience",
      href: "#experience",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: <Folder className="w-4 h-4" />,
    },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"
          >
            CD
          </motion.h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {item.icon}
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {item.icon}
                  {item.name}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800"
          >
            <ul className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 hover:bg-slate-800 px-4 py-3 rounded-lg transition-all duration-300 font-medium"
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 hover:bg-slate-800 px-4 py-3 rounded-lg transition-all duration-300 font-medium"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
