'use client';

import Image from "next/image";

export function ToolsSection() {
  const tools = [
    {
      id: 1,
      name: 'Next.js',
      description: 'Full-stack Framework',
      image: '/skill/images.jpeg',
      bgColor: 'bg-white',
    },
    {
      id: 2,
      name: 'React',
      description: 'Frontend Library',
      image: '/skill/react.png',
      bgColor: 'bg-white',
    },
    {
      id: 3,
      name: 'TypeScript',
      description: 'Type-safe JS',
      image: '/skill/type.svg',
      bgColor: 'bg-white',
    },
    {
      id: 4,
      name: 'Tailwind CSS',
      description: 'Styling Framework',
      image: '/skill/tailwwind.jpg',
      bgColor: 'bg-white',
    },
    {
      id: 5,
      name: 'Prisma',
      description: 'Next-gen ORM',
      image: '/skill/prisma.webp',
      bgColor: 'bg-white',
    },
    {
      id: 6,
      name: 'PostgreSQL',
      description: 'Relational Database',
      image: '/skill/postgress.webp',
      bgColor: 'bg-white',
    },
    {
      id: 7,
      name: 'Express.js',
      description: 'Backend Framework',
      image: '/skill/express2.png',
      bgColor: 'bg-white',
    },
    {
      id: 8,
      name: 'Redux',
      description: 'State Management',
      image: '/skill/redux.jpg',
      bgColor: 'bg-white',
    },
    {
      id: 9,
      name: 'TanStack Query',
      description: 'Data Fetching',
      image: '/skill/tan2.png',
      bgColor: 'bg-white',
    },
    {
      id: 10,
      name: 'JavaScript',
      description: 'Core Programming',
      image: '/skill/java2.jpg',
      bgColor: 'bg-white',
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-2">
            <span className="text-foreground">TECHNICAL</span>
            <br />
            <span className="text-muted/40">SKILLS</span>
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl hover:bg-muted/10 transition-all duration-300 cursor-pointer group"
            >
              {/* Icon Container */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-500 overflow-hidden `}>
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tool Info */}
              <div>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1 whitespace-nowrap">
                  {tool.name}
                </h3>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
