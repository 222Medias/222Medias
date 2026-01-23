export interface ITextSlide {
  id: number;
  text: string;
  href: string;
  img: string;
}

export interface TextSliderData {
  slides: ITextSlide[];
}


const textSliderData:TextSliderData = {
  slides: [
    {
      id: 1,
      text: "LET’S CONNECT",
      href: "/contact",
      img: "/assets/imgs/shape/symbol3.svg",
    },
    {
      id: 2,
      text: "LET’S CONNECT",
      href: "/contact",
      img: "/assets/imgs/shape/symbol3.svg",
    },
    {
      id: 3,
      text: "LET’S CONNECT",
      href: "/contact",
      img: "/assets/imgs/shape/symbol3.svg",
    },
    {
      id: 4,
      text: "LET’S CONNECT",
      href: "/contact",
      img: "/assets/imgs/shape/symbol3.svg",
    },
    {
      id: 5,
      text: "LET’S CONNECT",
      href: "/contact",
      img: "/assets/imgs/shape/symbol3.svg",
    },
  ],
};

export default textSliderData;
