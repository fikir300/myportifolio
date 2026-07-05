"use client";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

interface CertProps {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export default function CertificateCard({ title, issuer, date, link }: CertProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative p-6 rounded-2xl bg-white/5 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="flex justify-between items-start">
        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <FiAward size={24} />
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-400 hover:text-blue-500 transition-all"
        >
          <FiExternalLink size={18} />
        </a>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 mt-2 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
          <span>{issuer}</span>
          <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span>{date}</span>
        </div>
      </div>
      
      {/* Subtle bottom glow on hover */}
      <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}