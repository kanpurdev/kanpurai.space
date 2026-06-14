import InternshipsClient from "./InternshipsClient";
import { BriefcaseBusiness, Globe2, RefreshCw } from "lucide-react";

interface Job {
  id: number;
  title: string;
  company_name: string;
  candidate_required_location: string;
  url: string;
  tags: string[];
}

async function getJobs(): Promise<Job[]> {
  try {
    const res = await fetch(
      "https://remotive.com/api/remote-jobs?category=software-dev",
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data = await res.json();

    return data.jobs.slice(0, 24);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

export default async function InternshipsPage() {
  const jobs = await getJobs();
  const stats = [
    {
      label: "Live Opportunities",
      value: `${jobs.length}+`,
      icon: BriefcaseBusiness,
    },
    {
      label: "Remote First",
      value: "Global",
      icon: Globe2,
    },
    {
      label: "Updated Hourly",
      value: "1h",
      icon: RefreshCw,
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-white px-6 pb-24 pt-32 text-black font-sans selection:bg-[#C9FF3F] selection:text-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_45%,transparent_100%)]" />
        <div className="absolute right-[-10rem] top-36 h-[420px] w-[420px] rounded-full bg-[#C9FF3F]/25 blur-[110px]" />
        <div className="absolute left-[-8rem] top-[32rem] h-[360px] w-[360px] rounded-full bg-[#3b82f6]/10 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <section className="mx-auto mb-12 max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-gray-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C9FF3F] shadow-[0_0_14px_rgba(201,255,63,0.9)]" />
            KanpurAI opportunities board
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-black sm:text-6xl lg:text-7xl">
            AI Internship Radar
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Discover live remote AI, Software Development, Machine Learning,
            Data Science, and Tech opportunities from around the world.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-[#C9FF3F] hover:shadow-xl"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-900">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-2xl font-black text-black">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <InternshipsClient jobs={jobs} />
      </div>
    </main>
  );
}
