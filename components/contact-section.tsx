'use client';

import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'select',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-foreground">GET IN</span>
            <br />
            <span className="text-muted/40">TOUCH</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Currently looking for internship opportunities and interesting projects to collaborate on.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                placeholder="Afnan Razin"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-muted/20 border border-muted/40 text-foreground placeholder-muted-foreground rounded-lg px-4 py-4 focus:outline-none focus:border-primary focus:bg-muted/30 transition-all shadow-sm"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                placeholder="hello@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-muted/20 border border-muted/40 text-foreground placeholder-muted-foreground rounded-lg px-4 py-4 focus:outline-none focus:border-primary focus:bg-muted/30 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Project Type Field */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">What are you interested in?</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full bg-muted/20 border border-muted/40 text-foreground rounded-lg px-4 py-4 focus:outline-none focus:border-primary focus:bg-muted/30 transition-all appearance-none cursor-pointer shadow-sm"
            >
              <option value="select" disabled>Select...</option>
              <option value="internship">Internship Opportunity</option>
              <option value="full-stack">Full Stack Project</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
            <textarea
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-muted/20 border border-muted/40 text-foreground placeholder-muted-foreground rounded-lg px-4 py-4 focus:outline-none focus:border-primary focus:bg-muted/30 transition-all resize-none shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-4 px-6 rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all text-lg shadow-lg shadow-primary/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
