// projects.ts
export interface Project {
    title: string;
    description: string;
    image: string;
    imagePosition?: string;
    link: string;
    tags: string[];
  }
  
  export const projects: Project[] = [
    {
      title: 'Biashara Assistant',
      description: 'Your Smart WhatsApp Assistant for Business. Biashara-Assistant helps Kenyan businesses automate customer service, handle bookings, and accept M-Pesa payments directly through WhatsApp. Built for salons, restaurants, service providers, and retail shops to save time and never miss a customer.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
      link: 'https://biashara.business/',
      tags: ['AI Automation', 'WhatsApp'],
    },
    {
      title: 'Landlord-Tenant Management App',
      description: 'A robust solution designed to simplify property management for landlords and enhance the renting experience for tenants. The app offers tools for lease agreements, payment tracking, maintenance requests, and communication between tenants and landlords.',
      image: '/assets/project.png',
      link: 'https://play.google.com/store/apps/details?id=com.cityrealty.landlord_tenant',
      tags: ['Mobile App', 'Real Estate'],
    },
    {
      title: 'Elevate Profile Studio',
      description: 'Premium digital identity for modern professionals. We create elegant portfolio websites, executive profiles, and digital business cards for consultants, founders, and executives across Kenya and Africa.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=900&h=520&q=80',
      imagePosition: 'center 30%',
      link: 'https://elevate-profile-studio.vercel.app/',
      tags: ['Website', 'Professional Branding'],
    },
    {
      title: 'AI in Action',
      description: 'A live 4-week Zoom course for executives, managers, and senior African professionals who want to use ChatGPT, Claude, Gemini, and Copilot confidently at work — no technical background required. 8 live sessions with practical workplace applications.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
      link: 'https://cross-industry-ai-literacy-program.vercel.app/',
      tags: ['AI', 'Education'],
    },
    {
      title: 'Golden Sail Rong Da Logistics',
      description: 'Golden Sail App is a digital solution designed to optimize cargo transportation, fleet management, and supply chain operations. It connects shippers, carriers, and drivers on a unified platform, ensuring real-time tracking, efficient route planning, and seamless communication between stakeholders.',
      image: '/assets/dashboard.svg',
      link: 'https://goldensail.de/',
      tags: ['Web App', 'Logistics'],
    },
    {
      title: 'Topnotch Books',
      description: 'KCSE revision made simple, visual, and deeply memorable. Topnotch Books is an e-commerce store built around the Octopus Revision Method—turning dense past papers into clear, visual study paths. Students get structured, exam-aligned practice with featured titles, educational videos, and a blog for revision tips and study strategies.',
      image: '/assets/topnotch.png',
      link: 'https://topnotch-ecom-store.vercel.app/',
      tags: ['E-Commerce', 'Education'],
    },
    {
      title: 'Murphy Merchants Auctioneers',
      description: 'Murphy Merchants Auctioneers runs live auctions for office furniture, commercial property, vehicles, land, and electronics. Browse items, place bids, and contact the team for questions—all through a clear, secure platform designed for buyers and sellers across Kenya.',
      image: '/assets/murphy.png',
      link: 'https://murphy-tau.vercel.app/auctions.html',
      tags: ['Web App', 'Marketplace'],
    },
    {
      title: 'Code Kenya',
      description: 'Code Kenya is an education platform offering career-focused bootcamps and internships in the tech industry. We provide hands-on training in fields such as Software Engineering, Artificial Intelligence, and Entrepreneurship. Our unique program combines intensive bootcamps with internship placements, ensuring students gain valuable real-world experience.',
      image: '/assets/codekenya.svg',
      link: 'https://www.codekenya.org/',
      tags: ['Web App', 'Education'],
    },
    {
      title: 'P.C.E.A Makupa Parish',
      description: "P.C.E.A Makupa Parish is a place where faith and community come together. The website showcases services, leadership, and opportunities to engage — helping the congregation stay connected both in person and online.",
      image: '/assets/pceamakupaparish.svg',
      link: 'https://pcea-makupa.vercel.app/index.html',
      tags: ['Website', 'Community'],
    },
  ];
