import React from "react";

interface WhyWorkWithUsSectionProps {
  data: {
    title: string;
    points: string[];
    footer: string;
  };
}

const WhyWorkWithUsSection: React.FC<WhyWorkWithUsSectionProps> = ({ data }) => {
  return (
    <section className="why-work-area">
      <div className="container">
        <div className="why-work-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle light">Our Difference</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{data.title}</h2>
              </div>
            </div>
          </div>

          <div className="why-work-wrapper-box">
            <div className="why-work-wrapper fade-anim" data-direction="right">
              {data.points.map((point, index) => (
                <div key={index} className="why-work-box">
                  <div className="icon-wrapper">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="20"
                        cy="20"
                        r="18"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M14 20L18 24L26 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {data.footer && (
            <div className="section-footer fade-anim">
              <p className="footer-text-large">{data.footer}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
