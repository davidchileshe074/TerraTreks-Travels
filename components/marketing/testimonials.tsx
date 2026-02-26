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
        <section className="section-padding bg-midnight text-white overflow-hidden relative">
            {/* Cinematic background depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/[0.04] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 film-grain opacity-20 pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-20">
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="section-label text-gold/60"
                        >
                            The Guest Perspective
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-title text-white text-5xl md:text-7xl"
                        >
                            Echoes from
                            <br />
                            <span className="text-gold italic font-light">the Horizon</span>
                        </motion.h2>
                    </div>

                    {/* Main Quote Display */}
                    <div className="relative w-full min-h-[400px] md:min-h-[300px] flex flex-col items-center justify-center">
                        <Quote className="absolute -top-10 left-0 w-24 h-24 text-gold/[0.05] pointer-events-none" />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-12"
                            >
                                <p className="text-2xl md:text-4xl font-serif italic text-white/90 leading-tight max-w-4xl mx-auto font-light">
                                    &ldquo;{testimonials[active].quote}&rdquo;
                                </p>
                                <div className="space-y-2">
                                    <p className="text-gold font-bold text-sm font-sans tracking-[0.2em] uppercase">
                                        {testimonials[active].name}
                                    </p>
                                    <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase font-sans">
                                        {testimonials[active].role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Custom Navigators */}
                    <div className="flex items-center gap-6">
                        {testimonials.map((t, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActive(idx)}
                                className="group relative flex flex-col items-center gap-4 focus:outline-none"
                            >
                                <div className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-700 ${active === idx
                                    ? "border-gold scale-115 shadow-[0_0_30px_rgba(182,152,89,0.3)]"
                                    : "border-white/10 opacity-30 group-hover:opacity-60"
                                    }`}>
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className={`h-1 rounded-full transition-all duration-700 ${active === idx ? "w-8 bg-gold" : "w-0 bg-white/20"}`} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
