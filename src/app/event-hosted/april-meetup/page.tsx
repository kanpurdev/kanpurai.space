"use client";

import React from "react";
import Image from "next/image";
import {
    MapPin,
    Clock,
    Calendar,
    Share,
    MessageSquare,
    Zap,
    Users,
    ArrowRight,
    X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AprilMeetupPage() {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <main className="bg-white text-gray-900 font-sans min-h-screen pb-32 selection:bg-[#C9FF3F] selection:text-black">
            {/* Top Main Container */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
                {/* Header - Title & Host */}
                <motion.div
                    {...fadeIn}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                        Past Event
                    </div>
                    <h1 className="font-space-grotesk text-4xl sm:text-6xl font-black text-gray-900 mb-4 leading-tight">
                        April Meetup: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]">Basics of UI/UX</span>
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 mt-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-black border border-gray-200 overflow-hidden shadow-sm">
                                <Image src="https://i.postimg.cc/hjQNWVY5/Knpai.png" alt="KanpurAI" width={40} height={40} className="object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Hosted by</span>
                                <span className="text-sm font-bold text-gray-900">Kanpurai.space</span>
                            </div>
                        </div>

                        <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Expected</span>
                            <span className="text-sm font-bold text-gray-900">150+ Attendees</span>
                        </div>
                    </div>
                </motion.div>

                {/* Two Column Layout: Main Content + Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* LEFT COLUMN (Main Info) */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-100 shadow-2xl group"
                        >
                            <Image
                                src="https://media.licdn.com/dms/image/v2/D5622AQGp6HiabHJP9w/feedshare-shrink_1280/B56ZyJSoHXIAAg-/0/1771829888563?e=1774483200&v=beta&t=fIPOKgf_iEWLtygN7wyuGODI_udpgvKbVfv-UwTYMdM"
                                alt="April Meetup Banner"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </motion.div>

                        {/* About Section */}
                        <motion.div {...fadeIn}>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-sm italic font-serif">O</span>
                                Overview
                            </h2>
                            <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed font-medium">
                                <p className="mb-4">
                                    The April Meetup by KanpurAI focused on the fundamentals of UI/UX design, combined with practical insights into how AI tools are transforming the design workflow.
                                </p>
                                <p className="mb-4">
                                    The session was structured as an interactive talk with real-world examples, audience participation, and open discussions.
                                </p>
                                <p className="mb-4 text-gray-900 font-bold">
                                    Tools & Concepts Covered: Google Stitch (AI-based UI generation), Design Systems & UX Laws, Prompt Engineering for Designers, and Workflow optimization using AI.
                                </p>
                                <p className="mb-6">
                                    The session was led by <span className="font-bold text-[#8b5cf6]"> <a href="https://www.linkedin.com/in/phantom-cluster/">Hitanshu Sahu</a></span>, who guided attendees through practical workflows and engaged with participants through discussions and feedback. The audience actively contributed by sharing their own tools, prompting methods, and design experiences.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { icon: Zap, text: "AI-assisted UI/UX Workflows", color: "text-[#C9FF3F]" },
                                        { icon: MessageSquare, text: "Live Demo of Google Stitch", color: "text-blue-500" },
                                        { icon: Users, text: "Real-time Q&A Interaction", color: "text-[#10b981]" },
                                        { icon: ArrowRight, text: "Prompting for Design Tasks", color: "text-purple-500" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <item.icon className={`w-5 h-5 ${item.color}`} />
                                            <span className="text-sm font-bold text-gray-800">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Core Learnings Section */}
                        <motion.div
                            {...fadeIn}
                            className="pt-12 border-t border-gray-100"
                        >
                            <h2 className="text-2xl font-black text-gray-900 mb-8">Core Learnings</h2>
                            <div className="space-y-8 relative">
                                <div className="absolute left-[39px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
                                {[
                                    { step: "01", event: "Structured Prompting Framework", desc: "Persona → Task → Context → Verification. Mastering the flow to get better AI design outputs.", speaker: "Hitanshu" },
                                    { step: "02", event: "Defining Design Constraints", desc: "The importance of dialing in typography, spacing, colors, and layout rules before prompting." },
                                    { step: "03", event: "AI as a Starting Point", desc: "Using generative models as an ideation baseline, not a complete final solution." },
                                    { step: "04", event: "The Necessity of Human Verification", desc: "Why human intuition remains critical for validating layout logic, accessibility, and code outputs." },
                                    { step: "05", event: "Leveraging Good References", desc: "Using mood boards, UX principles, and competitive analysis to ground your AI generation." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 relative z-10">
                                        <div className="w-20 shrink-0 font-black text-xl text-gray-300 pt-1 tracking-tighter">{item.step}</div>
                                        <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                                        </div>
                                        <div className="flex-1 pb-4">
                                            <div className="font-extrabold text-gray-900 text-lg">{item.event}</div>
                                            <div className="text-sm text-gray-500 mt-1 font-medium">{item.desc}</div>
                                            {item.speaker && <div className="text-xs font-black text-[#10b981] mt-2 uppercase tracking-widest">SPEAKER: {item.speaker}</div>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Photos Section */}
                        <div className="pt-8 border-t border-gray-100 mt-12">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk italic">Photos <span className="bg-gray-100 text-gray-600 text-sm font-medium px-2 py-0.5 rounded-full ml-2">6</span></h2>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    "https://i.postimg.cc/8zZTxGtg/1.jpg",
                                    "https://i.postimg.cc/0yk8tjd8/2.jpg",
                                    "https://i.postimg.cc/nh3nNx0J/3.jpg",
                                    "https://i.postimg.cc/ht2KNnpq/4.jpg",
                                    "https://i.postimg.cc/rwfq7TQ8/5.jpg",
                                    "https://i.postimg.cc/13vybSJ5/6.jpg"
                                ].map((src, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-shadow relative group cursor-pointer"
                                        onClick={() => setSelectedImage(src)}
                                    >
                                        <div className="aspect-[4/3]">
                                            <img
                                                src={src}
                                                alt={`Event photo ${index + 1}`}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN (Sticky Sidebar Details) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Time & Place Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl border-2 border-slate-900 shadow-[8px_8px_0px_0px_#C9FF3F] p-6 space-y-8"
                            >
                                <div className="space-y-6">
                                    {/* Date/Time */}
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center shrink-0">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">APR</span>
                                            <span className="text-lg font-black text-gray-900 leading-none">19</span>
                                        </div>
                                        <div>
                                            <div className="text-gray-900 font-black">Sunday, Apr 19, 2026</div>
                                            <div className="text-gray-500 text-sm font-medium">15:00 - 16:30</div>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-gray-500" />
                                        </div>
                                        <div>
                                            <div className="text-gray-900 font-black">Nothing Before Coffee, Pandu Nagar</div>
                                            <div className="text-gray-500 text-xs mt-1 font-medium leading-relaxed">
                                                Kanpur, Uttar Pradesh<br />
                                                (In-Person Event)
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button disabled className="w-full py-4 rounded-xl bg-gray-100 text-gray-400 font-black text-lg flex items-center justify-center gap-2 cursor-not-allowed border border-gray-200">
                                    Event Concluded
                                </button>

                                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                    Limited Capacity • Free Registration
                                </p>
                            </motion.div>

                            {/* Share & Info */}
                            <div className="px-2 space-y-4">
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Spread the word</div>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors font-bold text-sm">
                                        <Share className="w-4 h-4" /> Share
                                    </button>
                                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors font-bold text-sm">
                                        <Calendar className="w-4 h-4" /> Add Cal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Registration Bar for Mobile */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <button disabled className="w-full py-4 rounded-xl bg-gray-100 text-gray-400 font-black text-lg flex items-center justify-center gap-2 cursor-not-allowed">
                    Event Concluded
                </button>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
                        >
                            <img
                                src={selectedImage}
                                alt="Event Full Photo"
                                className="max-w-full max-h-[90vh] object-contain rounded-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
