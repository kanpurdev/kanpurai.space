"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ChevronRight,
    Search,
    Menu,
    X,
    Globe,
    BookOpen,
    Code,
    FileText,
    ExternalLink,
    ChevronDown,
    Filter,
    Info,
    AlertTriangle,
    Terminal,
    Zap,
    CheckCircle2,
    SearchCode,
    Briefcase,
    Star,
    Users,
    MessageSquare,
    Twitter,
    Newspaper,
    Compass,
    Target,
    Layout,
    MousePointer2,
    ListTodo,
    Sparkles,
    Search as SearchIcon,
    GitPullRequest,
    CheckCircle,
    AlertCircle,
    Plus,
    GitFork,
    Send,
    Github
} from "lucide-react";
import Link from "next/link";

type ResourceView = "overview" | "open-source" | "open-source-basics" | "explore-projects" | "find-issues" | "submit-pr";

interface SidebarItem {
    name: string;
    href: string;
    icon?: React.ElementType;
    view?: ResourceView;
}

interface SidebarSection {
    title: string;
    items: SidebarItem[];
}

const sidebarLinks: SidebarSection[] = [
    {
        title: "Open Source Guide",
        items: [
            { name: "What is Open Source?", href: "#open-source", icon: Globe, view: "open-source" },
            { name: "Get the Basics Done", href: "#basics", icon: Terminal, view: "open-source-basics" },
            { name: "Explore & Select Projects", href: "#explore", icon: Compass, view: "explore-projects" },
            { name: "Find the Right Issue", href: "#find-issue", icon: Target, view: "find-issues" },
            { name: "Submit Your First PR", href: "#submit-pr", icon: GitPullRequest, view: "submit-pr" },
        ]
    }
];

