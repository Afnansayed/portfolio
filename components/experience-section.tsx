'use client';

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: 'PixelForge Studios',
      description:
        'Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.',
      period: 'Jan 2020 - Present',
    },
    {
      id: 2,
      company: 'BlueWave Innovators',
      description:
        'Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.',
      period: 'Jun 2017 - Dec 2019',
    },
    {
      id: 3,
      company: 'TrendCraft Solutions',
      description:
        'Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.',
      period: 'Mar 2015 - May 2017',
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-2">
            <span className="text-foreground">12 YEARS OF</span>
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
              className="relative pb-8 pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3.5 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {exp.company}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {exp.description}
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  {exp.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
