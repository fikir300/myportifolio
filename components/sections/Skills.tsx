"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: "95%", color: "bg-blue-500" },
  { name: "TypeScript", level: "90%", color: "bg-blue-400" },
  { name: "Tailwind CSS", level: "98%", color: "bg-cyan-400" },
  { name: "Node.js", level: "85%", color: "bg-green-500" },
  { name: "Python / AI", level: "80%", color: "bg-yellow-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 italic">/ skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm font-medium">
                <span>{skill.name}</span>
                <span className="text-zinc-500">{skill.level}</span>
              </div>
              <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}