'use client';

import { Home, Briefcase, Hammer, Pencil, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { href: '/', icon: Home, label: 'Home' },
        { href: '/projects', icon: Briefcase, label: 'Projects' },
        { href: '/skills', icon: Hammer, label: 'Skills' },
        { href: '/experience', icon: GraduationCap, label: 'Experience' },
        { href: '/thoughts', icon: Pencil, label: 'Thoughts' },
    ];

    return (
        <div className='w-full mx-auto'>
            <TooltipProvider delayDuration={0}>
                <nav className="fixed top-6 left-1/2 -translate-x-1/2 border bg-background/80 backdrop-blur-md border-border px-4 py-2 flex gap-4 z-50 rounded-full shadow-lg">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Tooltip key={item.href}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "p-2 rounded-full transition-all duration-300 group relative",
                                            isActive
                                                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-110"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                        )}
                                    >
                                        <item.icon className={cn(
                                            "w-5 h-5 transition-transform group-hover:scale-110",
                                            isActive && "scale-110"
                                        )} />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" className="font-semibold">
                                    {item.label}
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                </nav>
            </TooltipProvider>
        </div>
    );
};

export default Navbar;