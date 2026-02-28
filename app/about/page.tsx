"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import Image from "next/image";
import { Sparkles, Quote, Globe, Shield, Award } from "lucide-react";

const aboutImages = [
    "/images/about-1.jpeg",
    "/images/about-2.jpeg",
    "/images/about-3.jpeg",
    "/images/kkia-jump.jpg",
    "/images/safari-1.jpg",
    "/images/kkia-outside.jpg",
    "/images/safari-2.jpg",
    "/images/kkia-terminal.jpg",
    "/images/safari-3.jpg",
    "/images/safari-4.jpg",
];

const pillars = [
    {
        icon: Globe,
        title: "Local Wisdom",
        desc: "Deeply rooted in Zambian heritage with global delivery standards."
    },
    {
        icon: Shield,
        title: "Absolute Safety",
        desc: "Uncompromising focus on guest security and operational excellence."
    },
    {
        icon: Award,
        title: "Elite Partners",
        desc: "Affiliated with the world's most prestigious safari lodges and airlines."
    }
];

export default function AboutPage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % aboutImages.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="relative min-h-screen bg-white">
            {/* Cinematic Background Slider */}
            <section className="relative h-screen flex items-end overflow-hidden bg-primary">
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
                            src={aboutImages[current]}
                            alt="TerraTreks Heritage"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent z-[1]" />
                <div className="absolute inset-0 film-grain opacity-20 z-[2]" />

                <div className="relative z-10 container-wide pt-[25vh] pb-24">
                    <div className="max-w-4xl space-y-8 md:space-y-10">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2 }}
                            >
                                <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/80">Established 2024</span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-5xl sm:text-6xl md:text-[9rem] font-serif text-white tracking-tighter leading-[0.85]"
                            >
                                The Soul of
                                <br />
                                <span className="italic font-normal opacity-80">Adventure</span>
                            </motion.h1>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1.5 }}
                            className="text-white/80 text-lg md:text-2xl font-serif italic max-w-2xl border-l-2 border-primary pl-8"
                        >
                            &ldquo;TerraTreks was founded on a singular vision: to architect the intersection of untamed wilderness and absolute refinement.&rdquo;
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Narrated Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute top-20 right-0 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[25rem] font-serif font-black italic">Heritage</span>
                </div>

                <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-center relative z-10">
                    <div className="lg:col-span-6 space-y-16">
                        <div className="space-y-6">
                            <p className="section-label text-primary">Our Philosophy</p>
                            <h2 className="text-5xl md:text-7xl font-serif text-midnight leading-none tracking-tight">
                                Professional
                                <br />
                                <span className="italic font-normal opacity-80">Excellence</span>
                            </h2>
                            <div className="space-y-8 text-midnight/90 text-lg leading-relaxed font-sans font-medium max-w-xl">
                                <p>
                                    TerraTreks Travels is a professional travel agency
                                    specialising in personalised, end-to-end travel solutions. We bridge the gap between local wisdom and global delivery standards.
                                </p>
                                <p>
                                    By orchestrating seamless flight bookings, luxury accommodation, and complete itinerary management, we ensure that every journey is handled with the precision of a master architect.
                                </p>
                            </div>
                        </div>

                        {/* Pillar Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-10 border-t border-midnight/5">
                            {pillars.map((pillar) => (
                                <div key={pillar.title} className="space-y-4">
                                    <pillar.icon className="w-8 h-8 text-primary opacity-50" strokeWidth={1.5} />
                                    <h4 className="text-sm font-bold tracking-widest uppercase text-midnight">{pillar.title}</h4>
                                    <p className="text-xs uppercase tracking-wider text-midnight/90 leading-relaxed font-bold">{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-3xl"
                        >
                            <Image
                                src="/images/about-2.jpeg"
                                alt="Zambian Majesty"
                                fill
                                className="object-cover transition-transform duration-[5s] hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-midnight/10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission / Vision High Impact */}
            <section className="section-padding bg-primary relative overflow-hidden">
                <div className="absolute inset-0 noise-overlay opacity-20" />
                <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-none overflow-hidden">
                    <div className="p-16 md:p-24 space-y-10 hover:bg-white/[0.02] transition-colors duration-700">
                        <Quote className="w-16 h-16 text-white/90" />
                        <div className="space-y-6">
                            <h3 className="text-4xl font-serif text-white">Our Vision</h3>
                            <p className="text-2xl font-serif text-white/80 italic leading-snug">
                                &ldquo;To transform travel experiences through personalised expertise and genuine passion for discovery.&rdquo;
                            </p>
                        </div>
                    </div>
                    <div className="p-16 md:p-24 space-y-10 hover:bg-white/[0.02] transition-colors duration-700 border-l border-white/5">
                        <Sparkles className="w-16 h-16 text-white/90" />
                        <div className="space-y-6">
                            <h3 className="text-4xl font-serif text-white">Our Mission</h3>
                            <p className="text-2xl font-serif text-white/80 italic leading-snug">
                                &ldquo;To connect global travelers to the soul of Africa through experiences that exceed every expectation.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Table / Grid */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-wide space-y-24 h-full">
                    <div className="text-center space-y-6">
                        <p className="section-label text-primary">The Network</p>
                        <h2 className="text-5xl md:text-7xl font-serif text-midnight leading-none tracking-tight">Institutional <span className="italic font-normal opacity-80">Partners</span></h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            "Sarens Zambia", "Southin", "Batati", "NW Chamber",
                            "Trident", "ISL", "SANVIC", "Cefao",
                            "UCZ", "Atutonke", "NetFlow", "Reeluka"
                        ].map((client, idx) => (
                            <motion.div
                                key={client}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group h-32 flex items-center justify-center p-8 bg-primary/5 rounded-none border border-midnight/[0.02] hover:bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-700"
                            >
                                <span className="text-xs font-bold text-midnight/30 tracking-[0.2em] uppercase text-center group-hover:text-midnight transition-colors">
                                    {client}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-20 text-center">
                        <p className="text-xs font-bold tracking-[0.4em] uppercase text-midnight/20 max-w-2xl mx-auto leading-relaxed">
                            TerraTreks Travels operates in full compliance with Zambian travel regulations and is an active member of recognised travel industry bodies.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
