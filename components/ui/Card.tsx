"use client";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

export default function ProjectCard({ title, description, tags, link, github, image }: ProjectProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-blue-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:bg-zinc-900/60 hover:border-zinc-700 transition-all"
    ><div className="p-6">
    <h3 className="text-xl font-bold mb-2">{title}</h3>

  </div>
     <div className="group relative bg-blue-900/50 border border-zinc-800 rounded-3xl overflow-hidden">
  <div className="h-48 w-full overflow-hidden">
    <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
  </div>
  
</div>
      <div className="p-6"> 
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 text-zinc-800 hover:text-white cursor-pointer" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium uppercase tracking-wider px-2 py-1 bg-zinc-800 text-zinc-400 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}