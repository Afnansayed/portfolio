'use client';

import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: 'select',
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
            <span className="text-foreground">LET&apos;S WORK</span>
            <br />
            <span className="text-muted/40">TOGETHER</span>
          </h1>
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
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-muted/20 border border-muted/40 text-foreground placeholder-muted-foreground rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-muted/30 transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                placeholder="Your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-muted/20 border border-muted/40 text-foreground placeholder-muted-foreground rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-muted/30 transition-all"
              />
            </div>
          </div>

          {/* Budget Field */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Budget</label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full bg-muted/20 border border-muted/40 text-foreground rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-muted/30 transition-all appearance-none cursor-pointer"
            >
              <option value="select" disabled>Select...</option>
              <option value="5k">$5,000 - $10,000</option>
              <option value="10k">$10,000 - $25,000</option>
              <option value="25k">$25,000 - $50,000</option>
              <option value="50k">$50,000+</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
            <textarea
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-muted/20 border border-muted/40 text-foreground placeholder-muted-foreground rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-muted/30 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 active:scale-95 transition-all text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
