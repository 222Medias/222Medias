"use client";
import React from "react";
import { StoryData } from "@/constant/DigitalAgency/story";

interface StorySectionProps {
    className?: string;
    data: StoryData;
}

const StorySection: React.FC<StorySectionProps> = ({ className, data }) => {
    return (
        <section className={`story-area section-spacing ${className || ""}`}>
            <div className="container">
                <div className="story-content-wrapper">
                    <div className="section-title-wrapper fade-anim">
                        <div className="subtitle-wrapper">
                            <span className="section-subtitle">{data.subtitle}</span>
                        </div>
                        <div className="title-wrapper">
                            <h2 className="section-title">{data.title}</h2>
                        </div>
                    </div>
                    <div className="text-wrapper fade-anim">
                        {data.description.map((paragraph, index) => (
                            <p key={index} className="text mt-30">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
