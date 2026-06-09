"use client";

import React from "react";
import Image from "next/image";
import {
    MapPin,
    Clock,
    Calendar,
    Share,
    ChevronRight,
    X,
    MessageSquare,
    Zap,
    Users,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function MarchMeetupPage() {
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
                        March Meetup: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#3b82f6]">Women in AI-World</span>
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
                            <span className="text-sm font-bold text-gray-900">125+ Attendees</span>
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
                                src="https://media.licdn.com/dms/image/v2/D5622AQGp6HiabHJP9w/feedshare-shrink_1280/B56ZyJSoHXIAAg-/0/1771829888563?e=1774483200&v=beta&t=fIPOKgf_iEWLtygN7wyuGODI_udpgvKbVfv-UwTYMdM" // Using placeholder as proxy for the generated image for now, I'll update with the actual later if needed but usually better to use a relative path if I move it to public
                                alt="March Meetup Banner"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </motion.div>

                        {/* About Section */}
                        <motion.div {...fadeIn}>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-sm italic font-serif">A</span>
                                About the Meetup
                            </h2>
                            <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed font-medium">
                                <p className="mb-4">
                                    We celebrate the women shaping the future of AI — from startups to global tech ecosystems.
                                </p>
                                <p className="mb-4">
                                    <strong>Kanpur AI March Meetup</strong> is dedicated to inspiring, empowering, and elevating women in technology.
                                    But growth happens together — this event is open to everyone who believes in inclusion, innovation, and impact.
                                </p>
                                <p className="mb-4">
                                    Whether you’re a woman in tech, an aspiring professional, or an ally supporting change — this space is for you.
                                </p>
                                <p className="mb-6 font-bold text-gray-900">
                                    Let’s learn, collaborate, and build the future of AI — together. 🚀
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { icon: Zap, text: "Women in Tech Spotlights", color: "text-[#C9FF3F]" },
                                        { icon: MessageSquare, text: "Inclusive Innovation", color: "text-blue-500" },
                                        { icon: Users, text: "Community Mentorship", color: "text-[#10b981]" },
                                        { icon: ArrowRight, text: "Future Tech Career Paths", color: "text-purple-500" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <item.icon className={`w-5 h-5 ${item.color}`} />
                                            <span className="text-sm font-bold text-gray-800">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Agenda Section */}
                        <motion.div
                            {...fadeIn}
                            className="pt-12 border-t border-gray-100"
                        >
                            <h2 className="text-2xl font-black text-gray-900 mb-8">The Blueprint (Agenda)</h2>
                            <div className="space-y-8 relative">
                                <div className="absolute left-[39px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
                                {[
                                    { time: "11:00 AM", event: "Registration & Welcome", desc: "Get settled in before the sessions begin." },
                                    { time: "11:30 AM", event: "Upgrading Your Life with Google AI", desc: "Discover how Google AI tools can enhance your daily life.", speaker: "Hitanshu Sahu" },
                                    { time: "12:15 PM", event: "AI is Not the Future — It’s the Present: How to Build Your Place in It", desc: "Insights on navigating the current AI landscape.", speaker: "Anushka Tiwari" },
                                    { time: "01:00 PM", event: "AI Empowering Sustainable Innovator", desc: "Exploring how AI drives sustainability and innovation.", speaker: "Himanshi Kushwaha" },
                                    { time: "01:45 PM", event: "Closing & Group Snap", desc: "Thank you for joining the March Meetup." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 relative z-10">
                                        <div className="w-20 shrink-0 font-bold text-xs text-gray-400 pt-1 tracking-tighter">{item.time}</div>
                                        <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                                        </div>
                                        <div className="flex-1 pb-4">
                                            <div className="font-extrabold text-gray-900 text-lg">{item.event}</div>
                                            <div className="text-sm text-gray-500 mt-1 font-medium">{item.desc}</div>
                                            {item.speaker && <div className="text-xs font-black text-[#10b981] mt-2 uppercase tracking-widest">Featured: {item.speaker}</div>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Photos Section */}
                        <div className="pt-8 border-t border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk italic">Photos <span className="bg-gray-100 text-gray-600 text-sm font-medium px-2 py-0.5 rounded-full ml-2">6</span></h2>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    "https://i.postimg.cc/4yQbpvNc/march.jpg",
                                    "https://i.postimg.cc/bvZT42L6/march_(64).jpg",
                                    "https://i.postimg.cc/q7NLWCQc/march_(61).jpg",
                                    "https://i.postimg.cc/5NGjnYYx/marchmeetup.png",
                                    "https://i.postimg.cc/W4dnxJSG/march_(21).jpg",
                                    "https://i.postimg.cc/QMFbvWSJ/march_(46).jpg"
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
                                            <span className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">MAR</span>
                                            <span className="text-lg font-black text-gray-900 leading-none">15</span>
                                        </div>
                                        <div>
                                            <div className="text-gray-900 font-black">Saturday, Mar 14, 2026</div>
                                            <div className="text-gray-500 text-sm font-medium">11:30 AM - 4:00 PM IST</div>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-gray-500" />
                                        </div>
                                        <div>
                                            <div className="text-gray-900 font-black">CSJM University</div>
                                            <div className="text-gray-500 text-xs mt-1 font-medium leading-relaxed">
                                                TBD<br />
                                                Kanpur, Uttar Pradesh
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button disabled className="w-full py-4 rounded-xl bg-gray-100 text-gray-400 font-black text-lg flex items-center justify-center gap-2 cursor-not-allowed">
                                    Event Concluded
                                </button>

                                <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                    Limited Capacity • Paid Registration
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
        </main>
    );
}
