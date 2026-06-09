"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetMs: number): TimeLeft {
  const now = Date.now();
  const distance = Math.max(0, targetMs - now);
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function Countdown({ targetDate }: { targetDate?: Date }) {
  // Target: December 20, 2025 (local time)
  const defaultTargetMs = new Date(2025, 11, 20, 0, 0, 0).getTime();
  const targetMs = targetDate ? targetDate.getTime() : defaultTargetMs;
  const [left, setLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLeft(getTimeLeft(targetMs));
    setMounted(true);
    const id = setInterval(() => setLeft(getTimeLeft(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const itemClass = "flex flex-col items-center px-3";
  const labelClass = "mt-1 text-xs text-zinc-400";
  const digitClass = "text-4xl font-semibold tracking-wider neon-text";

  return (
    <div className="mt-6 w-full max-w-xl rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-center divide-x divide-white/10" suppressHydrationWarning>
        <div className={itemClass}>
          <span className={digitClass}>{(mounted ? left.days : 0).toString().padStart(2, "0")}</span>
          <span className={labelClass}>Days</span>
        </div>
        <div className={itemClass}>
          <span className={digitClass}>{(mounted ? left.hours : 0).toString().padStart(2, "0")}</span>
          <span className={labelClass}>Hours</span>
        </div>
        <div className={itemClass}>
          <span className={digitClass}>{(mounted ? left.minutes : 0).toString().padStart(2, "0")}</span>
          <span className={labelClass}>Minutes</span>
        </div>
        <div className={itemClass}>
          <motion.span
            key={mounted ? left.seconds : 0}
            className={`${digitClass} text-cyan-300`}
            initial={{ scale: 1, filter: "brightness(1)" }}
            animate={{ scale: 1.05, filter: "brightness(1.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
          >
            {(mounted ? left.seconds : 0).toString().padStart(2, "0")}
          </motion.span>
          <span className={labelClass}>Seconds</span>
        </div>
      </div>
    </div>
  );
}