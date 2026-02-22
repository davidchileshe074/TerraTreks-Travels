"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { MapPin, ArrowUpRight, Search, X } from "lucide-react";
import Image from "next/image";

const destinations = [
    {
        name: "Victoria Falls",
        country: "Zambia / Zimbabwe",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200",
        desc: "Experience the Smoke that Thunders, one of the seven natural wonders of the world.",
    },
    {
        name: "South Luangwa",
        country: "Zambia",
        img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
        desc: "Home of the walking safari and an incredible density of leopards and elephants.",
    },
    {
        name: "Lower Zambezi",
        country: "Zambia",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200",
        desc: "A riverine paradise where the mountains meet the water, perfect for canoe safaris.",
    },
    {
        name: "Kafue Plains",
        country: "Zambia",
        img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200",
        desc: "Zambia's oldest and largest park, offering vast landscapes and diverse wildlife.",
    },
    {
        name: "Cape Town",
        country: "South Africa",
        img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200",
        desc: "A stunning coastal city with world-class dining, mountains, and vineyards.",
    },
    {
        name: "Okavango Delta",
        country: "Botswana",
        img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
        desc: "A massive inland delta known for its expansive grassy plains and waterways.",
    },
    {
        name: "Serengeti",
        country: "Tanzania",
        img: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200",
        desc: "The theater of the great migration, where vast savannahs meet the horizon.",
    },
    {
        name: "Maasai Mara",
        country: "Kenya",
        img: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200",
        desc: "Premium wildlife sightings and cultural encounters in the heart of Kenya.",
    },
    {
        name: "Sossusvlei",
        country: "Namibia",
        img: "https://images.unsplash.com/photo-1504173010664-32509aaefe4e?auto=format&fit=crop&q=80&w=1200",
        desc: "Towering red dunes and surreal landscapes in the ancient Namib Desert.",
    },
];

export default function DestinationsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredDestinations = useMemo(() => {
        return destinations.filter(dest =>
            dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dest.country.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <main className="relative min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-end overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2400"
                    alt="Destinations Hero"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 hero-overlay" />
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-16">
                    <div className="max-w-xl space-y-5">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-label text-gold"
                        >
                            Explore Our World
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-8xl font-serif text-white leading-[0.9]"
                        >
                            Extraordinary
                            <br />
                            <span className="text-gold italic">Destinations</span>
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Search and Grid */}
            <section className="py-20 px-6 md:px-10 bg-sand">
                <div className="max-w-[1400px] mx-auto space-y-16">
                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight/30 group-focus-within:text-gold transition-colors duration-300" />
                            <input
                                type="text"
                                placeholder="Search by destination or country..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white border border-midnight/[0.08] rounded-2xl px-16 py-5 focus:ring-4 focus:ring-gold/10 focus:border-gold/30 transition-all outline-none text-midnight font-sans premium-shadow"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight/30 hover:text-midnight transition-colors"
                                >
                                    <X className="w-full h-full" />
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[400px]"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredDestinations.length > 0 ? (
                                filteredDestinations.map((dest, idx) => (
                                    <motion.div
                                        key={dest.name}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
                                    >
                                        <Image
                                            src={dest.img}
                                            alt={dest.name}
                                            fill
                                            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent group-hover:via-midnight/40 transition-all duration-700" />

                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="space-y-3">
                                                <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] uppercase text-white/70 font-sans">
                                                    <MapPin className="w-3.5 h-3.5 text-gold" />
                                                    {dest.country}
                                                </span>
                                                <h3 className="text-3xl font-serif text-white">
                                                    {dest.name}
                                                </h3>
                                                <p className="text-white/90 text-sm max-w-xs font-normal leading-relaxed opacity-100 lg:opacity-0 lg:translate-y-3 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">
                                                    {dest.desc}
                                                </p>
                                                <div className="pt-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                                                    <button className="inline-flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[0.15em] font-sans group/btn">
                                                        Explore
                                                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="col-span-full py-20 text-center space-y-4"
                                >
                                    <div className="w-20 h-20 bg-midnight/[0.03] rounded-3xl flex items-center justify-center mx-auto mb-6">
                                        <Search className="w-8 h-8 text-midnight/20" />
                                    </div>
                                    <h3 className="text-2xl font-serif text-midnight">No Destinations Found</h3>
                                    <p className="text-midnight/60 font-light max-w-xs mx-auto">
                                        We couldn&apos;t find any destinations matching &quot;{searchQuery}&quot;. Please try a different search.
                                    </p>
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="text-gold font-bold text-[10px] uppercase tracking-[0.15em] font-sans pt-4 border-b border-gold pb-0.5"
                                    >
                                        Clear Search
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
