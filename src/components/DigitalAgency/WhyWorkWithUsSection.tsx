"use client";
import React from "react";
import { WhyWorkData, WhyWorkItem } from "@/constant/DigitalAgency/whyWork";

interface WhyWorkWithUsSectionProps {
  data: WhyWorkData;
}

const WhyWorkWithUsSection: React.FC<WhyWorkWithUsSectionProps> = ({ data }) => {
  return (
    <section className="why-work-area section-spacing-bottom">
      <div className="container">
        <div className="why-work-area-inner">
          <div className="section-header text-center mb-5">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper justify-content-center">
                <span className="section-subtitle">Our Difference</span>
              </div>
              <div className="title-wrapper justify-content-center">
                <h2 className="section-title">{data.title}</h2>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {data.points.map((point: WhyWorkItem, index: number) => (
              <div key={index} className="col-lg-6 col-md-6 fade-anim" data-delay={(index + 1) * 0.1}>
                <div className="why-work-card p-4 h-100 border rounded-3 bg-white shadow-sm d-flex align-items-start gap-3">
                  <div className="icon-wrapper flex-shrink-0 text-primary">
                    <i className={`${point.icon} fa-2x`}></i>
                  </div>
                  <div className="content">
                    <h3 className="h4 mb-2 fw-bold">{point.title}</h3>
                    <p className="text-muted mb-0">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {data.footer && (
            <div className="section-footer fade-anim text-center">
              <p className="footer-text-large text-white fw-medium">{data.footer}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
