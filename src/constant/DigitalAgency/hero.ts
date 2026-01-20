export interface HeroData {
  subtitle?: string;
  typewriterStrings?: string[];
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  videoUrl?: string;
  shapeImg?: string;
  lines?: string[];
}

const heroData:HeroData = {
  subtitle: "WE CREATE",
  typewriterStrings: [
    "B2B Marketing",
    "Web Solutions",
    "Brand Identity",
  ],
  description:
    "We partner with growth-focused businesses to create measurable impact. By combining strategy-led marketing, high-performance websites, and disciplined execution, we help brands cut through noise, convert attention into revenue, and scale with confidence.",
  button: {
    text: "Get a Free Consultation",
    url: "/contact",
  },
  videoUrl:"/videos/hero-video.mp4",
  shapeImg: "/assets/imgs/shape/shape-1.webp",
  lines: ["line-1", "line-2", "line-3", "line-4"],
};

export default heroData;
