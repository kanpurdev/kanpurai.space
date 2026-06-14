"use client";

import { useState } from "react";
import JobCard from "@/components/JobCard";

export default function InternshipsClient({ jobs }: any) {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job: any) =>
    `${job.title} ${job.company_name} ${job.tags.join(" ")}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search AI, React, Intern..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job: any) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}