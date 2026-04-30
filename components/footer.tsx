'use client';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-muted/20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-foreground">Afnan Sayed Razin</h3>
          <p className="text-sm text-muted-foreground mt-1">Full Stack Developer & CSE Student</p>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. Designed with passion.
        </div>
      </div>
    </footer>
  );
}
