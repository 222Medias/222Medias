"use client";
import React from "react";
import { IVideoData } from "@/constant/DigitalAgency/About/video";
import Typewriter from "typewriter-effect";
import heroData from "@/constant/DigitalAgency/hero";
import Header from "@/components/DigitalAgency/Header";
import Link from "next/link";
interface VideoProps {
  data: IVideoData;
}

const VideoSection = ({ data: videoData }: VideoProps) => {
  const { videoUrl, subtitle, title } = videoData;
  return (
    <section className="video-area fade-anim">
        <Header />

        <div className="area-bg">
        <video loop muted autoPlay playsInline>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="video-area-inner section-spacing">
          <div className="section-content">
              <div className="section-header">
                  <div className="section-title-wrapper">
                      {heroData?.shapeImg && (
                          <div
                              className="shape-1 fade-anim"
                              data-direction="top"
                              data-ease="bounce"
                              data-delay="0.90"
                              data-offset="100"
                              suppressHydrationWarning={true}
                          >
                              <img src={heroData?.shapeImg} alt="shape" />
                          </div>
                      )}

                      {heroData?.subtitle && (
                          <div className="subtitle-wrapper">
                  <span
                      className="section-subtitle char-anim"
                      data-direction="left"
                      data-delay="0.45"
                      data-offset="100"
                      suppressHydrationWarning={true}
                  >
                    {heroData?.subtitle}
                  </span>
                          </div>
                      )}

                      {heroData.typewriterStrings && heroData.typewriterStrings.length > 0  && (
                          <div className="title-wrapper type-out-wrapper">
                              <h1
                                  className="section-title typed-out fade-anim"
                                  data-direction="left"
                                  data-delay="0.30"
                                  data-offset="100"
                                  suppressHydrationWarning={true}
                              >
                                  <Typewriter
                                      options={{
                                          strings: heroData?.typewriterStrings,
                                          autoStart: true,
                                          loop: true,
                                          delay: 100,
                                          deleteSpeed: 50,
                                          cursorClassName: "opacity-0 w-1 d-inline-block",
                                      }}
                                  />
                              </h1>
                          </div>
                      )}
                  </div>
              </div>

              <div className="hero-content">
                  {heroData?.description && (
                      <div className="text-wrapper">
                          <p className="text word-anim" data-stagger="0.1" suppressHydrationWarning={true}>
                              {heroData?.description}
                          </p>
                      </div>
                  )}

                  {heroData?.button?.text && heroData?.button?.url && (
                      // <div className="btn-wrapper fade-anim" data-delay="0.60" suppressHydrationWarning={true}>
                      //     <div className="d-flex justify-content-center align-items-center">
                      //         <Link
                      //             href={heroData?.button?.url}
                      //             className="t-btn t-btn-primary"
                      //         >
                      //             {heroData?.button?.text}
                      //         </Link>
                      //         <Link
                      //             href={heroData?.button?.url}
                      //             className="t-btn t-btn-circle"
                      //         >
                      //             <i className="fa-solid fa-arrow-right"></i>
                      //         </Link>
                      //     </div>
                      // </div>
                      <div className="btn-wrapper fade-anim">
                          <div className="t-btn-group">
                              <Link className="t-btn t-btn-circle" href={heroData?.button?.url || "#"}>
                                  <i className="fa-solid fa-arrow-right"></i>
                              </Link>
                              <Link className="t-btn t-btn-primary" href={heroData?.button?.url || "#"}>
                                  {heroData?.button?.text}
                              </Link>
                              <Link className="t-btn t-btn-circle" href={heroData?.button?.url || "#"}>
                                  <i className="fa-solid fa-arrow-right"></i>
                              </Link>
                          </div>
                      </div>
                  )}
              </div>
            {/*<div className="section-title-wrapper">*/}
            {/*  <div className="subtitle-wrapper fade-anim">*/}
            {/*    <span className="section-subtitle">{subtitle}</span>*/}
            {/*  </div>*/}
            {/*  <div className="title-wrapper fade-anim ">*/}
            {/*    <h2 className="section-title">{title}</h2>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
