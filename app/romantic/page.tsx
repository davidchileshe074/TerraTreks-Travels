"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { Heart, Stars, Moon, Sparkles, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const romanticImages = [
    "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2400",
];

export default function RomanticPage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % romanticImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="relative min-h-screen">
            <Navbar />

            {/* Cinematic Romantic Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={romanticImages[current]}
                            alt="Romantic Hero"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 hero-overlay-light z-[1]" />
                <div className="absolute inset-0 film-grain opacity-20 z-[2]" />

                <div className="relative z-10 text-center space-y-10 px-6 max-w-5xl">
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        className="text-[10px] font-bold uppercase text-gold tracking-[0.5em] font-sans"
                    >
                        Intimate Journeys
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-[9rem] font-serif text-white leading-[0.8] tracking-tighter"
                    >
                        Pure
                        <br />
                        <span className="text-gold italic">Romance.</span>
                    </motion.h1>

                    <div className="w-16 h-px bg-white/30 mx-auto" />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="text-white/70 text-lg md:text-2xl font-serif italic max-w-2xl mx-auto"
                    >
                        &ldquo;Under the vast African sky, find the moments that words cannot describe.&rdquo;
                    </motion.p>
                </div>

                <div className="absolute bottom-16 left-0 right-0 flex justify-center z-10">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-3"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 font-sans">Scroll</span>
                        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
                    </motion.div>
                </div>
            </section>

            {/* Content Section: Intimate Details */}
            <section className="py-32 px-6 md:px-10 bg-sand">
                <div className="max-w-[1400px] mx-auto space-y-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-5">
                                <p className="text-label text-gold">The Experience</p>
                                <h2 className="text-5xl md:text-7xl font-serif text-midnight leading-[0.9]">
                                    Unforgettable
                                    <br />
                                    <span className="text-primary italic">Seclusion</span>
                                </h2>
                                <p className="text-midnight/70 text-lg font-light font-sans max-w-lg leading-relaxed">
                                    Our romantic packages are designed to offer the ultimate in privacy and bespoke service, from candlelit dinners in the wild to private sundowners on the Zambezi.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: Moon, title: "Starlit Dinners", desc: "Private gourmet dining experiences deep in the heart of the savannah." },
                                    { icon: Sparkles, title: "Spa Retreats", desc: "Luxury wilderness spas offering treatments inspired by local botanicals." },
                                    { icon: Stars, title: "Private Safaris", desc: "Your own professional guide and vehicle for an intimate voyage." },
                                    { icon: Heart, title: "Tailored Details", desc: "Surprise arrangements from celebratory gifts to exclusive excursions." }
                                ].map((feature) => (
                                    <div key={feature.title} className="space-y-4">
                                        <div className="w-10 h-10 rounded-xl bg-gold/[0.06] flex items-center justify-center text-gold">
                                            <feature.icon className="w-5 h-5" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-lg font-serif text-midnight">{feature.title}</h3>
                                        <p className="text-midnight/60 text-xs font-light font-sans leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Layered Images */}
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[48px] overflow-hidden translate-x-12">
                                <Image
                                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200"
                                    alt="Romantic Lodge"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-12 -left-4 w-72 aspect-square rounded-[36px] overflow-hidden border-[10px] border-sand shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800"
                                    alt="Sunset Dinner"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Featured Package */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[48px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl"
                    >
                        <div className="relative h-[400px] lg:h-auto">
                            <Image
                                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200"
                                alt="Honeymoon Suite"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-midnight/40 to-transparent" />
                        </div>
                        <div className="p-12 md:p-20 space-y-10 flex flex-col justify-center">
                            <div className="space-y-4">
                                <p className="text-label text-gold">Our Signature Choice</p>
                                <h3 className="text-5xl font-serif text-midnight">The Lover&apos;s Zambezi</h3>
                                <p className="text-midnight/70 text-lg font-light font-sans leading-relaxed">
                                    7 Days of unparalleled luxury spanning Victoria Falls and the Lower Zambezi. Private river cruises, helicopter tours, and world-class lodge stays.
                                </p>
                            </div>
                            <div className="flex items-center justify-between pt-10 border-t border-midnight/5">
                                <div className="space-y-1">
                                    <span className="text-[10px] uppercase tracking-widest text-midnight/20 font-sans font-bold">Package Rate</span>
                                    <p className="text-3xl font-serif text-midnight">$5,400 <span className="text-sm font-sans font-medium text-midnight/50">/ couple</span></p>
                                </div>
                                <Button size="lg" className="rounded-full">Inquire Now <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
