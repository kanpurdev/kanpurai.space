import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, MapPin, Sparkles } from "lucide-react";

export interface Job {
  id: number;
  title: string;
  company_name: string;
  candidate_required_location: string;
  url: string;
  tags: string[];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function getSmartBadges(job: Job) {
  const content = `${job.title} ${job.company_name} ${job.candidate_required_location} ${(job.tags || []).join(" ")}`.toLowerCase();
  const badges = [];

  if (content.includes("remote") || content.includes("worldwide") || content.includes("anywhere")) badges.push("Remote");
  if (content.includes("ai") || content.includes("machine learning") || content.includes("ml")) badges.push("AI");
  if (content.includes("intern")) badges.push("Internship");
  if (content.includes("full-time") || content.includes("full time")) badges.push("Full-Time");

  return Array.from(new Set(badges)).slice(0, 3);
}

export default function JobCard({ job, index = 0 }: { job: Job; index?: number }) {
  const tags = Array.isArray(job.tags) ? job.tags : [];
  const smartBadges = getSmartBadges(job);
  const location = job.candidate_required_location || "Remote";
  const company = job.company_name || "Hiring team";
  const category = tags[0] || "Software Development";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, delay: Math.min(index * 0.035, 0.28), ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C9FF3F] hover:shadow-xl"
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#C9FF3F] to-[#3b82f6] transition-transform duration-300 group-hover:scale-x-100" />

      <div className="mb-7 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-sm font-black text-black shadow-sm">
            {getInitials(company) || <BriefcaseBusiness className="h-5 w-5" />}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-black">{company}</p>
            <p className="mt-1 flex items-center gap-1.5 truncate text-xs font-medium text-gray-500">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-gray-400" />
              {location}
            </p>
          </div>
        </div>

        <div className="rounded-full bg-[#C9FF3F]/30 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-gray-900">
          Live
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#10b981]">
          <Sparkles className="h-3.5 w-3.5" />
          {category}
        </div>
        <h2 className="line-clamp-3 text-2xl font-bold leading-tight text-black transition-colors duration-300 group-hover:text-[#10b981]">
          {job.title}
        </h2>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {smartBadges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700"
          >
            {badge}
          </span>
        ))}

        {tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#C9FF3F]/40 bg-[#C9FF3F]/15 px-3 py-1 text-xs font-semibold text-gray-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-7 border-t border-gray-100 pt-5">
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Apply for ${job.title} at ${company}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#10b981] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Apply Now
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}
