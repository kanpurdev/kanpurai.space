"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import JobCard, { Job } from "@/components/JobCard";

function JobCardSkeleton() {
  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <div className="mb-7 flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl bg-gray-100" />
        <div className="space-y-2">
          <div className="h-3 w-28 rounded-full bg-gray-100" />
          <div className="h-3 w-36 rounded-full bg-gray-100" />
        </div>
      </div>
      <div className="mb-4 h-3 w-32 rounded-full bg-gray-100" />
      <div className="space-y-3">
        <div className="h-6 w-11/12 rounded-full bg-gray-100" />
        <div className="h-6 w-3/4 rounded-full bg-gray-100" />
      </div>
      <div className="mt-8 flex gap-2">
        <div className="h-7 w-20 rounded-full bg-gray-100" />
        <div className="h-7 w-24 rounded-full bg-gray-100" />
        <div className="h-7 w-16 rounded-full bg-gray-100" />
      </div>
      <div className="absolute inset-x-6 bottom-6 h-12 rounded-xl bg-gray-100" />
    </div>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-full flex min-h-[340px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50 px-6 text-center"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-sm">
        <Search className="h-7 w-7" />
      </div>
      <h2 className="text-2xl font-bold text-black">No opportunities found</h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
        Try another keyword such as <span className="font-semibold text-black">AI</span>,{" "}
        <span className="font-semibold text-black">React</span>,{" "}
        <span className="font-semibold text-black">Python</span>, or{" "}
        <span className="font-semibold text-black">Intern</span>.
      </p>
    </motion.div>
  );
}

export default function InternshipsClient({ jobs }: { jobs: Job[] }) {
  const [search, setSearch] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);

  const filteredJobs = useMemo(
    () =>
      jobs.filter((job) =>
        `${job.title} ${job.company_name} ${(job.tags || []).join(" ")}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [jobs, search]
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setIsFiltering(true);
    window.setTimeout(() => setIsFiltering(false), 180);
  };

  return (
    <section className="relative z-10">
      <div className="sticky top-24 z-30 mb-8 rounded-3xl border border-gray-200 bg-white/85 p-3 shadow-xl shadow-gray-200/60 backdrop-blur-xl md:static">
        <div className="relative">
          <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            aria-label="Search internship opportunities"
            placeholder="Search AI, React, Python, Internship..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-5 pl-14 pr-14 text-base text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-4 focus:ring-[#C9FF3F]/30"
          />
          <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">
            <SlidersHorizontal className="h-5 w-5" />
          </div>
        </div>

        <div className="flex flex-col gap-2 px-2 pt-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Showing <span className="font-bold text-black">{filteredJobs.length}</span> opportunities
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
            Live remote roles
          </p>
        </div>
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {jobs.length === 0 && [0, 1, 2, 3, 4, 5].map((item) => <JobCardSkeleton key={item} />)}

        <AnimatePresence mode="popLayout">
          {jobs.length > 0 &&
            filteredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
        </AnimatePresence>

        {jobs.length > 0 && filteredJobs.length === 0 && <EmptyState />}
      </motion.div>

      {isFiltering && (
        <span className="sr-only" aria-live="polite">
          Filtering opportunities
        </span>
      )}
    </section>
  );
}
