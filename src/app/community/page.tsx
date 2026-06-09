"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Globe, Linkedin, Twitter, Instagram, Heart, Shield, Zap } from "lucide-react";

export default function CommunityPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#C9FF3F] selection:text-black">
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold text-black mb-6">
                            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Movement</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Connect with 500+ students, developers, and innovators. Share ideas, find mentors, and build the future together.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://chat.whatsapp.com/FUaNXK2WRmi4wyNw2KQfix" target="_blank" className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow flex items-center gap-2 transform hover:-translate-y-1">
                                <MessageCircle className="w-5 h-5" /> Join WhatsApp
                            </a>
                            <button className="px-8 py-4 rounded-full bg-[#5865F2] text-white font-bold hover:shadow-[0_0_20px_rgba(88,101,242,0.4)] transition-shadow flex items-center gap-2 transform hover:-translate-y-1">
                                <Globe className="w-5 h-5" /> Join Discord
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Guidelines */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="font-space-grotesk text-3xl font-bold text-black mb-12 text-center">Community Guidelines</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Be Respectful", icon: <Heart className="text-red-500" />, desc: "Treat everyone with kindness and respect. We are a diverse community." },
                            { title: "Share Knowledge", icon: <Zap className="text-yellow-500" />, desc: "Don't gatekeep. Share resources, help others, and grow together." },
                            { title: "No Spam", icon: <Shield className="text-blue-500" />, desc: "Keep the discussions relevant and valuable. No promotions without permission." }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2">{card.title}</h3>
                                <p className="text-gray-500">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Socials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="font-space-grotesk text-3xl font-bold text-black mb-12">Follow Us Everywhere</h2>
                    <div className="flex justify-center gap-8">
                        {[
                            { icon: <Linkedin className="w-8 h-8" />, href: "https://linkedin.com/company/kanpuraispace", color: "text-[#0077B5]" },
                            { icon: <Twitter className="w-8 h-8" />, href: "https://twitter.com/kanpuraispace", color: "text-[#1DA1F2]" },
                            { icon: <Instagram className="w-8 h-8" />, href: "https://instagram.com/kanpurai.space", color: "text-[#E1306C]" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                className={`p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors ${social.color}`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
