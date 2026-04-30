'use client';

import { ArrowUp, MoveUpRight } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'NajmAI',
      description: 'SaaS Framer Template',
      color: 'from-purple-600 to-purple-900',
      borderColor: 'border-purple-500',
    },
    {
      id: 2,
      title: 'Damas',
      description: 'Free Framer Template',
      color: 'from-blue-600 to-cyan-600',
      borderColor: 'border-blue-500',
    },
    {
      id: 3,
      title: 'Faseelh',
      description: 'Free Framer Template',
      color: 'from-green-600 to-emerald-600',
      borderColor: 'border-green-500',
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16 ">
          <h2 className="text-6xl md:text-7xl font-bold mb-2">
            <span className="text-foreground">RECENT</span>
            <br />
            <span className="text-muted/40">PROJECTS</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-6 pb-8 border-b border-muted/20 last:border-b-0 group hover:opacity-90 transition-opacity"
            >
              {/* Project Image Placeholder */}
              <div className={`flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${project.color} border-2 ${project.borderColor} shadow-lg flex items-center justify-center cursor-pointer`}>
                <div className="text-2xl font-bold text-white opacity-80">{project.title.charAt(0)}</div>
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Decorative dot */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full " >
                <MoveUpRight className="text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
