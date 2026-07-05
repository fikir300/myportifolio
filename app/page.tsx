"use client";

import Hero from "../components/sections/Hero";
import Terminal from "../components/sections/Terminal";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import Certificates from "../components/sections/Certificates";
export default function Home() {
  return (
    <main className="relative min-h-screen transition-colors duration-300">
 
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32 pt-32 pb-10">
        {/* --- HERO & TERMINAL SIDE-BY-SIDE --- */}
<section id="home" className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 min-h-[60vh] pt-10">
  <div className="flex-1 w-full text-left">
    <Hero />
  </div>

  <div className="flex-1 w-full max-w-2xl">
    <Terminal />
  </div>
</section>
        <About />
        <Education />
       <Skills />
        
        <Projects />
        
         <Certificates />
        <Contact /> 

<footer className="py-6 mt-10 border-t border-zinc-200 dark:border-zinc-800">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
    
    <p>© {new Date().getFullYear()} — Fikirte Alemayehu</p>
    
    <div className="flex gap-6">
      <span className="opacity-50">Next.js</span>
      <span className="opacity-50">Tailwind</span>
      <span className="opacity-50">Framer Motion</span>
    </div>
    
  </div>
</footer>
      </div>
    </main>
  );
}