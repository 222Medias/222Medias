export interface IProcess {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface ProcessData {
  subtitle: string;
  title: string;
  steps: IProcess[];
}

const processData: ProcessData = {
  subtitle: "Our Process",
  title: "A simple, yet powerful and efficient process",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discover",
      description: "Understand business, market, and objectives.",
      image: "/assets/imgs/icon/Icon1.png",
    },
    {
      id: 2,
      number: "02",
      title: "Plan",
      description: "Define strategy, messaging, and execution roadmap.",
      image: "/assets/imgs/icon/Icon2.png",
    },
    {
      id: 3,
      number: "03",
      title: "Build",
      description: "Design, content, and development aligned to goals.",
      image: "/assets/imgs/icon/Icon3.png",
    },
    {
      id: 4,
      number: "04",
      title: "Launch & Optimize",
      description: "Deploy with confidence, measure, and refine.",
      image: "/assets/imgs/icon/Icon4.png",
    },
  ],
};

export default processData;
