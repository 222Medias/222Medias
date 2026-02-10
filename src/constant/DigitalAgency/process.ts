export interface IProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface ProcessData {
  sectionSubtitle: string;
  sectionTitle: string;
  ctaText: string;
  ctaLink: string;
  steps: IProcessStep[];
}

const processData: ProcessData = {
  sectionSubtitle: "How We Work",
  sectionTitle: "Our Process",
  ctaText: "Contact Us",
  ctaLink: "/contact",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Strategy First",
      description: "We start by understanding your goals, audience, and challenges.",
      image: "/assets/imgs/icon/icon1.png",
    },
    {
      id: 2,
      number: "02",
      title: "Purposeful Design",
      description: "Every detail is created to support function and performance.",
      image: "/assets/imgs/icon/icon2.png",
    },
    {
      id: 3,
      number: "03",
      title: "Continuous Improvement",
      description: "We refine, optimize, and grow with your business.",
      image: "/assets/imgs/icon/icon3.png",
    },
  ],
};

export default processData;
