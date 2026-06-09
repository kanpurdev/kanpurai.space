"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Star, Heart, MessageCircle } from "lucide-react";

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-2 mx-8 text-slate-900 font-bold text-xl uppercase tracking-wider">
        {children}
    </div>
);

export default function Marquee() {
    return (
        <div className="relative flex overflow-hidden bg-[#C9FF3F] border-y-2 border-slate-900 py-3 rotate-[-1deg] width-[110%] -ml-[5%]">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
            >
                {/* Content duplicated for seamless loop */}
                {[...Array(4)].map((_, i) => (
                    <React.Fragment key={i}>
                        <MarqueeItem>
                            <Sparkles className="w-5 h-5" /> Innovation
                        </MarqueeItem>
                        <MarqueeItem>
                            <Zap className="w-5 h-5" /> Impact
                        </MarqueeItem>
                        <MarqueeItem>
                            <Star className="w-5 h-5" /> Community
                        </MarqueeItem>
                        <MarqueeItem>
                            <Heart className="w-5 h-5" /> Connection
                        </MarqueeItem>
                        <MarqueeItem>
                            <MessageCircle className="w-5 h-5" /> Feedback
                        </MarqueeItem>
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
}
