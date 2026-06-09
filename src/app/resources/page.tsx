"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, BookOpen, Lightbulb, Code, ArrowRight, Download, X, ExternalLink } from "lucide-react";

const resources = [
    {
        id: 8,
        title: "Basics of UI/UX Design | Books",
        category: "Books",
        date: "2026-04-19",
        description: "A complete collection of foundational UI/UX design books to help you master user interface and user experience design.",
        icon: BookOpen,
        color: "text-teal-500",
        bg: "bg-teal-50",
        downloadUrl: "https://drive.google.com/drive/folders/1V1l4r0ajjms3rZz-Az9bVKMLXbhP52GF"
    },
    {
        id: 7,
        title: "Arcade solution",
        category: "Project Ideas",
        date: "2026-03-25",
        description: "Detailed solutions and strategies for mastering the latest AI Arcade games and challenges. Level up your skills.",
        icon: Lightbulb,
        color: "text-orange-500",
        bg: "bg-orange-50",
        downloadUrl: "#"
    },
    {
        id: 6,
        title: "LLM Fine-tuning Template",
        category: "AI Templates",
        date: "2026-03-05",
        description: "Google Colab notebook template for fine-tuning Llama 3 on custom datasets. Includes data preprocessing and training loops.",
        icon: Code,
        color: "text-indigo-500",
        bg: "bg-indigo-50",
        downloadUrl: "#"
    },
    {
        id: 5,
        title: "Midjourney Style Reference",
        category: "Prompt Books",
        date: "2026-02-20",
        description: "Visual guide to artistic styles and keywords for generating stunning images with Midjourney. Includes 100+ style examples.",
        icon: BookOpen,
        color: "text-pink-500",
        bg: "bg-pink-50",
        downloadUrl: "#"
    },
    {
        id: 4,
        title: "Python for AI Cheatsheet",
        category: "Cheatsheets",
        date: "2026-01-15",
        description: "Essential Python libraries (NumPy, Pandas, PyTorch) and syntax for AI/ML development in a single printable sheet.",
        icon: FileText,
        color: "text-green-500",
        bg: "bg-green-50",
        downloadUrl: "#"
    },
    {
        id: 3,
        title: "AI Project Ideas 2025",
        category: "Project Ideas",
        date: "2025-12-10",
        description: "Curated list of 50+ innovative AI project ideas ranging from beginner to advanced levels. Perfect for hackathons and portfolio building.",
        icon: Lightbulb,
        color: "text-yellow-500",
        bg: "bg-yellow-50",
        downloadUrl: "#"
    },
    {
        id: 2,
        title: "SaaS Starter Kit Template",
        category: "AI Templates",
        date: "2025-11-05",
        description: "Next.js + TailwindCSS + Supabase starter kit for building AI-powered SaaS applications quickly. Includes authentication, database setup, and payment integration.",
        icon: Code,
        color: "text-purple-500",
        bg: "bg-purple-50",
        downloadUrl: "#"
    },
    {
        id: 1,
        title: "Ultimate AI Prompt Guide",
        category: "Prompt Books",
        date: "2025-10-01",
        description: "A comprehensive collection of prompts for various AI models including GPT-4, Claude, and Midjourney. Master the art of prompting with examples and best practices.",
        icon: BookOpen,
        color: "text-blue-500",
        bg: "bg-blue-50",
        downloadUrl: "#"
    }
];

export default function ResourcesPage() {
    const [filter, setFilter] = useState("All");
    const [selectedResource, setSelectedResource] = useState<typeof resources[0] | null>(null);

    const sortedResources = [...resources].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const filteredResources = filter === "All" ? sortedResources : sortedResources.filter(r => r.category === filter);

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#C9FF3F] selection:text-black">
            <section className="pt-32 pb-12 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="font-space-grotesk text-5xl font-bold text-black mb-6">Resources</h1>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            Curated tools, templates, and guides to supercharge your AI journey.
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {["All", "AI Templates", "Prompt Books", "Project Ideas", "Cheatsheets", "Books"].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                                    ? "bg-black text-white shadow-lg"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Resources Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {filteredResources.map((resource) => (
                            <motion.div
                                key={resource.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 flex flex-col"
                            >
                                <div className={`h-40 ${resource.bg} flex items-center justify-center relative overflow-hidden`}>
                                    <resource.icon className={`w-16 h-16 ${resource.color} opacity-80 group-hover:scale-110 transition-transform duration-300`} />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className={`text-xs font-bold ${resource.color} uppercase tracking-wider`}>{resource.category}</div>
                                        <div className="text-xs text-gray-400 font-medium">{new Date(resource.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">{resource.title}</h3>
                                    <p className="text-sm text-gray-500 mb-6 flex-1 line-clamp-2">
                                        {resource.description}
                                    </p>
                                    <a
                                        href={resource.downloadUrl !== "#" ? resource.downloadUrl : "https://chat.whatsapp.com/FUaNXK2WRmi4wyNw2KQfix"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3 rounded-lg bg-gray-50 border border-gray-200 text-black font-semibold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group-hover:border-black"
                                    >
                                        Download Resource <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Popup */}
            <AnimatePresence>
                {selectedResource && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedResource(null)}
                        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedResource(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-black"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex items-start gap-5 mb-6">
                                <div className={`w-16 h-16 rounded-2xl ${selectedResource.bg} ${selectedResource.color} flex items-center justify-center shrink-0`}>
                                    <selectedResource.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className={`text-xs font-bold ${selectedResource.color} uppercase tracking-wider block`}>
                                            {selectedResource.category}
                                        </span>
                                        <span className="text-xs text-gray-400 font-medium block">&bull; {new Date(selectedResource.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-black leading-tight">{selectedResource.title}</h2>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-5 mb-8 border border-gray-100">
                                <p className="text-gray-600 leading-relaxed">
                                    {selectedResource.description}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a
                                    href={selectedResource.downloadUrl}
                                    onClick={(e) => e.stopPropagation()}
                                    className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                                >
                                    Download Now <Download className="w-4 h-4" />
                                </a>
                                <button
                                    onClick={() => setSelectedResource(null)}
                                    className="w-full py-4 bg-white text-gray-500 rounded-xl font-bold hover:text-black transition-all"
                                >
                                    Maybe Later
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
