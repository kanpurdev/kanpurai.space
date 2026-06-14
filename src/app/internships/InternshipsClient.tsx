"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, Search, SlidersHorizontal, X } from "lucide-react";
import JobCard, { Job } from "@/components/JobCard";

const roleFilters = [
  { label: "All", value: "all", terms: [] },
  { label: "AI / ML", value: "ai", terms: ["ai", "artificial intelligence", "machine learning", "ml", "llm", "genai"] },
  { label: "Internship", value: "internship", terms: ["intern", "internship", "trainee"] },
  { label: "Frontend", value: "frontend", terms: ["frontend", "front-end", "react", "next", "javascript", "typescript"] },
  { label: "Backend", value: "backend", terms: ["backend", "back-end", "node", "python", "api", "server"] },
  { label: "Data", value: "data", terms: ["data", "analytics", "analyst", "science", "sql"] },
];

const locationFilters = [
  { label: "All locations", value: "all", terms: [] },
  { label: "Worldwide", value: "worldwide", terms: ["worldwide", "anywhere", "global"] },
  { label: "India friendly", value: "india", terms: ["india", "asia", "apac", "worldwide", "anywhere"] },
  { label: "US", value: "us", terms: ["usa", "united states", "us only", "north america"] },
  { label: "Europe", value: "europe", terms: ["europe", "emea", "eu"] },
];

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Company A-Z", value: "company" },
  { label: "Title A-Z", value: "title" },
];

function getJobContent(job: Job) {
  return `${job.title} ${job.company_name} ${job.candidate_required_location} ${(job.tags || []).join(" ")}`.toLowerCase();
}

function matchesTerms(content: string, terms: string[]) {
  return terms.length === 0 || terms.some((term) => content.includes(term));
}

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
  const [roleFilter, setRoleFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [isFiltering, setIsFiltering] = useState(false);

  const activeRoleFilter = roleFilters.find((filter) => filter.value === roleFilter) || roleFilters[0];
  const activeLocationFilter =
    locationFilters.find((filter) => filter.value === locationFilter) || locationFilters[0];

  const filteredJobs = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return jobs
      .filter((job) => {
        const content = getJobContent(job);
        const matchesSearch = searchTerm.length === 0 || content.includes(searchTerm);
        const matchesRole = matchesTerms(content, activeRoleFilter.terms);
        const matchesLocation = matchesTerms(content, activeLocationFilter.terms);

        return matchesSearch && matchesRole && matchesLocation;
      })
      .sort((a, b) => {
        if (sortBy === "company") {
          return a.company_name.localeCompare(b.company_name);
        }

        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        }

        return b.id - a.id;
      });
  }, [activeLocationFilter.terms, activeRoleFilter.terms, jobs, search, sortBy]);

  const hasActiveFilters = search.trim() !== "" || roleFilter !== "all" || locationFilter !== "all" || sortBy !== "newest";

  const handleSearch = (value: string) => {
    setSearch(value);
    setIsFiltering(true);
    window.setTimeout(() => setIsFiltering(false), 180);
  };

  const updateFilter = (callback: () => void) => {
    callback();
    setIsFiltering(true);
    window.setTimeout(() => setIsFiltering(false), 180);
  };

  const resetFilters = () => {
    updateFilter(() => {
      setSearch("");
      setRoleFilter("all");
      setLocationFilter("all");
      setSortBy("newest");
    });
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

        <div className="mt-4 grid gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 lg:grid-cols-[1fr_1fr_220px]">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-gray-500">
              <Filter className="h-4 w-4" />
              Role
            </div>
            <div className="flex flex-wrap gap-2">
              {roleFilters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => updateFilter(() => setRoleFilter(filter.value))}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                    roleFilter === filter.value
                      ? "border-black bg-black text-white shadow-sm"
                      : "border-gray-200 bg-white text-gray-700 hover:border-black"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-gray-500">
              Location
            </div>
            <div className="flex flex-wrap gap-2">
              {locationFilters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => updateFilter(() => setLocationFilter(filter.value))}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                    locationFilter === filter.value
                      ? "border-[#10b981] bg-[#C9FF3F] text-black shadow-sm"
                      : "border-gray-200 bg-white text-gray-700 hover:border-[#10b981]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="internship-sort"
              className="mb-3 block text-xs font-black uppercase tracking-[0.22em] text-gray-500"
            >
              Sort
            </label>
            <select
              id="internship-sort"
              value={sortBy}
              onChange={(event) => updateFilter(() => setSortBy(event.target.value))}
              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-black focus:ring-4 focus:ring-[#C9FF3F]/30"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-black hover:text-black"
              >
                <X className="h-4 w-4" />
                Reset
              </button>
            )}
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
