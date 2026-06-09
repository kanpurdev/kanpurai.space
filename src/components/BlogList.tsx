"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar, User, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";
import { Skeleton } from "boneyard-js/react";
import "../bones/registry";

interface BlogListProps {
    initialPosts: BlogPost[];
}

export default function BlogList({ initialPosts }: BlogListProps) {
    const [selectedCategory, setSelectedCategory] = React.useState("All");
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Extract unique categories from posts
    const categories = ["All", ...Array.from(new Set(initialPosts.map((post) => post.category)))];

    const filteredPosts =
        selectedCategory === "All"
            ? initialPosts
            : initialPosts.filter((post) => post.category === selectedCategory);

    return (
        <section className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 pt-32 pb-20 relative overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-green-100/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-500 mb-6 shadow-sm">
                        <Sparkles className="w-3 h-3 text-blue-500" />
                        <span>Insights & Perspectives</span>
                    </div>

                    <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                        Explore our latest <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">stories.</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-light">
                        Discover tutorials, deep dives, and community updates from the innovators at kanpurAI.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-2 mt-10">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === category
                                    ? "bg-slate-900 text-white border-slate-900 shadow-md transform scale-105"
                                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Blog Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post, index) => {
                            const isExternal = post.author === "Techetarian";
                            const externalUrl = isExternal ? `https://techetarian.com/${post.slug}/` : null;
                            const Wrapper = isExternal ? 'a' : Link;
                            const props = isExternal ? { href: externalUrl!, target: "_blank", rel: "noopener noreferrer" } : { href: `/blog/${post.slug}` as any };

                            const cardInner = (
                                <>
                                    {/* @ts-ignore */}
                                    <Wrapper {...props} className="flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                        <div className="relative h-64 overflow-hidden bg-slate-100">
                                            <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                                            <img
                                                src={post.img}
                                                alt={post.title}
                                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-slate-900 shadow-sm border border-white/20">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {post.date}
                                                </div>
                                                <div className="w-1 h-1 rounded-full bg-slate-300" />
                                                <div className="flex items-center gap-1.5">
                                                    <User className="w-3.5 h-3.5" />
                                                    {post.author}
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold font-space-grotesk text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                                                {post.title}
                                            </h3>

                                            <p className="text-slate-500 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mt-auto group/btn">
                                                Read Article
                                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                            </div>
                                        </div>
                                    </Wrapper>
                                </>
                            );

                            return (
                                <motion.article
                                    layout
                                    key={post.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={`group h-full ${isLoading ? 'min-h-[440px]' : ''}`}
                                >
                                    {/* @ts-ignore */}
                                    <Skeleton
                                        name="blog-card"
                                        loading={isLoading}
                                        fixture={<>{cardInner}</>}
                                        initialBones={require("../bones/blog-card.bones.json")}
                                    >
                                        {cardInner}
                                    </Skeleton>
                                </motion.article>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-32"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-6 border border-slate-100">
                            <Search className="w-8 h-8 text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
                        <p className="text-slate-500">
                            We couldn&apos;t find any posts matching that category.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
