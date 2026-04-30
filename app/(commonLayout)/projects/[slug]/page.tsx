'use client';

import { useParams } from 'next/navigation';
import { projects } from '@/components/projects-section';
import { MoveUpRight, Github, ExternalLink, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ContactSection } from '@/components/contact-section';

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div>
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Title & Links */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 ">{project.title}</h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-xs font-medium border border-muted/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  View
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-muted/20 border border-muted/40 rounded-xl font-bold hover:bg-muted/30 transition-all"
                >
                  GitHub
                  <Github className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl border border-muted/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Details Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-wider text-primary">Description</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold uppercase tracking-wider text-primary">The Challenges</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold uppercase tracking-wider text-primary">Future Plans</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.futurePlans}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
