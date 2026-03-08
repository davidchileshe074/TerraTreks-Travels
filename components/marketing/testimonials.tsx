"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
        <section className="section-spacing bg-safari-blue text-white overflow-hidden relative">
            <div className="container-luxury relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-8 block"
                    >
                        guest experiences
                    </motion.span>

                    <div className="relative mb-12">
                        <Quote className="absolute -top-12 -left-12 w-24 h-24 text-white/[0.03] pointer-events-none" />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-8"
                            >
                                <p className="text-2xl md:text-4xl font-serif italic text-white/90 leading-tight">
                                    &ldquo;{testimonials[active].quote}&rdquo;
                                </p>
                                <div className="space-y-2">
                                    <div className="w-12 h-12 relative mx-auto rounded-full overflow-hidden mb-4 border border-gold/30">
                                        <Image
                                            src={testimonials[active].image}
                                            alt={testimonials[active].name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase">
                                        {testimonials[active].name}
                                    </p>
                                    <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">
                                        {testimonials[active].role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex items-center gap-4">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActive(idx)}
                                className="group relative py-4 focus:outline-none"
                            >
                                <div className={cn(
                                    "h-[1px] transition-all duration-500",
                                    active === idx ? "w-12 bg-gold" : "w-4 bg-white/20 group-hover:bg-white/40"
                                )} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
