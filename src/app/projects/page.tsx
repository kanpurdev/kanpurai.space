"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ChevronRight,
    Search,
    ExternalLink,
    GitPullRequest,
    Compass
} from "lucide-react";
import Link from "next/link";

interface Project {
    name: string;
    description: string;
    issues: number;
    language: string;
    languageColor: string;
    popularity: string;
    popularityColor: string;
    stage: string;
    stageColor: string;
    competition: string;
    competitionColor: string;
    activity: string;
    activityColor: string;
    github: string;
    logoUrl?: string;
}

const projects: Project[] = [
    // {
    //     name: "Explore",
    //     description: "Open source project discovery platform for KanpurAI community.",
    //     issues: 13,
    //     language: "TypeScript",
    //     languageColor: "bg-blue-500/20 text-blue-600 border-blue-500/30",
    //     popularity: "Higher",
    //     popularityColor: "text-white",
    //     stage: "Early",
    //     stageColor: "text-white",
    //     competition: "Low",
    //     competitionColor: "text-white",
    //     activity: "Highest",
    //     activityColor: "text-white",
    //     github: "https://kanpurai.space/projects"
    // },
    {
        name: "awesome-sass",
        description: "A curated list of awesome Sass and SCSS resources.",
        issues: 22,
        language: "TypeScript",
        languageColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        popularity: "Highest",
        popularityColor: "text-white",
        stage: "Established",
        stageColor: "text-white",
        competition: "High",
        competitionColor: "text-white",
        activity: "Highest",
        activityColor: "text-white",
        github: "https://github.com/Famolus/awesome-sass"
    },
    {
        name: "openchangelog",
        description: "Self-hostable changelog for your open source projects.",
        issues: 4,
        language: "Go",
        languageColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
        popularity: "Lowest",
        popularityColor: "text-white",
        stage: "Very early",
        stageColor: "text-white",
        competition: "Very low",
        competitionColor: "text-white",
        activity: "Normal",
        activityColor: "text-white",
        github: "https://github.com/JonasHiltl/openchangelog"
    },
    {
        name: "unsend",
        description: "Open source email sending infrastructure.",
        issues: 11,
        language: "TypeScript",
        languageColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        popularity: "Very low",
        popularityColor: "text-white",
        stage: "Very early",
        stageColor: "text-white",
        competition: "Very low",
        competitionColor: "text-white",
        activity: "High",
        activityColor: "text-white",
        github: "https://github.com/Unsend/Unsend"
    },
    {
        name: "middleware",
        description: "AI-powered full-stack observability platform.",
        issues: 26,
        language: "TypeScript",
        languageColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        popularity: "Low",
        popularityColor: "text-white",
        stage: "Very early",
        stageColor: "text-white",
        competition: "Very low",
        competitionColor: "text-white",
        activity: "Low",
        activityColor: "text-white",
        github: "https://github.com/middlewarehq/middleware"
    },
    {
        name: "nativelink",
        description: "High-performance build cache and remote execution server.",
        issues: 81,
        language: "Rust",
        languageColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
        popularity: "Lowest",
        popularityColor: "text-white",
        stage: "Early",
        stageColor: "text-white",
        competition: "Very low",
        competitionColor: "text-white",
        activity: "Highest",
        activityColor: "text-white",
        github: "https://github.com/TraceMachina/nativelink"
    },
    {
        name: "bolt.new",
        description: "AI-powered full-stack web development agent.",
        issues: 2500,
        language: "TypeScript",
        languageColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        popularity: "Highest",
        popularityColor: "text-white",
        stage: "Emerging",
        stageColor: "text-white",
        competition: "High",
        competitionColor: "text-white",
        activity: "High",
        activityColor: "text-white",
        github: "https://github.com/stackblitz/bolt.new"
    },
    {
        name: "hatchet",
        description: "Performance analysis tool for hierarchical graphs.",
        issues: 25,
        language: "Go",
        languageColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
        popularity: "Moderate",
        popularityColor: "text-white",
        stage: "Emerging",
        stageColor: "text-white",
        competition: "Very low",
        competitionColor: "text-white",
        activity: "Highest",
        activityColor: "text-white",
        github: "https://github.com/hatchet-dev/hatchet"
    },
    {
        name: "evidently",
        description: "ML and LLM observability framework.",
        issues: 179,
        language: "Python",
        languageColor: "bg-green-500/20 text-green-400 border-green-500/30",
        popularity: "Moderate",
        popularityColor: "text-white",
        stage: "Early",
        stageColor: "text-white",
        competition: "Low",
        competitionColor: "text-white",
        activity: "Highest",
        activityColor: "text-white",
        github: "https://github.com/evidentlyai/evidently"
    },
    {
        name: "golem",
        description: "Decentralized marketplace for computing power.",
        issues: 120,
        language: "Rust",
        languageColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
        popularity: "Very low",
        popularityColor: "text-white",
        stage: "Very early",
        stageColor: "text-white",
        competition: "Very low",
        competitionColor: "text-white",
        activity: "Highest",
        activityColor: "text-white",
        github: "https://github.com/golemfactory/golem"
    },
    {
        name: "Gsoo-Orgs",
        description: "Data and resources for Google Summer of Code organizations.",
        issues: 11,
        language: "TypeScript",
        languageColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        popularity: "Very low",
        popularityColor: "text-white",
        stage: "Very early",
        stageColor: "text-white",
        competition: "Very low",
        competitionColor: "text-white",
        activity: "Normal",
        activityColor: "text-white",
        github: "https://github.com/apsinghdev/GSoC-Orgs"
    },
];

