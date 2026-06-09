import Hero from "@/components/Hero";
import HomePageContent from "@/app/home/page";
import Script from "next/script";
// SEO
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KanpurAI.space | AI Community, Events & Learning in Kanpur",
  description:
    "KanpurAI.space is a growing AI community in Kanpur focused on Artificial Intelligence, Machine Learning, GenAI workshops, events, and hands-on learning for students and professionals.",
  keywords: [
    "Kanpur AI",
    "AI in Kanpur",
    "AI workshops Kanpur",
    "AI community Kanpur",
    "learn AI in Kanpur",
    "AI events Kanpur",
  ],

  alternates: {
    canonical: "https://kanpurai.space",
  },

  openGraph: {
    title: "KanpurAI.space | AI Community of Kanpur",
    description:
      "Join KanpurAI – a community building the future of Artificial Intelligence through events, workshops, and collaborations.",
    url: "https://kanpurai.space",
    siteName: "Kanpur AI",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KanpurAI",
  "url": "https://kanpurai.space",
  "logo": "https://kanpurai.space/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/kanpuraispace",
    "https://twitter.com/kanpuraispace",
    "https://instagram.com/kanpurai.space"
  ],
  "description":
    "KanpurAI is a community-driven initiative focused on Artificial Intelligence education, events, and innovation in Kanpur."
};


//main
export default function Home() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Kanpur AI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kanpur AI is an AI community in Kanpur that provides workshops, events, and learning opportunities."
                }
              },
              {
                "@type": "Question",
                name: "How to join AI workshops in Kanpur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can join Kanpur AI workshops by registering on our website and attending upcoming events."
                }
              }
            ]
          }),
        }}
      />
      <HomePageContent />
    </>
  );
}
