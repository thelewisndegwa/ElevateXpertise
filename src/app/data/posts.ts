// posts.ts
export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  date: string;
}

export const posts: Post[] = [
  {
    title: 'Top Mobile-First Digital Economies',
    slug: 'top-mobile-first-digital-economies',
    excerpt:
      'A look at global leaders in mobile-first commerce and digital infrastructure, from China and India to Kenya and Singapore.',
    date: '2025-01-28',
    body: `China: A global leader in mobile-first commerce, where mobile technologies and services contribute roughly 6.2% of GDP ($1.2 trillion). It serves as a model for "leapfrogging" traditional financial infrastructure, driving high rates of mobile payment adoption and digital services.

India: With 806 million active internet users as of February 2025, India has a massive mobile-first population driven by widespread 4G, with 90% of adults owning a financial account. It is a leading country in digital payments, fintech, and digital ID, with 4 out of 10 global software freelancers based there.

Indonesia: A top-four global market for internet users (212M), where a young population and rapid adoption of "super-apps" have fostered a fast-growing digital economy, driven by mobile-first services like GoTo.

Kenya: A pioneer in mobile money, with services like M-Pesa allowing users to transfer money, save, and pay bills without a bank account, setting the standard for African mobile-first banking.

South Africa: A "mobile-first" economy with over 90% of internet users accessing services via mobile devices, and active internet users representing 74.7% of the population.

Singapore: While highly advanced in all areas, Singapore leads Southeast Asia in smart city initiatives and digital infrastructure (87% smartphone penetration).

Other Key Countries: The Philippines (97.5M users), Vietnam (79.8M users), and Thailand (65.4M users) are experiencing significant growth in mobile-first digital, particularly in e-commerce and fintech.`,
  },
  {
    title: 'Abstract',
    slug: 'trust-adoption-whatsapp-ai-kenya',
    excerpt:
      'An empirical study of a WhatsApp-based AI assistant for small businesses in Kenya, centering on trust and adoption in a mobile-first market.',
    date: '2025-01-28',
    body: `Kenya represents one of the most dynamic mobile-first digital economies in the world, characterized by rapid smartphone adoption, widespread mobile payment usage, and extensive reliance on messaging platforms such as WhatsApp for business communication. As artificial intelligence (AI) tools become increasingly accessible, understanding the factors that influence trust and adoption among small business owners is critical. This project proposes an empirical study of a WhatsApp-based AI assistant designed and built by the researcher for small businesses in Kenya. Rather than prioritizing technical efficiency alone, the study centers on understanding the social, technical, and cultural factors that shape business owners' trust in and willingness to adopt AI assistants for customer-facing interactions. Using a mixed-methods approach, the research combines system usage data with surveys and semi-structured interviews conducted before and after deployment. Secondary measures, such as response time and missed inquiries, are used to contextualize adoption outcomes. By examining real-world use in a fast-growing, mobile-first market, this project contributes to human-centered AI research and offers insights into designing trustworthy, culturally aligned AI systems for small businesses in the Global South.`,
  },
];
