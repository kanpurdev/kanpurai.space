import React from "react";

export const metadata = {
    title: "Media Coverage | KanpurAI.Space",
    description: "See where KanpurAI.Space is making headlines. News clippings and coverage of our events and community.",
};

export default function MediaCoverageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
