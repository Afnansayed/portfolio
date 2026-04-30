import { Home, Briefcase, Hammer, Pencil, Settings } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='w-full mx-auto'>
            {/* Top Navigation - Centered */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 border bg-background/80 backdrop-blur-sm border-border px-6 py-3 flex gap-8 z-50 rounded-full shadow-sm">
                <button className="text-foreground/60 hover:text-foreground transition-colors">
                    <Home className="w-6 h-6" />
                </button>
                <button className="text-foreground/60 hover:text-foreground transition-colors">
                    <Briefcase className="w-6 h-6" />
                </button>
                <button className="text-foreground/60 hover:text-foreground transition-colors">
                    <Hammer className="w-6 h-6" />
                </button>
                <button className="text-foreground/60 hover:text-foreground transition-colors">
                    <Pencil className="w-6 h-6" />
                </button>
                <button className="text-foreground/60 hover:text-foreground transition-colors">
                    <Settings className="w-6 h-6" />
                </button>
            </nav>
        </div>
    );
};

export default Navbar;