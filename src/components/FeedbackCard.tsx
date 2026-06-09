"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FeedbackCardProps {
    id: string;
    name: string;
    email: string;
    role: string;
    feedback: string;
}

// Default avatars for random assignment
const DEFAULT_AVATARS = [
    "/avatars/av1.jpg",
    "/avatars/av2.jpg",
    "/avatars/av3.jpg",
];

// Function to get a random avatar based on user ID
const getAvatar = (userId: string): string => {
    // Assign a random avatar based on user ID for consistency
    const hash = userId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % DEFAULT_AVATARS.length;
    return DEFAULT_AVATARS[index];
};

const FeedbackCard: React.FC<FeedbackCardProps> = ({ id, name, email, role, feedback }) => {
    const [isHovered, setIsHovered] = useState(false);
    const displayAvatar = getAvatar(id);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            className={`relative flex flex-col items-center group/card ${isHovered ? 'z-50' : 'z-10'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full aspect-square bg-white rounded-2xl border-2 border-slate-100 shadow-[4px_4px_0px_0px_#f1f5f9] group-hover/card:shadow-[6px_6px_0px_0px_#10b981] group-hover/card:border-slate-900 transition-all duration-200 overflow-hidden cursor-pointer p-4 flex flex-col items-center justify-center">

                {/* Avatar with Rotating Ring */}
                <div className="relative w-20 h-20 mb-3">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 group-hover/card:border-[#10b981] group-hover/card:animate-[spin_4s_linear_infinite]" />
                    <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-white shadow-sm">
                        <Image
                            src={displayAvatar}
                            alt={name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Info */}
                <div className="text-center w-full relative z-10">
                    <h3 className="font-bold text-slate-900 text-sm truncate px-2">{name}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover/card:text-[#10b981] transition-colors mt-1">{role}</p>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <div className="w-2 h-2 rounded-full bg-[#C9FF3F]" />
                </div>
            </div>

            {/* Simple Popup for Feedback */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute z-50 bottom-full mb-3 w-64 bg-slate-900 text-white p-4 rounded-xl shadow-xl pointer-events-none"
                    >
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45" />
                        <p className="text-xs leading-relaxed font-medium text-slate-300 italic">
                            "{feedback}"
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FeedbackCard;
