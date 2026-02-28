"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const heroImages = [
    "/images/victoria-falls.png",
    "/images/south-luangwa.png",
    "/images/lower-zambezi.png",
    "/images/corporate-travel.png",
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <motion.div
                        initial={{ scale: 1, x: 0, y: 0 }}
                        animate={{
                            scale: 1.15,
                            x: [0, -20, 0],
                            y: [0, 10, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="relative w-full h-full"
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
                </motion.div>
            </AnimatePresence>

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/90 z-[1]" />
            <div className="absolute inset-0 film-grain z-[2] opacity-30" />

            {/* Content — Bottom-aligned */}
            <div className="relative z-10 w-full">
                <div className="container-wide pb-16 md:pb-28">
                    <div className="max-w-4xl space-y-12">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2 }}
                            >
                                <p className="text-xs font-bold tracking-[0.4em] uppercase text-white/80 mb-0">
                                    Trusted Expert Safaris
                                </p>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-6xl md:text-[7rem] lg:text-[8.5rem] font-serif text-white leading-[0.85] tracking-tight"
                            >
                                <span className="block italic font-normal opacity-90">Experience</span>
                                <span className="block">Southern Africa</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4, duration: 1.2 }}
                                className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
                            >
                                <div className="max-w-md">
                                    <p className="text-white/80 text-lg md:text-xl leading-relaxed font-normal italic border-l-2 border-primary pl-6 py-2">
                                        &ldquo;Our journey with TerraTreks was beyond spectacular. Every detail was curated to perfection.&rdquo;
                                        <span className="block text-xs font-bold tracking-widest uppercase mt-4 text-white/70">— Recent Guest Review</span>
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 1.6 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-start gap-6"
                        >
                            <Link
                                href="/packages"
                                className="group relative inline-flex items-center justify-center rounded-none px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase bg-primary text-white hover:bg-white hover:text-primary transition-all duration-700 shadow-2xl overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Itineraries <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-none px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase border border-white/20 text-white hover:bg-white hover:text-primary transition-all duration-700 backdrop-blur-md"
                            >
                                Make an Enquiry
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Stats Strip - Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 1.2 }}
                    className="border-t border-white/10 bg-primary/40 backdrop-blur-xl py-8"
                >
                    <div className="container-wide flex items-center justify-between text-white/80">
                        <div className="flex items-center gap-12 md:gap-20 overflow-x-auto no-scrollbar mask-fade-right pr-10">
                            {[
                                { value: "Bespoke", label: "Travel Strategies" },
                                { value: "Pure", label: "Wilderness Immersion" },
                                { value: "24/7", label: "Executive Concierge" },
                            ].map((stat) => (
                                <div key={stat.label} className="flex flex-col gap-1 shrink-0">
                                    <span className="text-white/90 font-serif text-lg italic whitespace-nowrap">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs font-bold tracking-[0.3em] uppercase font-sans whitespace-nowrap opacity-60">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Slide Indicators */}
                        <div className="hidden md:flex items-center gap-3 shrink-0">
                            {heroImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrent(idx)}
                                    className={`h-[2px] transition-all duration-1000 ${current === idx ? "w-12 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
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
                    transition={{ delay: 3, duration: 1 }}
                    className="absolute right-6 md:right-12 bottom-48 z-20 hidden lg:flex flex-col items-center gap-12"
                >
                    <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/30 vertical-text origin-bottom rotate-180">
                        Scroll to explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-px h-24 bg-gradient-to-b from-white via-white/50 to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
};
