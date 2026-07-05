"use client";
import { FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="relative py-10">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full max-w-[350px] flex-shrink-0">
          <div className="relative aspect-square">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-30"></div>
            
            <div className="relative w-full h-full rounded-full border-4 border-slate-900 overflow-hidden shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-blue-500 font-mono text-sm uppercase tracking-[0.3em] mb-4">/ background</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            A Full Stack Developer dedicated to building <span className="text-blue-400">highly performant</span> and 
            visually stunning applications. I turn complex logic into smooth, user-friendly experiences.
          </p>
          
          <a 
            href="/cv.pdf" 
            download 
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-600/20"
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}