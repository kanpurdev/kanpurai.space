import InternshipsClient from "./InternshipsClient";

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

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          AI Internship Radar 🚀
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Discover remote AI, Software Development and Tech opportunities.
        </p>

        <InternshipsClient jobs={jobs} />
      </div>
    </main>
  );
}