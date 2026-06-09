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
    Zap,
    Users,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function FebruaryMeetupPage() {
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
                        February Meetup: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#3b82f6]">Open Source</span>
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
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Attendance</span>
                            <span className="text-sm font-bold text-gray-900">30+ Attendees</span>
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
                            <img
                                src="https://i.postimg.cc/2SV1hRbz/feb-meetup-kanpurai.png"
                                alt="February Meetup Banner"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>

                        {/* About Section */}
                        <motion.div {...fadeIn}>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-sm italic font-serif">A</span>
                                About the Meetup
                            </h2>
                            <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed font-medium">
                                <p className="mb-4">
                                    The KanpurAI February Meetup was a dedicated <strong>Open Source-focused</strong> community event designed to help students understand how open-source contribution shapes careers, builds real-world skills, and connects developers globally.
                                </p>
                                <p className="mb-6">
                                    As part of the KanpurAI.Space mission to strengthen the AI and technology ecosystem in Uttar Pradesh, this meetup focused on:
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { icon: Zap, text: "Open Source Strategy", color: "text-[#C9FF3F]" },
                                        { icon: ArrowRight, text: "Git & GitHub Workflows", color: "text-blue-500" },
                                        { icon: Users, text: "Building in Public", color: "text-[#10b981]" },
                                        { icon: Zap, text: "AI + Open Source", color: "text-purple-500" }
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
                            <h2 className="text-2xl font-black text-gray-900 mb-8">Event Narrative (Agenda)</h2>
                            <div className="space-y-8 relative">
                                <div className="absolute left-[39px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
                                {[
                                    { time: "1:45 PM", event: "Check IN", desc: "Arrival and badge collection." },
                                    { time: "2:00 PM", event: "Event Start", desc: "Introduction to the day's theme." },
                                    { time: "2:05 PM", event: "Welcome Drink", desc: "Refreshing start for our attendees." },
                                    {
                                        time: "2:10 PM",
                                        event: "WordPress & The Power of Open Platforms",
                                        desc: "Opportunities for developers in open ecosystems.",
                                        speaker: "HARSH TRIVEDI"
                                    },
                                    {
                                        time: "2:40 PM",
                                        event: "Git & GitHub – The Foundation",
                                        desc: "Mastering version control for collaboration.",
                                        speaker: "MOHD. ZEESHAN"
                                    },
                                    { time: "3:05 PM", event: "How to Start Open Source", desc: "The right way to make your first contribution." },
                                    { time: "3:35 PM", event: "Interactive Q/A", desc: "Clarifying doubts and sharing insights." },
                                    { time: "3:50 PM", event: "Wrap up & Group Photo", desc: "Concluding a day of building together." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 relative z-10">
                                        <div className="w-20 shrink-0 font-bold text-xs text-gray-400 pt-1 tracking-tighter">{item.time}</div>
                                        <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                                        </div>
                                        <div className="flex-1 pb-4">
                                            <div className="font-extrabold text-gray-900 text-lg">{item.event}</div>
                                            <div className="text-sm text-gray-500 mt-1 font-medium">{item.desc}</div>
                                            {item.speaker && <div className="text-xs font-black text-[#10b981] mt-2 uppercase tracking-widest">Speaker: {item.speaker}</div>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Volunteers Section */}
                        <motion.div
                            {...fadeIn}
                            className="pt-12 border-t border-gray-100"
                        >
                            <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center justify-between">
                                Crew
                                <span className="bg-gray-100 text-gray-600 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">5 Volunteers</span>
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                                {[
                                    { name: "Harsh Trivedi", image: "https://ui-avatars.com/api/?name=Harsh+Trivedi&background=0D8ABC&color=fff" },
                                    { name: "Samarth Mishra", image: "https://ui-avatars.com/api/?name=Samarth+Mishra&background=0D8ABC&color=fff" },
                                    { name: "Piyush Sahu", image: "https://pbs.twimg.com/profile_images/1971528541675417600/1q3u1IkZ_400x400.jpg" },
                                    { name: "Pushpendra Gupta", image: "https://ui-avatars.com/api/?name=Pushpendra+Gupta&background=random" },
                                    { name: "Mohd. Zeeshan", image: "https://i.postimg.cc/yN6jBS4f/zee.jpg" }
                                ].map((member, i) => (
                                    <div key={i} className="flex flex-col items-center gap-3 group">
                                        <div className="w-16 h-16 rounded-2xl border-2 border-slate-900 p-0.5 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-xl" />
                                        </div>
                                        <div className="text-[10px] font-black text-gray-900 text-center leading-tight uppercase tracking-widest">{member.name}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Photos Section */}
                        <div className="pt-8 border-t border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk italic">Photos <span className="bg-gray-100 text-gray-600 text-sm font-medium px-2 py-0.5 rounded-full ml-2">6</span></h2>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    "https://i.postimg.cc/cCz0nJP0/feb-meetup.jpg",
                                    "https://i.postimg.cc/rsHMrp72/feb-meetup2.jpg",
                                    "https://i.postimg.cc/HnNdyLFm/feb-meetup3.jpg",
                                ].map((src, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group"
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
                                className="bg-white rounded-2xl border-2 border-slate-900 shadow-[8px_8px_0px_0px_#10b981] p-6 space-y-8"
                            >
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center shrink-0">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">FEB</span>
                                            <span className="text-lg font-black text-gray-900 leading-none">15</span>
                                        </div>
                                        <div>
                                            <div className="text-gray-900 font-black">Sunday, Feb 15, 2026</div>
                                            <div className="text-gray-500 text-sm font-medium">1:45 PM - 4:00 PM IST</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-gray-500" />
                                        </div>
                                        <div>
                                            <div className="text-gray-900 font-black">Kake di hatti, Kalyanpur</div>
                                            <div className="text-gray-500 text-xs mt-1 font-medium leading-relaxed">
                                                Kanpur, Uttar Pradesh
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full h-[180px] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-gray-100 shadow-inner">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.0071203131192!2d80.2581991!3d26.487715599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37003eefd923%3A0xa0fedc8fe601cc0b!2sKake%20di%20hatti%20kalyanpur!5e0!3m2!1sen!2sin!4v1771008412724!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                                <button
                                    disabled
                                    className="w-full py-4 rounded-xl bg-slate-100 text-slate-400 font-black text-lg cursor-not-allowed uppercase tracking-widest text-sm"
                                >
                                    Event Concluded
                                </button>
                            </motion.div>

                            <div className="px-2 space-y-4">
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Social Proof</div>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors font-bold text-sm">
                                        <Share className="w-4 h-4" /> Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors z-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Full screen preview"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}
