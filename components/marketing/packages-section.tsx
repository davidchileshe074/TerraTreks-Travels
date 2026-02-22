"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Clock, Filter } from "lucide-react";
import packages from "@/data/packages.json";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = ["All", "Luxury", "Adventure", "Honeymoon", "Family"];

export const PackagesSection = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredPackages = activeFilter === "All"
        ? packages
        : packages.filter(pkg => pkg.categories.includes(activeFilter));

    return (
        <section className="py-32 px-6 md:px-10 bg-sand overflow-hidden">
            <div className="max-w-[1400px] mx-auto space-y-20">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="space-y-5 max-w-xl">
                        <p className="text-label text-gold">
                            Signature Journeys
                        </p>
                        <h2 className="text-5xl md:text-[4.5rem] font-serif text-midnight leading-[0.95]">
                            Curated
                            <br />
                            <span className="text-primary italic">Safaris</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-8 items-start md:items-end">
                        <p className="text-midnight/60 text-base max-w-sm leading-relaxed font-light md:text-right">
                            Meticulously planned itineraries designed to reveal the best of
                            Africa with unparalleled comfort.
                        </p>

                        {/* Filter Bar */}
                        <div className="flex flex-wrap gap-2 p-1.5 bg-midnight/[0.03] rounded-2xl border border-midnight/[0.05]">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={cn(
                                        "px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] font-sans transition-all duration-500",
                                        activeFilter === cat
                                            ? "bg-midnight text-white shadow-lg shadow-midnight/20"
                                            : "text-midnight/50 hover:text-midnight hover:bg-white"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPackages.map((pkg, index) => (
                            <motion.div
                                key={pkg.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden hover-lift"
                            >
                                {/* Image */}
                                <div className="relative h-[340px] overflow-hidden">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                        className="object-cover img-pan"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />

                                    {/* Tag */}
                                    <div className="absolute top-5 left-5">
                                        <span className="glass-dark px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-white/80 font-sans">
                                            {pkg.tag}
                                        </span>
                                    </div>

                                    {/* Bottom info */}
                                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white/70">
                                        <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] uppercase font-sans">
                                            <MapPin className="w-3.5 h-3.5 text-gold" />{" "}
                                            {pkg.location}
                                        </span>
                                        <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] uppercase font-sans">
                                            <Clock className="w-3.5 h-3.5 text-gold" />{" "}
                                            {pkg.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                                    <h3 className="text-2xl font-serif text-midnight leading-snug group-hover:text-primary transition-colors duration-500">
                                        {pkg.title}
                                    </h3>

                                    <div className="flex items-center justify-between pt-5 border-t border-midnight/[0.06]">
                                        <div>
                                            <span className="text-[10px] text-midnight/50 uppercase font-bold tracking-[0.15em] font-sans block">
                                                From
                                            </span>
                                            <span className="text-xl font-serif font-bold text-midnight">
                                                {pkg.price}
                                            </span>
                                        </div>
                                        <button className="w-12 h-12 rounded-xl border border-midnight/[0.08] flex items-center justify-center text-midnight/50 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500">
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All */}
                <div className="text-center">
                    <Link href="/packages" className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase font-sans text-midnight/60 hover:text-gold transition-colors duration-300 group">
                        View Full Collection
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
