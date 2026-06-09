"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface VolunteerCardProps {
    id: string;
    name: string;
    avatar: string;
    role: string;
    feedback: string;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ id, name, avatar, role, feedback }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Avatar */}
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 hover:border-[#C9FF3F] transition-all duration-300 cursor-pointer group">
                <Image
                    src={avatar}
                    alt={name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Name */}
            <p className="mt-2 text-xs font-medium text-gray-700 text-center max-w-[80px] truncate">
                {name}
            </p>

            {/* Hover Popup */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 bottom-full mb-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 pointer-events-none"
                    >
                        {/* Arrow */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45"></div>

                        {/* Content */}
                        <div className="relative z-10 bg-white">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9FF3F]">
                                    <Image
                                        src={avatar}
                                        alt={name}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-black">{name}</h4>
                                    <p className="text-xs text-gray-500">{role}</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">{feedback}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VolunteerCard;
