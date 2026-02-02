export interface ITeam {
  id: number;
  number: string;
  name: string;
  post: string;
  image: string;
  shape: string;
  isActive: boolean;
}

export interface TeamData {
  section: {
    subtitle: string;
    title: string;
    buttonText: string;
    buttonUrl: string;
  };
  members: ITeam[];
}

const teamData: TeamData = {
  section: {
    subtitle: "Our Approach",
    title: "How We Create Impact",
    buttonText: "Learn More About Us",
    buttonUrl: "/contact",
  },
  members: [
    {
      id: 1,
      number: "01",
      name: "Every project starts with understanding your business, market, and goals.",
      post: "Strategy First",
      image: "/assets/imgs/team/team1.jpg",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: false,
    },
    {
      id: 2,
      number: "02",
      name: "Design, development, and marketing aligned to drive real outcomes.",
      post: "Execution with Purpose",
      image: "/assets/imgs/team/team2.jpg",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: true,
    },
    {
      id: 3,
      number: "03",
      name: "We track performance, refine continuously, and scale what works.",
      post: "Optimize & Scale",
      image: "/assets/imgs/team/team3.jpg",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: false,
    },
    {
      id: 4,
      number: "04",
      name: "Noah Bennett",
      post: "Creative Director",
      image: "/assets/imgs/team/team-18.webp",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: false,
    },
    {
      id: 5,
      number: "05",
      name: "Sophia Martinez",
      post: "Web Developer",
      image: "/assets/imgs/team/team-19.webp",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: true,
    },
    {
      id: 6,
      number: "06",
      name: "Liam Nguyen",
      post: "Project Manager",
      image: "/assets/imgs/team/team-20.webp",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: false,
    },
  ],
};

export default teamData;
