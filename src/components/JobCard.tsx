interface Job {
  id: number;
  title: string;
  company_name: string;
  candidate_required_location: string;
  url: string;
  tags: string[];
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-900 hover:border-purple-500 transition">
      <h2 className="text-xl font-semibold mb-2">
        {job.title}
      </h2>

      <p className="text-gray-400 mb-2">
        {job.company_name}
      </p>

      <p className="text-sm text-gray-500 mb-4">
        {job.candidate_required_location}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags?.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700"
      >
        Apply Now
      </a>
    </div>
  );
}