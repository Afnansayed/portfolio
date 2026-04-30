'use client';

import { FileText, Github, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';

export function ProfileCard() {
  return (
    <div className="md:sticky md:top-0  w-full md:w-92 flex items-center justify-center p-6">
      <div className="bg-card rounded-3xl p-6 w-full max-w-sm shadow-2xl">
        {/* Profile Image Container */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-primary rounded-2xl -rotate-6 opacity-20 blur-lg" />
          <div className="relative bg-primary rounded-2xl overflow-hidden aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Afnan Sayed Razin"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-card-foreground text-center mb-1">
          Afnan Sayed Razin
        </h2>

        {/* Decorative Flame Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-card" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.3 4 13.46 4 19.22 8.66 24 15.33 24c6.67 0 11.67-4.78 11.67-10.54 0-1.5-.3-2.95-.86-4.35-.5-1.28-1.3-2.4-2.28-3.25" />
            </svg>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-card-foreground text-center mb-6 leading-relaxed">
          A CSE student and Full Stack Developer specialized in building scalable backend systems and high-performance web applications.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a href="#" className="text-primary hover:text-primary/80 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-primary hover:text-primary/80 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-primary hover:text-primary/80 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-primary hover:text-primary/80 transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Video Tutorial Button */}
        <button className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
          <FileText className="w-4 h-4" />
          Download Resume
        </button>
      </div>
    </div>
  );
}
