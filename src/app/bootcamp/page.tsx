"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Download, ArrowRight, CheckCircle2, Clock,
    MonitorPlay, Briefcase, Code, Brain, Database,
    Users, Star, Sparkles, BookOpen, MapPin, Mail, Phone, Instagram, Linkedin, MessageCircle, Building2, Target, Zap
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

const bootcampTracks = [
    {
        id: "saas",
        name: "SaaS & Startups",
        title: "BUILD BILLION DOLLAR SAAS USING AI",
        modules: [
            { num: "MODULE 1", title: "STARTUP THINKING", desc: "What is SaaS?\nBillion-dollar ideas breakdown through case study (Netflix, Notion type)" },
            { num: "MODULE 2", title: "IDEA TO VALIDATION", desc: "How to find startup ideas (YC Approach)." },
            { num: "MODULE 3", title: "BUILD USING AI", desc: "No-code tools\nAI app builders\nLanding page creation and prompt eng." },
            { num: "MODULE 4", title: "MVP CREATION", desc: "Built a problem solving skill with AI\nBuilt a First MVP (Group Project)" },
            { num: "MODULE 5", title: "MONETIZATION", desc: "How startups earn (psychological approach)\nPricing basics as per target audience" },
            { num: "MODULE 6", title: "LAUNCH MINDSET", desc: "Team Building\nHands on Open-source\nBranding & Marketing\nPitching basics" }
        ]
    },
    {
        id: "ai-ml",
        name: "AI/ML Mastery",
        title: "AI/ML MASTERY BOOTCAMP",
        modules: [
            { num: "MODULE 1", title: "AI BASICS", desc: "What is AI vs ML\nReal world projects case study" },
            { num: "MODULE 2", title: "AI TOOLS", desc: "ChatGPT\nImage AI\nProductivity tools" },
            { num: "MODULE 3", title: "INTRO TO ML", desc: "Simple models (terminology based)\nNo heavy maths\nWifi RF Sensing\nChatbot" },
            { num: "MODULE 4", title: "BUILD USING AI", desc: "No-code tools\nAI app builders" },
            { num: "MODULE 5", title: "MINI PROJECT", desc: "Machine learning project discussion" }
        ]
    },
    {
        id: "cyber",
        name: "Cybersecurity",
        title: "CYBERSECURITY BOOTCAMP",
        modules: [
            { num: "MODULE 1", title: "CYBERSECURITY BASICS", desc: "What is hacking\nWhy it’s important now a days?" },
            { num: "MODULE 2", title: "INTERNET SECURITY", desc: "How to stay safe online\nPersonal security\nImportance of passwords" },
            { num: "MODULE 3", title: "TOOLS INTRO", desc: "Basic tools demo\nSafe environment (Sandbox)\nOS Knowledge and Linux cmd’s" },
            { num: "MODULE 4", title: "PRACTICAL", desc: "Website basics (sandbox)\nVulnerability concepts" },
            { num: "MODULE 5", title: "PROTECTION SKILLS", desc: "What is phishing\nWhat is social engineering" }
        ]
    },
    {
        id: "freelance",
        name: "Freelancing",
        title: "HOW TO START FREELANCING",
        modules: [
            { num: "MODULE 1", title: "SKILLS OVERVIEW", desc: "What is freelancing & what to sell?\nMarket understanding" },
            { num: "MODULE 2", title: "TOOLS + AI", desc: "Canva (Designing Skill)\nChatGPT (Prompt eng)\nContent tools" },
            { num: "MODULE 3", title: "HOW TO SELL", desc: "Social media basics (work)\nImportance of portfolio\nHow to find clients\nClient communication" },
            { num: "MODULE 4", title: "EARNING BASICS", desc: "How to negotiate professionally\nQuotation\nImportance of Docx" },
            { num: "MODULE 5", title: "BUILD YOUR AGENCY", desc: "Naming\nBranding\nFirst client approach" }
        ]
    }
];

