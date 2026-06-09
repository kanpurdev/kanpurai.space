
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, ExternalLink, Loader2 } from "lucide-react";

interface MeetupEvent {
  id: string;
  name: string;
  local_date: string;
  local_time: string;
  venue?: {
    name: string;
    address_1: string;
    city: string;
  };
  link: string;
  description: string;
  status: string;
  featured_photo?: {
    photo_link: string;
  };
}

export default function MeetupsPage() {
  const [events, setEvents] = useState<MeetupEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/meetups');
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch meetups", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#C9FF3F] selection:text-black">
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#C9FF3F]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center md:text-left"
          >
            <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Community <span className="text-[#C9FF3F]">Meetups</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Connect with fellow AI enthusiasts, developers, and innovators. Join our in-person and virtual gatherings to learn, share, and grow.
            </p>
          </motion.div>

          {/* Events Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
                <Loader2 className="w-10 h-10 text-[#C9FF3F] animate-spin" />
            </div>
          ) : events.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-[#C9FF3F]/50 transition-all duration-500 flex flex-col h-full"
                >
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 opacity-60" />
                    <img 
                        src={event.featured_photo?.photo_link || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"} 
                        alt={event.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#C9FF3F] transition-colors">
                        {event.name}
                    </h3>
                    
                    <div className="space-y-3 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-[#C9FF3F]" /> 
                        <span>{new Date(event.local_date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-[#C9FF3F]" /> 
                        <span>{event.local_time} IST (Indian Standard Time)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-[#C9FF3F]" /> 
                        <span className="truncate">{event.venue ? `${event.venue.name}, ${event.venue.city}` : 'Online'}</span>
                      </div>

                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10">
                        <a 
                            href={event.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-[#C9FF3F] transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(201,255,63,0.3)]"
                        >
                            {event.status === 'upcoming' ? 'RSVP Now' : 'View Details'} 
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
                <p className="text-xl text-gray-400">No upcoming meetups found at the moment.</p>
                <p className="text-gray-500 mt-2">Check back later for new events!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