export default function ExploreProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.language.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-[#C9FF3F] selection:text-black">
            {/* Header Spacer */}
            <div className="h-24 lg:h-32" />

            {/* Breadcrumbs Row */}
            <div className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-21 z-40">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-gray-500">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-blue-600 font-bold">Explore Projects</span>
                    </nav>

                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        <input
                            type="text"
                            placeholder="Filter by name, language, or description..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-gray-100 border border-gray-200 rounded-full py-2 pl-10 pr-6 text-sm w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-black"
                        />
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 space-y-4"
                >
                    <div className="flex items-center gap-3 text-blue-500 mb-4 px-1">
                        <Compass className="w-6 h-6" />
                        <span className="text-xs font-black uppercase tracking-[0.4em]">Project Discovery</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-space-grotesk font-black tracking-tight italic text-black">
                        Featured Projects
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
                        Discover top-tier open source projects looking for contributors. Filtered by activity, difficulty, and tech stack.
                    </p>
                </motion.header>

                <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-gray-50/20 backdrop-blur-sm shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50 text-gray-900">
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Project</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Issues</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Language</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Popularity</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Stage</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Competition</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Activity</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProjects.map((project, idx) => (
                                <motion.tr
                                    key={project.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group hover:bg-gray-50 border-b border-gray-100 transition-all text-black"
                                >
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white font-black text-sm shadow-lg group-hover:scale-110 transition-transform">
                                                {project.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-black mb-0.5 group-hover:text-blue-600 transition-colors">
                                                    {project.name}
                                                </div>
                                                <div className="text-[10px] text-gray-500 font-medium line-clamp-1 max-w-[200px]">
                                                    {project.description}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-semibold text-gray-600">{project.issues}</span>
                                            <GitPullRequest className="w-3.5 h-3.5 text-gray-400" />
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${project.languageColor.replace('text-blue-400', 'text-blue-600').replace('text-cyan-400', 'text-cyan-600').replace('text-orange-400', 'text-orange-600').replace('text-green-400', 'text-green-600')}`}>
                                            {project.language}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`text-xs font-medium text-gray-700`}>{project.popularity}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`text-xs font-medium text-gray-700`}>{project.stage}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`text-xs font-medium text-gray-700`}>{project.competition}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                                            <span className={`text-xs font-medium`}>{project.activity}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-black text-black hover:text-white transition-all text-xs font-bold group/btn"
                                        >
                                            View Source
                                            <ExternalLink className="w-3 h-3 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </Link>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 bg-white/[0.02] border border-white/5 rounded-3xl mt-8">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-600">
                            <Search className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-black">No projects found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters.</p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-6 text-blue-500 font-bold hover:text-blue-400 transition-colors"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                <footer className="mt-20 pt-12 border-t border-gray-100 text-center space-y-8">
                    <button
                        onClick={() => window.location.href = "/projects"}
                        className="px-16 py-6 bg-black text-white hover:bg-blue-600 transition-all rounded-full font-black text-xs uppercase tracking-widest outline outline-1 outline-gray-200 outline-offset-8 hover:outline-offset-4"
                    >
                        Explore More Projects
                    </button>
                    <p className="text-gray-500 text-sm italic">
                        Want to list your project here? <Link href="/connect" className="text-blue-500 font-bold hover:underline underline-offset-4">Get in touch with us.</Link>
                    </p>
                </footer>
            </main>
        </div>
    );
}