export default function BootcampPage() {
    const [activeTrackId, setActiveTrackId] = useState("saas");

    const activeTrack = bootcampTracks.find(t => t.id === activeTrackId);

    return (
        <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 font-sans selection:bg-[#C9FF3F] selection:text-black">
            <Script
                id="bootcamp-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        "name": "AI Bootcamp for Students",
                        "description": "Comprehensive applied AI, Cybersecurity and Freelancing bootcamps designed for students in Kanpur.",
                        "provider": {
                            "@type": "Organization",
                            "name": "KanpurAI",
                            "sameAs": "https://kanpurai.space"
                        }
                    })
                }}
            />

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-[#0c0c0c]">
                {/* Enhanced Concentric Circles Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 md:opacity-70">
                    <div className="absolute w-[200px] h-[200px] rounded-full border-2 border-white/20 shadow-[0_0_80px_rgba(201,255,63,0.1)]"></div>
                    <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-white/20 shadow-[0_0_80px_rgba(201,255,63,0.15)]"></div>
                    <div className="absolute w-[600px] h-[600px] rounded-full border-2 border-white/20 shadow-[0_0_80px_rgba(201,255,63,0.1)]"></div>
                    <div className="absolute w-[800px] h-[800px] rounded-full border border-white/20"></div>
                    <div className="absolute w-[1000px] h-[1000px] rounded-full border border-white/10"></div>
                    <div className="absolute w-[1200px] h-[1200px] rounded-full border border-white/10"></div>
                    <div className="absolute w-[1400px] h-[1400px] rounded-full border border-white/10"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full flex flex-col items-center relative"
                    >
                        {/* Floating Element 1 */}
                        <div className="hidden lg:flex absolute left-0 top-10 items-center gap-3 text-left">
                            <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-[#C9FF3F]">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm">FROM STUDENT</p>
                                <p className="text-[#C9FF3F] text-xs font-bold uppercase tracking-wider">→ Creator with AI</p>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9FF3F]/10 border border-[#C9FF3F]/20 text-[#C9FF3F] text-sm font-bold tracking-wider uppercase mb-8">
                            <Sparkles className="w-4 h-4" /> Powered By KanpurAI.space
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-[8.5rem] font-bold font-space-grotesk tracking-tighter text-white mb-6 leading-[1.1] md:leading-[0.95] relative">
                            AI Bootcamp<br /><span className="text-[#C9FF3F]">2026</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-white/80 mb-12 max-w-3xl leading-relaxed relative font-light px-4 sm:px-0">
                            Learn how to use AI smartly for studies, creativity, and future careers. <span className="font-medium text-white">No coding experience required.</span> Designed specially for Class 9–12 students.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative z-20 w-full sm:w-auto px-4 sm:px-0">
                            <a href="mailto:hello@kanpurai.space" className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-[#C9FF3F] text-black font-bold rounded-full hover:bg-white transition-all flex items-center justify-center gap-2 text-base sm:text-lg border border-transparent hover:border-[#C9FF3F]/50 shadow-[0_0_40px_rgba(201,255,63,0.3)]">
                                Contact to Host <ArrowRight className="w-5 h-5" />
                            </a>
                            <button className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-transparent text-white border border-white/20 font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-base sm:text-lg">
                                Explore Curriculum <Download className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="mt-8 text-white/40 font-mono text-sm tracking-widest uppercase">Coming Soon</p>
                    </motion.div>
                </div>

                {/* Visual fade into the rest of the light page */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-slate-50 z-20"></div>
            </section>

            {/* WHAT IS KANPURAI SECTION */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-black mb-8">What is <span className="text-slate-400">KanpurAI.space?</span></h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    KanpurAI.space is a fast-growing AI community based in Kanpur, focused on helping students explore, understand, and practically use Artificial Intelligence in their daily lives. Our goal is to bridge the gap between traditional education and future-ready skills by providing hands-on learning experiences that go beyond textbooks.
                                </p>
                                <p>
                                    We conduct workshops, bootcamps, and interactive meetups where students not only learn about AI tools but also build real-world projects, improve their productivity, and develop creative problem-solving skills.
                                </p>
                                <p className="font-medium text-slate-900 border-l-4 border-[#C9FF3F] pl-4">
                                    At KanpurAI, we believe that AI is not just for engineers — it is a powerful tool that every student can use to learn smarter, create better, and grow faster.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 p-8">
                                <img src="https://i.postimg.cc/hjQNWVY5/Knpai.png" alt="Kanpur AI Space" className="w-full h-auto rounded-xl mb-8 object-cover max-h-[300px]" onError={(e) => {
                                    // Fallback if image doesn't exist yet but user specified the path
                                    const target = e.target as HTMLImageElement;
                                    target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800";
                                }} />
                                <h4 className="text-xl font-bold text-black mb-4">Our Community Partners</h4>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    At KanpurAI.space, we actively collaborate with educational institutions, tech communities, and local organizations to deliver high-quality learning experiences.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Google Developer Group Kanpur", "Nexus Spring of Code", "Jagran Institute", "CodeVidya (CSJMU)", "Wordpress", "Cybersecninja", "AITD", "MLH"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -z-10 top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-[#C9FF3F] rounded-full blur-[80px] opacity-40"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CURRICULUM TABS SECTION */}
            <section className="py-24 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-sm tracking-wider uppercase mb-4">
                            <BookOpen className="w-4 h-4" /> Future Starts Here
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-black mb-6">What You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Learn Here</span></h2>
                        <p className="text-slate-600 text-lg">Swipe through our specialized applied-learning bootcamps designed to take you from beginner to creator.</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
                        {bootcampTracks.map((track) => (
                            <button
                                key={track.id}
                                onClick={() => setActiveTrackId(track.id)}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-300 shadow-sm border ${activeTrackId === track.id
                                    ? "bg-slate-900 border-slate-900 text-[#C9FF3F] shadow-lg scale-105"
                                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                                    }`}
                            >
                                {track.name}
                            </button>
                        ))}
                    </div>

                    {/* Active Track Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTrackId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-slate-50 rounded-[2rem] border border-slate-200 p-8 md:p-12 shadow-xl"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-center text-black mb-12">{activeTrack?.title}</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {activeTrack?.modules.map((mod, i) => (
                                    <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 to-slate-200 group-hover:from-[#C9FF3F] group-hover:to-[#3b82f6] transition-colors duration-500"></div>
                                        <div className="text-xs font-bold tracking-widest text-slate-400 mb-2 uppercase">{mod.num}</div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-4">{mod.title}</h4>
                                        <ul className="space-y-2">
                                            {mod.desc.split('\n').map((line, j) => (
                                                <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
                                                    <span>{line}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* WHY THIS BOOTCAMP */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="order-2 md:order-1 space-y-6"
                        >
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex gap-4">
                                <div className="p-3 bg-[#C9FF3F] rounded-xl shrink-0 h-min">
                                    <Target className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Bridging the Gap</h4>
                                    <p className="text-white/60 leading-relaxed">In today’s fast-changing world, Artificial Intelligence is becoming an essential skill, yet most schools still don’t teach how to actually use it in real life. This bootcamp is designed to bridge that gap.</p>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex gap-4">
                                <div className="p-3 bg-blue-500 rounded-xl shrink-0 h-min">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Real Tools, Real Outcomes</h4>
                                    <p className="text-white/60 leading-relaxed">Unlike traditional classes, this program focuses on hands-on learning. Students will not just learn what AI is, but how to use it for studying smarter, creating projects, and exploring future career opportunities.</p>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex gap-4">
                                <div className="p-3 bg-purple-500 rounded-xl shrink-0 h-min">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Verified E-Certificate</h4>
                                    <p className="text-white/60 leading-relaxed">Every student will receive a verified e-certificate upon completion, which can be shared online and used in the future for academic profiles and portfolios.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-6">Why This <span className="text-[#C9FF3F]">AI Bootcamp?</span></h2>
                            <p className="text-xl text-white/70 leading-relaxed mb-8">
                                We believe that early exposure to AI can give students a strong advantage, helping them stay ahead, think creatively, and build confidence in using modern technology.
                            </p>
                            <div className="pl-6 border-l-4 border-[#C9FF3F]">
                                <p className="text-lg font-medium text-white italic">
                                    "This bootcamp is not about complex coding — it’s about making students future-ready in the simplest and most effective way possible."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* OUR REQUIREMENTS SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-black mb-8">Ready to Host? Our <span className="text-slate-400">Requirements</span></h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-12">
                        To successfully conduct this bootcamp, we require basic support from the school. No prior coding or AI knowledge is needed from students!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl group hover:shadow-lg transition-all">
                            <div className="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Building2 className="w-8 h-8 text-slate-800" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Classroom or Lab</h4>
                            <p className="text-slate-500 text-sm">Equipped with a projector or smart display for instructions.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl group hover:shadow-lg transition-all">
                            <div className="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <MonitorPlay className="w-8 h-8 text-slate-800" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Shared Devices</h4>
                            <p className="text-slate-500 text-sm">Access to laptops, PCs or shared devices for students.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl group hover:shadow-lg transition-all">
                            <div className="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Zap className="w-8 h-8 text-slate-800" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Internet Access</h4>
                            <p className="text-slate-500 text-sm">Basic connectivity to access cloud-based AI tools.</p>
                        </div>
                    </div>

                    <div className="bg-[#C9FF3F]/10 border border-[#C9FF3F]/30 p-8 rounded-3xl text-left">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">💡 Why host this bootcamp?</h4>
                        <p className="text-slate-700 leading-relaxed">
                            By hosting this bootcamp, the school gains a strong advantage by introducing future-ready skills like Artificial Intelligence to its students, enhancing its reputation as a modern and progressive institution. It increases engagement and adds value beyond the traditional curriculum, making the school stand out among others.
                        </p>
                    </div>
                </div>
            </section>

            {/* FINAL WHAT MAKES THIS DIFFERENT / CONTACT SECTION */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9FF3F]/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2"></div>
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl">

                        {/* What Makes This Different */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-8">What Makes This <span className="text-[#C9FF3F]">Different?</span></h2>
                            <ul className="space-y-6">
                                {[
                                    "No boring theory — only practical learning",
                                    "Designed specially for school students",
                                    "Real tools that students can use daily",
                                    "Interactive doubt sessions + hands-on activities",
                                    "Learning with Industry Experts"
                                ].map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 text-white/80 text-lg"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-[#C9FF3F]" />
                                        </div>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Let's Connect */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                            <h3 className="text-3xl font-bold text-black mb-2">Let’s connect</h3>
                            <p className="text-slate-500 mb-8">We welcome educational institutions to connect with us and host this AI Bootcamp.</p>

                            <div className="space-y-6">
                                <a href="mailto:hello@kanpurai.space" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                                        <Mail className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mail Us</p>
                                        <p className="text-lg font-bold text-slate-900">hello@kanpurai.space</p>
                                    </div>
                                </a>

                                <a href="tel:+918081249309" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                                        <Phone className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Number</p>
                                        <p className="text-lg font-bold text-slate-900">+91-8081249309</p>
                                    </div>
                                </a>

                                <div className="pt-6 border-t border-slate-100 mt-6 pt-6 flex justify-around">
                                    <a href="https://instagram.com/kanpurai.space" target="_blank" className="flex flex-col items-center gap-2 group">
                                        <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-[#E1306C] group-hover:text-white transition-all">
                                            <Instagram className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-500">Instagram</span>
                                    </a>
                                    <a href="https://kanpurai.space" target="_blank" className="flex flex-col items-center gap-2 group">
                                        <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-500">Website</span>
                                    </a>
                                    <a href="https://linkedin.com/company/kanpuraispace" target="_blank" className="flex flex-col items-center gap-2 group">
                                        <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-white transition-all">
                                            <Linkedin className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-500">LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
