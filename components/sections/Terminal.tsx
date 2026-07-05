"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [mounted, setMounted] = useState(false);
  const [history, setHistory] = useState<{ cmd: string; res: React.ReactNode }[]>([
    { cmd: "welcome", res: "System initialized. Type 'help' to begin." }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!mounted) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.toLowerCase().trim();
    if (!command) return;

    let response: React.ReactNode;
    if (command === "help") response = "Available: about, skills, projects, clear";
    else if (command === "about") response = "Fikirte Alemayehu - Full Stack Developer.";
    else if (command === "clear") { setHistory([]); setInput(""); return; }
   else if (command === "skills") response = "Next.js, Tailwind css, python, TypeScript, Node.js";
   else if (command === "projects") response = "E-Commerce AI Platform, Social Media Dashboard, AI Image Generator";

    setHistory([...history, { cmd: command, res: response }]);
    setInput("");
  };

 return (
    <div 
      onClick={() => inputRef.current?.focus()}
      className="w-full bg-white dark:bg-black/80  border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-2xl cursor-text backdrop-blur-sm"
    >
      <div className="bg-zinc-900/50 px-4 py-3 border-b border-zinc-800 flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <span className="text-zinc-600 text-[10px] uppercase tracking-widest font-mono">visitor@fikirte</span>
      </div>
      <div ref={scrollRef} className="p-6 h-[320px] overflow-y-auto font-mono text-sm scrollbar-hide">
        {history.map((item, i) => (
          <div key={i} className="mb-4">
            <div className="flex gap-2 text-green-500">
              <span>➜</span>
              <span className="text-zinc-300">{item.cmd}</span>
            </div>
            <div className="mt-1 text-zinc-500 pl-4">{item.res}</div>
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-2">
          <span className="text-green-500">➜</span>
          <input 
            ref={inputRef}
            autoFocus
            className="bg-transparent border-none outline-none text-white flex-1 p-0 focus:ring-0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}