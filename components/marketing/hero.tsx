"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const heroImages = [
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2400", // Elephant Close-up
    "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=2400", // African Sunset Leopard
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=2400", // Lion in Grass
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=2400", // Victoria Falls Panoramic
    "https://images.unsplash.com/photo-1523805081326-6468447d9688?auto=format&fit=crop&q=80&w=2400", // Giraffes at Sunset
    "https://images.unsplash.com/photo-1519066629447-267fffa62d4b?auto=format&fit=crop&q=80&w=2400", // Zebra Herd
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=2400", // Open Savannah
];

export const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen flex items-end overflow-hidden">
            {/* Cinematic Slider */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={heroImages[current]}
                        alt="Safari Background"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 hero-overlay z-[1]" />

            {/* Film grain */}
            <div className="absolute inset-0 film-grain z-[2]" />

            {/* Content — Bottom-aligned like ROAR Africa */}
            <div className="relative z-10 w-full">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-28">
                    <div className="max-w-3xl space-y-6 md:space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-6 md:space-y-8"
                        >
                            <p className="text-label text-gold">
                                Zambia&apos;s Finest Travel Agency
                            </p>

                            <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-serif text-white leading-[0.9] tracking-[-0.03em]">
                                <span className="block">Adventure</span>
                                <span className="block text-gold italic">Awaits</span>
                            </h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 1 }}
                                className="text-white/95 text-base md:text-xl max-w-lg leading-relaxed font-normal font-sans"
                            >
                                Bespoke safari experiences, seamless corporate travel, and
                                unforgettable journeys — curated by those who know Africa best.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 pt-2"
                        >
                            <Link
                                href="/packages"
                                className="inline-flex items-center justify-center rounded-full px-10 py-5 text-[13px] font-sans font-bold tracking-[0.08em] uppercase bg-gold text-midnight hover:bg-gold/90 transition-all duration-500 button-hover-effect h-14 sm:h-auto"
                            >
                                Explore Journeys <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full px-10 py-5 text-[13px] font-sans font-bold tracking-[0.08em] uppercase border border-white/15 text-white hover:bg-white/10 transition-all duration-500 button-hover-effect h-14 sm:h-auto"
                            >
                                Begin the Conversation
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Stats Strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="border-t border-white/[0.08] py-6 overflow-hidden"
                >
                    <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between text-white/50">
                        <div className="flex items-center gap-8 md:gap-16 overflow-x-auto no-scrollbar mask-fade-right pr-10">
                            {[
                                { value: "Est. 2024", label: "Solwezi" },
                                { value: "500+", label: "Guests Yearly" },
                                { value: "24/7", label: "Support" },
                            ].map((stat) => (
                                <div key={stat.label} className="flex items-center gap-3 shrink-0">
                                    <span className="text-white/90 font-serif text-sm font-semibold whitespace-nowrap">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase font-sans hidden xs:block whitespace-nowrap">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Slide Indicators */}
                        <div className="hidden md:flex items-center gap-2 shrink-0">
                            {heroImages.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1 rounded-full transition-all duration-1000 ${current === idx ? "w-8 bg-gold" : "w-2 bg-white/20"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Vertical Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute right-6 md:right-10 bottom-40 z-20 flex flex-col items-center gap-10"
                >
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 vertical-text origin-bottom rotate-180">
                        Scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
};
