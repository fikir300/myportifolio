"use client";
import ProjectCard from "../ui/Card";

const projects = [
  {
    title: "BookHive AI",
    description: "A full-stack book search solution featuring AI-driven searches for your reading needs.",
    tags: ["Next.js", "TypeScript", "Stripe", "OpenAI"],
    github: "https://github.com/fikir300/book-search",
    link: "https://project1-demo.com",
    image: "/project1.jpg" 
  },
  {
    title: "To-Do-List",
    description: "A simple and intuitive to-do list application built with React and Firebase.",
    tags: ["React", "JavaScript", "Firebase"],
    github: "https://github.com/fikir300/To-Do-List",
    link: "https://to-do-list-mu-sandy-35.vercel.app/",
    image: "/project2.jpg" 
  },
  {
    title: "Quote Generator",
    description: "A sleek quote generator that fetches random quotes from a REST API.",
    tags: ["Next.js", "OpenAI API", "Cloudinary"],
    github: "https://github.com/fikir300/Quote",
    link: "https://quote-six-mu.vercel.app",
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