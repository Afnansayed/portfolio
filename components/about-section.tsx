'use client';

import { User, Code2, Gamepad2, Bike } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-2">
            <span className="text-foreground">ABOUT</span>
            <br />
            <span className="text-muted/40">ME</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Journey */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Code2 className="w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-wider">My Journey</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              My programming journey began during my Diploma in Computer Technology, where I first discovered the power of turning ideas into real, working solutions. What started with writing simple programs in C quickly grew into a strong passion for building modern web applications.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Over time, I transitioned into the full stack development and started developing full-stack applications that focus on performance, scalability, and clean user experience. I enjoy working on both frontend and backend, but I naturally gravitate toward crafting intuitive and visually appealing interfaces using NextJS, tailwindCSS.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              For me, programming is more than just writing code — it’s about solving real-world problems, continuously learning, and building products that people can actually use and benefit from.
            </p>
          </div>

          {/* Hobbies & Personality */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Gamepad2 className="w-6 h-6" />
                <h3 className="text-xl font-bold uppercase tracking-wider">Beyond Coding</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Outside of coding, I like to stay active and maintain a balanced lifestyle. I enjoy playing football and cricket, which help me stay energetic and improve my teamwork mindset.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I also enjoy cycling in my free time—it gives me a chance to refresh my mind and come back with better focus. These activities help me stay disciplined, motivated, and mentally sharp.
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/20 rounded-full border border-muted/40">
                  <Bike className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Cycling</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/20 rounded-full border border-muted/40">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Football</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/20 rounded-full border border-muted/40">
                  <span className="text-sm font-medium">🏏 Cricket</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-muted/20 rounded-3xl border border-muted/40">
              <h4 className="text-foreground font-bold mb-2">Personality</h4>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "I’m a curious and dedicated developer who believes in continuous improvement. I enjoy learning new technologies, adapting to challenges, and collaborating with others. I value consistency, attention to detail, and building things that truly make an impact."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}