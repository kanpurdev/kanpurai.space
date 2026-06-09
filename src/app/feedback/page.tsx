"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, UserPlus, Loader2 } from "lucide-react";
import FeedbackCard from "@/components/FeedbackCard";
import FeedbackForm from "@/components/FeedbackForm";

import ScrollCharacter from "@/components/ScrollCharacter";
import { supabase } from "@/lib/supabase";
import { Member } from "@/types/volunteer";

export default function FeedbackPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [members, setMembers] = useState<Member[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [stats, setStats] = useState({
        activeMembers: 0,
        activeCommunities: 6,
    });

    // Fetch volunteers from Supabase
    const fetchMembers = async () => {
        try {
            const { data, error } = await supabase
                .from("volunteers")
                .select("*")
                .eq("is_active", true)
                .order("created_at", { ascending: false });

            if (error) throw error;

            setMembers(data || []);
            setStats((prev) => ({ ...prev, activeMembers: data?.length || 0 }));
        } catch (error) {
            console.error("Error fetching volunteers:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Set up real-time subscription
    useEffect(() => {
        fetchMembers();

        // Subscribe to real-time changes
        const channel = supabase
            .channel("members-changes")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "volunteers",
                },
                (payload) => {
                    console.log("Real-time update:", payload);
                    fetchMembers(); // Refresh data when changes occur
                }
            )
            .subscribe();

        // Cleanup subscription on unmount
        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const filteredMembers = members.filter((member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#C9FF3F] selection:text-black overflow-x-hidden relative">
            <ScrollCharacter />

            {/* Floating Stickers (Decorative) */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-20 left-10 text-4xl opacity-20 rotate-12 select-none"
                >
                    🚀
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                    className="absolute top-40 right-10 text-5xl opacity-20 -rotate-12 select-none"
                >
                    💡
                </motion.div>
                <motion.div
                    animate={{ x: [0, 20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-40 left-20 text-6xl opacity-10 rotate-6 select-none"
                >
                    ✨
                </motion.div>
            </div>

            <FeedbackForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSuccess={() => {
                    fetchMembers();
                }}
            />

            {/* Dynamic Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-[#10b981]/20 to-[#3b82f6]/20 rounded-full blur-[100px] opacity-40 animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#C9FF3F]/30 to-[#10b981]/20 rounded-full blur-[120px] opacity-40 animate-pulse delay-700" />
                <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-blue-400/10 rounded-full blur-[40px] opacity-30 floating" />
            </div>

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative">
                <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">

                    {/* 3D-like Badge/Sticker */}
                    <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="mb-8"
                    >
                        <div className="relative bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] px-6 py-2 rounded-full transform rotate-[-2deg] hover:rotate-[2deg] transition-transform cursor-default">
                            <span className="font-bold font-mono text-sm tracking-wider uppercase flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                                Community Feedback
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-space-grotesk text-5xl md:text-7xl font-black text-slate-900 mb-6 text-center leading-[1.1] tracking-tight"
                    >
                        Improving the <span className="relative inline-block">
                            <span className="relative z-10">experience</span>
                            <span className="absolute bottom-2 left-0 w-full h-4 bg-[#C9FF3F] -rotate-1 -z-0 opacity-80" />
                        </span> of
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#3b82f6]">
                            AI in Kanpur
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-600 mb-10 max-w-2xl text-center leading-relaxed font-medium"
                    >
                        We’re distinct individuals working together to create something prominent. Join the movement and be part of the change.
                    </motion.p>

                    {/* Stats Stickers */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {/* Stat 1 */}
                        <motion.div
                            whileHover={{ y: -5, rotate: -2 }}
                            className="bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_#10b981] p-4 rounded-xl flex flex-col items-center min-w-[140px]"
                        >
                            <span className="text-3xl font-black text-slate-900">{stats.activeMembers}+</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Members</span>
                        </motion.div>

                        {/* Stat 2 */}
                        <motion.div
                            whileHover={{ y: -5, rotate: 2 }}
                            className="bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_#3b82f6] p-4 rounded-xl flex flex-col items-center min-w-[140px]"
                        >
                            <span className="text-3xl font-black text-slate-900">{stats.activeCommunities}</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Communities</span>
                        </motion.div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsFormOpen(true)}
                        className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-[6px_6px_0px_0px_#C9FF3F] hover:shadow-[4px_4px_0px_0px_#C9FF3F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
                    >
                        <UserPlus className="w-5 h-5 text-[#C9FF3F]" />
                        Share Your Story
                    </motion.button>
                </div>
            </section>




            {/* Grid Section */}
            <section className="py-20 bg-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Search & Filter Bar - Commented for now */}
                    {/* <div className="sticky top-4 z-40 mb-12">
                        <div className="bg-white/80 backdrop-blur-lg border border-slate-200 shadow-xl rounded-2xl p-2 flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="relative flex-1 w-full">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Find someone..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#C9FF3F] focus:ring-2 focus:ring-[#C9FF3F]/20 transition-all font-medium"
                                />
                            </div>
                            <div className="flex items-center gap-2 px-2 w-full md:w-auto overflow-x-auto">
                                {["All", "Most Active", "Newest"].map((filter) => (
                                    <button
                                        key={filter}
                                        className="px-4 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-100 whitespace-nowrap transition-colors"
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div> */}


                    {/* Content */}
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20 min-h-[400px]">
                            <Loader2 className="w-12 h-12 text-slate-900 animate-spin mb-4" />
                            <p className="font-mono text-sm text-slate-400">LOADING_GRID...</p>
                        </div>
                    ) : (
                        <motion.div
                            layout
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
                        >
                            {filteredMembers.length > 0 ? (
                                filteredMembers.map((member) => (
                                    <FeedbackCard
                                        key={member.id}
                                        id={member.id}
                                        name={member.name}
                                        email={member.email}
                                        role={member.role}
                                        feedback={member.feedback}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                                    <p className="text-slate-500 font-medium mb-4">No explorers found.</p>
                                    <button
                                        onClick={() => setIsFormOpen(true)}
                                        className="text-[#10b981] font-bold hover:underline"
                                    >
                                        be the first!
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </div>
            </section>

            <section className="py-24 bg-[#F8FAFC] border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-space-grotesk text-3xl font-bold text-slate-900 mb-6">
                        Join the <span className="text-[#3b82f6]">Revolution</span>
                    </h2>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                        Your voice matters. Whether you're a student, professional, or enthusiast – we want to hear from you.
                    </p>
                    {/* <button
                        onClick={() => setIsFormOpen(true)}
                        className="px-8 py-3 rounded-full border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all duration-300"
                    >
                        Submit Feedback
                    </button> */}
                </div>
            </section>
        </main>
    );
}
