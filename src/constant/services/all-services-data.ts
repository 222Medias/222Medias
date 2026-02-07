import { IServiceData } from "@/constant/DigitalAgency/service-details/service-section-data";
import { IServiceDetails } from "@/constant/DigitalAgency/service-details/service-details-data";
import { ProcessData } from "@/constant/DigitalAgency/process";
import { IFaq } from "@/constant/DigitalAgency/faq/faq-data";

export interface ServicePageData {
  slug: string;
  name: string;
  heroSection: IServiceData;
  problemSection: {
    title: string;
    description: string;
    painPoints: string[];
  };
  approachSection: IServiceDetails;
  whatsIncluded: {
    title: string;
    categories: {
      title: string;
      items: string[];
    }[];
  };
  processSection: ProcessData;
  whyWorkWithUs: {
    title: string;
    points: string[];
    footer: string;
  };
  idealClients: {
    title: string;
    description: string;
    points: string[];
  };
  faqs: IFaq[];
  finalCTA: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const allServicesData: ServicePageData[] = [
  {
    slug: "web-design",
    name: "Web Design",
    heroSection: {
      subtitle: "Web Design",
      title: "Design Websites That Convert and Impress",
      description:
        "Your website is often the first impression customers have of your business. We create modern, responsive websites that not only look great but drive real results.",
      buttons: [
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-primary",
          label: "Get a Free Consultation",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
      ],
      services: [
        "Website Strategy & Planning",
        "Design & Development",
        "Technical Optimization",
        "Mobile-First Design",
        "Content & Branding",
        "Analytics & Support",
        "User Experience Design",
        "Performance Optimization",
        "SEO-Friendly Structure",
      ],
      gallery: [
        {
          src: "/assets/imgs/gallery/service-details-1.jpg",
          alt: "Web Design Example 1",
        },
        {
          src: "/assets/imgs/gallery/service-details-2.webp",
          alt: "Web Design Example 2",
        },
      ],
    },
    problemSection: {
      title: "What's Holding Your Website Back?",
      description: "Many businesses struggle with their website because:",
      painPoints: [
        "Their site looks outdated or unprofessional",
        "Visitors can't easily find information or take action",
        "Mobile performance is poor or slow",
        "Branding isn't consistent across pages",
      ],
    },
    approachSection: {
      sectionHeader: {
        subtitle: "Our Approach",
        title: "Our Approach to Web Design",
      },
      video: {
        src: "/videos/Business_People.mp4",
        type: "video/mp4",
      },
      content: {
        title: "We create websites that are strategically designed for your audience",
        paragraphs: [
          "Our web design work focuses on user-centered design that converts visitors, fast and responsive mobile-first performance, and clear branding and messaging across pages.",
          "Everything we do is built to support long-term growth with scalable designs that grow with your business.",
        ],
      },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        {
          title: "Website Strategy & Planning",
          items: [
            "Audience research & user personas",
            "Sitemap & navigation planning",
            "Design inspiration & moodboards",
          ],
        },
        {
          title: "Design & Development",
          items: [
            "Custom page layouts and templates",
            "Mobile-first responsive design",
            "Interactive elements and calls-to-action",
          ],
        },
        {
          title: "Technical Optimization",
          items: [
            "Fast load times",
            "SEO-friendly structure",
            "Cross-browser compatibility",
          ],
        },
        {
          title: "Content & Branding",
          items: [
            "Messaging and copy alignment",
            "Visual branding integration",
            "Image optimization",
          ],
        },
        {
          title: "Reporting & Support",
          items: [
            "Analytics tracking setup",
            "Post-launch support",
            "Clear performance updates",
          ],
        },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process",
      sectionTitle: "How We Build Your Website",
      ctaText: "Get Started",
      ctaLink: "/contact",
      steps: [
        {
          id: 1,
          number: "01",
          title: "Audit & Discovery",
          description: "We analyze your current website, competitors, and goals.",
          image: "/assets/imgs/icon/icon1.png",
        },
        {
          id: 2,
          number: "02",
          title: "Strategy & Planning",
          description: "We define the site structure, user experience, and design direction.",
          image: "/assets/imgs/icon/icon2.png",
        },
        {
          id: 3,
          number: "03",
          title: "Design & Build",
          description: "We create responsive, optimized, and visually engaging pages.",
          image: "/assets/imgs/icon/icon3.png",
        },
        {
          id: 4,
          number: "04",
          title: "Launch & Growth",
          description: "We monitor performance, gather feedback, and refine the experience.",
          image: "/assets/imgs/icon/icon4.png",
        },
      ],
    },
    whyWorkWithUs: {
      title: "Why Work With Us?",
      points: [
        "Strategy-first web design (no guesswork)",
        "Clear communication and realistic timelines",
        "Design and marketing working together",
        "Built for real businesses, not just pretty websites",
      ],
      footer: "We focus on measurable results that support your business goals.",
    },
    idealClients: {
      title: "Is This Right for You?",
      description: "This service is ideal if you:",
      points: [
        "Want a modern, professional website",
        "Serve a local, regional, or online market",
        "Have a website but it's underperforming",
        "Are looking for sustainable growth through design",
      ],
    },
    faqs: [
      {
        question: "How long does a website take to launch?",
        answer: "Most sites take 6–12 weeks depending on complexity.",
      },
      {
        question: "Do you offer redesigns only?",
        answer: "We do both new websites and redesigns for existing sites.",
      },
      {
        question: "Is web design better than SEO or ads?",
        answer: "Design creates the foundation for all marketing. A great website + SEO + ads works best.",
      },
    ],
    finalCTA: {
      title: "Let's Build Your Website",
      description: "Turn your website into a powerful tool that impresses visitors and drives results.",
      buttonText: "Request a Free Web Design Consultation",
    },
  },
  {
    slug: "seo",
    name: "Search Engine Optimization",
    heroSection: {
      subtitle: "Search Engine Optimization (SEO)",
      title: "Be Found by the Right Customers at the Right Time",
      description:
        "SEO helps your business show up when people are actively searching for your services. We focus on building long-term visibility that drives qualified traffic, not just rankings.",
      buttons: [
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-primary",
          label: "Get a Free Consultation",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
      ],
      services: [
        "SEO Strategy & Research",
        "On-Page Optimization",
        "Technical SEO",
        "Local SEO",
        "Keyword Research",
        "Content Optimization",
        "Link Building",
        "Performance Tracking",
        "Competitor Analysis",
      ],
      gallery: [
        {
          src: "/assets/imgs/gallery/service-details-1.jpg",
          alt: "SEO Strategy",
        },
        {
          src: "/assets/imgs/gallery/service-details-2.webp",
          alt: "SEO Results",
        },
      ],
    },
    problemSection: {
      title: "What's Holding Your Website Back?",
      description: "Many businesses struggle with SEO because:",
      painPoints: [
        "Their website isn't optimized for search engines",
        "Competitors dominate Google results",
        "Traffic is inconsistent or irrelevant",
        "Local customers can't find them online",
      ],
    },
    approachSection: {
      sectionHeader: {
        subtitle: "Our Approach",
        title: "Our Approach to SEO",
      },
      video: {
        src: "/videos/Business_People.mp4",
        type: "video/mp4",
      },
      content: {
        title: "Data-driven SEO that attracts customers ready to take action",
        paragraphs: [
          "We use a strategic, data-driven approach to improve your visibility and attract customers who are ready to take action. Our SEO work focuses on high-intent keyword targeting, technical performance, and content optimization.",
          "Everything we do is built for sustainable growth with clear tracking and continuous optimization.",
        ],
      },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        {
          title: "SEO Strategy & Research",
          items: [
            "Keyword research based on search intent",
            "Competitor analysis",
            "SEO opportunity mapping",
          ],
        },
        {
          title: "On-Page Optimization",
          items: [
            "Page titles & meta descriptions",
            "Header and content optimization",
            "Internal linking improvements",
          ],
        },
        {
          title: "Technical SEO",
          items: [
            "Website speed optimization",
            "Mobile performance fixes",
            "Indexing and crawlability improvements",
          ],
        },
        {
          title: "Local SEO",
          items: [
            "Google Business Profile optimization",
            "Local keyword targeting",
            "Improved map visibility",
          ],
        },
        {
          title: "Reporting & Tracking",
          items: [
            "Keyword ranking tracking",
            "Traffic insights",
            "Clear performance updates",
          ],
        },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process",
      sectionTitle: "How We Improve Your SEO",
      ctaText: "Get Started",
      ctaLink: "/contact",
      steps: [
        {
          id: 1,
          number: "01",
          title: "Audit",
          description: "We analyze your website, competitors, and current performance.",
          image: "/assets/imgs/icon/icon1.png",
        },
        {
          id: 2,
          number: "02",
          title: "Strategy",
          description: "We create a clear SEO plan aligned with your business goals.",
          image: "/assets/imgs/icon/icon2.png",
        },
        {
          id: 3,
          number: "03",
          title: "Optimization",
          description: "We implement on-page, technical, and local SEO improvements.",
          image: "/assets/imgs/icon/icon3.png",
        },
        {
          id: 4,
          number: "04",
          title: "Growth",
          description: "We monitor results and continuously optimize for better performance.",
          image: "/assets/imgs/icon/icon4.png",
        },
      ],
    },
    whyWorkWithUs: {
      title: "Why Work With Us?",
      points: [
        "Strategy-first SEO (no guesswork)",
        "Clear communication and realistic expectations",
        "Design and marketing working together",
        "Built for real businesses, not vanity metrics",
      ],
      footer: "We focus on measurable growth that supports your long-term goals.",
    },
    idealClients: {
      title: "Is This Right for You?",
      description: "This service is ideal if you:",
      points: [
        "Want consistent organic leads",
        "Serve a local or regional market",
        "Have a website but low visibility",
        "Are looking for sustainable growth",
      ],
    },
    faqs: [
      {
        question: "How long does SEO take?",
        answer: "SEO is a long-term investment. Most clients see progress within a few months, with steady growth over time.",
      },
      {
        question: "Do you offer local SEO only?",
        answer: "We provide both local and broader SEO strategies depending on your needs.",
      },
      {
        question: "Is SEO better than paid ads?",
        answer: "SEO builds long-term visibility, while ads provide immediate traffic. Many businesses benefit from both.",
      },
    ],
    finalCTA: {
      title: "Let's Improve Your Search Visibility",
      description: "Turn your website into a reliable source of qualified leads.",
      buttonText: "Request a Free SEO Consultation",
    },
  },
  {
    slug: "social-media",
    name: "Social Media Management",
    heroSection: {
      subtitle: "Social Media Management",
      title: "Build a Strong Brand and Turn Followers Into Customers",
      description:
        "Your audience is already on social media. We help you show up consistently, communicate clearly, and turn attention into real business results across the right platforms.",
      buttons: [
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-primary",
          label: "Get a Free Social Media Consultation",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
      ],
      services: [
        "Strategy & Planning",
        "Content Creation",
        "Publishing & Management",
        "Community Engagement",
        "Performance & Reporting",
        "Branded Post Designs",
        "Content Calendar",
        "Platform Optimization",
        "Analytics & Insights",
      ],
      gallery: [
        {
          src: "/assets/imgs/gallery/service-details-1.jpg",
          alt: "Social Media Content",
        },
        {
          src: "/assets/imgs/gallery/service-details-2.webp",
          alt: "Social Media Strategy",
        },
      ],
    },
    problemSection: {
      title: "What's Holding Your Social Media Back?",
      description: "Many businesses struggle with social media because:",
      painPoints: [
        "Posting is inconsistent or random",
        "Content looks generic or off-brand",
        "Engagement is low despite posting regularly",
        "There's no clear strategy or goal behind the content",
        "Social media isn't driving traffic, leads, or sales",
      ],
    },
    approachSection: {
      sectionHeader: {
        subtitle: "Our Approach",
        title: "Our Approach to Social Media",
      },
      video: {
        src: "/videos/Business_People.mp4",
        type: "video/mp4",
      },
      content: {
        title: "We treat social media as a business tool, not just content posting",
        paragraphs: [
          "Everything we do is built around your brand, audience, and growth goals. Our social media approach focuses on strategy-driven content, consistent on-brand messaging, and platform-specific content.",
          "No trends for the sake of trends — only what works for your brand and supports long-term visibility.",
        ],
      },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        {
          title: "Strategy & Planning",
          items: [
            "Social media audit & competitor analysis",
            "Platform selection (Instagram, Facebook, LinkedIn, etc.)",
            "Content pillars & posting strategy",
            "Monthly content calendar",
          ],
        },
        {
          title: "Content Creation",
          items: [
            "Branded post designs",
            "Captions & messaging aligned with your voice",
            "Hashtag research & optimization",
            "Reels / short-form content direction",
          ],
        },
        {
          title: "Publishing & Management",
          items: [
            "Scheduled posting",
            "Community monitoring & engagement support",
            "Brand consistency across all platforms",
          ],
        },
        {
          title: "Performance & Reporting",
          items: [
            "Monthly performance reports",
            "Insights & content optimization",
            "Ongoing strategy adjustments",
          ],
        },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process",
      sectionTitle: "How We Grow Your Social Media",
      ctaText: "Get Started",
      ctaLink: "/contact",
      steps: [
        {
          id: 1,
          number: "01",
          title: "Audit & Discovery",
          description: "We review your current presence, competitors, and goals.",
          image: "/assets/imgs/icon/icon1.png",
        },
        {
          id: 2,
          number: "02",
          title: "Strategy & Planning",
          description: "We define content pillars, platforms, and posting structure.",
          image: "/assets/imgs/icon/icon2.png",
        },
        {
          id: 3,
          number: "03",
          title: "Content Creation & Publishing",
          description: "We design, write, and schedule content that reflects your brand.",
          image: "/assets/imgs/icon/icon3.png",
        },
        {
          id: 4,
          number: "04",
          title: "Optimize & Grow",
          description: "We track performance, analyze results, and refine the strategy.",
          image: "/assets/imgs/icon/icon4.png",
        },
      ],
    },
    whyWorkWithUs: {
      title: "Why Work With Us?",
      points: [
        "Strategy-first social media (not random posting)",
        "Strong visual branding backed by marketing thinking",
        "Clear communication and consistent delivery",
        "Content designed for real engagement and growth",
        "Focused on results, not vanity metrics",
      ],
      footer: "We help brands build authority, not just followers.",
    },
    idealClients: {
      title: "Is This Right for You?",
      description: "This service is ideal if you:",
      points: [
        "Want a consistent and professional social media presence",
        "Need content that reflects your brand properly",
        "Struggle with engagement or direction",
        "Want social media to support real business growth",
      ],
    },
    faqs: [
      {
        question: "How often do you post?",
        answer: "Posting frequency depends on your goals and platforms, typically 3–5 times per week.",
      },
      {
        question: "Do you create both designs and captions?",
        answer: "Yes. We handle visuals, copy, and strategy together for consistency.",
      },
      {
        question: "Can social media really drive sales?",
        answer: "Yes — when done strategically. Social media supports awareness, trust, and conversions when aligned with your funnel.",
      },
    ],
    finalCTA: {
      title: "Let's Grow Your Social Media Presence",
      description: "Turn your social media into a powerful brand and growth channel — not just another task on your list.",
      buttonText: "Request a Free Social Media Consultation",
    },
  },
  {
    slug: "ppc",
    name: "Pay-Per-Click Advertising",
    heroSection: {
      subtitle: "Pay-Per-Click (PPC) Advertising",
      title: "Get in Front of the Right Customers — Exactly When They're Ready to Buy",
      description:
        "PPC advertising puts your business at the top of search results and feeds instantly. We create and manage data-driven ad campaigns that attract qualified traffic and turn clicks into real revenue.",
      buttons: [
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-primary",
          label: "Get a Free PPC Strategy Session",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
      ],
      services: [
        "Strategy & Setup",
        "Ad Creation",
        "Campaign Management",
        "Reporting & Optimization",
        "Keyword Research",
        "Audience Targeting",
        "A/B Testing",
        "Conversion Tracking",
        "ROI Analysis",
      ],
      gallery: [
        {
          src: "/assets/imgs/gallery/service-details-1.jpg",
          alt: "PPC Campaigns",
        },
        {
          src: "/assets/imgs/gallery/service-details-2.webp",
          alt: "Ad Performance",
        },
      ],
    },
    problemSection: {
      title: "What's Holding Your Ads Back?",
      description: "Many businesses struggle with paid ads because:",
      painPoints: [
        "Ad spend is high but results are low",
        "Traffic isn't converting into leads or sales",
        "Targeting is too broad or poorly defined",
        "Ads lack clear messaging or strong creatives",
        "There's no clear tracking or performance insight",
      ],
    },
    approachSection: {
      sectionHeader: {
        subtitle: "Our Approach",
        title: "Our Approach to PPC Advertising",
      },
      video: {
        src: "/videos/Business_People.mp4",
        type: "video/mp4",
      },
      content: {
        title: "We don't guess, and we don't 'boost and hope'",
        paragraphs: [
          "Every PPC campaign we run is built around data, intent, and conversion. Our PPC approach focuses on high-intent targeting, conversion-focused ad copy and creatives, and continuous testing and optimization.",
          "The goal isn't clicks — it's results with clear tracking, reporting, and ROI visibility.",
        ],
      },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        {
          title: "Strategy & Setup",
          items: [
            "Account audit or new account setup",
            "Audience & keyword research",
            "Platform selection (Google, Meta, LinkedIn, etc.)",
            "Conversion tracking setup",
          ],
        },
        {
          title: "Ad Creation",
          items: [
            "Search, display, and social ad copy",
            "Creative direction for visuals and videos",
            "Multiple ad variations for testing",
            "Strong calls-to-action",
          ],
        },
        {
          title: "Campaign Management",
          items: [
            "Bid and budget optimization",
            "A/B testing for ads and audiences",
            "Ongoing performance monitoring",
            "Quality score improvements",
          ],
        },
        {
          title: "Reporting & Optimization",
          items: [
            "Clear performance reports",
            "Cost per lead / conversion analysis",
            "Ongoing refinements and scaling strategies",
          ],
        },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process",
      sectionTitle: "How We Turn Clicks Into Customers",
      ctaText: "Get Started",
      ctaLink: "/contact",
      steps: [
        {
          id: 1,
          number: "01",
          title: "Audit & Discovery",
          description: "We analyze your business, audience, and competitors.",
          image: "/assets/imgs/icon/icon1.png",
        },
        {
          id: 2,
          number: "02",
          title: "Strategy & Setup",
          description: "We structure campaigns, targeting, and tracking.",
          image: "/assets/imgs/icon/icon2.png",
        },
        {
          id: 3,
          number: "03",
          title: "Launch & Optimize",
          description: "We launch ads, test variations, and optimize performance.",
          image: "/assets/imgs/icon/icon3.png",
        },
        {
          id: 4,
          number: "04",
          title: "Scale & Improve",
          description: "We double down on what works and eliminate wasted spend.",
          image: "/assets/imgs/icon/icon4.png",
        },
      ],
    },
    whyWorkWithUs: {
      title: "Why Work With Us?",
      points: [
        "Performance-driven PPC strategies",
        "Clear reporting and full transparency",
        "Creative + strategy under one roof",
        "Focus on ROI, not vanity metrics",
        "Built for sustainable, scalable growth",
      ],
      footer: "Your ad budget deserves more than guesswork.",
    },
    idealClients: {
      title: "Is This Right for You?",
      description: "This service is ideal if you:",
      points: [
        "Want immediate visibility and traffic",
        "Need predictable leads or sales",
        "Have tried ads before with poor results",
        "Want clear data and measurable outcomes",
      ],
    },
    faqs: [
      {
        question: "How fast can I see results from PPC?",
        answer: "You can start seeing traffic immediately, with meaningful results typically within the first 2–4 weeks.",
      },
      {
        question: "Do you manage ad spend as well?",
        answer: "Yes. We manage budgets, bids, and optimization, while you pay ad spend directly to the platforms.",
      },
      {
        question: "Is PPC better than SEO?",
        answer: "PPC delivers immediate results. SEO builds long-term growth. Together, they work best.",
      },
    ],
    finalCTA: {
      title: "Let's Turn Clicks Into Customers",
      description: "Stop wasting ad spend and start running campaigns built to convert.",
      buttonText: "Request a Free PPC Strategy Session",
    },
  },
  {
    slug: "review-marketing",
    name: "Review Marketing",
    heroSection: {
      subtitle: "Review Marketing",
      title: "Build Trust, Boost Visibility, and Win More Customers",
      description:
        "Online reviews directly influence buying decisions. We help you collect, manage, and leverage customer reviews to strengthen your reputation, improve local visibility, and drive more conversions.",
      buttons: [
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-primary",
          label: "Get a Free Reputation Review",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
      ],
      services: [
        "Review Strategy & Setup",
        "Review Management",
        "Review Amplification",
        "Reporting & Insights",
        "Reputation Monitoring",
        "Response Strategies",
        "Social Proof Marketing",
        "Platform Optimization",
        "Sentiment Analysis",
      ],
      gallery: [
        {
          src: "/assets/imgs/gallery/service-details-1.jpg",
          alt: "Customer Reviews",
        },
        {
          src: "/assets/imgs/gallery/service-details-2.webp",
          alt: "Review Management",
        },
      ],
    },
    problemSection: {
      title: "What's Holding Your Reputation Back?",
      description: "Many businesses struggle with review marketing because:",
      painPoints: [
        "They don't consistently ask customers for reviews",
        "Reviews are scattered across multiple platforms",
        "Negative reviews go unmanaged or unanswered",
        "Positive reviews aren't being used in marketing",
        "Low review volume hurts trust and local rankings",
      ],
    },
    approachSection: {
      sectionHeader: {
        subtitle: "Our Approach",
        title: "Our Approach to Review Marketing",
      },
      video: {
        src: "/videos/Business_People.mp4",
        type: "video/mp4",
      },
      content: {
        title: "We turn reviews into a strategic growth asset",
        paragraphs: [
          "Our process focuses on increasing review volume, improving ratings, and using social proof where it matters most. We focus on ethical, automated review generation and professional response strategies.",
          "Trust isn't optional — it's everything. We help you earn trust and use it wisely.",
        ],
      },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        {
          title: "Review Strategy & Setup",
          items: [
            "Reputation audit across platforms",
            "Platform prioritization (Google, Facebook, Yelp, etc.)",
            "Review request strategy & timing",
            "Automation setup (email / SMS)",
          ],
        },
        {
          title: "Review Management",
          items: [
            "Monitoring and alerts",
            "Review response guidelines",
            "Negative review handling strategy",
            "Brand-safe communication",
          ],
        },
        {
          title: "Review Amplification",
          items: [
            "Using reviews in website and landing pages",
            "Social proof for ads and social media",
            "Testimonial highlights and snippets",
          ],
        },
        {
          title: "Reporting & Insights",
          items: [
            "Review growth tracking",
            "Rating and sentiment analysis",
            "Actionable insights for improvement",
          ],
        },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process",
      sectionTitle: "How We Build Your Reputation",
      ctaText: "Get Started",
      ctaLink: "/contact",
      steps: [
        {
          id: 1,
          number: "01",
          title: "Audit & Discovery",
          description: "We review your current ratings, platforms, and customer journey.",
          image: "/assets/imgs/icon/icon1.png",
        },
        {
          id: 2,
          number: "02",
          title: "Strategy & Setup",
          description: "We build a compliant system to generate and manage reviews.",
          image: "/assets/imgs/icon/icon2.png",
        },
        {
          id: 3,
          number: "03",
          title: "Launch & Monitor",
          description: "We start collecting reviews and managing responses.",
          image: "/assets/imgs/icon/icon3.png",
        },
        {
          id: 4,
          number: "04",
          title: "Optimize & Leverage",
          description: "We refine the process and use reviews to drive growth.",
          image: "/assets/imgs/icon/icon4.png",
        },
      ],
    },
    whyWorkWithUs: {
      title: "Why Work With Us?",
      points: [
        "Ethical, policy-compliant review strategies",
        "Focus on quality and authenticity",
        "Clear systems, not manual chasing",
        "Reviews integrated into your marketing funnel",
        "Built to improve trust and conversions",
      ],
      footer: "We help you earn trust — and use it wisely.",
    },
    idealClients: {
      title: "Is This Right for You?",
      description: "This service is ideal if you:",
      points: [
        "Rely on trust and reputation to win customers",
        "Want more reviews without awkward follow-ups",
        "Serve a local or service-based market",
        "Want better visibility in local search results",
      ],
    },
    faqs: [
      {
        question: "Is review marketing allowed by Google?",
        answer: "Yes — when done ethically. We follow all platform policies and best practices.",
      },
      {
        question: "Can you remove negative reviews?",
        answer: "We can't remove legitimate reviews, but we help manage responses and improve overall sentiment.",
      },
      {
        question: "Do reviews help SEO?",
        answer: "Absolutely. Reviews strongly influence local rankings and click-through rates.",
      },
    ],
    finalCTA: {
      title: "Turn Reviews Into a Competitive Advantage",
      description: "Build trust, improve visibility, and convert more customers with a strong online reputation.",
      buttonText: "Request a Free Reputation Review",
    },
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    heroSection: {
      subtitle: "Graphic Design",
      title: "Design That Communicates, Connects, and Converts",
      description:
        "Strong design makes your brand recognizable, credible, and memorable. We create visuals that communicate clearly, support your message, and help your business stand out everywhere it appears.",
      buttons: [
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-primary",
          label: "Get a Free Design Consultation",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
      ],
      services: [
        "Brand & Visual Strategy",
        "Marketing & Digital Design",
        "Print & Offline Design",
        "Social Media Graphics",
        "Ad Creatives",
        "Infographics",
        "Presentation Design",
        "Packaging Design",
        "Brand Guidelines",
      ],
      gallery: [
        {
          src: "/assets/imgs/gallery/service-details-1.jpg",
          alt: "Graphic Design Work",
        },
        {
          src: "/assets/imgs/gallery/service-details-2.webp",
          alt: "Design Examples",
        },
      ],
    },
    problemSection: {
      title: "What's Holding Your Visuals Back?",
      description: "Many businesses struggle with graphic design because:",
      painPoints: [
        "Designs feel inconsistent or off-brand",
        "Visuals look generic or outdated",
        "Marketing materials don't communicate clearly",
        "Different platforms use mismatched styles",
        "Design doesn't support marketing or sales goals",
      ],
    },
    approachSection: {
      sectionHeader: {
        subtitle: "Our Approach",
        title: "Our Approach to Graphic Design",
      },
      video: {
        src: "/videos/Business_People.mp4",
        type: "video/mp4",
      },
      content: {
        title: "We design with purpose — not decoration",
        paragraphs: [
          "Every visual we create supports your brand identity, messaging, and business objectives. Our graphic design approach focuses on clear visual hierarchy, consistent brand identity, and design built for both digital and print.",
          "Design should work as hard as your business does with creative thinking backed by marketing strategy.",
        ],
      },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        {
          title: "Brand & Visual Strategy",
          items: [
            "Brand style alignment or refinement",
            "Color, typography, and layout direction",
            "Visual consistency guidelines",
          ],
        },
        {
          title: "Marketing & Digital Design",
          items: [
            "Social media designs",
            "Ads and campaign creatives",
            "Website and landing page visuals",
            "Email and digital assets",
          ],
        },
        {
          title: "Print & Offline Design",
          items: [
            "Business cards and stationery",
            "Flyers, brochures, and catalogs",
            "Packaging and labels",
            "Large-format and promotional materials",
          ],
        },
        {
          title: "Delivery & Support",
          items: [
            "Print-ready and digital-ready files",
            "Organized asset delivery",
            "Ongoing design support when needed",
          ],
        },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process",
      sectionTitle: "How We Create Your Designs",
      ctaText: "Get Started",
      ctaLink: "/contact",
      steps: [
        {
          id: 1,
          number: "01",
          title: "Discovery & Briefing",
          description: "We understand your brand, goals, and use cases.",
          image: "/assets/imgs/icon/icon1.png",
        },
        {
          id: 2,
          number: "02",
          title: "Concept & Direction",
          description: "We develop visual concepts and creative direction.",
          image: "/assets/imgs/icon/icon2.png",
        },
        {
          id: 3,
          number: "03",
          title: "Design & Refinement",
          description: "We design, revise, and finalize assets.",
          image: "/assets/imgs/icon/icon3.png",
        },
        {
          id: 4,
          number: "04",
          title: "Delivery & Use",
          description: "We deliver ready-to-use files for all platforms.",
          image: "/assets/imgs/icon/icon4.png",
        },
      ],
    },
    whyWorkWithUs: {
      title: "Why Work With Us?",
      points: [
        "Strategy-led design, not just visuals",
        "Strong branding and marketing understanding",
        "Consistency across all platforms",
        "Design that supports growth and recognition",
        "Reliable timelines and communication",
      ],
      footer: "We design brands people remember.",
    },
    idealClients: {
      title: "Is This Right for You?",
      description: "This service is ideal if you:",
      points: [
        "Need consistent, professional design assets",
        "Want visuals that reflect your brand properly",
        "Use both digital and print marketing",
        "Want design that supports business goals",
      ],
    },
    faqs: [
      {
        question: "Do you work with existing brand guidelines?",
        answer: "Yes. We can follow, refine, or help build them if needed.",
      },
      {
        question: "Do you offer ongoing design support?",
        answer: "Yes. We offer both project-based and ongoing design services.",
      },
      {
        question: "Is graphic design important if I already have a logo?",
        answer: "Absolutely. Design consistency across all touchpoints builds trust and recognition.",
      },
    ],
    finalCTA: {
      title: "Let's Design Your Brand the Right Way",
      description: "Turn your visuals into a powerful brand asset — not an afterthought.",
      buttonText: "Request a Free Design Consultation",
    },
  },
  {
    slug: "branding",
    name: "Branding",
    heroSection: {
      subtitle: "Branding",
      title: "Build a Brand People Recognize, Trust, and Remember",
      description:
        "Your brand is more than a logo. It's how your business looks, sounds, and feels at every touchpoint. We help you build a clear, consistent brand that connects with the right audience and supports long-term growth.",
      buttons: [
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-primary",
          label: "Get a Free Brand Consultation",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
      ],
      services: [
        "Brand Strategy",
        "Visual Identity",
        "Brand Assets",
        "Brand Guidelines",
        "Logo Design",
        "Brand Positioning",
        "Messaging Framework",
        "Color & Typography",
        "Brand Documentation",
      ],
      gallery: [
        {
          src: "/assets/imgs/gallery/service-details-1.jpg",
          alt: "Branding Work",
        },
        {
          src: "/assets/imgs/gallery/service-details-2.webp",
          alt: "Brand Identity",
        },
      ],
    },
    problemSection: {
      title: "What's Holding Your Brand Back?",
      description: "Many businesses struggle with branding because:",
      painPoints: [
        "Their brand lacks clarity or direction",
        "Visuals and messaging feel inconsistent",
        "The brand doesn't stand out from competitors",
        "Customers don't clearly understand the value",
        "Marketing feels disconnected across channels",
      ],
    },
    approachSection: {
      sectionHeader: {
        subtitle: "Our Approach",
        title: "Our Approach to Branding",
      },
      video: {
        src: "/videos/Business_People.mp4",
        type: "video/mp4",
      },
      content: {
        title: "We build brands with purpose, not trends",
        paragraphs: [
          "Every branding decision is rooted in strategy, positioning, and real business goals. Our branding approach focuses on brand positioning and differentiation, clear messaging and brand voice, and visual identity systems.",
          "A strong brand makes every marketing effort more effective with consistency across digital and print.",
        ],
      },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        {
          title: "Brand Strategy",
          items: [
            "Brand discovery & research",
            "Audience and competitor analysis",
            "Brand positioning and value proposition",
            "Brand messaging framework",
          ],
        },
        {
          title: "Visual Identity",
          items: [
            "Logo design or refinement",
            "Color palette & typography",
            "Visual system and design elements",
            "Brand usage guidelines",
          ],
        },
        {
          title: "Brand Assets",
          items: [
            "Business cards and stationery",
            "Social media branding templates",
            "Website and digital brand elements",
            "Marketing and print materials",
          ],
        },
        {
          title: "Brand Guidelines",
          items: [
            "Logo usage rules",
            "Typography & color standards",
            "Visual and tone-of-voice consistency",
            "Brand documentation for future growth",
          ],
        },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process",
      sectionTitle: "How We Build Your Brand",
      ctaText: "Get Started",
      ctaLink: "/contact",
      steps: [
        {
          id: 1,
          number: "01",
          title: "Discovery & Research",
          description: "We understand your business, audience, and market.",
          image: "/assets/imgs/icon/icon1.png",
        },
        {
          id: 2,
          number: "02",
          title: "Strategy & Positioning",
          description: "We define your brand's direction and messaging.",
          image: "/assets/imgs/icon/icon2.png",
        },
        {
          id: 3,
          number: "03",
          title: "Identity Design",
          description: "We design the visual and verbal brand system.",
          image: "/assets/imgs/icon/icon3.png",
        },
        {
          id: 4,
          number: "04",
          title: "Launch & Alignment",
          description: "We apply the brand and ensure consistency across channels.",
          image: "/assets/imgs/icon/icon4.png",
        },
      ],
    },
    whyWorkWithUs: {
      title: "Why Work With Us?",
      points: [
        "Strategy-led branding, not logo-only work",
        "Clear positioning that differentiates your business",
        "Deep understanding of design and marketing",
        "Brand systems built to scale",
        "Practical branding for real businesses",
      ],
      footer: "We don't just design brands — we build foundations.",
    },
    idealClients: {
      title: "Is This Right for You?",
      description: "This service is ideal if you:",
      points: [
        "Are launching a new business or rebranding",
        "Feel your brand no longer represents your business",
        "Want to stand out in a crowded market",
        "Need consistency across all touchpoints",
      ],
    },
    faqs: [
      {
        question: "Do you only design logos?",
        answer: "No. Logos are just one part of a complete brand system.",
      },
      {
        question: "Can you rebrand an existing business?",
        answer: "Yes. We handle both full rebrands and brand refreshes.",
      },
      {
        question: "How long does branding take?",
        answer: "Most branding projects take 4–8 weeks depending on scope.",
      },
    ],
    finalCTA: {
      title: "Let's Build a Brand That Lasts",
      description: "Create a brand that reflects who you are and where your business is going.",
      buttonText: "Request a Free Brand Consultation",
    },
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    heroSection: {
      subtitle: "Email Marketing",
      title: "Turn Subscribers Into Loyal Customers",
      description:
        "Email marketing keeps your brand top-of-mind and drives consistent results. We create strategic email campaigns that nurture leads, increase conversions, and build long-term customer relationships.",
      buttons: [
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-primary",
          label: "Get a Free Email Marketing Consultation",
        },
        {
          href: "/contact",
          style: "t-btn t-btn-circle",
          icon: "fa-solid fa-arrow-right",
        },
      ],
      services: [
        "Strategy & Planning",
        "Campaign Creation",
        "Automation & Flows",
        "Performance & Optimization",
        "Email Copywriting",
        "Visual Design",
        "List Segmentation",
        "A/B Testing",
        "Analytics",
      ],
      gallery: [
        {
          src: "/assets/imgs/gallery/service-details-1.jpg",
          alt: "Email Campaigns",
        },
        {
          src: "/assets/imgs/gallery/service-details-2.webp",
          alt: "Email Marketing",
        },
      ],
    },
    problemSection: {
      title: "What's Holding Your Email Marketing Back?",
      description: "Many businesses struggle with email marketing because:",
      painPoints: [
        "Emails are sent irregularly or without a strategy",
        "Open and click rates are low",
        "Messaging feels generic or off-brand",
        "No clear segmentation or automation",
        "Emails aren't driving meaningful actions",
      ],
    },
    approachSection: {
      sectionHeader: {
        subtitle: "Our Approach",
        title: "Our Approach to Email Marketing",
      },
      video: {
        src: "/videos/Business_People.mp4",
        type: "video/mp4",
      },
      content: {
        title: "We treat email as a relationship-building channel",
        paragraphs: [
          "Every campaign is designed to deliver the right message at the right time. Our email marketing approach focuses on audience segmentation and personalization, clear conversion-focused messaging, and automation that supports the customer journey.",
          "Email works best when it feels human and intentional with consistent branding and tone of voice.",
        ],
      },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        {
          title: "Strategy & Planning",
          items: [
            "Email marketing audit",
            "List segmentation and structure",
            "Campaign and automation planning",
            "Content calendar (newsletters, promos, flows)",
          ],
        },
        {
          title: "Campaign Creation",
          items: [
            "Email copywriting",
            "Visual design and layout",
            "Strong calls-to-action",
            "Mobile-optimized emails",
          ],
        },
        {
          title: "Automation & Flows",
          items: [
            "Welcome sequences",
            "Lead nurturing campaigns",
            "Abandoned cart or follow-up emails",
            "Re-engagement flows",
          ],
        },
        {
          title: "Performance & Optimization",
          items: [
            "Open and click rate tracking",
            "Conversion analysis",
            "A/B testing (subject lines, content)",
            "Ongoing improvements",
          ],
        },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process",
      sectionTitle: "How We Make Email Work",
      ctaText: "Get Started",
      ctaLink: "/contact",
      steps: [
        {
          id: 1,
          number: "01",
          title: "Audit & Discovery",
          description: "We review your list, content, and goals.",
          image: "/assets/imgs/icon/icon1.png",
        },
        {
          id: 2,
          number: "02",
          title: "Strategy & Setup",
          description: "We define segmentation, flows, and messaging.",
          image: "/assets/imgs/icon/icon2.png",
        },
        {
          id: 3,
          number: "03",
          title: "Create & Launch",
          description: "We design, write, and send campaigns.",
          image: "/assets/imgs/icon/icon3.png",
        },
        {
          id: 4,
          number: "04",
          title: "Optimize & Scale",
          description: "We analyze performance and refine for better results.",
          image: "/assets/imgs/icon/icon4.png",
        },
      ],
    },
    whyWorkWithUs: {
      title: "Why Work With Us?",
      points: [
        "Strategy-driven email marketing",
        "Strong copy and design working together",
        "Automation that saves time and increases ROI",
        "Clear reporting and insights",
        "Built to support long-term growth",
      ],
      footer: "We focus on results, not inbox noise.",
    },
    idealClients: {
      title: "Is This Right for You?",
      description: "This service is ideal if you:",
      points: [
        "Want better engagement from your email list",
        "Need automated follow-ups and nurturing",
        "Sell products or services online or offline",
        "Want predictable, measurable results",
      ],
    },
    faqs: [
      {
        question: "How often should emails be sent?",
        answer: "It depends on your audience and goals, but consistency matters more than volume.",
      },
      {
        question: "Do you work with platforms like Mailchimp or Klaviyo?",
        answer: "Yes. We work with major email marketing platforms and tools.",
      },
      {
        question: "Is email marketing still effective?",
        answer: "Absolutely. Email consistently delivers one of the highest ROI across digital channels.",
      },
    ],
    finalCTA: {
      title: "Let's Make Email Work for Your Business",
      description: "Turn your email list into a powerful revenue and relationship channel.",
      buttonText: "Request a Free Email Marketing Consultation",
    },
  },
];

export const getServiceBySlug = (slug: string): ServicePageData | undefined => {
  return allServicesData.find((service) => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return allServicesData.map((service) => service.slug);
};
