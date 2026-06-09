import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KanpurAI.Space Fastest-Growing AI & Student Innovation Community",
  description: "Join Kanpur AI, the leading AI community in Kanpur. Attend AI workshops, events, and hands-on training to learn Artificial Intelligence and machine learning from scratch.",
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
    title: "Kanpur AI – AI Community & Workshops in Kanpur",
    description:
      "Join Kanpur's fastest growing AI community. Learn AI, attend workshops, and build real-world projects.",
    url: "https://kanpurai.space",
    siteName: "Kanpur AI",
    images: [
      {
        url: "https://kanpurai.space/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KanpurAI.Space – India’s Fastest-Growing AI & Student Innovation Community",
    description:
      "Join the AI-driven revolution with KanpurAI.Space — a hub for students, innovators, and tech enthusiasts.",
    images: ["https://kanpurai.space/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Favicon.io/favicon.ico",
    shortcut: "/Favicon.io/favicon.ico",
    apple: "/Favicon.io/favicon.ico",
  },
  other: {
    seobility: "f340b350b927b6d908ffd1914581cf44",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-black text-white min-h-screen flex flex-col relative overflow-x-hidden w-full`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZXKC4SMQYM"
          strategy="afterInteractive"
        />
        <script src="https://t.contentsquare.net/uxa/6fb1cadfe82f9.js"></script>
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZXKC4SMQYM');
          `,
        }} />

        {/* Schema (SEO BOOST) */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kanpur AI",
              url: "https://kanpurai.space",
              logo: "https://kanpurai.space/og-image.png",
              sameAs: [
                "https://instagram.com/kanpurai"
              ],
            }),
          }}
        />


        <Navbar />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Kanpur AI",
              url: "https://kanpurai.space",
              logo: "https://kanpurai.space/og-image.png",
              sameAs: [
                "https://instagram.com/kanpurai.space",
                "https://linkedin.com/company/kanpuraispace"
              ],
              description:
                "Kanpur AI is a leading AI community in Kanpur providing workshops, events, and AI learning.",
              areaServed: "Kanpur",
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "AI Workshops"
              ]
            }),
          }}
        />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Bottom watermark strip */}
        <div className="site-watermark" aria-hidden="true">
          <div className="site-watermark-title">KANPURAI</div>
        </div>
      </body>
    </html>
  );
}
