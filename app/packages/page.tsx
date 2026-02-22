"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import packages from "@/data/packages.json";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/dist/client/link";

export default function PackagesPage() {
    const [activeFilter, setActiveFilter] = useState("All");


    const filteredPackages = activeFilter === "All"
        ? packages
        : packages.filter(pkg => pkg.categories.includes(activeFilter));

    return (
        <main className="relative min-h-screen">
            <Navbar />

            {/* Hero Header */}
            <section className="relative h-[80vh] flex items-end overflow-hidden bg-midnight">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1523805081326-6468447d9688?auto=format&fit=crop&q=80&w=2400"
                        alt="Signature Packages"
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 hero-overlay z-[1]" />

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-24">
                    <div className="max-w-2xl space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-label text-gold"
                        >
                            The TerraTreks Collection
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 1 }}
                            className="text-6xl md:text-8xl font-serif text-white leading-[0.9]"
                        >
                            Safari
                            <br />
                            <span className="text-gold italic">Journeys</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-white/95 text-lg font-normal max-w-md leading-relaxed"
                        >
                            Discover meticulously curated experiences that blend
                            raw wilderness with absolute luxury.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="bg-white border-b border-midnight/[0.04] sticky top-[72px] z-40">
                <div className="max-w-[1400px] mx-auto overflow-x-auto no-scrollbar mask-fade-right">
                    <div className="flex items-center gap-3 py-4 px-6 md:px-10 min-w-max">
                        {["All", "Luxury", "Adventure", "Family", "Honeymoon"].map(
                            (tag) => (
                                <button
                                    key={tag}
                                    onClick={() => setActiveFilter(tag)}
                                    aria-label={`Filter by ${tag}`}
                                    className={cn(
                                        "px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 font-sans whitespace-nowrap",
                                        activeFilter === tag
                                            ? "bg-midnight text-white shadow-lg shadow-midnight/10 scale-105"
                                            : "text-midnight/70 hover:text-gold hover:bg-gold/5"
                                    )}
                                >
                                    {tag}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-20 px-6 md:px-10 bg-sand min-h-[600px]">
                <div className="max-w-[1400px] mx-auto">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredPackages.map((pkg, idx) => (
                                <motion.div
                                    layout
                                    key={pkg.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group bg-white rounded-3xl overflow-hidden transition-luxury hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.06)]"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={pkg.image}
                                            alt={pkg.title}
                                            fill
                                            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 via-transparent to-transparent" />
                                        <div className="absolute top-4 left-4">
                                            <span className="glass-dark px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 font-sans">
                                                {pkg.tag}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-7 space-y-5">
                                        <h3 className="text-xl font-serif text-midnight group-hover:text-primary transition-colors duration-300 leading-snug">
                                            {pkg.title}
                                        </h3>
                                        <div className="flex items-center gap-5 text-midnight/90">
                                            <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase font-sans">
                                                <MapPin className="w-3.5 h-3.5 text-gold" />{" "}
                                                {pkg.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase font-sans">
                                                <Clock className="w-3.5 h-3.5 text-gold" />{" "}
                                                {pkg.duration}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-midnight/[0.04]">
                                            <div>
                                                <span className="text-[10px] text-midnight/80 uppercase font-bold tracking-[0.12em] font-sans block">
                                                    From
                                                </span>
                                                <span className="text-lg font-serif font-bold text-midnight">
                                                    {pkg.price}
                                                </span>
                                            </div>
                                            <Link
                                                href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                                                className="w-10 h-10 rounded-xl border border-midnight/[0.06] flex items-center justify-center text-midnight/80 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500 button-hover-effect"
                                                aria-label={`Inquire about ${pkg.title}`}
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredPackages.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-midnight/40 font-serif text-2xl">No journeys found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
