"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { Briefcase, Users, Star, Globe, Shield, Clock, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const corporateImages = [
    "/images/corporate-travel.png",
    "/images/south-luangwa.png",
    "/images/victoria-falls.png",
];

export default function CorporatePage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % corporateImages.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="relative min-h-screen bg-white">
            {/* Cinematic Hero */}
            <section className="relative h-[85vh] flex items-end overflow-hidden bg-midnight">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={corporateImages[current]}
                            alt="Corporate Excellence"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent z-[1]" />
                <div className="absolute inset-0 noise-overlay opacity-30 z-[2]" />

                <div className="relative z-10 container-wide pb-32">
                    <div className="max-w-4xl space-y-10">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2 }}
                            >
                                <span className="section-label text-gold/80">Premium Business Solutions</span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-6xl md:text-[8rem] font-serif text-white tracking-tighter leading-[0.85]"
                            >
                                Executive
                                <br />
                                <span className="text-gold italic font-light">Precision</span>
                            </motion.h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Strip - Glassmorphic */}
            <section className="relative z-20 -mt-16 container-wide">
                <div className="glass-dark border border-white/10 p-12 md:p-16 rounded-[3rem] grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
                    {[
                        { label: "Institutional Clients", value: "150+" },
                        { label: "Partner Network", value: "1.2k" },
                        { label: "Global Presence", value: "12" },
                        { label: "Success Rate", value: "99.9%" }
                    ].map((stat, idx) => (
                        <div key={stat.label} className="space-y-2">
                            <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tighter">{stat.value}</h3>
                            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold/60 font-sans">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Strategic Management Services */}
            <section className="section-padding bg-[#F9F7F2] relative overflow-hidden">
                <div className="absolute top-20 left-0 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[20rem] font-serif font-black italic">Legacy</span>
                </div>

                <div className="container-wide space-y-24 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                        <div className="max-w-2xl space-y-6">
                            <p className="section-label">Institutional Services</p>
                            <h2 className="section-title">
                                Architecting
                                <br />
                                <span className="text-primary italic font-light">Global Mobility</span>
                            </h2>
                        </div>
                        <div className="max-w-xs">
                            <p className="text-midnight/40 text-[11px] leading-relaxed font-bold tracking-widest uppercase">
                                We bridge the gap between corporate efficiency and absolute luxury in every jurisdiction.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: Briefcase, title: "Executive Logistics", desc: "Private jet charters and elite ground handling for mission-critical mobility.", image: "/images/corporate-travel.png" },
                            { icon: Users, title: "Corporate Events", desc: "Scale conferences and executive retreats managed with architectural precision.", image: "/images/south-luangwa.png" },
                            { icon: Shield, title: "Risk Management", desc: "Advanced duty of care and global insurance frameworks for institutional security.", image: "/images/corporate-travel.png" },
                            { icon: Globe, title: "Global Sourcing", desc: "Harnessing international systems to secure negotiated commercial advantage.", image: "/images/victoria-falls.png" },
                            { icon: Clock, title: "Concierge Priority", desc: "Round-the-clock advisory through dedicated account specialists.", image: "/images/corporate-travel.png" },
                            { icon: Star, title: "Stakeholder Hospitality", desc: "Bespoke safari experiences designed to represent your institution's prestige.", image: "/images/lower-zambezi.png" }
                        ].map((s, idx) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-[3s] group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/40 transition-all duration-700" />
                                </div>
                                <div className="p-10 space-y-8 flex flex-col justify-between h-[340px]">
                                    <div className="space-y-6">
                                        <div className="w-14 h-14 bg-sand rounded-2xl flex items-center justify-center text-midnight group-hover:bg-gold group-hover:text-midnight transition-all duration-700">
                                            <s.icon strokeWidth={1} className="w-7 h-7" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-serif text-midnight group-hover:text-primary transition-colors">{s.title}</h3>
                                            <p className="text-midnight/40 text-[11px] font-bold tracking-widest uppercase leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                    <div className="pt-8 border-t border-midnight/5 flex items-center justify-between">
                                        <Link href="/contact" className="text-[10px] font-bold tracking-[0.2em] uppercase text-midnight hover:text-gold transition-colors">Request Prospectus</Link>
                                        <ArrowRight className="w-4 h-4 text-midnight/20 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Institutional High Impact CTA */}
            <section className="py-40 bg-midnight relative overflow-hidden">
                <div className="absolute inset-0 noise-overlay opacity-30" />
                <div className="container-wide text-center relative z-10 space-y-12">
                    <Sparkles className="w-16 h-16 text-gold/20 mx-auto" />
                    <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-[0.85] max-w-5xl mx-auto">
                        Elevate Your
                        <br />
                        <span className="text-gold italic font-light">Strategic Presence</span>
                    </h2>
                    <p className="section-desc max-w-2xl mx-auto text-white/40 mb-12">
                        Join the most prestigious organizations in Zambia that trust TerraTreks to architect their global mobility and executive hospitality.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Link
                            href="/contact"
                            className="bg-gold text-midnight rounded-full px-12 py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-all duration-700 w-full sm:w-auto shadow-2xl"
                        >
                            Open Corporate Account
                        </Link>
                        <a href="tel:+260979189370" className="text-white/40 hover:text-white transition-colors text-[10px] font-bold tracking-[0.4em] uppercase">Speak to an Account Lead</a>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
