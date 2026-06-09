"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, School, ArrowRight, Plus } from "lucide-react";

type Chapter = {
    id: number;
    name: string;
    members: number;
    lead: string;
    co_lead: string;
    status: "Active" | "Starting Soon";
};

const chapters: Chapter[] = [
    { id: 1, name: "CSJM University", members: 500, lead: "Jatin Gupta", co_lead: "Janvi Sahu", status: "Active" },
    { id: 2, name: "HBTU Kanpur", members: 85, lead: "Sneha Gupta", co_lead: "-", status: "Active" },
    { id: 3, name: "IIT Kanpur", members: 200, lead: "Rohan Singh", co_lead: "-", status: "Active" },
    { id: 4, name: "Rama University", members: 45, lead: "Priya Sharma", co_lead: "-", status: "Starting Soon" },
];

export default function ChaptersPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#C9FF3F] selection:text-black">
            <section className="pt-32 pb-20 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="font-space-grotesk text-5xl font-bold text-black mb-6">Student Chapters</h1>
                        <p className="text-xl text-gray-600">
                            Leading the AI revolution from campus to campus. Find a chapter near you or start one today.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {chapters.map((chapter) => (
                            <div key={chapter.id} className="p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${chapter.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {chapter.status}
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                                    <School className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-2">{chapter.name}</h3>
                                <div className="space-y-2 text-sm text-gray-500 mb-6">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" /> Kanpur, UP
                                    </div>
                                    <div>{chapter.members} Members</div>
                                    <div>Lead: {chapter.lead}</div>
                                    {chapter.co_lead && <div>Co-Lead: {chapter.co_lead}</div>}
                                </div>
                                {chapter.status === 'Active' ? (
                                    <a href="https://chat.whatsapp.com/BmZMvMa4BW2Bh2ZGw9vdN9" target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <button className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors">
                                            Join Chapter
                                        </button>
                                    </a>
                                ) : (
                                    <button className="w-full py-3 rounded-lg bg-gray-200 text-gray-500 font-semibold cursor-not-allowed">
                                        Coming Soon
                                    </button>
                                )}
                            </div>
                        ))}

                        {/* Start Chapter CTA */}
                        {/* <div className="p-8 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center text-center hover:border-[#C9FF3F] hover:bg-[#C9FF3F]/5 transition-all cursor-pointer group">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                <Plus className="w-8 h-8 text-gray-400 group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">Start a Chapter</h3>
                            <p className="text-gray-500 text-sm mb-6">Bring kanpurAI to your college.</p>
                            <button className="text-black font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </button>
                        </div> */}
                    </div>
                </div>
            </section>

        </main>
    );
}
