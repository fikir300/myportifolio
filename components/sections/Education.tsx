"use client";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa"; 

const education = [
  {
    school: "Addis Ababa Sceince and Technology University",
    degree: "Bachelor of Science in software Engineering",
    description: "Data Structures, and Web Technologies.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 italic">/ education</h2>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-zinc-800">
            
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#050505]" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaGraduationCap className="text-blue-500" /> {edu.school}
                  </h3>
                  <p className="text-zinc-400 font-medium">{edu.degree}</p>
                </div>
              
              </div>
              <p className="mt-4 text-zinc-500 max-w-2xl leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}