"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import packages from "@/data/packages.json";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const PackagesSection = () => {
    return (
        <section className="section-padding bg-[#F9F7F2] overflow-hidden relative">
            {/* Background Texture/Text */}
            <div className="absolute top-20 left-0 opacity-[0.03] pointer-events-none">
                <span className="text-[15rem] font-serif font-black italic select-none">Collection</span>
            </div>

            <div className="container-wide space-y-32 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-2xl space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="section-label"
                        >
                            Signature Journeys
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-title"
                        >
                            Architected for
                            <br />
                            <span className="text-primary italic font-light">Discovery</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-desc max-w-sm mb-2"
                    >
                        Every itinerary is a masterpiece of logistics and luxury, curated to reveal the soul of Africa.
                    </motion.p>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.id}
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700"
                            >
                                {/* Image Container */}
                                <div className="relative h-[420px] overflow-hidden">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                    {/* Glass Overlay on Hover */}
                                    <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/40 transition-all duration-700" />

                                    {/* Top Metadata */}
                                    <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                                        <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase">
                                            {pkg.tag}
                                        </span>
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Bottom Metadata */}
                                    <div className="absolute bottom-10 left-8 right-8 space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        <div className="flex items-center gap-6">
                                            <span className="flex items-center gap-2 text-white/90 text-[10px] font-bold tracking-widest uppercase">
                                                <MapPin className="w-3.5 h-3.5 text-gold" />
                                                {pkg.location}
                                            </span>
                                            <span className="flex items-center gap-2 text-white/90 text-[10px] font-bold tracking-widest uppercase">
                                                <Clock className="w-3.5 h-3.5 text-gold" />
                                                {pkg.duration}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-serif text-white leading-tight">
                                            {pkg.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Simplified Bottom Info */}
                                <div className="p-10 flex items-center justify-between border-t border-midnight/5">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-bold tracking-widest text-midnight/30 uppercase">Investment from</p>
                                        <p className="text-2xl font-serif text-midnight">{pkg.price}</p>
                                    </div>
                                    <Link
                                        href={`/packages/${pkg.id}`}
                                        className="text-[10px] font-bold tracking-widest uppercase text-midnight border-b border-midnight/10 pb-1 hover:border-gold hover:text-gold transition-all duration-300"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All */}
                <div className="pt-10 flex justify-center">
                    <Link
                        href="/packages"
                        className="group flex flex-col items-center gap-4 py-4"
                    >
                        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-midnight/40 group-hover:text-gold transition-colors">
                            Explore All Journeys
                        </span>
                        <div className="w-12 h-[1px] bg-midnight/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gold translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
