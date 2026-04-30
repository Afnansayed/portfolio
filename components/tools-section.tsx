'use client';

export function ToolsSection() {
  const tools = [
    {
      id: 1,
      name: 'Framer',
      description: 'Website Builder',
      icon: '◻',
      bgColor: 'bg-white',
      textColor: 'text-black',
    },
    {
      id: 2,
      name: 'Figma',
      icon: '◉',
      description: 'Design Tool',
      bgColor: 'bg-white',
      textColor: 'text-red-500',
    },
    {
      id: 3,
      name: 'Lemon Squeezy',
      description: 'Payments Provider',
      icon: '🍋',
      bgColor: 'bg-white',
      textColor: 'text-yellow-500',
    },
    {
      id: 4,
      name: 'ChatGPT',
      description: 'AI Assistant',
      icon: '◯',
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
    },
    {
      id: 5,
      name: 'Notion',
      description: 'Productivity Tool',
      icon: 'N',
      bgColor: 'bg-white',
      textColor: 'text-black',
    },
    {
      id: 6,
      name: 'Nextjs',
      description: 'React framework',
      icon: '»',
      bgColor: 'bg-white',
      textColor: 'text-black',
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-2">
            <span className="text-foreground">PREMIUM</span>
            <br />
            <span className="text-muted/40">TOOLS</span>
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col items-start gap-3 p-4 rounded-xl hover:bg-muted/5 transition-colors cursor-pointer group"
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl ${tool.bgColor} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all`}>
                <span className={`text-lg font-bold ${tool.textColor}`}>
                  {tool.icon}
                </span>
              </div>

              {/* Tool Info */}
              <div>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-muted-foreground">
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
