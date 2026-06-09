import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Connect with Us | KanpurAI",
    description: "Join the KanpurAI community as a Speaker, Sponsor, Partner, or Volunteer.",
};

export default function ConnectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
