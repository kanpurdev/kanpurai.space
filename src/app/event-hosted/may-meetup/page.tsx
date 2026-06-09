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
    Palette,
    Gamepad2,
    Trophy,
    Pizza
} from "lucide-react";
import { motion } from "framer-motion";

export default function MayMeetupPage() {
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9FF3F]/20 border border-[#C9FF3F]/50 text-xs font-bold text-slate-800 mb-4 uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-[#99CC33]"></span>
                        Upcoming Event
                    </div>
                    <h1 className="font-space-grotesk text-4xl sm:text-6xl font-black text-gray-900 mb-4 leading-tight">
                        May Meetup: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]">Design. Play. Create with AI.</span>
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
                            <span className="text-sm font-bold text-gray-900">Limited Seats</span>
                        </div>
                    </div>
                </motion.div>

                {/* Two Column Layout: Main Content + Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* LEFT COLUMN (Main Info) */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Hero Image / Banner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-100 shadow-2xl group"
                        >
                            <Image
                                src="https://i.postimg.cc/rsBrzsR8/may.png"
                                alt="May Meetup Banner"
                                fill
                                sizes="(max-width: 1024px) 100vw, 100vw"
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
                                    A creative community meetup built for designers, creators, developers, students, and curious minds who want to explore the future of creativity with AI.
                                </p>
                                <p className="mb-4">
                                    This isn’t a typical seminar or boring networking session.
                                    The KanpurAI May Meetup is an interactive experience filled with design activities, indoor games, AI exploration, fun conversations, and collaborative energy.
                                </p>
                                <p className="mb-8">
                                    Whether you’re a beginner, a creative professional, or someone simply curious about AI & design culture — this meetup is for you.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8 flex items-center gap-2">
                                    ✨ What to Expect
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { icon: Palette, text: "Creative Design Challenges", color: "text-[#ec4899]" },
                                        { icon: Zap, text: "AI Tools & Live Explorations", color: "text-[#8b5cf6]" },
                                        { icon: Gamepad2, text: "Fun Indoor Games & Team Activities", color: "text-[#10b981]" },
                                        { icon: Users, text: "Networking with Creators & Builders", color: "text-blue-500" },
                                        { icon: Trophy, text: "Mini Competitions & Surprise Rewards", color: "text-yellow-500" },
                                        { icon: Pizza, text: "Food & Swags Included", color: "text-orange-500" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <item.icon className={`w-5 h-5 ${item.color}`} />
                                            <span className="text-sm font-bold text-gray-800">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mb-4 mt-4 p-4 bg-[#C9FF3F]/10 rounded-xl border border-[#C9FF3F]/30 text-gray-800 font-semibold">
                                    Good vibes deserve good food. Your registration includes snacks/refreshments along with exclusive meetup swags for participants.
                                </p>
                            </div>
                        </motion.div>

                        {/* Who Should Attend Section */}
                        <motion.div
                            {...fadeIn}
                            className="pt-12 border-t border-gray-100"
                        >
                            <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                👥 Who Should Attend?
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Designers & Creators",
                                    "Students & Developers",
                                    "AI Enthusiasts",
                                    "Content Creators",
                                    "Startup & Tech Community Members",
                                    "Anyone who loves creativity + community"
                                ].map((audience, idx) => (
                                    <div key={idx} className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm">
                                        {audience}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Why You Should Join */}
                        <motion.div
                            {...fadeIn}
                            className="pt-12 border-t border-gray-100"
                        >
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                🚀 Why You Should Join
                            </h2>
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8b5cf6]/30 to-[#ec4899]/30 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-lg font-medium text-slate-300">
                                        Because the best ideas don’t come from scrolling alone.
                                    </p>
                                    <p className="text-lg font-medium text-slate-300">
                                        They happen when creative people come together, share energy, compete, collaborate, and build something memorable.
                                    </p>
                                    <div className="pt-4 mt-4 border-t border-slate-700/50">
                                        <p className="text-xl font-bold text-white">Come for the games.</p>
                                        <p className="text-xl font-bold text-[#C9FF3F]">Stay for the people, ideas, and experience.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

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
                                            <span className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">MAY</span>
                                            <span className="text-lg font-black text-gray-900 leading-none">?</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-gray-900 font-black">Date: May 24, 2026</div>
                                                <div className="text-gray-500 text-sm font-medium">Time: 3:00 PM - 4:30 PM</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-gray-500" />
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-gray-900 font-black">Location: TBD</div>
                                                <div className="text-gray-500 text-xs mt-1 font-medium leading-relaxed">
                                                    Kanpur, Uttar Pradesh
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a href="https://rsvp.kanpurai.space/" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-slate-900 text-[#C9FF3F] font-black text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                    Register Now
                                </a>

                                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                                    Limited seats will be available to keep the experience interactive and engaging.
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
                <a href="https://rsvp.kanpurai.space/" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-slate-900 text-[#C9FF3F] font-black text-lg flex items-center justify-center gap-2 shadow-lg">
                    Register Now
                </a>
            </div>
        </main>
    );
}
