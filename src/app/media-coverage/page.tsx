"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

const coverageItems = [
    {
        id: 1,
        image: "https://i.postimg.cc/VNf4Yzbj/2.jpg",
        title: "Dainik Jagran Coverage",
        category: "Press Release",
        date: "Recent"
    },
    {
        id: 2,
        image: "https://i.postimg.cc/XvjxVnyf/3.jpg",
        title: "Hindustan Times Feature",
        category: "Event Coverage",
        date: "Recent"
    },
    {
        id: 3,
        image: "https://i.postimg.cc/QM8SXjWg/4.jpg",
        title: "Amar Ujala Spotlight",
        category: "Community",
        date: "Recent"
    },
    {
        id: 4,
        image: "https://i.postimg.cc/FKrG9hJg/5.jpg",
        title: "Local News Highlight",
        category: "Impact",
        date: "Recent"
    },
];

const MediaCoveragePage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="bg-black min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <header className="mb-20 text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] text-sm font-medium mb-6">
                        Press & Recognition
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk text-white mb-8 tracking-tight">
                        Making <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#3b82f6]">Headlines</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Celebrating our milestones and community impact through the lens of the media.
                        Here is a collection of news clippings and features about KanpurAI.Space events.
                    </p>
                </header>

                {/* Media Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {coverageItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden hover:border-[#10b981]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#10b981]/10 flex flex-col cursor-pointer"
                            onClick={() => setSelectedImage(item.image)}
                        >
                            <div className="aspect-[4/3] relative w-full overflow-hidden bg-gray-900 rounded-t-2xl">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover p-0 transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="bg-white/5 text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-white/10">
                                            {item.category}
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#10b981] transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#10b981] transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add Your Cuttings Here Prompt */}
                    <div className="group relative border border-dashed border-gray-800 rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-8 bg-gray-900/20 hover:bg-gray-900/40 transition-colors min-h-[300px]">
                        {/* <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-6 text-gray-400 group-hover:text-[#10b981] group-hover:scale-110 transition-all duration-300">
                            <span className="text-2xl"></span>
                        </div> */}
                        <h3 className="text-xl font-bold text-white mb-2">More Coverage Coming</h3>
                        <p className="text-gray-500 text-sm max-w-xs mx-auto">
                            Stay tuned for more updates from leading newspapers and media outlets.
                        </p>
                    </div>

                </div>
            </div>

            {/* Background Gradients */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
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

        </div>
    );
};

export default MediaCoveragePage;
