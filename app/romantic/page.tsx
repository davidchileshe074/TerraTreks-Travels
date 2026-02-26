"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { Heart, Stars, Moon, Sparkles, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const romanticImages = [
    "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2400",
];

export default function RomanticPage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % romanticImages.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="relative min-h-screen bg-white">
            {/* Cinematic Romantic Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-midnight">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={romanticImages[current]}
                            alt="Pure Romance"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Romantic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-transparent to-midnight/90 z-[1]" />
                <div className="absolute inset-0 noise-overlay opacity-20 z-[2]" />

                <div className="relative z-10 text-center space-y-12 px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <div className="h-px w-12 bg-gold/50" />
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold">Intimate Odyssey</span>
                        <div className="h-px w-12 bg-gold/50" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-[10rem] font-serif text-white tracking-tighter leading-[0.85]"
                    >
                        Pure
                        <br />
                        <span className="text-gold italic font-light">Elegance</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="text-white/60 text-lg md:text-2xl font-serif italic max-w-2xl mx-auto"
                    >
                        "Under the vast African sky, find the moments that words cannot describe."
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/40">Softly Explore</span>
                        <div className="w-[1.5px] h-16 bg-gradient-to-b from-gold to-transparent" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Content Section: Intimate Details */}
            <section className="section-padding bg-[#F9F7F2] relative overflow-hidden">
                <div className="absolute top-20 left-0 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[20rem] font-serif font-black italic">Whisper</span>
                </div>

                <div className="container-wide space-y-40 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
                        <div className="space-y-16">
                            <div className="space-y-8">
                                <p className="section-label">Bespoke Devotion</p>
                                <h2 className="section-title">
                                    Unforgettable
                                    <br />
                                    <span className="text-primary italic font-light">Seclusion</span>
                                </h2>
                                <p className="text-midnight/70 text-lg leading-relaxed font-sans font-medium max-w-xl">
                                    Our romantic collection is architected for the ultimate in privacy. From candlelit dinners in the wild to private sundowners on the Zambezi, every moment is a shared secret.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-midnight/5">
                                {[
                                    { icon: Moon, title: "Starlit Dinners", desc: "Private gourmet dining experiences deep in the heart of the savannah." },
                                    { icon: Sparkles, title: "Wild Spas", desc: "Luxury wilderness treatments inspired by local African botanicals." },
                                    { icon: Stars, title: "Private Safaris", desc: "Your own professional guide and vehicle for an intimate voyage." },
                                    { icon: Heart, title: "Tailored Details", desc: "Surprise arrangements from celebratory gifts to exclusive excursions." }
                                ].map((feature) => (
                                    <div key={feature.title} className="space-y-4 group">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-midnight group-hover:bg-gold transition-all duration-700">
                                            <feature.icon className="w-6 h-6" strokeWidth={1} />
                                        </div>
                                        <h3 className="text-xl font-serif text-midnight">{feature.title}</h3>
                                        <p className="text-[10px] uppercase tracking-wider text-midnight/40 leading-relaxed font-bold">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Artistic Image Stack */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                                className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl z-10"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200"
                                    alt="Intimate Lodge"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -30, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 1.5 }}
                                className="absolute -bottom-16 -left-16 w-80 aspect-square rounded-[3rem] overflow-hidden border-[15px] border-[#F9F7F2] shadow-2xl z-20 hidden lg:block"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800"
                                    alt="Sunrise Shared"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Featured Romantic Choice */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-midnight rounded-[4rem] overflow-hidden translate-y-6 lg:translate-x-6 z-0" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 bg-white rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl border border-midnight/5"
                        >
                            <div className="lg:col-span-5 relative h-[500px] lg:h-auto overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200"
                                    alt="The Lover's Zambezi"
                                    fill
                                    className="object-cover transition-transform duration-[4s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-midnight/20 to-transparent" />
                            </div>
                            <div className="lg:col-span-7 p-12 md:p-24 space-y-12 flex flex-col justify-center">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-[9px] font-bold tracking-[0.3em] uppercase">
                                        <Sparkles className="w-3 h-3" /> Signature Selection
                                    </div>
                                    <h3 className="text-5xl md:text-7xl font-serif text-midnight leading-[0.9]">The Lover&apos;s <span className="text-gold italic font-light">Zambezi</span></h3>
                                    <p className="text-midnight/50 text-lg leading-relaxed italic font-serif max-w-xl">
                                        "7 Days of unparalleled luxury spanning Victoria Falls and the Lower Zambezi. Private river cruises, helicopter tours, and world-class lodge stays architected for two."
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-10 pt-10 border-t border-midnight/5">
                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-widest text-midnight/20 font-sans font-bold">Investment from</span>
                                        <p className="text-3xl font-serif text-midnight">K 135,000 <span className="text-sm font-sans font-medium text-midnight/30">/ couple</span></p>
                                    </div>
                                    <Link
                                        href="/contact?package=Lover's Zambezi"
                                        className="bg-midnight text-white rounded-full px-12 py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition-all duration-700 w-full sm:w-auto text-center"
                                    >
                                        Design Our Story
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
