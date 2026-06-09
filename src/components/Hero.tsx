"use client";
import { motion } from "framer-motion";
import Countdown from "@/components/Countdown";
import AvatarCluster from "@/components/AvatarCluster";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center">
      <motion.div
        className="breathing relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-500/20 to-cyan-500/10 blur-3xl" />
        <div className="mb-6 flex items-center justify-center">
          <Image
            src="/kanpuraispace.png"
            alt="Logo"
            width={200}
            height={200}
            className="neon-image object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight neon-text">
          Something Big is Loading…
        </h1>
        <p className="mt-4 max-w-xl text-zinc-400">
          The Future of Education, Reimagined. Stay Tuned.
        </p>

        <Countdown />

        <AvatarCluster />

        <div className="mt-8">
          <a
            href="#connect"
            role="button"
            aria-label="Connect with us"
            className="glow-border inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-zinc-900"
          >
            connect with us
          </a>
        </div>
      </motion.div>
    </section>
  );
}