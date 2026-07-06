"use client";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

interface CertProps {
  title: string;
  issuer: string;
  date: string;
  link: string;
}
// components/ui/CertificateCard.tsx
export default function CertificateCard({ title, issuer, date, link }: CertProps) {
  return (
    <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all group">
      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <p className="text-zinc-400 text-sm mb-4">{issuer} • {date}</p>
      
      {/* This is the part that opens the PDF */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
      >
        View Certificate 
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}