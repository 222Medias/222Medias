import React from "react";
import Link from "next/link";

interface IdealClientsSectionProps {
  data: {
    title: string;
    description: string;
    points: string[];
  };
}

const IdealClientsSection: React.FC<IdealClientsSectionProps> = ({ data }) => {
  return (
    <section className="ideal-clients-area">
      <div className="ideal-clients-area-inner section-spacing">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="section-header">
                <div className="section-title-wrapper fade-anim">
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle">Perfect Fit</span>
                  </div>
                  <div className="title-wrapper">
                    <h2 className="section-title">{data.title}</h2>
                  </div>
                  {data.description && (
                    <div className="text-wrapper mt-30">
                      <p className="text">{data.description}</p>
                    </div>
                  )}
                </div>

                <div className="btn-wrapper mt-60 fade-anim">
                  <div className="t-btn-group">
                    <Link className="t-btn t-btn-circle" href="/contact">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <Link className="t-btn t-btn-primary" href="/contact">
                      Get Started Today
                    </Link>
                    <Link className="t-btn t-btn-circle" href="/contact">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="ideal-clients-list">
                {data.points.map((point, index) => (
                  <div
                    key={index}
                    className="ideal-client-item fade-anim"
                    data-delay={`${0.2 + index * 0.1}`}
                  >
                    <div className="item-number">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="item-content">
                      <p className="text">{point}</p>
                    </div>
                    <div className="item-icon">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4L20 16L12 28"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealClientsSection;
