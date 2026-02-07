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
        title: "SEO",
        number: "(01)",
        image: "/assets/imgs/shape/symbol1.svg",
        description: "Research, positioning, messaging, and growth planning.",
        detailsLink: "/services/seo",
        items: [
          "1. Market & Competitor Analysis",
          "2. Positioning & Messaging Strategy",
          "3. Funnel Planning & KPI Definition",
        ],
        itemLink: "/service-details",
      },
      {
        id: 2,
        title: "Web Design",
        number: "(02)",
        image: "/assets/imgs/shape/symbol6.svg",
        description: "Modern, fast, conversion-focused marketing websites.",
        detailsLink: "/services/web-design",
        items: [
          "1. UX/UI & Website Design",
          "2. High-Performance Development",
          "3. SEO & Speed Optimization",
        ],
        itemLink: "/service-details",
      },
    ],
  };

  export default serviceData;
