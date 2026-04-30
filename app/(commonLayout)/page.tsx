

import { AboutSection } from '@/components/about-section';
import { BlogSection } from '@/components/blog-section';
import { ContactSection } from '@/components/contact-section';
import { ExperienceSection } from '@/components/experience-section';
import Hero from '@/components/hero';
import { ProjectsSection } from '@/components/projects-section';
import { ToolsSection } from '@/components/tools-section';

export default function Page() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ExperienceSection />
      <ToolsSection />
      <ContactSection />
    </div>

  );
}
