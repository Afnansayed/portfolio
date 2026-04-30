'use client';

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const projects = [
  {
    slug: 'coxs-wave',
    title: 'Cox’s Wave ',
    image: "/project/cox-wave.png",
    description: 'A specialized full-stack event management and tourism experience platform tailored for the Cox’s Bazar region. It features a robust triple-role ecosystem (Admin, Shop Owner, Customer) designed to coordinate tourism-driven events and logistics.',
    tech: ['Next.js', 'Redux Toolkit', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Zod'],
    challenges: 'Designing a relational database schema in PostgreSQL that effectively manages the interaction between event organizers (Shop Owners) and tourists (Customers). A significant hurdle was ensuring a mobile-first UI/UX to accommodate users booking experiences on-site, alongside implementing secure profile updates using FormData for image handling.',
    detailedDescription: `
      Cox’s Wave is a high-performance solution designed to streamline the coordination of tourism events and medical/blood donation camps in coastal regions. 
      Key technical implementations include:
      - **Database Architecture**: A normalized PostgreSQL schema managed via Prisma ORM, specifically designed to handle complex relational schemas for service providers and participants.
      - **State Management**: Advanced use of Redux Toolkit for real-time state synchronization across the event booking and management dashboard.
      - **Logic Engine**: A robust review and rating system that allows customers to provide feedback on their experiences, updating event credibility in real-time.
      - **UI/UX Strategy**: Strict adherence to a mobile-first approach, ensuring the platform is fully accessible and responsive for travelers using portable devices.
    `,
    futurePlans: 'Integration of real-time event notifications via WebSockets, expansion of the blood donation camp coordination feature, and the implementation of an automated ticketing system with secure online payments.',
    liveLink: 'https://cox-wave-client.vercel.app/',
    githubLink: 'https://github.com/Afnansayed/cox-wave-client',
  }
  ,
  {
    slug: 'tutor-flow',
    title: 'TutorFlow',
    image: "/project/tutor-flow.png",
    description: 'An advanced service-matching marketplace designed with a "TutorFlow" logic. It features a triple-role ecosystem (Student, Tutor, Admin) powered by a robust Next.js 14 App Router architecture. The platform includes dynamic profile management, an automated aggregate rating engine, and secure session handling via NextAuth and Better-Auth.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Better Auth', 'Tailwind CSS', 'Zod'],
    challenges: 'Designing a strictly-typed backend that preserves data integrity across complex many-to-many relationships (e.g., tutors to subject categories). A significant hurdle was engineering a secure Role-Based Access Control (RBAC) middleware using Better-Auth callbacks to eliminate horizontal privilege escalation risks, ensuring that sensitive tutor management APIs are inaccessible to student accounts.',
    detailedDescription: `
      SkillBridge is a full-stack solution addressing the fragmentation in the private tutoring market. 
      Key technical implementations include:
      - **Database Architecture**: A normalized PostgreSQL schema managed via Prisma ORM, featuring relational constraints to prevent duplicate reviews and ensure orphaned data cleanup.
      - **Security Layer**: Implementation of custom JWT session strategies within Better-Auth to inject user roles into the encrypted session token for real-time authorization checks.
      - **Logic Engine**: An asynchronous feedback system that updates tutor "Average Ratings" in real-time using a weighted average formula upon student review submission.
      - **UI/UX**: A mobile-first, responsive interface built with Shadcn/UI and Tailwind CSS, following the usability guidelines specified in the project SRS.
    `,
    futurePlans: 'Integration of a real-time messaging system using WebSockets, implementation of multi-criteria search filtering (Price Range + Rating), and a dedicated Admin Report Management dashboard for community moderation.',
    liveLink: 'https://tutor-management-client-two.vercel.app/',
    githubLink: 'https://github.com/Afnansayed/tutorflow-client',
  },
  {
    slug: 'cs-agro-industries',
    title: 'CS Agro Industries (Adimela)',
    image: "/project/cs-agro.jpeg",
    description: 'A global agro-commerce and sustainability platform specializing in the export of authentic Bangladeshi agricultural products and the implementation of backyard greenhouse solutions for the USA market.',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Prisma', 'NextAuth', 'Zod'],
    challenges: 'Developing an integrated global supply chain dashboard that handles complex export documentation and certification tracking for over 13 regulatory bodies. A major technical hurdle was engineering a consultation booking system for USDA-grant-eligible greenhouse projects, requiring a seamless bridge between Bangladeshi production data and USA-based customer service.',
    detailedDescription: `
      CS Agro Industries is an enterprise-grade platform (under the brand "Adimela") designed to empower sustainable agriculture and global trade. 
      Key technical implementations include:
      - **E-Commerce Architecture**: A robust product catalog featuring over 500 high-quality items, including aromatic rice, organic spices, and seasonal produce, with secure bulk order capabilities.
      - **Compliance Engine**: A dedicated certification management module that tracks and displays 100% compliant official documents, including BSTI, E-Cab, and organic manufacturer certificates.
      - **Sustainability Logic**: A specialized consultation engine for cold-climate backyard greenhouses, providing expert guidance and winter-growing solutions for North American users.
      - **Multi-Regional Logistics**: Implementation of real-time order tracking and dual-office communication workflows (Dhaka and New York) to facilitate smooth international wholesale operations.
    `,
    futurePlans: 'Implementation of an AI-driven crop performance predictor for greenhouse users, integration of a blockchain-based traceability system for farm-to-kitchen transparency, and expanding the private label OEM/ODM management dashboard.',
    liveLink: 'https://csagroind.zsi.ai/',
    githubLink: 'https://github.com/afnansayed/cs-agro-industries',
  },
  {
    slug: 'bistro-boss',
    title: 'Bistro Boss',
    image: "/project/restaurant.png",
    description: 'A premium full-stack restaurant management platform featuring a complete culinary catalog, secure table reservations, and a dual-dashboard system for administrators and diners.',
    tech: ['Next.js', 'Redux Toolkit', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'NextAuth'],
    challenges: 'Implementing a synchronized state management system to handle real-time menu updates and cart persistence across different user sessions. A significant challenge was optimizing the image-heavy food gallery for fast loading while maintaining high visual fidelity, alongside securing administrative routes to prevent unauthorized access to revenue and order data.',
    detailedDescription: `
      Bistro Boss is a comprehensive solution designed to modernize the dining experience and backend kitchen operations. 
      Key technical implementations include:
      - **Order Management System**: A robust cart and checkout workflow that allows users to manage multiple food categories and track order status in real-time.
      - **Advanced Filtering Logic**: Implementation of a dynamic menu system that categorizes items (Salads, Pizzas, Soups, Desserts) using asynchronous data fetching for a seamless UI experience.
      - **Security & RBAC**: A secure authentication layer using role-based access control to separate customer browsing from administrative inventory management.
      - **Responsive UI/UX**: A mobile-first design strategy utilizing Shadcn/UI and Framer Motion for smooth transitions, ensuring diners can easily order from any device.
    `,
    futurePlans: 'Integration of a real-time table booking calendar with SMS notifications, implementation of a loyalty points system for frequent diners, and a multi-branch management dashboard for restaurant chains.',
    liveLink: 'https://restuarant-frontend-hazel.vercel.app',
    githubLink: 'https://github.com/afnansayed/bistro-boss-restaurant',
  }
];

export function ProjectsSection() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16 ">
          <h2 className="text-6xl md:text-7xl font-bold mb-2">
            <span className="text-foreground">FEATURED</span>
            <br />
            <span className="text-muted/40">PROJECTS</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 max-w-3xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col md:flex-row items-start  gap-6 pb-12 border-b border-muted/20 last:border-b-0 group hover:opacity-95 transition-opacity"
            >
              {/* Project Image Placeholder */}
              <div className={`flex-shrink-0 w-32 h-32 rounded-3xl  shadow-xl overflow-hidden cursor-pointer group-hover:scale-105 transition-transform duration-300`}>
                <Image
                  width={200}
                  height={200}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Link href={`/projects/${project.slug}`}>
                    <MoveUpRight className="text-muted-foreground group-hover:text-primary transition-colors w-6 h-6" />
                  </Link>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description.slice(0, 100) + '...'}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-xs font-medium border border-muted/20">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
