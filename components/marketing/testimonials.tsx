"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "TerraTreks transformed what could have been a routine trip into the most extraordinary experience of our lives. Every detail was perfect.",
        name: "Sarah Mitchell",
        role: "Victoria Falls Safari",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
        quote: "The level of personal attention and local knowledge is unmatched. They don't just book trips — they craft stories.",
        name: "James Hartley",
        role: "Corporate Retreat, South Luangwa",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    {
        quote: "From the moment we landed to the tearful goodbye, everything flowed seamlessly. This is what luxury travel should feel like.",
        name: "Amara Chen",
        role: "Honeymoon, Lower Zambezi",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    },
];

export const Testimonials = () => {
    const [active, setActive] = useState(0);

    return (
        <section className="py-32 px-6 md:px-10 bg-midnight text-white overflow-hidden relative">
            {/* Subtle gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[120px]" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-16">
                    <div className="space-y-5">
                        <p className="text-label text-gold/80">
                            Guest Voices
                        </p>
                        <h2 className="text-5xl md:text-6xl font-serif leading-[0.95]">
                            Stories From
                            <br />
                            <span className="text-gold italic">the Wild</span>
                        </h2>
                    </div>

                    {/* Quote */}
                    <div className="relative min-h-[200px]">
                        <Quote className="w-10 h-10 text-gold/20 mx-auto mb-8" />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.02, y: -10 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-8"
                            >
                                <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">
                                    &ldquo;{testimonials[active].quote}&rdquo;
                                </p>
                                <div className="space-y-2">
                                    <p className="text-white/90 font-semibold text-sm font-sans">
                                        {testimonials[active].name}
                                    </p>
                                    <p className="text-white/85 text-xs font-normal font-sans tracking-wide">
                                        {testimonials[active].role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Avatars as selector */}
                    <div className="flex justify-center gap-4">
                        {testimonials.map((t, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActive(idx)}
                                className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-500 ${active === idx
                                    ? "border-gold scale-110"
                                    : "border-white/10 opacity-40 hover:opacity-70"
                                    }`}
                            >
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    width={56}
                                    height={56}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
