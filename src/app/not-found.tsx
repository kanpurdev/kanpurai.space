"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]"></div>
                <div className="absolute right-10 bottom-10 -z-10 h-[250px] w-[250px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
            </div>

            <div className="z-10 flex flex-col items-center text-center px-4">
                {/* Animated 404 */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5, y: -50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-9xl font-bold font-sans neon-text mb-4"
                >
                    404
                </motion.h1>

                {/* Animated Subtext */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 font-sans tracking-tight">
                        Something crazy is coming...
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg max-w-md mx-auto">
                        The page you are looking for has been moved to another dimension or is currently under heavy development.
                    </p>
                </motion.div>

                {/* Return Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/home"
                        className="px-8 py-3 rounded-full bg-white text-black font-bold text-lg hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                    >
                        Return to Base
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
