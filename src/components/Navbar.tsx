"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 shadow-lg shadow-black/20"
      >
        <div className="flex items-center justify-between px-2">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2 group shrink-0">
            {/* Ensure contrast for logo - adding brightness filter if needed, or assuming the logo works on dark */}
            <Image
              src="/kanpuraispace.png"
              alt="kanpurAI.space Logo"
              width={180}
              height={50}
              className="w-auto h-15 object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {["About", "Events", "Team", "Resources", "Blog"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Explore" ? "/projects" : `/${item.toLowerCase()}`}
                  className="px-4 py-1.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* <Link
                            href="/host"
                            className="px-5 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                        >
                            Host an Event
                        </Link> */}
            <Link
              href="https://chat.whatsapp.com/FUaNXK2WRmi4wyNw2KQfix"
              target="_blank"
              className="px-5 py-2 rounded-full bg-[#7C3AED] text-white text-sm font-semibold hover:bg-[#6D28D9] transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
            >
              Join the Community
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-zinc-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-28 left-4 right-4 z-40 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {["About", "Events", "Team", "Explore", "Blog"].map(
                (item) => (
                  <Link
                    key={item}
                    href={item === "Explore" ? "/projects" : `/${item.toLowerCase()}`}
                    className="text-lg font-medium text-zinc-400 hover:text-white px-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                )
              )}
              <div className="h-px bg-white/10 my-2" />
              {/* <Link href="/host" className="text-zinc-400 hover:text-white px-2">
                                Host an Event
                            </Link> */}
              <Link
                href="https://chat.whatsapp.com/FUaNXK2WRmi4wyNw2KQfix"
                target="_blank"
                className="w-full block text-center py-3 rounded-xl bg-[#7C3AED] text-white font-bold mt-2"
              >
                Join the Community
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