export default function LearningResourcesPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentView, setCurrentView] = useState<ResourceView>("overview");

    const handleLinkClick = (view?: ResourceView) => {
        if (view) {
            setCurrentView(view);
            setIsSidebarOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-[#C9FF3F] selection:text-black">
            {/* Header Spacer */}
            <div className="h-24 lg:h-32" />

            {/* Breadcrumbs Row */}
            <div className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-21 z-40">
                <div className="max-w-[1440px] mx-auto px-6 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <nav className="flex items-center gap-2 text-xs text-gray-400">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <button onClick={() => setCurrentView("overview")} className="hover:text-black transition-colors">Resources</button>
                        {(currentView !== "overview") && (
                            <>
                                <ChevronRight className="w-3 h-3" />
                                <button onClick={() => setCurrentView("open-source")} className="hover:text-black transition-colors uppercase tracking-widest font-bold">Open Source Guide</button>
                            </>
                        )}
                        {currentView === "open-source-basics" && (
                            <>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-gray-900 font-medium">Get the Basics</span>
                            </>
                        )}
                        {currentView === "explore-projects" && (
                            <>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-gray-900 font-medium whitespace-nowrap">Explore Projects</span>
                            </>
                        )}
                        {currentView === "find-issues" && (
                            <>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-gray-900 font-medium whitespace-nowrap">Find Issues</span>
                            </>
                        )}
                        {currentView === "submit-pr" && (
                            <>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-gray-900 font-medium whitespace-nowrap">Submit PR</span>
                            </>
                        )}
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input type="text" placeholder="Search the guide..." className="bg-gray-100 border border-gray-200 rounded-full py-1.5 pl-10 pr-4 text-sm w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen">
                {/* Sidebar */}
                <aside className={`
          fixed lg:sticky top-40 inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 pb-8 px-6 overflow-y-auto transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:w-64 xl:w-72 h-[calc(100vh-160px)]
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
                    <div className="mt-8 mb-6">
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input type="text" placeholder="Filter sections" className="w-full bg-gray-50 border border-gray-200 rounded-md py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-black" />
                        </div>
                    </div>

                    <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-md mb-6 font-bold text-[10px] tracking-[0.2em] uppercase">Learning Center</div>

                    <nav className="space-y-6">
                        {sidebarLinks.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4 px-2">{section.title}</h3>
                                <ul className="space-y-0.5">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                            <button
                                                onClick={() => handleLinkClick(item.view)}
                                                className={`w-full text-left flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-all group ${currentView === item.view ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600 -ml-1 rounded-l-none" : "text-gray-500 hover:bg-gray-50 hover:text-black"}`}
                                            >
                                                {item.icon && <item.icon className={`w-3.5 h-3.5 ${currentView === item.view ? "text-blue-400" : "text-gray-600 group-hover:text-gray-400"}`} />}
                                                <span className="flex-1">{item.name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-w-0 px-6 lg:px-12 py-12 lg:py-20">
                    <article className="max-w-4xl mx-auto">
                        <motion.div
                            key={currentView}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {currentView === "overview" && (
                                <div className="space-y-12">
                                    <header>
                                        <h1 className="text-5xl lg:text-7xl font-space-grotesk font-black mb-8 tracking-tight italic text-black">Open Source Guide</h1>
                                    </header>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { title: "What is Open Source?", view: "open-source", icon: Globe },
                                            { title: "Get the Basics Done", view: "open-source-basics", icon: Terminal },
                                            { title: "Explore & Select Projects", view: "explore-projects", icon: Compass },
                                            { title: "Find the Right Issue", view: "find-issues", icon: Target },
                                            { title: "Submit Your First PR", view: "submit-pr", icon: GitPullRequest },
                                        ].map((card, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleLinkClick(card.view as ResourceView)}
                                                className="text-left group bg-white border border-gray-100 p-8 rounded-2xl hover:bg-black transition-all hover:-translate-y-1 duration-300 shadow-sm"
                                            >
                                                <card.icon className="w-8 h-8 text-blue-500 mb-6 group-hover:text-white transition-colors" />
                                                <h3 className="text-2xl font-black mb-2 group-hover:text-white uppercase tracking-tighter">{card.title}</h3>
                                                <div className="text-[10px] font-bold text-gray-500 group-hover:text-blue-200 uppercase tracking-widest flex items-center gap-2">
                                                    Start Module <ChevronRight className="w-3 h-3" />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {currentView === "open-source" && (
                                <div className="prose prose-blue max-w-none space-y-12">
                                    <h1 className="text-4xl lg:text-6xl font-space-grotesk font-black mb-10 tracking-tight text-black">What is Open Source?</h1>
                                    <section className="space-y-6">
                                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                                            Open source refers to something people can <strong className="text-black font-bold">modify and share</strong> because its design is publicly accessible. This term originated in the context of software development to designate a specific approach to creating computer programs.
                                        </p>
                                        <p className="text-gray-400">
                                            Today, however, "open source" designates a broader set of values—what we call <strong className="text-blue-600">"the open source way."</strong> Open source projects, products, or initiatives embrace and celebrate principles of open exchange, collaborative participation, rapid prototyping, transparency, meritocracy, and community-oriented development.
                                        </p>
                                    </section>

                                    <section className="space-y-6">
                                        <h2 className="text-3xl font-bold border-b border-gray-100 pb-4 text-black">The Story of Open Source</h2>
                                        <p className="text-gray-400 leading-relaxed font-light">
                                            The open source movement wasn't born in a vacuum. It was a reaction to the increasing commercialization and "locking down" of software in the 1970s and 80s.
                                        </p>
                                        <ul className="space-y-4 list-none p-0">
                                            <li className="flex gap-4">
                                                <span className="text-blue-500 font-bold font-mono">1983:</span>
                                                <span className="text-gray-300 underline underline-offset-4 tracking-tight">Richard Stallman starts the GNU Project to create a completely free operating system.</span>
                                            </li>
                                            <li className="flex gap-4">
                                                <span className="text-blue-500 font-bold font-mono">1991:</span>
                                                <span className="text-gray-300 underline underline-offset-4 tracking-tight">Linus Torvalds releases the Linux kernel, which becomes the most famous open source project in history.</span>
                                            </li>
                                            <li className="flex gap-4">
                                                <span className="text-blue-500 font-bold font-mono">1998:</span>
                                                <span className="text-gray-300 underline underline-offset-4 tracking-tight">The term "Open Source" is officially coined to make the concept more appealing to the corporate world.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    <section className="space-y-6">
                                        <h2 className="text-3xl font-bold border-b border-gray-100 pb-4 text-black">Why is it important today?</h2>
                                        <p className="text-gray-600 leading-relaxed">
                                            In the modern tech stack, <strong className="text-black font-bold tracking-widest">99% of companies</strong> use open source software. It is the backbone of the internet, cloud computing, and AI.
                                        </p>
                                    </section>

                                    <footer className="pt-20 border-t border-gray-800 flex justify-between items-center">
                                        <button onClick={() => handleLinkClick("overview")} className="text-xs uppercase font-bold tracking-widest text-gray-500 hover:text-white transition-colors">← Back to Overview</button>
                                        <button onClick={() => handleLinkClick("open-source-basics")} className="px-8 py-3 bg-blue-600 hover:bg-white hover:text-black transition-all rounded font-black text-xs uppercase tracking-widest">Next Section</button>
                                    </footer>
                                </div>
                            )}

                            {currentView === "open-source-basics" && (
                                <div className="prose max-w-none space-y-16">
                                    <header className="space-y-4">
                                        <h1 className="text-4xl lg:text-7xl font-space-grotesk font-black mb-4 tracking-tighter text-black">Get the Basics Done Before Contributing to Open Source</h1>
                                        <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em]">A Beginner-Friendly Guide by Kanpurai.space</p>
                                    </header>

                                    <section className="space-y-8">
                                        <h2 className="text-3xl font-bold italic tracking-tight text-black">Welcome to Kanpurai.space 👋</h2>
                                        <p className="text-lg text-gray-300">If you’re an open-source beginner wondering:</p>
                                        <ul className="text-gray-400 space-y-4 text-sm italic list-none p-0">
                                            <li>— “Am I ready to contribute?”</li>
                                            <li>— “What tools do I need?”</li>
                                            <li>— “Do I need to know everything about Git?”</li>
                                            <li>— “What if I mess up?”</li>
                                        </ul>
                                        <p className="text-xl">Relax. You’re in the right place.</p>
                                        <p className="text-gray-400 font-light max-w-2xl leading-relaxed">This guide will walk you through everything you need before contributing to open source — tools, concepts, Git workflow, setup tips, and the right mindset — explained in simple English with practical examples.</p>
                                        <p className="text-gray-400">Also, one important note:</p>
                                        <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r-xl">
                                            <p className="m-0 text-sm">🚫 Please don’t spam open source repositories with random PRs just for numbers. Open source is about collaboration, not contribution count. Let’s build your foundation properly.</p>
                                        </div>
                                    </section>

                                    <section className="space-y-8">
                                        <h2 className="text-3xl font-bold text-black">Why Getting the Basics Right Matters</h2>
                                        <p className="text-gray-400">Before you jump into contributing to open source projects, you need a few essentials:</p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {["Basic Git & GitHub knowledge", "Understanding of development workflow", "Familiarity with your tech stack", "Patience during setup errors", "The courage to start"].map((t, i) => (
                                                <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                                    <span className="text-xs font-bold uppercase tracking-wider">{t}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-white text-black p-8 rounded-2xl italic font-serif">
                                            <p className="text-xl mb-4 leading-relaxed">"Think of it like learning to drive. You don’t need to know how an engine works. You just need to know how to steer, accelerate, brake, and follow traffic rules."</p>
                                            <p className="m-0 font-sans font-bold uppercase text-[10px] tracking-widest">— Kanpurai Guide</p>
                                        </div>
                                        <p className="text-gray-400 text-center font-light leading-relaxed">Same with open source. You don’t need to master every Git command ever created. You just need to understand the contribution workflow.</p>
                                    </section>

                                    <section className="space-y-12">
                                        <h2 className="text-5xl font-black uppercase tracking-tighter text-black">What You Must Learn Before Contributing to Open Source</h2>

                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-bold flex items-center gap-3 text-black"><Github className="w-8 h-8" /> 1. Learn Git and GitHub (Non-Negotiable)</h3>
                                            <p className="text-gray-400">If open source were a city, Git and GitHub would be its roads and traffic system. You must understand:</p>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                                {["Forking", "Cloning", "Branching", "Rebasing", "Merging", "Pushing", "Creating Pull Requests"].map(t => (
                                                    <div key={t} className="bg-gray-50 text-blue-600 font-mono text-[10px] p-3 rounded text-center border border-blue-100">{t}</div>
                                                ))}
                                            </div>
                                            <p className="text-xs italic text-blue-500 text-center uppercase tracking-widest font-bold">You don’t need to memorize every command — just understand how they connect.</p>
                                            <p className="text-gray-400">Let’s break it down simply.</p>
                                        </div>

                                        <div className="space-y-8 bg-gray-50 border border-gray-100 p-8 rounded-3xl">
                                            <h3 className="text-2xl font-bold text-black">Understanding the Open Source Workflow (Step-by-Step)</h3>
                                            <p className="text-gray-400 italic">Imagine this flow:</p>
                                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 py-8 border-y border-gray-800/50">
                                                <div>Upstream</div>
                                                <ChevronRight className="w-4 h-4 text-gray-700" />
                                                <div>Your Fork</div>
                                                <ChevronRight className="w-4 h-4 text-gray-700" />
                                                <div>Your Local Machine</div>
                                                <ChevronRight className="w-4 h-4 text-gray-700" />
                                                <div>Your Fork</div>
                                                <ChevronRight className="w-4 h-4 text-gray-700" />
                                                <div>Upstream</div>
                                            </div>
                                            <p className="text-gray-400 italic">Let’s decode this.</p>
                                            <div className="grid md:grid-cols-3 gap-8">
                                                <div className="space-y-2">
                                                    <h4 className="text-black font-bold uppercase text-xs">Upstream</h4>
                                                    <p className="text-xs text-gray-500 font-light">The original open source repository.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="text-black font-bold uppercase text-xs">Origin</h4>
                                                    <p className="text-xs text-gray-500 font-light">Your forked copy on GitHub.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="text-black font-bold uppercase text-xs">Local</h4>
                                                    <p className="text-xs text-gray-500 font-light">The copy on your laptop.</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-center">That’s it. Now let’s go deeper.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-black">Forking & Cloning Explained Like You’re 10</h3>
                                            <p className="text-gray-400 leading-relaxed font-bold">Step 1: Fork the Repository</p>
                                            <p className="text-gray-400 italic">When you fork a project:</p>
                                            <ul className="text-gray-400 space-y-2 text-sm list-disc pl-5">
                                                <li>GitHub creates a copy of the repo</li>
                                                <li>It appears in your account</li>
                                                <li>You can modify it safely</li>
                                                <li>You won’t break the original project</li>
                                            </ul>
                                            <p className="text-xs italic text-gray-500 border-l-2 border-gray-700 pl-4 py-2">“Think of it like photocopying someone’s notebook before writing in it. Your changes affect your copy — not theirs.”</p>

                                            <p className="text-gray-400 mt-8 font-bold">Step 2: Clone to Your Local Machine</p>
                                            <p className="text-gray-400">After forking, you need to bring the project to your computer. Open your terminal and run:</p>
                                            <pre className="bg-black/60 p-5 rounded-lg font-mono text-sm text-blue-400 border border-gray-800">git clone &lt;repo-url&gt;</pre>
                                            <p className="text-gray-400">This downloads the project so you can edit files, test code, and build features. Now you’re ready to work.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-black">Setting Up the Project Locally (The “Error Zone” 😅)</h3>
                                            <p className="text-gray-400">Almost every open source project has a <code className="text-white bg-gray-800 px-1 rounded">README.md</code> file. Look for a section called:</p>
                                            <ul className="text-blue-400 font-mono text-xs list-none p-0 flex gap-4 uppercase tracking-widest font-bold">
                                                <li>Local Development</li>
                                                <li>Setup</li>
                                                <li>Installation Guide</li>
                                            </ul>
                                            <p className="text-gray-400 mt-4">You might need tools like:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {["Node.js", "PostgreSQL", "Python", "Docker", "Redis"].map(t => (
                                                    <span key={t} className="px-3 py-1 bg-[#2d2d2d] rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-300">{t}</span>
                                                ))}
                                            </div>
                                            <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl mt-8">
                                                <h4 className="text-blue-500 font-black uppercase text-xs tracking-widest mb-2 italic">Pro Tip: Learn Docker</h4>
                                                <p className="m-0 text-sm text-gray-400">Docker saves time. A lot of time. Instead of manually installing everything, Docker runs the entire environment in a container. But manual setup is also fine.</p>
                                            </div>
                                            <p className="text-gray-400 mt-8">And yes — setup errors are <strong className="text-white">NORMAL</strong>. Everyone faces:</p>
                                            <ul className="text-sm text-gray-500 grid md:grid-cols-2 gap-2 list-none p-0 italic">
                                                <li>— Missing dependencies</li>
                                                <li>— Version mismatches</li>
                                                <li>— Port conflicts</li>
                                                <li>— Environment variable issues</li>
                                            </ul>
                                            <p className="text-gray-400 font-bold mb-2 uppercase text-xs tracking-widest mt-6">What to do?</p>
                                            <ul className="text-sm text-gray-400 space-y-1 list-disc pl-5">
                                                <li>Google the error</li>
                                                <li>Use ChatGPT</li>
                                                <li>Check GitHub issues</li>
                                                <li>Ask the community (if stuck for 1–2 days)</li>
                                            </ul>
                                            <p className="text-xl font-bold italic mt-4 text-black underline decoration-blue-500 underline-offset-8">Struggling is part of learning.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-black">Working with Branches (Very Important)</h3>
                                            <p className="text-gray-400">Never work directly on the main branch. Always create a new branch. Run:</p>
                                            <pre className="bg-black/60 p-5 rounded-lg font-mono text-sm text-blue-400 border border-gray-800">git checkout -b fix-xyz</pre>
                                            <p className="text-gray-400 italic">This: Creates a new branch & Switches you to it. Each issue = One branch.</p>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Example:</p>
                                            <ul className="text-xs font-mono text-blue-400 list-none p-0 flex gap-4">
                                                <li>fix-login-bug</li>
                                                <li>add-user-auth</li>
                                                <li>improve-navbar-ui</li>
                                            </ul>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-black">Keeping Your Fork Updated (Syncing Explained)</h3>
                                            <p className="text-gray-400">Multiple contributors are working at the same time. Your copy can become outdated. That’s where syncing comes in. You have two options:</p>
                                            <ul className="space-y-4 list-none p-0">
                                                <li className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                    <span className="text-black font-bold uppercase text-xs">Option 1: Merge</span>
                                                    <p className="m-0 text-sm text-gray-500 mt-2 font-light">Merges changes but creates extra merge commits. History can look messy.</p>
                                                </li>
                                                <li className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                                    <span className="text-blue-700 font-bold uppercase text-xs">Option 2: Rebase (Recommended)</span>
                                                    <p className="m-0 text-sm text-gray-600 mt-2 font-light italic">Keeps history clean and linear. Most experienced developers prefer rebase.</p>
                                                </li>
                                            </ul>
                                            <p className="text-gray-400 mt-4">If conflicts appear: Open the conflicting file, Decide which code to keep, Delete conflict markers. Run:</p>
                                            <pre className="bg-black/60 p-5 rounded-lg font-mono text-sm text-blue-400 border border-gray-800">
                                                git add .
                                                git rebase --continue</pre>
                                            <p className="text-xs font-black uppercase text-center text-blue-500 tracking-widest">Done. Conflict resolved.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-black">Cherry-Picking Commits (Advanced but Useful)</h3>
                                            <p className="text-gray-400 font-light leading-relaxed">Sometimes your branch becomes messy. Too many commits. Too much noise. Instead of merging everything, you can copy just one clean commit:</p>
                                            <pre className="bg-black/60 p-5 rounded-lg font-mono text-sm text-blue-400 border border-gray-800 italic">git cherry-pick &lt;commit-hash&gt;</pre>
                                            <p className="text-gray-400 font-light text-sm italic">This grabs only that specific commit. Very helpful for cleaning branches.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-black">Fetch vs Pull (Clear Mental Model)</h3>
                                            <p className="text-gray-400 font-light italic leading-relaxed">This confuses beginners. Here’s the difference:</p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-[#2d2d2d]/30 p-6 rounded-2xl border border-gray-800">
                                                    <code className="text-blue-500 font-bold uppercase block mb-2">git fetch</code>
                                                    <p className="m-0 text-xs text-gray-500 italic">Downloads changes. Does NOT modify your current branch. Safe preview.</p>
                                                </div>
                                                <div className="bg-[#2d2d2d]/30 p-6 rounded-2xl border border-gray-800">
                                                    <code className="text-blue-500 font-bold uppercase block mb-2">git pull</code>
                                                    <p className="m-0 text-xs text-gray-500 italic">Downloads changes. Merges them into your branch.</p>
                                                </div>
                                            </div>
                                            <p className="text-xs font-black uppercase text-center text-black tracking-widest mt-4">Fetch = Check updates | Pull = Apply updates</p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-black">Pushing Your Changes & Raising a Pull Request</h3>
                                            <p className="text-gray-400">Once your work is ready:</p>
                                            <pre className="bg-black/60 p-6 rounded-lg font-mono text-sm text-blue-400 border border-gray-800 leading-relaxed">
                                                git add .
                                                git commit -m "fix: correct login validation"
                                                git push origin fix-xyz</pre>
                                            <p className="text-gray-400 italic">Now go to GitHub. You’ll see: <strong className="text-black">Compare & Pull Request</strong>. Click it. Write:</p>
                                            <ul className="text-sm text-gray-500 list-disc pl-5 flex flex-col gap-1">
                                                <li>What you changed</li>
                                                <li>Why you changed it</li>
                                                <li>Screenshots (if UI related)</li>
                                            </ul>
                                            <p className="text-xs font-bold uppercase tracking-widest text-black mt-2">Keep it short and clear.</p>
                                        </div>

                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-bold italic text-black">Raise Draft PRs Early (Huge Tip)</h3>
                                            <p className="text-gray-400">Don’t wait for perfection. Once the core logic works: Raise a draft PR. Benefits:</p>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                                {["Progress visibility", "No duplication", "Early feedback", "Saves time"].map((b, i) => (
                                                    <div key={i} className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-[10px] font-bold uppercase tracking-wider text-blue-700">{b}</div>
                                                ))}
                                            </div>
                                            <p className="text-gray-400 text-center font-light italic">Just don’t spam with half-line drafts. Be respectful.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-black">Stashing Changes (When You’re Mid-Work)</h3>
                                            <p className="text-gray-400">Sometimes you’re in the middle of work and need to switch branches. Instead of committing unfinished work:</p>
                                            <pre className="bg-black/60 p-5 rounded-lg font-mono text-sm text-blue-400 border border-gray-800">git stash save "my changes"</pre>
                                            <p className="text-gray-400 italic">Later:</p>
                                            <pre className="bg-black/60 p-5 rounded-lg font-mono text-sm text-blue-400 border border-gray-800">git stash apply</pre>
                                            <p className="text-xs font-black uppercase text-center text-black tracking-widest">Your changes are back. Very clean workflow.</p>
                                        </div>

                                        <div className="space-y-8">
                                            <h3 className="text-2xl font-bold uppercase tracking-tighter text-black">Quick Git Productivity Tricks</h3>
                                            <div className="space-y-4">
                                                <p className="text-gray-400">View history:</p>
                                                <pre className="bg-black/60 p-5 rounded-lg font-mono text-sm text-blue-400 border border-gray-800 italic">git log --oneline</pre>
                                                <ul className="text-gray-500 text-sm list-decimal pl-5 space-y-2 italic">
                                                    <li>Create Git aliases (like <code className="text-white">git ac</code> for add + commit)</li>
                                                    <li>Learn 10–15 commands deeply instead of 100 randomly</li>
                                                    <li>Short YouTube tutorials help here.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <h3 className="text-2xl font-bold uppercase tracking-tighter text-black">Learn the Basics of Your Tech Stack</h3>
                                            <p className="text-gray-400">Git alone is not enough. You must understand: <strong className="text-black">Basic logic, Loops, Conditions, Functions, Core syntax.</strong></p>
                                            <div className="grid grid-cols-3 gap-4 uppercase font-black tracking-tighter text-[10px]">
                                                <div className="space-y-2">
                                                    <p className="text-blue-500">If frontend:</p>
                                                    <p className="text-gray-500 italic leading-relaxed">React basics | Vue basics | HTML/CSS fundamentals</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-blue-500">If backend:</p>
                                                    <p className="text-gray-500 italic leading-relaxed">APIs | Databases | Authentication | Framework basics</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-blue-500">If AI:</p>
                                                    <p className="text-gray-500 italic leading-relaxed">Neural networks | Data preprocessing | Basic ML flow</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-400 font-light text-center italic">You don’t need expertise. You just need to understand what the code is doing.</p>
                                        </div>

                                        <div className="space-y-8">
                                            <h3 className="text-2xl font-bold text-black">Finding Open Source Projects by Niche</h3>
                                            <p className="text-gray-400 font-light leading-relaxed max-w-2xl">Right now, there’s no perfect platform to filter open source projects by category. But tools like <strong className="text-black">GitHub search, Trending repositories,</strong> and <strong className="text-black">Discord communities</strong> help.</p>
                                            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                                                {["AI", "DevOps", "Web3", "Frontend", "Backend", "Infrastructure"].map(t => (
                                                    <div key={t} className="bg-black/40 text-[10px] p-2 text-center rounded border border-gray-800 font-bold uppercase tracking-widest text-gray-500 italic">{t}</div>
                                                ))}
                                            </div>
                                            <p className="text-xl font-bold text-center italic mt-4">Contribution becomes fun when you care.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-black">Extra Skills That Help (But Not Mandatory)</h3>
                                            <p className="text-gray-400">If you know: <strong className="text-black">DSA, Internship experience, Math, Algorithms, System design</strong> — You’ll progress faster.</p>
                                            <p className="text-xs italic text-gray-500 leading-relaxed border-l-2 border-gray-700 pl-4 py-2">“Example: If you know data structures, contributing to low-level libraries becomes easier. Every prior skill compounds. But don’t wait for mastery.”</p>
                                        </div>

                                        <div className="space-y-12">
                                            <h2 className="text-4xl font-black uppercase tracking-tighter py-8 border-y border-gray-100 text-center text-black">The “Am I Ready?” Dilemma</h2>
                                            <p className="text-xl text-gray-600 font-light italic text-center max-w-2xl mx-auto">This is the most common beginner question. Truth? <strong className="text-black underline decoration-blue-500 underline-offset-4">You’ll never feel fully ready.</strong> Even senior developers hesitate before contributing to new projects.</p>
                                            <div className="flex flex-wrap justify-center gap-8 uppercase font-black tracking-widest text-[10px] text-blue-500">
                                                <span>The solution? Start.</span>
                                                <ChevronRight className="w-4 h-4 text-gray-700" />
                                                <span>Fork a repo.</span>
                                                <ChevronRight className="w-4 h-4 text-gray-700" />
                                                <span>Clone it.</span>
                                                <ChevronRight className="w-4 h-4 text-gray-700" />
                                                <span>Pick a small issue.</span>
                                                <ChevronRight className="w-4 h-4 text-gray-700" />
                                                <span>Go.</span>
                                            </div>
                                            <p className="text-center text-gray-500 italic uppercase font-bold tracking-widest">You’ll get stuck. That’s good. That’s learning.</p>
                                        </div>

                                        <div className="space-y-8 bg-black p-12 rounded-3xl text-white">
                                            <h2 className="text-3xl font-black uppercase tracking-tighter">The Learn → Apply → Move Cycle</h2>
                                            <p className="text-lg font-bold mb-8">Instead of watching 50 tutorials, use this approach:</p>
                                            <ol className="list-decimal pl-5 space-y-4 text-sm font-black uppercase tracking-widest">
                                                <li>Get stuck.</li>
                                                <li>Identify what you need to learn.</li>
                                                <li>Learn just enough.</li>
                                                <li>Fix the problem.</li>
                                                <li>Move forward.</li>
                                            </ol>
                                            <div className="bg-black/20 p-6 rounded-xl mt-12 text-xs font-medium italic border-l-4 border-white">
                                                Example: Need Redis? Learn basics → implement → move. Need tRPC? Learn minimal docs → fix issue → move.
                                            </div>
                                            <p className="text-xl font-bold text-center mt-12 uppercase tracking-widest decoration-white underline underline-offset-8">Action &gt; Preparation.</p>
                                        </div>

                                        <div className="space-y-8">
                                            <h3 className="text-2xl font-bold uppercase tracking-tighter text-black">Open Source Contribution SEO Checklist (For Beginners)</h3>
                                            <p className="text-gray-400">If you're serious about contributing to open source projects:</p>
                                            <ul className="text-sm text-gray-500 font-mono space-y-2 list-none p-0 uppercase tracking-widest font-black">
                                                <li>— Practice Git commands twice</li>
                                                <li>— Understand fork and clone workflow</li>
                                                <li>— Learn branch naming conventions</li>
                                                <li>— Learn commit message standards</li>
                                                <li>— Understand pull request etiquette</li>
                                                <li>— Learn your tech stack basics in 1–2 weeks</li>
                                            </ul>
                                            <p className="text-gray-400 font-bold mb-2 uppercase text-xs tracking-widest mt-8">Search terms you should be comfortable with:</p>
                                            <div className="flex flex-wrap gap-2 text-[10px] font-bold text-blue-400 italic">
                                                <span>How to contribute to open source |</span>
                                                <span>GitHub pull request guide |</span>
                                                <span>Git rebase vs merge |</span>
                                                <span>Fork vs clone |</span>
                                                <span>Beginner open source contribution workflow</span>
                                            </div>
                                            <p className="text-center text-black font-black uppercase tracking-[0.2em] text-[10px] pt-12">If you can explain these, you're ready.</p>
                                        </div>

                                        <div className="space-y-8 bg-gray-50 p-12 rounded-3xl border border-gray-100">
                                            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-8 italic text-black">Common Beginner Mistakes to Avoid</h3>
                                            <div className="grid md:grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-red-500/80 italic">
                                                <div>❌ Spamming repositories</div>
                                                <div>❌ Creating PRs just to increase count</div>
                                                <div>❌ Not reading CONTRIBUTING.md</div>
                                                <div>❌ Ignoring coding standards</div>
                                                <div>❌ Making huge PRs instead of small ones</div>
                                                <div>❌ Giving up after first rejection</div>
                                            </div>
                                            <p className="text-center text-gray-500 font-black uppercase text-[10px] pt-8 tracking-widest">Rejections are normal. Feedback is growth.</p>
                                        </div>
                                    </section>

                                    <footer className="pt-24 pb-12 text-center space-y-12">
                                        <h2 className="text-4xl font-black tracking-tighter uppercase italic py-8 border-y border-gray-100 text-black">Final Thoughts from Kanpurai.space</h2>
                                        <div className="grid md:grid-cols-2 gap-12 text-left">
                                            <div className="space-y-4">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">You don’t need:</p>
                                                <ul className="text-sm text-gray-400 list-none p-0 italic">
                                                    <li>— 5 years of experience</li>
                                                    <li>— Perfect knowledge</li>
                                                    <li>— 100 completed projects</li>
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-blue-500">You need:</p>
                                                <ul className="text-sm text-blue-400 font-black list-none p-0 italic">
                                                    <li>— Git basics</li>
                                                    <li>— Basic tech stack understanding</li>
                                                    <li>— Patience</li>
                                                    <li>— Courage</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-xl text-gray-400 font-light italic max-w-2xl mx-auto leading-relaxed mt-12 mb-12">
                                            Don’t wait for “perfect timing”. Just: <strong className="text-black">Fork. Clone. Branch. Build. Push. PR.</strong>
                                        </p>
                                        <p className="text-gray-500 uppercase tracking-widest font-black text-[10px]">
                                            You’ll figure things out as you go. And that’s where real growth happens.
                                        </p>
                                        <div className="space-y-4 pt-12">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 decoration-blue-500 underline underline-offset-8">See you in the next module 🚀</p>
                                            <div className="flex flex-wrap gap-4 mt-8">
                                                <button onClick={() => handleLinkClick("explore-projects")} className="px-12 py-5 bg-blue-600 text-white hover:bg-white hover:text-black transition-all rounded-full font-black text-xs uppercase tracking-widest outline outline-1 outline-blue-600 outline-offset-8 hover:outline-offset-4">Learn How to Explore</button>
                                                <Link href="/projects" className="px-12 py-5 bg-black text-white hover:bg-blue-600 transition-all rounded-full font-black text-xs uppercase tracking-widest outline outline-1 outline-gray-200 outline-offset-8 hover:outline-offset-4">Open Project Explorer</Link>
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            )}

                            {currentView === "explore-projects" && (
                                <div className="prose max-w-none space-y-16">
                                    <header className="space-y-4">
                                        <h1 className="text-4xl lg:text-7xl font-space-grotesk font-black mb-4 tracking-tighter text-black">Explore and Select Open Source Projects to Contribute</h1>
                                        <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em]">A Practical, Beginner-Friendly Guide by Kanpurai.space</p>
                                    </header>

                                    <section className="space-y-8">
                                        <h2 className="text-3xl font-bold italic tracking-tight uppercase text-black">Welcome back 👋</h2>
                                        <p className="text-lg text-gray-400 leading-relaxed">In the previous module on Kanpurai.space, we covered the basics you need before contributing to open source — Git, GitHub workflow, tech stack fundamentals, and mindset.</p>
                                        <p className="text-xl font-bold">Now comes the fun (and slightly overwhelming) part:</p>
                                        <div className="bg-blue-600/10 border-l-4 border-blue-600 p-8 rounded-r-3xl">
                                            <p className="text-2xl font-black uppercase tracking-tighter m-0 italic text-black">🔍 How do you actually find good open source projects to contribute to?</p>
                                        </div>
                                        <p className="text-gray-400 font-light italic">Because let’s be honest — there are millions of repositories out there.</p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="bg-[#1c1c1c] border border-gray-800 p-8 rounded-3xl space-y-4">
                                                <h4 className="text-green-500 font-black uppercase tracking-widest text-[10px]">Some are:</h4>
                                                <ul className="list-none p-0 space-y-3 text-xs text-gray-500 font-bold uppercase tracking-wider">
                                                    <li>🚀 Active and well-maintained</li>
                                                    <li>🧠 Built by serious teams</li>
                                                    <li>💰 Offering bounties</li>
                                                    <li>🤝 Friendly to beginners</li>
                                                </ul>
                                            </div>
                                            <div className="bg-[#1c1c1c] border border-gray-800 p-8 rounded-3xl space-y-4">
                                                <h4 className="text-red-500 font-black uppercase tracking-widest text-[10px]">And some are:</h4>
                                                <ul className="list-none p-0 space-y-3 text-xs text-gray-500 font-bold uppercase tracking-wider">
                                                    <li>❌ Dead for 3 years</li>
                                                    <li>❌ Personal experiments</li>
                                                    <li>❌ No documentation</li>
                                                    <li>❌ No maintainer responses</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-center text-xl font-black uppercase tracking-widest py-8 italic border-b border-gray-100 text-black">Your job is to choose wisely.</p>

                                        <div className="space-y-4">
                                            <p className="text-gray-400">This guide will show you:</p>
                                            <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
                                                <li>10+ proven ways to discover high-quality open source projects</li>
                                                <li>How to explore them properly</li>
                                                <li>How to shortlist without wasting time</li>
                                                <li>How to narrow down to 2–3 serious projects</li>
                                                <li>How to avoid common beginner mistakes</li>
                                            </ul>
                                            <p className="text-xl font-black italic underline decoration-blue-600 underline-offset-8">Let’s dive in.</p>
                                        </div>
                                    </section>

                                    <section className="space-y-8">
                                        <h2 className="text-3xl font-bold uppercase tracking-tighter text-black">Why Selecting the Right Open Source Project Matters</h2>
                                        <div className="grid md:grid-cols-2 gap-12">
                                            <div className="space-y-4">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-red-500/50">Choosing the wrong project can:</p>
                                                <ul className="text-sm text-gray-500 font-bold italic list-none p-0 space-y-2">
                                                    <li>— Kill your motivation</li>
                                                    <li>— Waste your time</li>
                                                    <li>— Make you think you're “not good enough”</li>
                                                    <li>— Lead to ignored PRs</li>
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-blue-500/50">Choosing the right one can:</p>
                                                <ul className="text-sm text-blue-400/80 font-bold italic list-none p-0 space-y-2">
                                                    <li>— Accelerate your skills</li>
                                                    <li>— Build your network</li>
                                                    <li>— Get you mentorship</li>
                                                    <li>— Even earn you money</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-center text-xs font-black uppercase tracking-widest pt-8 border-t border-gray-100 text-gray-500">So selection is strategy — not luck.</p>
                                    </section>

                                    <section className="space-y-16">
                                        <h2 className="text-5xl font-black uppercase tracking-tighter text-black">10+ Ways to Discover Awesome Open Source Projects</h2>

                                        {[
                                            {
                                                title: "Way 1 — Explore Kanpurai.space projects",
                                                sub: "Project Discovery Platform",
                                                content: (
                                                    <div className="space-y-4">
                                                        <p className="m-0">One of the most focused platforms for discovering open source projects. It’s built specifically for helping contributors filter projects by:</p>
                                                        <ul className="grid grid-cols-2 gap-2 list-none p-0 text-[10px] font-bold uppercase tracking-wider text-gray-500 italic">
                                                            <li>— Tech stack (TypeScript, Rust, Go, etc.)</li>
                                                            <li>— Popularity</li>
                                                            <li>— Competition level</li>
                                                            <li>— Activity</li>
                                                        </ul>
                                                        <p className="m-0 font-bold text-white uppercase text-xs tracking-widest">How to Use It:</p>
                                                        <ul className="list-decimal pl-5 text-sm space-y-1">
                                                            <li>Go to Kanpurai.space/projects</li>
                                                            <li>
                                                                <Link
                                                                    href="/projects"
                                                                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all"
                                                                >
                                                                    Open Project Explorer
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-xs font-bold uppercase tracking-widest text-red-400 italic">
                                                            ⚠️ Ignore random personal experiments. Focus on: Company-backed projects, Official open source tools, Actively maintained repositories.
                                                        </div>
                                                        <p className="m-0 text-xs italic text-gray-500 leading-relaxed font-light">It’s still improving, but it’s one of the cleanest discovery tools available.</p>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: "Way 2 — Algora.io",
                                                sub: "Perfect for Paid Contributions",
                                                content: (
                                                    <div className="space-y-4">
                                                        <p className="m-0">Next up: Algora. If you’re interested in:</p>
                                                        <ul className="flex flex-wrap gap-4 list-none p-0 text-[10px] font-black uppercase tracking-widest text-blue-500">
                                                            <li>💰 Bounties</li>
                                                            <li>Paid open source contributions</li>
                                                            <li>Startup-backed projects</li>
                                                        </ul>
                                                        <p className="m-0 leading-relaxed font-light text-gray-400 italic">Algora lists many projects offering rewards. There aren’t advanced filters yet, so exploration is manual — but you’ll discover interesting projects you wouldn’t find elsewhere. Great for serious contributors aiming to earn while learning.</p>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: "Way 3 — YC Startup Directory",
                                                sub: "Goldmine of Modern OSS",
                                                content: (
                                                    <div className="space-y-4">
                                                        <p className="m-0 font-light leading-relaxed">The Y Combinator directory includes many open source startups. Search: <strong className="text-white italic">“YC open source startups 2025”</strong>. You’ll discover companies like GitLab, Docker, Airbyte.</p>
                                                        <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl">
                                                            <h4 className="text-blue-500 font-black uppercase text-xs tracking-[0.3em] mb-2 italic">Pro Tip:</h4>
                                                            <p className="m-0 text-gray-400 text-sm leading-relaxed">Newer YC startups are often: More responsive, More welcoming to beginners, Faster at reviewing PRs. Large, older companies are great — but response time may be slower.</p>
                                                        </div>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: "Way 4 — GSoC Organization List",
                                                sub: "The Mentorship Catalog",
                                                content: (
                                                    <div className="space-y-4">
                                                        <p className="m-0 leading-relaxed font-light">The Google Summer of Code list is legendary. Go to the organizations page and filter by language (Rust, Python, JavaScript, C++). Each organization links to its website and repositories.</p>
                                                        <p className="m-0 text-red-500 font-bold uppercase text-[10px] tracking-widest italic">⚠️ Important: Don’t spam README fixes. Make meaningful contributions.</p>
                                                        <ul className="grid grid-cols-3 gap-2 list-none p-0 text-[10px] font-black uppercase text-gray-500 italic text-center">
                                                            <li className="bg-[#2d2d2d] py-2 rounded border border-gray-800">Mature</li>
                                                            <li className="bg-[#2d2d2d] py-2 rounded border border-gray-800">Structured</li>
                                                            <li className="bg-[#2d2d2d] py-2 rounded border border-gray-800">Doc-Rich</li>
                                                        </ul>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: "Way 5 — GitHub Trending",
                                                sub: "Underrated Goldmine",
                                                content: (
                                                    <div className="space-y-4">
                                                        <p className="m-0 font-light leading-relaxed">Visit <strong className="text-white">GitHub → Trending</strong>. You’ll see: Projects gaining traction, Tools going viral, Emerging ecosystems. Trending repos are powerful because: They’re active, People are talking about them, Issues are fresh. This shows you what’s hot in the developer ecosystem right now.</p>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: "Way 6 — Open Source Communities",
                                                sub: "Discord / Slack / Matrix",
                                                content: (
                                                    <div className="space-y-4">
                                                        <p className="m-0 font-bold italic text-blue-500 uppercase text-xs tracking-[0.2em]">This is a cheat code.</p>
                                                        <p className="m-0 leading-relaxed font-light text-gray-400">Communities connect ecosystems. Join one project’s Discord, and you’ll see cross-collaborations and maintainer announcements. Check: <strong className="text-white">Footer of website, “Community” section, README badges.</strong> One community leads to another.</p>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: "Way 7 — Twitter (X) for OSS News",
                                                sub: "Real-time Ecosystem Pulse",
                                                content: (
                                                    <div className="space-y-4">
                                                        <p className="m-0 font-light text-gray-400 leading-relaxed italic">Most open source launches are first announced on X. Follow maintainers, startup founders, and active contributors. Don’t DM randomly asking for mentorship. Observe. Learn. Follow their work.</p>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: "Way 8 — Funding News & Newsletters",
                                                sub: "Follow the Capital",
                                                content: (
                                                    <div className="space-y-4">
                                                        <p className="m-0 font-light text-gray-400 leading-relaxed">Sites like TechCrunch, Product Hunt, and Hacker News feature funded open source startups and infra tools. Newly funded startups are often actively building and hiring contributors. This is prime time to join.</p>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: "Way 9 — Follow Active Contributors",
                                                sub: "GitHub & Social Pattern Matching",
                                                content: (
                                                    <div className="space-y-4">
                                                        <p className="m-0 font-bold uppercase text-[10px] tracking-widest text-blue-500">Secret gem 💎</p>
                                                        <p className="m-0 font-light leading-relaxed text-gray-400 italic">Follow strong contributors on GitHub and Twitter. You’ll automatically see projects they star, issues they solve, and PRs they raise. This shows you high-quality repos and clean contribution patterns. Observe silently. Learn patterns.</p>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: "Way 10 — OSS Friends Network Trick",
                                                sub: "Ecosystem Graph Exploration",
                                                content: (
                                                    <div className="space-y-4">
                                                        <p className="m-0 font-light leading-relaxed">Many open source companies list <strong className="text-white uppercase text-[10px]">OSS Friends or Open Source Partners</strong> in their footer. Click one → Find their OSS friends → Repeat. You’ll discover entire clusters of related projects. Total goldmine.</p>
                                                    </div>
                                                )
                                            }
                                        ].map((item, i) => (
                                            <div key={i} className="group relative pl-16 py-12 border-b border-gray-800/50 hover:bg-white/5 transition-all rounded-3xl p-8">
                                                <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">0{i + 1}</div>
                                                <div className="space-y-4">
                                                    <h3 className="text-2xl font-black uppercase tracking-tighter m-0 text-black">{item.title}</h3>
                                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 m-0">Subtitle // {item.sub}</p>
                                                    <div className="text-gray-400 font-light leading-relaxed pt-4 border-t border-gray-800/50">{item.content}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </section>

                                    <section className="space-y-8 bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
                                        <h2 className="text-3xl font-black uppercase tracking-tighter text-black">How to Explore and Shortlist Projects Properly</h2>
                                        <p className="text-gray-400 italic font-light">Now comes the filtering stage. You cannot contribute to 100 projects. Start by shortlisting 10–15.</p>
                                        <div className="grid md:grid-cols-2 gap-12 mt-12">
                                            {[
                                                { t: "1. Is the Repo Active?", d: "Recent commits? PRs merged weekly? Maintainer replies? If last commit was 2022 → skip." },
                                                { t: "2. Does It Match Your Tech Stack?", d: "Don’t join a Rust project if you only know TypeScript. Stick to what you understand. Expansion is good — but not confusion." },
                                                { t: "3. Is the Community Active?", d: "Join Discord or Slack. Observe: Are questions answered? Are discussions alive? If messages go unanswered for weeks → red flag." },
                                                { t: "4. Are Issues Beginner-Friendly?", d: "Look for labels like: good first issue, help wanted, beginner-friendly, bounty. Clear labeling = organized maintainers." }
                                            ].map((check, i) => (
                                                <div key={i} className="space-y-4">
                                                    <h4 className="text-black font-black uppercase text-xs tracking-widest italic">{check.t}</h4>
                                                    <p className="text-sm text-gray-500 font-light leading-relaxed italic">{check.d}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-16 bg-blue-600 p-8 rounded-3xl text-white">
                                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-black">Trim 10–15 Down to 5–6</h3>
                                            <p className="text-sm font-bold opacity-90 leading-relaxed mb-8">After exploration, narrow down using: High activity, Good documentation, Responsive maintainers, Tech stack alignment, Meaningful issues.</p>
                                            <p className="text-xl font-black italic uppercase tracking-widest m-0 decoration-white underline underline-offset-8">Focus is power.</p>
                                            <p className="m-0 mt-4 text-[10px] font-medium opacity-70">Spreading across 15 projects = shallow learning. Focused effort on 3–5 = deep growth.</p>
                                        </div>
                                    </section>

                                    <section className="space-y-12 py-12 border-y border-gray-100">
                                        <h2 className="text-4xl font-black uppercase tracking-tighter text-center text-black">Final Trim: Choose 2–3 Serious Projects</h2>
                                        <p className="text-center text-gray-400 font-light italic text-xl max-w-2xl mx-auto">Now go deeper. Ask: Do I enjoy reading this code? Do I understand the architecture? Can I realistically solve issues here? Does this project excite me?</p>
                                        <div className="flex justify-center gap-12 font-black uppercase tracking-[0.2em] text-[10px] text-blue-500">
                                            <span>Keep only 2–3.</span>
                                            <span>Join communities.</span>
                                            <span>Start exploring issues.</span>
                                        </div>
                                    </section>

                                    <section className="space-y-12">
                                        <div className="bg-white text-black p-12 rounded-[3.5rem] space-y-8">
                                            <h2 className="text-4xl font-black uppercase tracking-tighter italic m-0 text-black">Action Plan (Do This Now)</h2>
                                            <ol className="list-decimal pl-5 space-y-4 text-sm font-black uppercase tracking-widest text-blue-600">
                                                <li className="text-blue-600">Use 5–6 methods above</li>
                                                <li className="text-blue-600">Find 7–8 projects</li>
                                                <li className="text-blue-600">Shortlist to 5–6</li>
                                                <li className="text-blue-600">Trim to 2–3 serious ones</li>
                                                <li className="text-blue-600">Join their Discord / Slack / Matrix</li>
                                                <li className="text-blue-600">Start reading issues</li>
                                            </ol>
                                            <p className="text-xs font-bold text-gray-500 text-center uppercase tracking-widest pt-8 border-t border-gray-100">Don’t overthink. Exploration leads to clarity.</p>
                                        </div>

                                        <div className="space-y-8 p-12 bg-black rounded-[3.5rem] text-white">
                                            <h3 className="text-2xl font-black uppercase tracking-tighter italic m-0 text-black">Common Beginner Mistakes While Selecting Projects</h3>
                                            <div className="grid md:grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest opacity-90 italic">
                                                <div>❌ Picking huge enterprise projects first</div>
                                                <div>❌ Choosing dead repos</div>
                                                <div>❌ Joining random tech stack you don’t understand</div>
                                                <div>❌ Trying 10 projects at once</div>
                                                <div>❌ Focusing only on “easy” tags</div>
                                            </div>
                                            <p className="text-center font-black uppercase text-[10px] pt-8 opacity-70 tracking-[0.2em]">Balance challenge with feasibility.</p>
                                        </div>

                                        <footer className="pt-24 pb-12 text-center space-y-12">
                                            <h2 className="text-4xl font-black tracking-tighter uppercase italic py-8 border-y border-gray-100 text-black">Final Thoughts from Kanpurai.space</h2>
                                            <p className="text-xl text-gray-400 font-light italic max-w-2xl mx-auto leading-relaxed">Finding good open source projects isn’t random. It’s strategic exploration.</p>
                                            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
                                                <span>Platforms | Communities | Trending repos | Funding news | Contributor networks</span>
                                            </div>
                                            <p className="text-center text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mt-12">Then filter with logic. Don’t chase quantity. Chase Learning, Growth, Community, and Impact.</p>
                                            <div className="space-y-4 pt-12">
                                                <p className="text-gray-500 uppercase tracking-widest font-black text-[10px] italic">You don’t need to be perfect to start. You just need to explore. Shortlist. Focus. Start contributing.</p>
                                                <button onClick={() => handleLinkClick("find-issues")} className="px-16 py-6 bg-blue-600 text-white hover:bg-white hover:text-black transition-all rounded-full font-black text-xs uppercase tracking-widest outline outline-1 outline-blue-600 outline-offset-8 hover:outline-offset-4 mt-8">Find Issues</button>
                                            </div>
                                        </footer>
                                    </section>
                                </div>
                            )}

                            {currentView === "find-issues" && (
                                <div className="prose prose-invert max-w-none space-y-16">
                                    <header className="space-y-4">
                                        <h1 className="text-4xl lg:text-7xl font-space-grotesk font-black mb-4 tracking-tighter text-black">Find the Right Issue to Work On (Beginner-Friendly Guide)</h1>
                                        <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em]">A Practical Open Source Guide by Kanpurai.space</p>
                                    </header>

                                    <section className="space-y-8">
                                        <h2 className="text-3xl font-bold italic tracking-tight uppercase text-black">Welcome back 👋</h2>
                                        <p className="text-lg text-gray-400">So far on Kanpurai.space, we’ve covered:</p>
                                        <ul className="text-gray-300 space-y-2 list-none p-0 font-bold italic text-sm">
                                            <li className="flex items-center gap-2">✅ Getting your Git & GitHub basics right</li>
                                            <li className="flex items-center gap-2">✅ Finding and selecting good open source projects</li>
                                        </ul>
                                        <div className="bg-blue-600/10 border-y border-blue-500/20 py-12 text-center rounded-[3rem]">
                                            <p className="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Now we’re entering one of the most important skills:</p>
                                            <p className="text-4xl font-black uppercase tracking-tighter m-0">🎯 How to choose the right issue to work on</p>
                                        </div>
                                        <div className="max-w-2xl mx-auto text-center space-y-4">
                                            <p className="text-xl font-bold italic">Because here’s the truth: Finding issues is easy. Choosing the right one is hard.</p>
                                            <p className="text-gray-500 text-xs leading-relaxed uppercase font-black tracking-widest">There are thousands of open issues. If you pick the wrong one, you might get stuck, waste hours, and lose confidence.</p>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {["Pick beginner issues", "Avoid time traps", "Analyze difficulty", "Use AI smartly", "Plan your fix", "Raise meaningful PR"].map(t => (
                                                <div key={t} className="bg-white/5 border border-white/10 p-4 rounded-xl text-[10px] font-bold uppercase tracking-widest text-center text-blue-400">✔️ {t}</div>
                                            ))}
                                        </div>
                                        <p className="text-center text-xl font-black italic underline decoration-blue-600 underline-offset-8 py-8">Let’s break it down step-by-step.</p>
                                    </section>

                                    <section className="space-y-12">
                                        <div className="group relative pl-16 py-12 border-b border-gray-800/50">
                                            <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black">Step 1 — Start Small (But Meaningful)</h3>
                                            <p className="text-gray-400 font-light leading-relaxed mb-8">When you’re new to a project, your first goal is <strong className="text-white underline decoration-red-500">NOT</strong> impressing maintainers with 500 lines of complex code or refactoring half the codebase.</p>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-4">
                                                    <h4 className="text-blue-500 font-black uppercase text-[10px] tracking-widest">Good First Issues:</h4>
                                                    <ul className="list-none p-0 space-y-2 text-sm text-gray-500 italic font-bold">
                                                        <li>— Fixing a small bug</li>
                                                        <li>— Improving logging clarity</li>
                                                        <li>— Tweaking a minor function</li>
                                                        <li>— Handling edge cases</li>
                                                        <li>— Fixing validation logic</li>
                                                        <li>— Small UI fixes</li>
                                                    </ul>
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="text-red-500 font-black uppercase text-[10px] tracking-widest">Avoid These (At First):</h4>
                                                    <ul className="list-none p-0 space-y-2 text-sm text-gray-400 font-light line-through opacity-50">
                                                        <li>Massive refactors</li>
                                                        <li>Architecture-level changes</li>
                                                        <li>Multi-file dependency changes</li>
                                                        <li>Vague feature requests</li>
                                                        <li>Deep domain knowledge</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mt-8 text-xs font-bold text-gray-500 italic text-center uppercase tracking-widest pt-8 border-t border-gray-800/30">Also avoid low-value PRs like typo fixes. You want small + meaningful.</p>
                                        </div>

                                        <div className="group relative pl-16 py-12 border-b border-gray-800/50">
                                            <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black">Step 2 — Understand Issue Types</h3>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="bg-[#1c1c1c] p-8 rounded-3xl border border-gray-800">
                                                    <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2 italic">1️⃣ Maintainer-Created</h4>
                                                    <p className="text-sm text-gray-500 leading-relaxed font-light m-0">Usually core team members. Safe to start working on. If clearly defined, jump in.</p>
                                                </div>
                                                <div className="bg-[#1c1c1c] p-8 rounded-3xl border border-gray-800">
                                                    <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2 italic">2️⃣ Contributor-Created</h4>
                                                    <p className="text-sm text-gray-500 leading-relaxed font-light m-0">External community members. Often feature requests. Confirm with maintainers first.</p>
                                                </div>
                                            </div>
                                            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl mt-8">
                                                <p className="m-0 text-xs font-bold text-red-500 uppercase tracking-widest italic mb-2">⚠️ Important Rule:</p>
                                                <p className="m-0 text-gray-400 text-sm leading-relaxed">“Hey, I’d like to work on this issue. Is this feature still relevant?” Never spend 5 hours building something they don’t want.</p>
                                            </div>
                                        </div>

                                        <div className="group relative pl-16 py-12 border-b border-gray-800/50">
                                            <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black">Step 3 — Analyze the Issue Properly</h3>
                                            <p className="text-gray-400 font-light italic leading-relaxed">Example: “Action field consistently missing in LLM response.”</p>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                                {["Requires API setup?", "Requires model config?", "Need credentials?", "Eat my weekend?"].map(q => (
                                                    <div key={q} className="bg-white/5 p-4 rounded-xl text-[8px] font-black uppercase tracking-widest text-center text-gray-500 border border-white/5">{q}</div>
                                                ))}
                                            </div>
                                            <div className="mt-8 bg-blue-600/10 border-l-4 border-blue-600 p-8 rounded-r-3xl">
                                                <p className="m-0 text-sm font-light text-gray-400 leading-relaxed">If it requires complex local setup → skip for now. If it requires schema validation logic or error handling → <strong className="text-white font-black italic">Green light.</strong></p>
                                            </div>
                                        </div>

                                        <div className="group relative pl-16 py-12 border-b border-gray-800/50">
                                            <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black">Step 4 — Use AI Tools Smartly (Don’t Just Copy Fixes)</h3>
                                            <p className="text-gray-400 font-light leading-relaxed">AI like Cursor or ChatGPT is powerful. But don’t just say “Fix this for me.” Instead, ask:</p>
                                            <ul className="list-none p-0 space-y-3 font-bold italic text-blue-400 text-sm">
                                                <li>— “Where in the codebase is this issue happening?”</li>
                                                <li>— “Which files are related to this logic?”</li>
                                                <li>— “Why is this error occurring?”</li>
                                            </ul>
                                            <p className="text-2xl font-black text-center uppercase tracking-tighter py-12 italic border-y border-gray-800/50 mt-12 underline decoration-blue-600 underline-offset-8">Understand first. Fix second.</p>
                                        </div>

                                        <div className="group relative pl-16 py-12 border-b border-gray-800/50">
                                            <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black">Step 5 — Understand the Root Cause</h3>
                                            <p className="text-gray-400 italic font-light leading-relaxed mb-8">Example: LLM projects often have schema mismatches. Expected `action` field is missing. The issue is not a “random bug,” it’s a structural mismatch. Understanding this makes fixing easier.</p>
                                            <div className="bg-[#1c1c1c] p-6 rounded-2xl border border-gray-800 font-mono text-[10px] space-y-2 uppercase tracking-widest text-center">
                                                <p className="m-0 text-gray-500 italic">Structural Awareness &gt; Patchwork</p>
                                            </div>
                                        </div>

                                        <div className="group relative pl-16 py-12 border-b border-gray-800/50">
                                            <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black">Step 6 — Estimate Difficulty Before Committing</h3>
                                            <ul className="text-sm list-decimal pl-5 space-y-2 text-gray-400 font-light italic">
                                                <li>Can I test this without full API access?</li>
                                                <li>Can I mock responses?</li>
                                                <li>Is this isolated to one file?</li>
                                                <li>Does it require deep domain knowledge?</li>
                                            </ul>
                                            <div className="mt-8 bg-blue-600 p-8 rounded-3xl text-white">
                                                <p className="m-0 text-lg font-black uppercase tracking-tighter leading-tight italic">Learn to estimate effort. That skill alone will save you months of frustration.</p>
                                            </div>
                                        </div>

                                        <div className="group relative pl-16 py-12 border-b border-gray-800/50">
                                            <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">07</div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black">Step 7 — Plan the Fix Before Writing Code</h3>
                                            <p className="text-gray-400 leading-relaxed font-light italic mb-8">Mistake: Start coding immediately. Instead: Locate files, understand data flow, identify validation points, think about edge cases. Plan first. Then code. Even senior engineers do this.</p>
                                            <div className="flex flex-wrap gap-2">
                                                {["Schema updates", "Fallbacks", "Retry logic", "Edge cases"].map(t => (
                                                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-bold uppercase tracking-widest text-gray-500">{t}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="group relative pl-16 py-12 border-b border-gray-800/50">
                                            <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">08</div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black">Step 8 — Create a Clean Branch</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 italic">Never code on main. `git checkout -b fix/action-field-missing`</p>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                <div className="bg-green-600/10 border border-green-600/20 p-4 rounded-xl text-center">
                                                    <p className="m-0 text-[8px] font-black text-green-500 uppercase tracking-widest italic">fix/login-validation</p>
                                                </div>
                                                <div className="bg-blue-600/10 border border-blue-600/20 p-4 rounded-xl text-center">
                                                    <p className="m-0 text-[8px] font-black text-blue-500 uppercase tracking-widest italic">feat/add-rate-limiter</p>
                                                </div>
                                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center opacity-50 line-through">
                                                    <p className="m-0 text-[8px] font-black text-gray-500 uppercase tracking-widest italic">test123</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group relative pl-16 py-12 border-b border-gray-800/50">
                                            <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">09</div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black">Step 9 — Set Up Your Environment Properly</h3>
                                            <p className="text-gray-400 font-light leading-relaxed m-0 italic">Create keys, add to `.env`, never commit secrets. Reproduce bug → Confirm fix → Then Push.</p>
                                        </div>

                                        <div className="group relative pl-16 py-12">
                                            <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">10</div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black">Step 10 — Be Patient With Yourself</h3>
                                            <p className="text-gray-400 font-light leading-relaxed mb-8 italic">Getting stuck is normal. Re-read the issue, break the problem down, ask maintainers politely. Use AI as assistant, not replacement.</p>
                                            <div className="bg-white text-black p-8 rounded-3xl text-center">
                                                <p className="m-0 text-xl font-black uppercase tracking-tighter italic">Open source is about learning through friction.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="space-y-8 bg-[#1c1c1c] p-12 rounded-[3.5rem] border border-gray-800">
                                        <h2 className="text-4xl font-black uppercase tracking-tighter italic m-0 text-black">Practical Checklist</h2>
                                        <div className="grid md:grid-cols-2 gap-4 mt-8">
                                            {["Is it small enough?", "Is it meaningful?", "Do I understand the problem?", "Have I located files?", "Do I know how to test?", "New branch created?"].map(check => (
                                                <div key={check} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-blue-500 italic">
                                                    <span className="w-4 h-4 rounded bg-blue-500/20 flex items-center justify-center text-[10px]">✔️</span>
                                                    {check}
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-center font-black uppercase text-[10px] pt-12 text-gray-500 tracking-[0.2em] border-t border-gray-800 mt-12">Avoid these: Hardest issues, ignoring comments, not reproducing bugs, copy-pasting AI.</p>
                                    </section>

                                    <section className="space-y-12">
                                        <h2 className="text-4xl font-black uppercase tracking-tighter text-center text-black">Action Plan (Do This Now)</h2>
                                        <ol className="list-decimal pl-5 space-y-4 text-sm font-black uppercase tracking-widest text-blue-600 max-w-xl mx-auto">
                                            <li>Go to shortlisted projects</li>
                                            <li>Open Issues tab</li>
                                            <li>Find 3 small issues</li>
                                            <li>Analyze difficulty</li>
                                            <li>Pick one & Create branch</li>
                                            <li>Start exploring the code</li>
                                        </ol>
                                        <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-[0.3em] italic">Don’t rush. Understand first.</p>
                                    </section>

                                    <footer className="pt-24 pb-12 text-center space-y-12 border-t border-gray-800">
                                        <h2 className="text-5xl font-black tracking-tighter uppercase italic py-8 text-black">Final Thoughts</h2>
                                        <p className="text-xl text-gray-400 font-light italic max-w-2xl mx-auto leading-relaxed">Finding issues is easy. Choosing the right issue is a skill. Focus on small wins, clear scope, and root cause understanding.</p>
                                        <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mt-12 italic underline decoration-blue-500 underline-offset-8">See you in the next module 🚀</p>
                                        <div className="pt-12">
                                            <button onClick={() => handleLinkClick("submit-pr")} className="px-16 py-6 bg-blue-600 text-white hover:bg-white hover:text-black transition-all rounded-full font-black text-xs uppercase tracking-widest outline outline-1 outline-blue-600 outline-offset-8 hover:outline-offset-4 mt-8">Submit PR</button>
                                        </div>
                                    </footer>
                                </div>
                            )}

                            {currentView === "submit-pr" && (
                                <div className="prose max-w-none space-y-16">
                                    <header className="space-y-4">
                                        <h1 className="text-4xl lg:text-7xl font-space-grotesk font-black mb-4 tracking-tighter text-black">How to Submit Your First Pull Request (With Proper Explanation & Example)</h1>
                                        <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em]">A Beginner-Friendly, Step-by-Step Guide by Kanpurai.space</p>
                                    </header>

                                    <section className="space-y-8">
                                        <h2 className="text-3xl font-bold italic tracking-tight uppercase text-black">So you’ve:</h2>
                                        <div className="grid md:grid-cols-4 gap-2">
                                            {["Learned Git basics", "Found a good project", "Picked a small issue", "Fixed it locally"].map(t => (
                                                <div key={t} className="bg-green-500/10 text-green-500 border border-green-500/20 text-[10px] uppercase font-black p-3 rounded text-center">✅ {t}</div>
                                            ))}
                                        </div>
                                        <div className="text-center py-12 border-y border-gray-800">
                                            <p className="text-3xl font-black uppercase tracking-tighter mb-4 italic">“How do I submit my first PR properly?”</p>
                                            <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">Don’t worry. In this guide, I’ll walk you through what a Pull Request actually is, how to push your changes, how to write a clean description, and how to avoid common mistakes.</p>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {["What is a PR?", "Pushing changes", "Clean descriptions", "Real PR examples", "Common mistakes", "Post-submission flow"].map(t => (
                                                <div key={t} className="bg-white/5 border border-white/10 p-4 rounded-xl text-[10px] font-bold uppercase tracking-widest text-center text-blue-400">✔️ {t}</div>
                                            ))}
                                        </div>
                                        <p className="text-center text-xl font-black italic underline decoration-blue-600 underline-offset-8 py-8">Let’s make your first contribution smooth.</p>
                                    </section>

                                    <section className="space-y-8">
                                        <h2 className="text-3xl font-bold uppercase tracking-tighter text-black">What is a Pull Request (PR)?</h2>
                                        <p className="text-lg text-gray-400 font-light italic leading-relaxed">On GitHub, a Pull Request is: <strong className="text-white">A request to merge your changes into the main project.</strong></p>
                                        <div className="bg-blue-600/10 border-l-4 border-blue-600 p-8 rounded-r-3xl">
                                            <p className="text-xl font-black uppercase tracking-tighter m-0 italic">“Hey maintainers 👋 I made this improvement. Please review and merge it.”</p>
                                        </div>
                                        <p className="text-gray-500 text-xs font-black uppercase tracking-widest text-center mt-8">It’s not just code. It’s communication. Your description matters as much as your fix.</p>
                                    </section>

                                    <section className="space-y-12">
                                        <h2 className="text-5xl font-black uppercase tracking-tighter text-black">Step-by-Step Execution</h2>

                                        {[
                                            { title: "Make Sure Your Code Works Locally", content: "Before pushing: Run the project, reproduce the bug, confirm your fix works, ensure no new errors appear, and run tests if available. Never submit untested code." },
                                            { title: "Create a Clean Branch", content: "Never work on main. git checkout -b fix/login-validation. Use: fix/, feat/, or docs/ prefixes. Clear. Simple. Professional." },
                                            { title: "Add & Commit Changes Properly", content: "git add . | git commit -m 'type: short clear summary'. Good types: fix, feat, docs, refactor, chore. Example: fix: prevent crash when action field is missing. Avoid: update, changes, fixed bug." },
                                            { title: "Push to Your Fork", content: "git push origin fix/login-validation. Then go to your GitHub fork and click “Compare & Pull Request”." }
                                        ].map((step, i) => (
                                            <div key={i} className="group relative pl-16 py-12 border-b border-gray-800/50">
                                                <div className="absolute left-0 top-14 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center font-mono font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">0{i + 1}</div>
                                                <div className="space-y-4">
                                                    <h3 className="text-2xl font-black uppercase tracking-tighter m-0 text-black">{step.title}</h3>
                                                    <div className="text-gray-400 font-light leading-relaxed pt-4 border-t border-gray-800/50 italic">{step.content}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </section>

                                    <section className="space-y-8 bg-[#1c1c1c] p-12 rounded-[3.5rem] border border-gray-800">
                                        <h2 className="text-3xl font-black uppercase tracking-tighter text-black">How to Write a Proper PR Description</h2>
                                        <p className="text-gray-400 italic font-light">This is where beginners mess up. Bad PR: <span className="text-red-500 font-bold uppercase">“Fixed it.”</span> That’s not helpful.</p>
                                        <p className="text-sm text-white font-black uppercase tracking-widest mt-8 italic underline decoration-blue-600 underline-offset-8">PR Template Structure (Recommended)</p>
                                        <div className="bg-black/40 p-8 rounded-3xl border border-gray-800 font-mono text-xs text-blue-400 space-y-4">
                                            <ul className="list-none p-0 space-y-2 uppercase tracking-widest font-black">
                                                <li>## What does this PR do?</li>
                                                <li>## Why is this change needed?</li>
                                                <li>## What changes were made?</li>
                                                <li>## How was this tested?</li>
                                                <li>## Screenshots (if applicable)</li>
                                                <li>## Related Issue (Closes #123)</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section className="space-y-8">
                                        <h2 className="text-3xl font-bold uppercase tracking-tight italic underline decoration-blue-500 decoration-4 text-black">✅ Example Pull Request</h2>
                                        <div className="bg-white text-black p-12 rounded-[3.5rem] space-y-8">
                                            <div className="space-y-1">
                                                <p className="text-[10px] uppercase font-black text-gray-400">Title:</p>
                                                <p className="text-xl font-bold uppercase leading-tight tracking-tighter">fix: handle missing action field in LLM response schema validation</p>
                                            </div>
                                            <div className="space-y-6">
                                                <p className="text-[10px] uppercase font-black text-gray-400 border-b border-gray-100 pb-2">Description Highlights:</p>
                                                <div className="grid md:grid-cols-2 gap-8 text-[10px] leading-relaxed font-medium italic">
                                                    <div className="space-y-4">
                                                        <p><strong>## What does this PR do?</strong> This PR fixes the issue where the application crashes when the action field is missing...</p>
                                                        <p><strong>## Why is this change needed?</strong> The schema defines action as required, but some LLM models (e.g., DeepSeek) do not return it...</p>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <p><strong>## What changes were made?</strong> Added conditional handling in chat.py, improved error messaging, updated schema description.</p>
                                                        <p><strong>## How was this tested?</strong> Reproduced locally, verified app no longer crashes, tested with both valid and missing responses.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-center font-black uppercase text-[10px] pt-8 border-t border-gray-100 text-blue-600">Reference: Closes #87</p>
                                        </div>
                                    </section>

                                    <section className="space-y-12">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="bg-blue-600/10 border border-blue-500/20 p-12 rounded-[3.5rem] space-y-4">
                                                <h3 className="text-xl font-black uppercase italic tracking-widest text-blue-600">Should You Raise Draft PRs?</h3>
                                                <p className="text-sm text-gray-400 font-light italic leading-relaxed">Yes. Especially as a beginner. Raise when core logic works or you want early feedback. Benefits: Maintainers guide you, prevents duplicate work, builds communication skills.</p>
                                            </div>
                                            <div className="bg-[#1c1c1c] border border-gray-800 p-12 rounded-[3.5rem] space-y-4">
                                                <h3 className="text-xl font-black uppercase italic tracking-widest text-black">Post-Submission Flow</h3>
                                                <p className="text-sm text-gray-500 font-light italic leading-relaxed">Maintainers may approve, request changes, or suggest improvements. Don’t take feedback personally. Open source reviews are normal. Professional attitude matters.</p>
                                            </div>
                                        </div>

                                        <div className="space-y-8 p-12 bg-red-500 rounded-[3.5rem] text-white">
                                            <h3 className="text-2xl font-black uppercase tracking-tighter italic m-0 text-white">Common First PR Mistakes</h3>
                                            <div className="grid md:grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest opacity-90 italic">
                                                <div>❌ Huge PR for first contribution</div>
                                                <div>❌ No description</div>
                                                <div>❌ Not linking issue</div>
                                                <div>❌ Not testing locally</div>
                                                <div>❌ Pushing directly to main</div>
                                                <div>❌ Ignoring CONTRIBUTING.md</div>
                                            </div>
                                            <p className="text-center font-black uppercase text-[10px] pt-8 opacity-70 tracking-[0.2em]">Avoid these and your experience will be 10x smoother.</p>
                                        </div>
                                    </section>

                                    <section className="space-y-12 py-12 border-y border-gray-800">
                                        <h2 className="text-4xl font-black uppercase tracking-tighter text-center text-black">Confidence Booster</h2>
                                        <p className="text-center text-gray-400 font-light italic text-xl max-w-2xl mx-auto">Your first PR will feel scary. That’s normal. Every contributor felt that once.</p>
                                        <div className="grid md:grid-cols-3 gap-8 text-center text-[10px] font-black uppercase tracking-widest text-blue-500/80">
                                            <div className="bg-blue-600/5 p-6 rounded-2xl border border-blue-600/10">You learn code standards</div>
                                            <div className="bg-blue-600/5 p-6 rounded-2xl border border-blue-600/10">You learn communication</div>
                                            <div className="bg-blue-600/5 p-6 rounded-2xl border border-blue-600/10">You improve quickly</div>
                                        </div>
                                        <p className="text-center text-gray-500 font-bold uppercase tracking-[0.3em] italic">Your goal is to learn — not impress.</p>
                                    </section>

                                    <footer className="pt-24 pb-12 text-center space-y-12">
                                        <h2 className="text-5xl font-black tracking-tighter uppercase italic py-8 border-y border-gray-100 text-black">Final Thoughts from Kanpurai.space</h2>
                                        <p className="text-xl text-gray-400 font-light italic max-w-2xl mx-auto leading-relaxed">Submitting your first PR is not about writing genius code. It’s about clear communication, clean workflow, and learning through feedback.</p>
                                        <div className="bg-white text-black p-12 rounded-[3.5rem] space-y-8">
                                            <h3 className="text-3xl font-black uppercase m-0 italic text-black">Quick Action Plan</h3>
                                            <ol className="list-decimal pl-5 space-y-2 text-[10px] font-black uppercase tracking-widest text-left max-w-xs mx-auto text-blue-600">
                                                <li>Pick small issue</li>
                                                <li>Fix locally</li>
                                                <li>Clean branch</li>
                                                <li>Write proper commit</li>
                                                <li>Push to fork</li>
                                                <li>Raise PR using template</li>
                                            </ol>
                                        </div>
                                        <p className="text-center text-white font-black uppercase tracking-[0.3em] text-xs pt-12">Hit that “Create Pull Request” button with confidence 🚀</p>
                                        <div className="pt-12">
                                            <button onClick={() => handleLinkClick("overview")} className="px-16 py-6 bg-white text-black hover:bg-black hover:text-white transition-all rounded-full font-black text-xs uppercase tracking-widest outline outline-1 outline-white outline-offset-8 hover:outline-offset-4 mt-8">Complete My Journey</button>
                                        </div>
                                    </footer>
                                </div>
                            )}

                            <footer className="mt-20 pt-10 border-t border-gray-800 flex flex-wrap gap-8 items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest font-bold font-mono">
                                <div>KANPURAI.SPACE — OPEN SOURCE CURRICULUM</div>
                                <div className="flex gap-6">
                                    <button className="hover:text-white transition-colors">v1.2</button>
                                </div>
                            </footer>
                        </motion.div>
                    </article>
                </main>

                {/* Action Sidebar */}
                <aside className="hidden xl:block w-72 pt-20 px-8 sticky top-40 self-start border-l border-gray-800 h-[calc(100vh-160px)]">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Guide Map</h3>
                            <nav className="space-y-5 text-[8px] font-bold uppercase tracking-[0.2em]">
                                {currentView === "overview" && <span className="block text-blue-500">Curriculum Root</span>}
                                {sidebarLinks[0].items.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleLinkClick(item.view)}
                                        className={`block text-left transition-colors ${currentView === item.view ? "text-blue-500" : "text-gray-400 hover:text-white"}`}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </aside>
            </div>

            {isSidebarOpen && <div className="fixed inset-0 bg-black/80 z-[60] lg:hidden backdrop-blur-md" onClick={() => setIsSidebarOpen(false)} />}
        </div>
    );
}
