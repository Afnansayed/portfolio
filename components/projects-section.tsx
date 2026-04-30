'use client';

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const projects = [
  {
    slug: 'ecommerce-engine',
    title: 'E-commerce Engine',
    image: "/project/cox-wave.png",
    description: 'A full-stack commerce solution featuring complex Prisma schemas and secure Better-Auth integration.',
    tech: ['Next.js', 'Prisma', 'Postgres', 'Better Auth'],
    challenges: 'Designing a schema that handles complex product relationships while maintaining sub-millisecond query times.',
    futurePlans: 'Add multi-vendor support and an integrated shipping tracking system.',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/afnansayed/ecommerce',
  },
  {
    slug: 'saas-architecture',
    title: 'SaaS Architecture',
    image: "/project/tutor-flow.png",
    description: 'Enterprise-ready dashboard with real-time state management and secure Stripe payment gateways.',
    tech: ['React', 'Redux', 'TanStack Query', 'Stripe'],
    challenges: 'Ensuring real-time data synchronization across disparate dashboard components without excessive re-renders.',
    futurePlans: 'Implement custom analytics reporting and team collaboration features.',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/afnansayed/saas',
  },
  {
    slug: 'restful-core-api',
    title: 'RESTful Core API',
    image: "/project/cox-wave.png",
    description: 'High-performance backend built with Express and Node.js, featuring containerized deployment.',
    tech: ['Node.js', 'Express', 'Postgres', 'Docker'],
    challenges: 'Securing the API against common vulnerabilities while maintaining a low-latency response for mobile clients.',
    futurePlans: 'Adopt a serverless architecture and add a GraphQL gateway.',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/afnansayed/api',
  },
];

export function ProjectsSection() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16 ">
          <h2 className="text-6xl md:text-7xl font-bold mb-2">
            <span className="text-foreground">FEATURED</span>
            <br />
            <span className="text-muted/40">PROJECTS</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 max-w-3xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-12 border-b border-muted/20 last:border-b-0 group hover:opacity-95 transition-opacity"
            >
              {/* Project Image Placeholder */}
              <div className={`flex-shrink-0 w-32 h-32 rounded-3xl  shadow-xl overflow-hidden cursor-pointer group-hover:scale-105 transition-transform duration-300`}>
                <Image
                  width={200}
                  height={200}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Link href={`/projects/${project.slug}`}>
                    <MoveUpRight className="text-muted-foreground group-hover:text-primary transition-colors w-6 h-6" />
                  </Link>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-xs font-medium border border-muted/20">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
