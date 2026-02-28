"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import localOffers from "@/data/local-offers.json";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const LocalOffersSection = () => {
    return (
        <section className="section-padding bg-primary relative overflow-hidden">
            {/* Cinematic background texture */}
            <div className="absolute inset-0 opacity-[0.2] pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
            </div>
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-white/[0.03] rounded-none blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="container-wide relative z-10">
                {/* Header with floating accent */}
                <div className="max-w-4xl mx-auto text-center space-y-10 items-center flex flex-col mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-none border border-white/20 bg-white/5 text-white text-xs font-bold tracking-[0.3em] uppercase"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        Citizen & Resident Exclusives
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-title text-white text-5xl md:text-8xl"
                        >
                            The Beauty of
                            <br />
                            <span className="italic font-normal opacity-80">Your Backyard</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="section-desc text-white/70 mx-auto"
                        >
                            Refined escapes architected specifically for our local community. Experience the summit of luxury with curated resident-only privilege.
                        </motion.p>
                    </div>
                </div>

                {/* Offers Grid - Overlapping Cinematic Layout */}
                <div className="space-y-40">
                    {localOffers.map((offer, idx) => (
                        <motion.div
                            key={offer.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className={cn(
                                "group relative flex flex-col lg:flex-row items-center gap-20",
                                idx % 2 === 1 && "lg:flex-row-reverse"
                            )}
                        >
                            {/* Visual Narrative */}
                            <div className="relative w-full lg:w-1/2 aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-none overflow-hidden shadow-2xl">
                                <Image
                                    src={offer.image}
                                    alt={offer.title}
                                    fill
                                    className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="flex items-center gap-2 text-white/90 text-xs font-bold tracking-widest uppercase mb-2">
                                        <MapPin className="w-4 h-4 text-white/80" />
                                        {offer.location}
                                    </div>
                                    <h3 className="text-4xl font-serif text-white">{offer.title}</h3>
                                </div>
                            </div>

                            {/* Detailed Content */}
                            <div className="w-full lg:w-1/2 space-y-12">
                                <div className="space-y-6">
                                    <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/80">{offer.tag}</span>
                                    <p className="text-2xl font-serif text-white/90 leading-tight italic">
                                        &ldquo;{offer.description}&rdquo;
                                    </p>
                                </div>

                                {/* Premium Rates Display */}
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 gap-4">
                                        {offer.rates.map((rate, rIdx) => (
                                            <div key={rIdx} className="flex items-center justify-between p-6 rounded-none bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500">
                                                <span className="text-white/70 text-sm font-bold tracking-widest uppercase">{rate.type}</span>
                                                <span className="text-2xl font-serif text-white">{offer.currency} {rate.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Grid of Utilities */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <h4 className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-white/90">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-white/80" />
                                            Inclusions
                                        </h4>
                                        <ul className="space-y-3">
                                            {(offer.inclusions || []).slice(0, 4).map((inc, iIdx) => (
                                                <li key={iIdx} className="text-sm text-white/80 flex items-center gap-2 font-medium">
                                                    <span className="w-1 h-1 bg-white/50 rounded-full" />
                                                    {inc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-white/90">
                                            <Sparkles className="w-3.5 h-3.5 text-white/80" />
                                            Experiences
                                        </h4>
                                        <ul className="space-y-3">
                                            {(offer.experiences || []).slice(0, 4).map((exp, eIdx) => (
                                                <li key={eIdx} className="text-sm text-white/80 flex items-center gap-2 font-medium">
                                                    <span className="w-1 h-1 bg-white/50 rounded-full" />
                                                    {exp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-8">
                                    <Link
                                        href={`/contact?offer=${encodeURIComponent(offer.title)}`}
                                        className="group inline-flex items-center gap-4 bg-white text-primary rounded-none px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase hover:bg-midnight hover:text-white transition-all duration-700 w-full sm:w-auto text-center justify-center"
                                    >
                                        Inquire Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/90">Terms & Conditions Apply</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
