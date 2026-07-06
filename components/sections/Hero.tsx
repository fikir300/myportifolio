"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 pt-10" /* Added padding top */
    >
      <h2 className="text-blue-600 dark:text-blue-400 font-mono text-sm uppercase tracking-[0.3em] font-bold">
        / available for work
      </h2>
      
      <h1 className="text-6xl md:text-8xl font-bold text-zinc-400 dark:text-zinc-500 tracking-tighter leading-[0.9]">
        FIKIRTE <br /> 
        <span className="text-zinc-900 black:text-white">ALEMAYEHU</span>
      </h1>
      <div className="flex gap-4 pt-4">
        <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-lg">
          My Work
        </a>
        <a href="#contact" className="px-8 py-3 border blue-300:border-white  black:text-white rounded-full font-bold dark:hover:bg-black/50 transition">
          Contact
        </a>
      </div>
    </motion.div>
  );
}