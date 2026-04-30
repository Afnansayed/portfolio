'use client';

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: 'Northern University Bangladesh',
      role: 'B.Sc. in Computer Science & Engineering',
      description:
        'Currently pursuing CSE degree. Focused on mastering complex backend architectures, relational database optimization, and high-performance system design.',
      period: 'Present',
    },
    {
      id: 2,
      company: 'Full-Stack Development Focus',
      role: 'Backend-Heavy Full Stack Developer',
      description:
        'Building scalable applications with a focus on robust Express/Node.js backends. Expertly managing data with Prisma and PostgreSQL while learning containerization with Docker.',
      period: '2022 - Present',
    },
    {
      id: 3,
      company: 'Diploma in Engineering',
      role: 'Computer Technology',
      description:
        'Laid the foundation for my backend journey by mastering core programming logic, data structures, and database fundamentals.',
      period: 'Completed',
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-2">
            <span className="text-foreground">EDUCATION &</span>
            <br />
            <span className="text-muted/40">EXPERIENCE</span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-3xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pb-12 pl-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3.5 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />

              {/* Content */}
              <div className="group">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <span className="text-xs text-muted-foreground font-medium px-3 py-1 bg-muted/20 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <div className="text-primary text-sm font-semibold mb-3 uppercase tracking-wider">
                  {exp.role}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
