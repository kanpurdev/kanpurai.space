"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollCharacter() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed right-4 bottom-8 z-50 pointer-events-none hidden md:block"
            style={{
                y: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }).get() * 100 // Minimal movement for demo
            }}
        >
            <motion.div
                className="relative w-24 h-24"
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Simple CSS Robot Character */}
                <div className="absolute inset-0 bg-white border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_0px_#0f172a] flex flex-col items-center justify-center p-2">
                    {/* Eyes */}
                    <div className="flex gap-2 mb-2">
                        <div className="w-3 h-3 bg-slate-900 rounded-full animate-blink" />
                        <div className="w-3 h-3 bg-slate-900 rounded-full animate-blink delay-75" />
                    </div>
                    {/* Mouth */}
                    <div className="w-8 h-1 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#10b981]"
                            style={{ width: "100%", x: -10 }}
                            animate={{ x: [0, 20, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </div>
                {/* Antennas */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-3 bg-slate-900" />
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#C9FF3F] rounded-full border-2 border-slate-900 animate-bounce" />
            </motion.div>
        </motion.div>
    );
}
