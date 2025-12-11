import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="relative py-8 px-6 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-bold">
              Chamalka Deshan
            </span>
            <span>• Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current inline" />
            </motion.span>
            <span>• All rights reserved</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
