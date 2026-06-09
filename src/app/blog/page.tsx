import React from "react";
import { getAllPosts } from "@/lib/blog-data";
import BlogList from "@/components/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | KanpurAI",
    description: "Insights, tutorials, and stories from the kanpurAI community.",
};

export const revalidate = 3600; // ISR: Revalidate every hour

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#C9FF3F] selection:text-black">
            <BlogList initialPosts={posts} />
        </main>
    );
}
