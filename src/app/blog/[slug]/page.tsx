import { getPostBySlug, getAllPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, Sparkles, BookOpen, ChevronRight } from "lucide-react";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export const revalidate = 3600; // ISR: Revalidate every hour

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | KanpurAI`,
        description: post.excerpt,
        openGraph: {
            images: [post.img],
            type: "article",
            title: post.title,
            description: post.excerpt,
        },
    };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50/50 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto px-6 py-32 relative z-10">
                {/* Navigation */}
                <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-12">
                    <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                    <Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                    <span className="text-slate-900 truncate max-w-[200px]">{post.title}</span>
                </nav>

                {/* Header content */}
                <header className="mb-14 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                        <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs uppercase tracking-wider">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <Clock className="w-4 h-4" />
                            5 min read
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-300" />
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </div>
                    </div>

                    <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold leading-[1.1] text-slate-900 mb-8 tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-y border-slate-100 py-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden ring-4 ring-white shadow-sm">
                                <User className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-bold text-slate-900">{post.author}</div>
                                <div className="text-xs text-slate-500 font-medium">Author & Contributor</div>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold text-sm transition-all duration-300">
                            <Share2 className="w-4 h-4" />
                            Share
                        </button>
                    </div>
                </header>

                {/* Featured Image */}
                {post.img && (
                    <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50">
                        <img
                            src={post.img}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Content */}
                <div
                    className="prose prose-lg md:prose-xl max-w-none 
                    prose-headings:font-space-grotesk prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                    prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:mt-16 prose-h1:mb-8
                    prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6 
                    prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-slate-600 prose-p:leading-8 prose-p:my-6 prose-p:font-normal text-[1.125rem]
                    prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:text-blue-700 hover:prose-a:underline prose-a:transition-colors
                    prose-strong:text-slate-900 prose-strong:font-bold
                    prose-li:text-slate-600 prose-li:my-2
                    prose-ul:my-8 prose-ol:my-8
                    prose-hr:my-16 prose-hr:border-slate-100
                    prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:text-slate-800 prose-blockquote:my-10 prose-blockquote:font-medium
                    prose-img:rounded-2xl prose-img:shadow-lg prose-img:shadow-slate-100 prose-img:my-12 prose-img:w-full prose-img:bg-slate-50
                    prose-code:px-1.5 prose-code:py-0.5 prose-code:bg-slate-100 prose-code:text-slate-800 prose-code:rounded-md prose-code:text-sm prose-code:font-mono prose-code:font-medium
                    prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:rounded-2xl prose-pre:p-6 prose-pre:my-10 prose-pre:shadow-xl
                    [&>*:first-child]:mt-0"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer */}
                <div className="mt-20 pt-10 border-t border-slate-100">
                    <Link
                        href="/blog"
                        className="group block bg-slate-50 hover:bg-slate-100 p-8 rounded-3xl transition-all duration-300"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-slate-500 font-semibold text-sm mb-2">Back to Overview</div>
                                <div className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Read more articles</div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                <ArrowLeft className="w-5 h-5 text-slate-900" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </article>
    );
}
