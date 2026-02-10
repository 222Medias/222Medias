"use client";
import React from "react";
import { MissionVisionData } from "@/constant/DigitalAgency/missionVision";

interface MissionVisionSectionProps {
    data: MissionVisionData;
}

const MissionVisionSection: React.FC<MissionVisionSectionProps> = ({ data }) => {
    return (
        <section className="mission-vision-area section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0 fade-anim">
                        <div className="mission-box">
                            <div className="subtitle-wrapper mb-3">
                                <h3 className="section-title fw-bold">{data.mission.title}</h3>
                            </div>
                            <p className="text">{data.mission.description}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 fade-anim" data-delay="0.2">
                        <div className="vision-box">
                            <div className="subtitle-wrapper mb-3">
                                <h3 className="section-title fw-bold">{data.vision.title}</h3>
                            </div>
                            <p className="text">{data.vision.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;
