"use client";
import ProjectCard from "../ui/Card";

const projects = [
  {
    title: "BookHive AI",
    description: "A full-stack e-commerce solution featuring AI-driven product recommendations and secure Stripe checkout.",
    tags: ["Next.js", "TypeScript", "Stripe", "OpenAI"],
    github: "https://github.com/yourusername/project1",
    link: "https://project1-demo.com",
    image: "/project1.jpg" 
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard with live data visualization using Recharts and Tailwind CSS.",
    tags: ["React", "Tailwind", "Recharts", "Firebase"],
    github: "https://github.com/yourusername/project2",
    link: "https://project2-demo.com",
    image: "/project2.jpg" 
  },
  {
    title: "AI Image Generator",
    description: "A creative tool that uses DALL-E API to generate high-quality images from text prompts.",
    tags: ["Next.js", "OpenAI API", "Cloudinary"],
    github: "https://github.com/yourusername/project3",
    link: "https://project3-demo.com",
    image: "/project3.jpg" 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl md:text-4xl font-bold italic">/ work</h2>
          <p className="text-zinc-500 mt-2">A selection of my recent full-stack developments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}