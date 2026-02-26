"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import packages from "@/data/packages.json";
import { MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LocalOffersSection } from "@/components/marketing/local-offers-section";

export default function PackagesPage() {
    return (
        <main className="relative min-h-screen bg-white">
            {/* Cinematic Hero Header */}
            <section className="relative h-[85vh] flex items-end overflow-hidden bg-midnight">
                <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1523805081326-6468447d9688?auto=format&fit=crop&q=80&w=2400"
                        alt="Signature Packages"
                        fill
                        priority
                        className="object-cover transition-all duration-[5s]"
                    />
                </motion.div>

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent z-[1]" />
                <div className="absolute inset-0 film-grain opacity-20 z-[2]" />

                <div className="relative z-10 container-wide pb-32">
                    <div className="max-w-4xl space-y-10">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2 }}
                            >
                                <span className="section-label text-gold/80">The 2024 Collection</span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-6xl md:text-[9rem] font-serif text-white tracking-tighter leading-[0.85]"
                            >
                                Signature
                                <br />
                                <span className="text-gold italic font-light">Journeys</span>
                            </motion.h1>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1.5 }}
                            className="text-white/40 text-lg md:text-2xl font-serif italic max-w-2xl"
                        >
                            "Every itinerary is a masterpiece of logistics and luxury, curated to reveal the soul of Africa."
                        </motion.p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-12 right-12 z-20 hidden md:block"
                >
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20 vertical-text">Scroll to explore</span>
                        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
                    </div>
                </motion.div>
            </section>

            {/* Collection Grid */}
            <section className="section-padding bg-[#F9F7F2] relative overflow-hidden">
                {/* Artistic Texture */}
                <div className="absolute top-20 left-0 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[20rem] font-serif font-black italic">Archive</span>
                </div>

                <div className="container-wide space-y-32 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                        <div className="max-w-2xl space-y-6">
                            <p className="section-label">Masterpiece Collection</p>
                            <h2 className="section-title">
                                Architected for
                                <br />
                                <span className="text-primary italic font-light">Discovery</span>
                            </h2>
                        </div>
                        <div className="max-w-xs space-y-6">
                            <p className="text-midnight/40 text-xs font-bold tracking-widest uppercase leading-relaxed">
                                A curated selection of the continent's most whispered-about experiences.
                            </p>
                            <div className="h-px w-full bg-midnight/5" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {packages.map((pkg, idx) => (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700"
                            >
                                {/* Image Container */}
                                <div className="relative h-[450px] overflow-hidden">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/40 transition-all duration-700" />

                                    {/* Top Metadata */}
                                    <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                                        <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase">
                                            {pkg.tag}
                                        </span>
                                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Bottom Metadata */}
                                    <div className="absolute bottom-10 left-10 right-10 space-y-5 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                                        <div className="flex items-center gap-6">
                                            <span className="flex items-center gap-2 text-white/90 text-[10px] font-bold tracking-widest uppercase">
                                                <MapPin className="w-4 h-4 text-gold" />
                                                {pkg.location}
                                            </span>
                                            <span className="flex items-center gap-2 text-white/90 text-[10px] font-bold tracking-widest uppercase">
                                                <Clock className="w-4 h-4 text-gold" />
                                                {pkg.duration}
                                            </span>
                                        </div>
                                        <h3 className="text-4xl font-serif text-white leading-[0.9] tracking-tight">
                                            {pkg.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Pricing Strip */}
                                <div className="p-10 flex items-center justify-between border-t border-midnight/5">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-midnight/30">Investment from</p>
                                        <p className="text-2xl font-serif text-midnight">{pkg.price}</p>
                                    </div>
                                    <Link
                                        href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                                        className="text-[11px] font-bold tracking-[0.2em] uppercase text-midnight border-b border-midnight/10 pb-1 hover:border-gold hover:text-gold transition-all duration-300"
                                    >
                                        Inquire Now
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resident Specials Integration */}
            <LocalOffersSection />

            {/* Call to Action Divider */}
            <section className="py-40 bg-white text-center container-wide overflow-hidden relative">
                <div className="max-w-2xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-12 h-12 text-gold mx-auto opacity-20" />
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-serif italic text-midnight leading-tight">
                        Looking for something <br /> <span className="text-primary font-light">truly unique?</span>
                    </h2>
                    <p className="text-midnight/50 font-sans tracking-wide leading-relaxed">
                        Our private consultants are specialists in crafting completely <br /> bespoke itineraries tailored to your specific vision.
                    </p>
                    <div className="pt-8">
                        <Link href="/contact" className="group inline-flex items-center gap-6 text-[12px] font-bold tracking-[0.4em] uppercase text-midnight hover:text-gold transition-colors">
                            Begin Custom Design <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
