

const Hero = () => {
    return (
        <div className="bg-background">
            {/* Main Content */}
            <main className="pb-10 px-6">
                {/* Hero Section */}
                <section className="mb-16">
                    <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                        FULL STACK
                        <br />
                        <span className="text-muted">DEVELOPER</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                        CSE student at Northern University Bangladesh. Building robust, scalable Full Stack 
                        applications with a focus on high-performance backends and seamless user experiences.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 md:gap-16 mb-16">
                        <div className="relative group">
                            <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">+2</div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Years of<br />Experience</p>
                            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary/20 rounded-full group-hover:w-full transition-all" />
                        </div>
                        <div className="relative group">
                            <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">+15</div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Projects<br />Completed</p>
                            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary/20 rounded-full group-hover:w-full transition-all" />
                        </div>
                        <div className="relative group">
                            <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">+10</div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Tech Stack<br />Mastered</p>
                            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-primary/20 rounded-full group-hover:w-full transition-all" />
                        </div>
                    </div>
                </section>
                {/* Skills Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Orange Card */}
                    <div className="bg-primary rounded-2xl p-8 text-card relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="absolute inset-0 opacity-10">
                            <svg className="w-full h-full" viewBox="0 0 400 300">
                                <defs>
                                    <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <circle cx="20" cy="20" r="2" fill="white" opacity="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="400" height="300" fill="url(#dots)" />
                                <path d="M 0 0 Q 100 50 200 0 T 400 0" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-card" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-card">NEXT.JS, REACT,<br />TYPESCRIPT, TAILWIND</h3>

                            <button className="mt-8 inline-flex items-center gap-2 text-card hover:gap-3 transition-all">
                                <span className="font-semibold">Explore Projects</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Green Card */}
                    <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="absolute inset-0 opacity-10">
                            <svg className="w-full h-full" viewBox="0 0 400 300">
                                <defs>
                                    <pattern id="lines" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                                        <line x1="0" y1="0" x2="30" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="400" height="300" fill="url(#lines)" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 3h6v6H3V3zm8 0h6v6h-6V3zm8 0h2v6h-2V3zM3 11h6v6H3v-6zm8 0h6v6h-6v-6zm8 0h2v6h-2v-6zM3 19h6v2H3v-2zm8 0h6v2h-6v-2zm8 0h2v2h-2v-2z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-secondary-foreground">NODE.JS, EXPRESS,<br />PRISMA, POSTGRES,<br />REDIS, DOCKER</h3>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default Hero;