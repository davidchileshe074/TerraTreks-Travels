"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const heroImages = [
    "/images/zanzibar-resort-aerial.jpg",
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
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Cinematic Slider */}
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
                        alt="Luxury Safari"
                        fill
                        priority
                        className="object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-white text-[10px] md:text-sm font-bold tracking-[0.5em] uppercase mb-6 block opacity-80">
                        Unveiling the spirit of adventure
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.9] tracking-tighter mb-10">
                        Luxury Without <br />
                        <span className="italic font-normal">Compromise.</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/packages"
                            className="px-10 py-5 bg-gold text-white rounded-full text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                        >
                            Explore Safaris
                        </Link>
                        <Link
                            href="/contact"
                            className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-white hover:text-safari-blue"
                        >
                            Plan Your Trip
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Booking Widget Wrapper - Overlapping the bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-6 z-30 hidden md:block">
                <BookingWidget />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
};

// Simple internal BookingWidget for now, can be moved to separate file later
const BookingWidget = () => {
    return (
        <div className="bg-white rounded-2xl shadow-[0_30px_100px_-15px_rgba(0,0,0,0.1)] p-8 border border-sand">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gold">Where to?</label>
                    <select className="w-full bg-transparent border-b border-sand py-2 text-sm text-safari-blue focus:outline-none focus:border-gold">
                        <option>Select Destination</option>
                        <option>South Luangwa</option>
                        <option>Lower Zambezi</option>
                        <option>Victoria Falls</option>
                        <option>Kafue National Park</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gold">Travel Style</label>
                    <select className="w-full bg-transparent border-b border-sand py-2 text-sm text-safari-blue focus:outline-none focus:border-gold">
                        <option>Select Style</option>
                        <option>Luxury Safari</option>
                        <option>Romantic Escape</option>
                        <option>Corporate Adventure</option>
                        <option>Family Expedition</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gold">When?</label>
                    <input type="month" className="w-full bg-transparent border-b border-sand py-2 text-sm text-safari-blue focus:outline-none focus:border-gold" />
                </div>
                <div className="flex items-end">
                    <button className="w-full bg-safari-blue text-white py-4 rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-gold transition-colors duration-300">
                        Search Experiences
                    </button>
                </div>
            </div>
        </div>
    );
};
