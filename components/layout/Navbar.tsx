"use client";
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiHome, FiUser, FiCode, FiAward, FiCpu, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home", icon: <FiHome /> },
  { name: "About", href: "#about", icon: <FiUser /> },
  { name: "Skills", href: "#skills", icon: <FiCpu /> },
  { name: "Projects", href: "#projects", icon: <FiCode /> },
  { name: "Certs", href: "#certificates", icon: <FiAward /> },
  { name: "Contact", href: "#contact", icon: <FiMail /> },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents hydration error
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo linking to Home */}
        <a href="#home" className="font-bold text-xl tracking-tighter text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          FA.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="group flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-zinc-400 group-hover:text-blue-500 transition-colors">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side: Theme Toggle + Socials */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-all border border-zinc-200 dark:border-zinc-800"
            >
              {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
          )}

          <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-zinc-200 dark:border-zinc-800">
            <a href="https://github.com/fikir300" target="_blank" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"><FaGithub size={18} /></a>
            <a href="https://linkedin.com/in/fikirte-alemayehu" target="_blank" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"><FaLinkedin size={18} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
}