export interface MissionVisionItem {
    title: string;
    description: string;
}

export interface MissionVisionData {
    mission: MissionVisionItem;
    vision: MissionVisionItem;
}

export const missionVisionData: MissionVisionData = {
    mission: {
        title: "Our Mission",
        description: "To help businesses grow through clear strategy and effective creative execution. We focus on delivering work that is simple, impactful, and aligned with real business objectives.",
    },
    vision: {
        title: "Our Vision",
        description: "To become a trusted creative and marketing partner for brands ready to scale. We believe strong brands are built through clarity, consistency, and smart decisions.",
    },
};

export default missionVisionData;
