'use client';

import { FileText, Github, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';
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
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <Image src={"/logo_afnan.png"} alt='Logo' width={300} height={300} className='rounded-full object-cover'></Image>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-card-foreground text-center mb-6 leading-relaxed">
          A CSE student and Full Stack Developer specialized in building scalable backend systems and high-performance web applications.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a href="https://github.com/Afnansayed" target="_blank" rel="noopener noreferrer" className="p-2  rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="p-2  rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-2  rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="p-2  rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer" className="p-2  rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* Resume Button */}
        <button
          onClick={() => window.open('#', '_blank')}
          className="w-full bg-primary text-white py-3 rounded-2xl font-bold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
        >
          <FileText className="w-5 h-5" />
          View Resume
        </button>
      </div>
    </div>
  );
}
