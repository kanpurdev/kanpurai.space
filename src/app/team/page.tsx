"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { PeerlistIcon } from "@/components/PeerlistIcon";
import Image from "next/image";
import Link from "next/link";

// ── Custom Avatar Fallback ───────────────────────────────────────────────────
const AVATAR_GRADIENTS = [
  ["#6366f1", "#8b5cf6"], // indigo → violet
  ["#10b981", "#06b6d4"], // emerald → cyan
  ["#f59e0b", "#ef4444"], // amber → red
  ["#ec4899", "#8b5cf6"], // pink → violet
  ["#3b82f6", "#06b6d4"], // blue → cyan
  ["#C9FF3F", "#10b981"], // lime → emerald
  ["#f97316", "#ef4444"], // orange → red
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getGradient(name: string): [string, string] {
  const hash = name
    .split("")
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return AVATAR_GRADIENTS[hash % AVATAR_GRADIENTS.length];
}

function InitialsAvatar({ name }: { name: string }) {
  const initials = getInitials(name);
  const [from, to] = getGradient(name);
  return (
    <div
      className="absolute inset-0 flex items-center justify-center select-none"
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      <span
        className="font-extrabold text-white drop-shadow-sm"
        style={{ fontSize: "1.25rem", letterSpacing: "0.05em" }}
      >
        {initials}
      </span>
    </div>
  );
}

// Guard: Next.js Image throws "Invalid URL" for "#" or empty strings
function isValidSrc(src: string): boolean {
  return (
    typeof src === "string" &&
    src.trim() !== "" &&
    src !== "#" &&
    (src.startsWith("http") || src.startsWith("/"))
  );
}

function MemberAvatar({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);

  // Immediately show initials if src is "#", empty, or not a real URL
  // (prevents Next.js from throwing "Failed to construct 'URL': Invalid URL")
  if (!isValidSrc(src) || failed) return <InitialsAvatar name={name} />;

  return (
    <Image
      src={src}
      alt={name}
      fill
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
// ─────────────────────────────────────────────────────────────────────────────

const coreTeam = [
  {
    name: "Harsh Trivedi",
    role: "Overall Coordinator",
    image: "https://github.com/harsh98trivedi.png", // Placeholder
    bio: "A Tech Lover Inspired by Imagination",
    socials: {
      twitter: "https://twitter.com/harsh98trivedi",
      linkedin: "https://www.linkedin.com/in/harsh98trivedi/",
      github: "https://github.com/harsh98trivedi",
      peerlist: "https://peerlist.io/harsh98trivedi",
    },
  },
  {
    name: "Samarth Mishra",
    role: "Overall Coordinator",
    image: "https://github.com/iamsamarthmishra.png", // GitHub avatar (stable URL)
    bio: "Full-stack wizard and AI enthusiast. Loves shipping code.",
    socials: {
      twitter: "#",
      peerlist: "https://peerlist.io/iamsamarth",
      // linkedin: "https://www.linkedin.com/in/iamsamarthmishra",
      github: "#",
    },
  },
  {
    name: "Piyush Sahu",
    role: "Head of Marketing",
    image: "https://pbs.twimg.com/profile_images/1971528541675417600/1q3u1IkZ_400x400.jpg", // Placeholder
    bio: "Connecting people and fostering collaboration across the ecosystem.",
    socials: {
      twitter: "https://x.com/Piyushsahu_jtp",
      linkedin: "https://www.linkedin.com/in/piyush-sahu-jtp/",
      github: "https://github.com/piyushsahujtp",
    },
  },
  {
    name: "Chirag Vishnoi",
    role: "Developer",
    image: "https://github.com/chiragvishnoi-01.png", // Placeholder
    bio: "Full-stack wizard. AI enthusiast. Relentless shipper.",
    socials: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/chiragvishnoi01/",
      github: "https://github.com/chiragvishnoi-01",
    },
  },
  {
    name: "Mohd. Zeeshan",
    role: "Head of Partnerships and Program",
    image: "https://i.postimg.cc/yN6jBS4f/zee.jpg", // Placeholder
    bio: "Connecting people and fostering collaboration across the ecosystem.",
    socials: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/mdzeeshandev/",
      github: "#",
    },
  },
  {
    name: "Jatin",
    role: "Core Team",
    image: "https://github.com/github.png",
    bio: "Passionate about AI and community building.",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Janvi",
    role: "Core Team",
    image: "#",
    bio: "Enthusiastic builder and AI learner.",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];


export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-[#C9FF3F] selection:text-black">
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full relative rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://i.postimg.cc/Bb7gSnz6/team.png"
                alt="Team Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50"></div> {/* Dark Overlay for readability */}
            </div>

            <div className="relative z-10 py-12 md:py-24 px-4 md:px-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#C9FF3F]"></span>
                Meet the Team
              </div>
              <h1 className="font-space-grotesk text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-6 md:mb-8 tracking-tight drop-shadow-lg">
                The Minds Behind <br />
                <span className="text-[#C9FF3F]">
                  KanpurAI
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                We are a diverse group of students, developers, and innovators
                united by a single mission: to democratize AI education.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-4xl font-bold mb-4">
              Core Team
            </h2>
            <div className="w-24 h-1 bg-[#C9FF3F] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreTeam.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-6 overflow-hidden relative mx-auto">
                  <MemberAvatar src={member.image} name={member.name} />
                </div>
                <div className="text-center">
                  <h3 className="font-space-grotesk text-2xl font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#10b981] font-medium text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-4">
                    {member.socials?.twitter &&
                      member.socials.twitter !== "#" && (
                        <a
                          href={member.socials.twitter}
                          className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    {member.socials?.linkedin &&
                      member.socials.linkedin !== "#" && (
                        <a
                          href={member.socials.linkedin}
                          className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    {member.socials?.github &&
                      member.socials.github !== "#" && (
                        <a
                          href={member.socials.github}
                          className="text-gray-400 hover:text-black transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    {(member.socials as any).peerlist &&
                      (member.socials as any).peerlist !== "#" && (
                        <a
                          href={(member.socials as any).peerlist}
                          className="text-gray-400 hover:text-[#00AA45] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <PeerlistIcon className="w-5 h-5" />
                        </a>
                      )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-4xl font-bold mb-4">
              Volunteers
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-gray-600 max-w-2xl mb-8 text-lg">
              Join our community of passionate individuals helping to democratize AI education.
            </p>
            <Link
              href="/connect"
              className="px-8 py-4 rounded-full bg-black text-white font-bold text-lg hover:bg-gray-900 transition-all flex items-center gap-2 group"
            >
              Apply for Volunteers <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
