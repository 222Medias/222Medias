export interface IService {
  id: number;
  title: string;
  number: string;
  image: string;
  description: string;
  detailsLink: string;
  items: string[];
  itemLink: string;
}

export interface ServiceData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  viewAllLink: string;
  services: IService[];
}
const serviceData = {
    sectionSubtitle: "Our Services",
    sectionTitle: "What we offer to you",
    viewAllText: "Explore All Services",
    viewAllLink: "/services",
    services: [
      {
        id: 1,
        title: "Marketing Strategy",
        number: "(01)",
        image: "/assets/imgs/shape/shape-6.webp",
        description: "Research, positioning, messaging, and growth planning.",
        detailsLink: "/contact",
        items: [
          "1. Market & Competitor Analysis",
          "2. Positioning & Messaging Strategy",
          "3. Funnel Planning & KPI Definition",
        ],
        itemLink: "/service-details",
      },
      {
        id: 2,
        title: "Performance Marketing",
        number: "(02)",
        image: "/assets/imgs/shape/shape-7.webp",
        description: "Lead generation, paid campaigns, and funnel optimization.",
        detailsLink: "/digital-agency/contact",
        items: [
          "1. Paid Advertising Campaigns",
          "2. Lead Generation & Conversion Optimization",
          "3. Performance Tracking & Reporting",
        ],
        itemLink: "/service-details",
      },
      {
        id: 3,
        title: "Web Design & Development",
        number: "(03)",
        image: "/assets/imgs/shape/shape-8.webp",
        description: "Modern, fast, conversion-focused marketing websites.",
        detailsLink: "/contact",
        items: [
          "1. UX/UI & Website Design",
          "2. High-Performance Development",
          "3. SEO & Speed Optimization",
        ],
        itemLink: "/service-details",
      },
      {
        id: 4,
        title: "Branding & Creative",
        number: "(04)",
        image: "/assets/imgs/shape/shape-8.webp",
        description: "Brand identity systems, campaign design, and digital assets.",
        detailsLink: "/contact",
        items: [
          "1. Brand Identity & Guidelines",
          "2. Visual Systems & Design Assets",
          "3. Campaign & Marketing Creatives",
        ],
        itemLink: "/service-details",
      },
    ],
  };

  export default serviceData;
