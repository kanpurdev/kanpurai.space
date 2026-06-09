"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, Cpu, Target, Lightbulb, Rocket } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#C9FF3F] selection:text-black">
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#C9FF3F]"></span>
                            Our Story
                        </div>
                        <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold text-black leading-[1.1] mb-8 tracking-tight">
                            Empowering Kanpur's <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#3b82f6]">Next Gen Innovators</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                            We are building a community-led AI ecosystem to bridge the gap between education and industry, fostering a culture of building, shipping, and solving real-world problems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                            <Target className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="font-space-grotesk text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To democratize AI education in Kanpur by providing accessible resources, mentorship, and a collaborative platform for students and professionals to learn and grow together.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6">
                            <Lightbulb className="w-6 h-6 text-green-600" />
                        </div>
                        <h2 className="font-space-grotesk text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To see Kanpur emerge as a hub of AI innovation, where students are not just consumers of technology but creators of future-ready solutions that impact the world.
                        </p>
                    </div>
                </div>
            </section>

            {/* College Reach */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="font-space-grotesk text-4xl font-bold text-black mb-6">Connected with Top Colleges</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We are proud to have established strong connections with 4 top educational institutions across Kanpur. By bringing together the brightest student minds, we are cultivating a vibrant regional ecosystem where academic knowledge meets practical AI building and collaborative problem-solving.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="font-space-grotesk text-4xl font-bold text-black mb-12 text-center">Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Community First", icon: Users, desc: "We believe in the power of collaboration and peer-to-peer learning." },
                            { title: "Open Innovation", icon: Globe, desc: "Knowledge should be free and accessible to everyone, everywhere." },
                            { title: "Build & Ship", icon: Rocket, desc: "Theory is good, but practice is better. We focus on building real projects." }
                        ].map((card, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#C9FF3F] transition-colors group">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#C9FF3F]/20 transition-colors">
                                    <card.icon className="w-6 h-6 text-gray-900" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">{card.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-24 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-[#C9FF3F] mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#C9FF3F]"></span>
                        Join the Movement
                    </div>
                    <h2 className="font-space-grotesk text-4xl md:text-6xl font-bold mb-6">
                        Be Part of the <span className="text-[#C9FF3F]">Revolution</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Connect with like-minded innovators, attend exclusive events, and get early access to resources. The future is being built here, and you should be part of it.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://chat.whatsapp.com/FUaNXK2WRmi4wyNw2KQfix" target="_blank" className="px-8 py-4 rounded-full bg-[#C9FF3F] text-black font-bold text-lg hover:bg-[#b8e635] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(201,255,63,0.4)]">
                            Join Community
                        </a>
                        <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all">
                            Explore Chapters
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
}
