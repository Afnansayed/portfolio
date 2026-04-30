'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-muted/20 bg-muted/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
            <Image 
              src="/logo_afnan.png" 
              alt="Afnan Logo" 
              width={48} 
              height={48} 
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground tracking-tight">Afnan Sayed Razin</h3>
            <p className="text-xs font-bold text-primary uppercase tracking-widest">Full Stack Developer</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-bold">
            Built with Next.js & Passion
          </div>
        </div>
      </div>
    </footer>
  );
}
