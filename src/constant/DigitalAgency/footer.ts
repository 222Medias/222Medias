
export interface IFooterLink {
  name: string;
  href: string;
}

export interface FooterData {
  backgroundImage: string;
  logo: string;
  // newsletter: {
  //   title: string;
  //   subtitle: string;
  //   placeholder: string;
  //   buttonText: string;
  // };
  title: string;
  subtitle: string;
  companyLinks: IFooterLink[];
  servicesLinks: IFooterLink[];
  instagramImages: string[];
  // copyright: {
  //   year: number | string;
  //   text: string;
  //   link: string;
  // };
  socialLinks: IFooterLink[];
}

const footerData: FooterData = {
  // newsletter: {
  //   title: "Subscribe our newsletter",
  //   subtitle: "222Medias is a B2B marketing cmd web solutions agency focused on growth, performance, and long-term partnerships.",
  //   placeholder: "Enter your email...",
  //   buttonText: "Subscribe",
  // },
  title: "222Medias",
  subtitle: "222Medias is a B2B marketing cmd web solutions agency focused on growth, performance, and long-term partnerships.",
  companyLinks: [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  servicesLinks: [
    { name: "B2B Marketing", href: "/services" },
    { name: "Web Solutions", href: "/services" },
    { name: "Branding", href: "/services" },
    { name: "Social Media Solutions", href: "/services" },
  ],
  instagramImages: [
    "/assets/imgs/gallery/footer-image1.webp",
    "/assets/imgs/gallery/footer-image2.webp",
    "/assets/imgs/gallery/footer-image3.webp",
    "/assets/imgs/gallery/footer-image4.webp",
  ],
  backgroundImage: "/assets/imgs/gallery/image-8.webp",
  logo: "/assets/imgs/logo/white-logo.svg",
  socialLinks: [
    { name: "FB", href: "#" },
    { name: "LN", href: "#" },
    { name: "IN", href: "#" },
    { name: "BE", href: "#" },
  ],
  // copyright: {
  //   year: 2025,
  //   text: "Pixavation",
  //   link: "https://themeforest.net/user/pixavation",
  // },
};

export default footerData;
