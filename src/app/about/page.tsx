import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import AboutSection from "@/components/DigitalAgency/AboutSection";
import ServiceSection from "@/components/DigitalAgency/ServiceSection";
import ProcessSection from "@/components/DigitalAgency/ProcessSection";
import WhyWorkWithUsSection from "@/components/DigitalAgency/WhyWorkWithUsSection";
import FinalCTASection from "@/components/DigitalAgency/FinalCTASection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";
import StorySection from "@/components/DigitalAgency/StorySection";
import MissionVisionSection from "@/components/DigitalAgency/MissionVisionSection";

// component data
import aboutData from "@/constant/DigitalAgency/about";
import storyData from "@/constant/DigitalAgency/story";
import serviceData from "@/constant/DigitalAgency/service";
import missionVisionData from "@/constant/DigitalAgency/missionVision";
import processData from "@/constant/DigitalAgency/process";
import whyWorkData from "@/constant/DigitalAgency/whyWork";

// Prepare data for FinalCTASection
const finalCTAData = {
  title: "Let’s Work Together",
  description: "Ready to build a stronger brand and better results?",
  buttonText: "Get a Free Consultation",
};

export const metadata: Metadata = {
  title: "About 222Medias",
  description:
    "Learn about 222Medias, a creative and digital marketing agency loaded with strategy, design, and performance to deliver real results.",
  keywords: [
    "about 222Medias",
    "digital agency mission",
    "creative agency",
    "brand strategy",
    "marketing results",
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
          <StorySection data={storyData} />
          <MissionVisionSection data={missionVisionData} />
          <ProcessSection data={processData} />
          <WhyWorkWithUsSection data={whyWorkData} />
          <FinalCTASection data={finalCTAData} />
        </main>
        <FooterSection />
      </SmoothScroll>
    </div>
  );
};
export default AboutPage;
