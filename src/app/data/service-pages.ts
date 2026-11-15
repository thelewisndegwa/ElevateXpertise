export type ServiceIcon = 'globe' | 'device' | 'code' | 'bolt' | 'mail' | 'chat';

export interface ServiceCard {
  icon: ServiceIcon;
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServicePageContent {
  badge: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  heroCta: string;
  glowFromRight: boolean;
  cardsHeading: string;
  cards: ServiceCard[];
  stepsHeading?: string;
  steps?: ServiceStep[];
  stats?: ServiceStat[];
  ctaHeading: string;
  ctaLabel: string;
}

export const servicePages: Record<string, ServicePageContent> = {
  tech: {
    badge: 'EX Tech',
    titleLead: 'Software Built to',
    titleAccent: 'Move Your Business Forward',
    description: 'Websites, web apps, and mobile products designed around how your business works.',
    heroCta: 'Start Your Project',
    glowFromRight: true,
    cardsHeading: 'What We Build',
    cards: [
      {
        icon: 'globe',
        title: 'Websites & Web Applications',
        description: 'Marketing sites, dashboards, and portals built to load fast and convert.',
      },
      {
        icon: 'device',
        title: 'Mobile Applications',
        description: 'iOS and Android apps, from a first version to a product people use daily.',
      },
      {
        icon: 'code',
        title: 'Custom Software & APIs',
        description: 'Internal tools and APIs that connect the systems you already run.',
      },
    ],
    stepsHeading: 'How We Work',
    steps: [
      {
        title: 'Discovery',
        description: "We learn your goals, users, and constraints — then define a scope that's realistic and impactful.",
      },
      {
        title: 'Design',
        description: 'Wireframes and high‑fidelity UI — you see and approve the look and feel before we write a line of code.',
      },
      {
        title: 'Develop & Test',
        description: "Agile sprints with regular demos. You're never left guessing — you see progress every week.",
      },
      {
        title: 'Launch & Support',
        description: 'We deploy, monitor, and stay on hand for updates — your product keeps getting better after day one.',
      },
    ],
    ctaHeading: "Let's Build Something That Matters",
    ctaLabel: 'Start Your Project',
  },
  automation: {
    badge: 'EX Automation',
    titleLead: 'Intelligent Automation',
    titleAccent: 'That Works While You Sleep',
    description: 'Chatbots, workflows, and integrations that keep the business running around the clock.',
    heroCta: 'Book a Free Discovery Call',
    glowFromRight: false,
    cardsHeading: 'What We Automate',
    cards: [
      {
        icon: 'bolt',
        title: 'Workflow Orchestration',
        description: 'Moves data between your CRM, email, and internal tools on its own.',
      },
      {
        icon: 'mail',
        title: 'Smart Outreach & Follow‑Up',
        description: 'Email and SMS follow-ups triggered by what a lead actually does.',
      },
      {
        icon: 'chat',
        title: 'AI Chatbots & Virtual Assistants',
        description: 'Answers, qualifies, and books on your site, WhatsApp, or Instagram.',
      },
    ],
    stats: [
      { value: '10x', label: 'Faster response times with AI assistants' },
      { value: '80%', label: 'Reduction in manual, repetitive tasks' },
      { value: '24/7', label: 'Always‑on customer engagement' },
    ],
    ctaHeading: 'Ready to Put Your Business on Autopilot?',
    ctaLabel: "Let's Automate It",
  },
};
