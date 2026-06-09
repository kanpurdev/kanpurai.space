"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Users,
  Cpu,
  Code,
  Globe,
  MessageCircle,
  MapPin,
  Linkedin
} from "lucide-react";
import Link from "next/link";
import { events } from "@/data/events";
import Script from "next/script";
// --- Components ---

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const [particles, setParticles] = useState<{ x: string; y: string; yAnimate: number; duration: number }[]>([]);

  useEffect(() => {
    setParticles(
      [...Array(5)].map(() => ({
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        yAnimate: Math.random() * -100,
        duration: 10 + Math.random() * 10,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Floating Nodes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#C9FF3F] rounded-full shadow-[0_0_10px_#C9FF3F]"
            initial={{
              x: p.x,
              y: p.y,
              opacity: 0.3
            }}
            animate={{
              y: [null, p.yAnimate],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C9FF3F]"></span>
            Kanpur's First AI Community
          </div>
          <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold text-black leading-[1.1] mb-6 tracking-tight">
            Building Kanpur’s <br />
            <span className="relative inline-block">
              <span className="relative z-10">AI Future</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-[#C9FF3F]/40 -z-0 -rotate-1"></span>
            </span> — Together.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
            kanpurAI.space is an open community empowering students, young developers, and innovators across Kanpur to learn, collaborate, and build with AI.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 group">
              Join the Movement
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border border-gray-200 text-black font-semibold hover:bg-gray-50 transition-colors">
              Explore Events
            </button>
          </div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="hidden md:block relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C9FF3F]/20 to-[#A2FF6C]/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 bg-white/50 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">app.py</div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex gap-4">
                  <span className="text-gray-300">1</span>
                  <span className="text-purple-600">import</span> <span className="text-black">kanpurAI</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-300">2</span>
                  <span className="text-blue-600">def</span> <span className="text-yellow-600">build_future</span>():
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-300">3</span>
                  <span className="pl-4 text-black">community = </span> <span className="text-green-600">"Students + Innovators"</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-300">4</span>
                  <span className="pl-4 text-purple-600">return</span> <span className="text-black">community.empower()</span>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-full bg-[#C9FF3F] flex items-center justify-center">
                  <Users className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Members</div>
                  <div className="text-lg font-bold text-black">500+</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="font-space-grotesk text-4xl font-bold text-black mb-6">
            About <span className="text-gray-400">kanpurAI.space</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            kanpurAI.space is a community-led AI initiative dedicated to making AI education accessible, practical, and collaborative. We aim to empower the youth of Kanpur to become future-ready innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Empowering Students", icon: Globe, desc: "Providing resources and mentorship to kickstart AI journeys." },
            { title: "Connecting Innovators", icon: Users, desc: "Bridging the gap between learners, pros, and startups." },
            { title: "Building AI Culture", icon: Cpu, desc: "Fostering a mindset of building, shipping, and solving problems." }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9FF3F] to-[#A2FF6C] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#C9FF3F]/20 transition-colors">
                <card.icon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{card.title}</h3>
              <p className="text-gray-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-space-grotesk text-4xl font-bold text-black">What We Do</h2>
          <div className="hidden md:block h-px flex-1 bg-gray-200 ml-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "kanpurAI Events", sub: "Hackathons, workshops, summits", color: "bg-purple-50", link: "/events" },
            { title: "Learn AI", sub: "Free & affordable project-based programs", color: "bg-yellow-50", link: "/blog" },
            { title: "kanpurAI for Good", sub: "AI for social impact, local solutions", color: "bg-green-50", link: "/media-coverage" }
          ].map((item, i) => (
            <Link href={item.link} key={i} className="block h-full">
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#C9FF3F] transition-colors group cursor-pointer h-full">
                <div className={`w-10 h-10 rounded-lg ${item.color} mb-4 flex items-center justify-center`}>
                  <Code className="w-5 h-5 text-black opacity-60" />
                </div>
                <h3 className="text-lg font-bold text-black mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.sub}</p>
                <div className="mt-4 flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#C9FF3F] transition-colors">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const upcomingEvents = events.filter(e => e.status === "Upcoming").slice(0, 3);

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-space-grotesk text-4xl font-bold text-black mb-12">Upcoming Events</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, i) => (
            <div key={i} className={`group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 ${event.status === 'Past' ? 'opacity-60 grayscale hover:grayscale-0' : ''}`}>
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={event.img} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold z-20 ${event.status === 'Upcoming' ? 'bg-[#C9FF3F] text-black' : 'bg-gray-200 text-gray-600'}`}>
                  {event.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{event.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {event.loc}
                  </div>
                </div>
                {(event as any).link ? (
                  <Link
                    href={(event as any).link}
                    className="w-full py-3 rounded-lg border border-gray-200 text-black font-semibold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group-hover:border-black"
                  >
                    RSVP Start Soon <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <button className="w-full py-3 rounded-lg border border-gray-200 text-black font-semibold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group-hover:border-black">
                    Coming Soon <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Community = () => {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-black mb-6">
          kanpurAI.space isn’t just a group — <br /> it’s a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">movement</span>.
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Join our AI community and connect with builders and learners shaping Kanpur’s tech future.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://chat.whatsapp.com/FUaNXK2WRmi4wyNw2KQfix" target="_blank" className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow flex items-center gap-2">
            <MessageCircle className="w-5 h-5" /> Join WhatsApp
          </a>
          <button className="px-6 py-3 rounded-full bg-[#5865F2] text-white font-bold hover:shadow-[0_0_20px_rgba(88,101,242,0.4)] transition-shadow flex items-center gap-2">
            <Globe className="w-5 h-5" /> Join Discord
          </button>
          <a href="https://linkedin.com/company/kanpuraispace" target="_blank" className="px-6 py-3 rounded-full bg-[#0077B5] text-white font-bold hover:shadow-[0_0_20px_rgba(0,119,181,0.4)] transition-shadow flex items-center gap-2">
            <Linkedin className="w-5 h-5" /> Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partnerLogos = [
    { src: "https://i.postimg.cc/L85Hhwm0/Whats-App-Image-Dec-12-2025.jpg", alt: "Partner", bg: "bg-white" },
    { src: "https://code-vidya-prep-mitr.vercel.app/Code-Vidya.png", alt: "Code Vidya", bg: "bg-white" },
    { src: "https://i.postimg.cc/XvsF8BJM/kanpurdev-high-resolution-logo.png", alt: "Kanpur Dev", bg: "bg-white" },
    { src: "https://i.postimg.cc/Hkh7KcX1/cyber-secninja-high-resolution-logo.png", alt: "Cyber SecNinja", bg: "bg-white" },
    { src: "https://i.postimg.cc/zvsbx2BM/566199768-17847362289596162-8514135871375641901-n.jpg", alt: "Kake-di-hatti-kalayanpur", bg: "bg-white" },
    { src: "https://i.postimg.cc/WpgNhbMZ/NSOC.png", alt: "NSOC", bg: "bg-black" },
    { src: "https://iili.io/BSoHJus.jpg", alt: "Coders Corner", bg: "bg-white" },
    { src: "https://iili.io/BSoHH9n.jpg", alt: "JIM", bg: "bg-white" },
    { src: "https://iili.io/BSo9mFI.jpg", alt: "MLH", bg: "bg-white" },
    { src: "https://zorko.in/wp-content/uploads/2026/02/zorko-new-logo.png", alt: "Zorko", bg: "bg-white" },
    { src: "https://stores.nothingbeforecoffee.com/images/nbc-logo.svg", alt: "Nothing Before Coffee", bg: "bg-white" }
  ];

  // Combine multiple copies of partnerLogos for smooth infinite scrolling
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center overflow-hidden">
        <p className="text-gray-500 font-medium mb-8">Supported by Communities, Startups & Colleges of Kanpur</p>
        
        <div className="relative w-full flex items-center opacity-60 grayscale hover:grayscale-0 transition-opacity duration-500">
          {/* Fading left/right edges for a sleek marquee effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-8 whitespace-nowrap min-w-max py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className={`shrink-0 h-16 px-6 ${logo.bg} rounded-lg flex items-center justify-center border border-gray-100 shadow-sm transition-transform hover:scale-105`}
              >
                <img src={logo.src} alt={logo.alt} className="h-12 w-auto object-contain pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-[#C9FF3F] selection:text-black">
      <Script
        id="faq-schema-home"
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
                  text: "Kanpur AI is an AI community in Kanpur that provides workshops, events, and monthly meetups."
                }
              },
              {
                "@type": "Question",
                name: "How to join AI workshops in Kanpur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can join Kanpur AI workshops by registering on our website and attending upcoming events/workshop/meetup."
                }
              }
            ]
          }),
        }}
      />
      <Hero />
      <About />
      <Programs />
      <Events />
      <Community />
      <Partners />

    </main>
  );
}
