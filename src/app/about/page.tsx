import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import AboutSection from "@/components/DigitalAgency/AboutSection";
import VideoSection from "@/components/DigitalAgency/About/VideoSection";
import TeamsSection from "@/components/DigitalAgency/TeamsSection";
import TextSliderSection from "@/components/DigitalAgency/TextSliderSection";
import BlogSection from "@/components/DigitalAgency/BlogSection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";

// component data
import aboutData from "@/constant/DigitalAgency/about";
import videoData from "@/constant/DigitalAgency/About/video";
import teamData from "@/constant/DigitalAgency/teams";
import textSliderData from "@/constant/DigitalAgency/textSlider";
import blogData from "@/constant/DigitalAgency/blog";

export const metadata: Metadata = {
  title: "About 222Medias",
  description:
    "Learn about 222Medias, a creative digital agency dedicated to helping brands grow. Discover our mission, our approach, and the team that makes it all happen.",
  keywords: [
    "about 222Medias",
    "digital agency mission",
    "creative agency team",
    "brand strategy experts",
    "marketing and design firm",
  ],
};

const AboutPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb title="ABOUT" subTitle="222Medias" pageName="ABOUT 222Medias" />
          <AboutSection className="page-about" data={aboutData} />
          <VideoSection data={videoData} />
          <TeamsSection data={teamData} />
          <TextSliderSection data={textSliderData} />
          <BlogSection data={blogData} />
        </main>
        <FooterSection />
      </SmoothScroll>
    </div>
  );
};
export default AboutPage;
