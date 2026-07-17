"use client";
import { useEffect, useState } from 'react';
import ProjectCard from "../ui/Card";

export default function Projects() {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Replace this URL with your actual Railway Public Domain
    const API_URL = "https://portfolio-api-product.up.railway.app/projects";

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProjectList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl md:text-4xl font-bold italic">/ work</h2>
          <p className="text-zinc-500 mt-2">A selection of my recent full-stack developments from my CMS.</p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-zinc-500 font-mono">Loading projects from API...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project: any, index) => (
              <ProjectCard 
                key={project.id || index}
                title={project.title}
                description={project.description}
                // We split the tech_stack string into an array so the tags look right
                tags={project.tech_stack ? project.tech_stack.split(',').map((s: string) => s.trim()) : []}
                github={project.link} // Your DB uses 'link', we map it to github prop
                link={project.link}   
                image={project.image || "/project1.jpg"} // Fallback image if DB is empty
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}