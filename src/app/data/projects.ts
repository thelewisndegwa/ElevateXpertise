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
      title: 'Biashara Business',
      description: 'WhatsApp assistant for bookings, customer service, and M-Pesa.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
      link: 'https://biashara.business/',
      tags: ['AI Automation', 'WhatsApp'],
    },
    {
      title: 'Landlord-Tenant Management App',
      description: 'Leases, rent, and maintenance in one app for landlords and tenants.',
      image: '/assets/project.png',
      link: 'https://play.google.com/store/apps/details?id=com.cityrealty.landlord_tenant',
      tags: ['Mobile App', 'Real Estate'],
    },
    {
      title: 'Golden Sail Rong Da Logistics',
      description: 'Cargo, fleet, and shipment tracking for shippers and drivers.',
      image: '/assets/dashboard.svg',
      link: 'https://goldensail.de/',
      tags: ['Web App', 'Logistics'],
    },
    {
      title: 'Elevate Profile Studio',
      description: 'Portfolio sites and digital business cards for professionals.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=900&h=520&q=80',
      imagePosition: 'center 30%',
      link: 'https://elevateprofilestudio.com',
      tags: ['Website', 'Professional Branding'],
    },
    {
      title: 'AI in Action',
      description: 'A four-week live course on using AI tools at work.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
      link: 'https://cross-industry-ai-literacy-program.vercel.app/',
      tags: ['AI', 'Education'],
    },
    {
      title: 'Topnotch Books',
      description: 'Visual KCSE revision, sold as an online bookstore.',
      image: '/assets/topnotch.png',
      link: 'https://topnotch-ecom-store.vercel.app/',
      tags: ['E-Commerce', 'Education'],
    },
    {
      title: 'Murphy Merchants Auctioneers',
      description: 'Live auctions for property, vehicles, and equipment.',
      image: '/assets/murphy.png',
      link: 'https://murphy-tau.vercel.app/auctions.html',
      tags: ['Web App', 'Marketplace'],
    },
    {
      title: 'Code Kenya',
      description: 'Bootcamps and internships in software, AI, and entrepreneurship.',
      image: '/assets/codekenya.svg',
      link: 'https://www.codekenya.org/',
      tags: ['Web App', 'Education'],
    },
    {
      title: 'P.C.E.A Makupa Parish',
      description: 'A parish site for services, leadership, and community news.',
      image: '/assets/pceamakupaparish.svg',
      link: 'https://pceamakupaparish.org',
      tags: ['Website', 'Community'],
    },
  ];
