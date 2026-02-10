export interface WhyWorkItem {
    title: string;
    description: string;
    icon: string;
}

export interface WhyWorkData {
    title: string;
    points: WhyWorkItem[];
    footer: string;
}

export const whyWorkData: WhyWorkData = {
    title: "Why 222Medias",
    points: [
        {
            title: "Clear strategy, not guesswork",
            description: "We rely on data and market insights to build paths that lead to predictable growth, eliminating the guesswork from your marketing.",
            icon: "fa-solid fa-chess-knight"
        },
        {
            title: "Strong creative direction",
            description: "Design that doesn't just look good but communicates your brand's unique value and resonates with your target audience.",
            icon: "fa-solid fa-pen-nib"
        },
        {
            title: "Transparent communication",
            description: "No hidden fees or complex jargon. We keep you in the loop at every stage of the project with clear, honest updates.",
            icon: "fa-solid fa-comments"
        },
        {
            title: "Results-focused mindset",
            description: "We don't just deliver outputs; we deliver outcomes. Every action is aligned with impacting your bottom line and business growth.",
            icon: "fa-solid fa-chart-line"
        },
    ],
    footer: "We work as an extension of your team.",
};

export default whyWorkData;
