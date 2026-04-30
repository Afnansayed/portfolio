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
              My programming journey started during my Diploma in Computer Technology. I was immediately drawn to how code could turn abstract ideas into functional tools. What began with simple C programs has evolved into a deep passion for building complex, production-ready Full Stack applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love the challenge of architectural design—balancing a sleek, performant frontend with a robust, scalable backend. For me, coding isn't just about syntax; it's about problem-solving and creating meaningful user experiences.
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
                When I&apos;m not in front of a screen, I like to keep myself active and creative. I&apos;m a big fan of outdoor sports—especially football and cricket—which help me clear my head and stay focused.
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
                "I consider myself a lifelong learner. I thrive in collaborative environments where I can learn from others and share my own knowledge. I value discipline, consistency, and a good cup of coffee."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
