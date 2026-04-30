'use client';

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Starting and Growing a Career in Web Design',
      excerpt:
        'As the Internet continues to develop and grow exponentially, jobs related to the industry are too, particularly those that relate to web design and development.',
      date: 'Apr 8, 2022',
      readTime: '8min read',
    },
    {
      id: 2,
      title: 'Create a Landing Page That Performs Great',
      excerpt:
        'Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.',
      date: 'Mar 15, 2022',
      readTime: '6min read',
    },
    {
      id: 3,
      title: 'How Can Designers Prepare for the Future?',
      excerpt:
        'Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.',
      date: 'Feb 28, 2022',
      readTime: '8min read',
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-2">
            <span className="text-foreground">DESIGN</span>
            <br />
            <span className="text-muted/40">THOUGHTS</span>
          </h2>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="pb-8 border-b border-muted/20 last:border-b-0 group cursor-pointer"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Decorative dot indicator */}
                <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-primary/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
