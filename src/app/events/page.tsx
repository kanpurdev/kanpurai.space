"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { events } from "@/data/events";
import Script from "next/script";

export default function EventsPage() {
    const [filter, setFilter] = useState("All");

    const filteredEvents = filter === "All" ? events : events.filter(e => e.type === filter);

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#C9FF3F] selection:text-black">
            <Script
                id="event-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        name: "AI Workshop in Kanpur",
                        startDate: "2026-05-10",
                        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                        eventStatus: "https://schema.org/EventScheduled",
                        location: {
                            "@type": "Place",
                            name: "Kanpur",
                            address: "Kanpur, Uttar Pradesh"
                        },
                        organizer: {
                            "@type": "Organization",
                            name: "Kanpur AI",
                            url: "https://kanpurai.space"
                        }
                    }),
                }}
            />
            <section className="pt-32 pb-12 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="font-space-grotesk text-5xl font-bold text-black mb-6">Events</h1>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            Join us for hackathons, workshops, and meetups. Connect with the community and learn from the best.
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {["All", "Hackathon", "Meetup", "Workshop"].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                                    ? "bg-black text-white shadow-lg"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Events Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {filteredEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 ${event.status === 'Past' ? 'opacity-60 grayscale' : ''}`}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img src={event.img} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold z-20 ${event.status === 'Upcoming' ? 'bg-[#C9FF3F] text-black' : 'bg-gray-200 text-gray-600'}`}>
                                        {event.status}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-[#10b981] mb-2 uppercase tracking-wider">{event.type}</div>
                                    <h3 className="text-xl font-bold text-black mb-2">{event.title}</h3>
                                    <div className="space-y-2 text-sm text-gray-500 mb-6">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" /> {event.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" /> {event.time}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" /> {event.loc}
                                        </div>
                                    </div>
                                    {event.status === 'Upcoming' && (
                                        (event as any).link ? (
                                            <Link
                                                href={(event as any).link}
                                                className="w-full py-3 rounded-lg border border-gray-200 text-black font-semibold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group-hover:border-black"
                                            >
                                                RSVP Start Soon <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        ) : (
                                            <button className="w-full py-4 rounded-lg border border-gray-200 text-black font-semibold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group-hover:border-black">
                                                Coming Soon <ArrowRight className="w-4 h-4" />
                                            </button>
                                        )
                                    )}
                                    {event.status === 'Past' && (event as any).link && (
                                        <Link
                                            href={(event as any).link}
                                            className="w-full py-3 rounded-lg bg-gray-200 text-gray-600 font-semibold cursor-default flex items-center justify-center gap-2"
                                        >
                                            Check the gleams
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
