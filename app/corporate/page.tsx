"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { Briefcase, Users, Star, Globe, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const corporateImages = [
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2400", // Private Jet Elite Travel
    "https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?auto=format&fit=crop&q=80&w=2400", // Luxury Safari Hospitality
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400", // Modern Collaborative Space
];

export default function CorporatePage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % corporateImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="relative min-h-screen">
            <Navbar />

            {/* Cinematic Hero */}
            <section className="relative h-[85vh] flex items-end overflow-hidden bg-midnight">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                        animate={{ opacity: 0.8, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={corporateImages[current]}
                            alt="Corporate Hero"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 hero-overlay" />
                <div className="absolute inset-0 film-grain opacity-20" />

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-24">
                    <div className="max-w-3xl space-y-8">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-label text-gold"
                        >
                            TerraTreks Corporate
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl md:text-9xl font-serif text-white leading-[0.85] tracking-tight"
                        >
                            Elite Travel,
                            <br />
                            <span className="text-gold italic">Refined.</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <Button
                                size="lg"
                                variant="secondary"
                                className="rounded-full"
                                onClick={() => document.getElementById('contact-cta')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Consult Our Team
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full border-white/20 text-white hover:bg-white hover:text-midnight"
                                onClick={() => document.getElementById('strategic-services')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Our Services
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Linear Minimalist Style */}
            <section className="bg-white border-b border-midnight/[0.04] py-20 px-6 md:px-10">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { label: "Corporate Clients", value: "150+" },
                        { label: "Partner Hotels", value: "1,200+" },
                        { label: "Global Presence", value: "12" },
                        { label: "Satisfaction Rate", value: "99%" }
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-2 text-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary tracking-tighter">{stat.value}</h3>
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-midnight/85 font-sans">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Detailed Services Grid */}
            <section id="strategic-services" className="py-32 px-6 md:px-10 bg-sand">
                <div className="max-w-[1400px] mx-auto space-y-24">
                    <div className="max-w-2xl space-y-5">
                        <p className="text-label text-gold">What We Offer</p>
                        <h2 className="text-5xl md:text-7xl font-serif text-midnight leading-[0.9]">
                            Strategic Travel
                            <br />
                            <span className="text-primary italic">Management</span>
                        </h2>
                        <p className="text-midnight/90 text-lg font-normal font-sans max-w-lg leading-relaxed">
                            We bridge the gap between efficiency and luxury, ensuring your business travels are as productive as they are comfortable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Briefcase, title: "Executive Logistics", desc: "Private jet bookings, luxury chauffeured transfers, and priority airport handling for elite personnel.", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800" },
                            { icon: Users, title: "Global Events & MICE", desc: "End-to-end management of large-scale conferences, incentive travel programs, and team retreats.", image: "https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?auto=format&fit=crop&q=80&w=800" },
                            { icon: Shield, title: "Risk Management", desc: "Comprehensive duty of care, traveler tracking, and global insurance solutions for every employee.", image: "https://images.unsplash.com/photo-1454165833762-02e708a3603c?auto=format&fit=crop&q=80&w=800" },
                            { icon: Globe, title: "International Sourcing", desc: "Leveraging global GDS systems to secure negotiated corporate rates across airlines and hotel groups.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
                            { icon: Clock, title: "24/7 Priority Support", desc: "Always-on assistance through dedicated corporate account managers for real-time adjustments.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                            { icon: Star, title: "Client Hospitality", desc: "Bespoke safari and dining experiences curated to impress your most important stakeholders.", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" }
                        ].map((s, idx) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="bg-white rounded-3xl border border-midnight/[0.04] hover:shadow-2xl transition-all duration-700 group flex flex-col overflow-hidden"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="p-10 flex-1 flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <div className="w-12 h-12 bg-primary/[0.04] rounded-2xl flex items-center justify-center text-primary group-hover:bg-gold group-hover:text-midnight transition-all duration-500">
                                            <s.icon strokeWidth={1.5} className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-serif text-midnight">{s.title}</h3>
                                            <p className="text-midnight/80 text-sm leading-relaxed font-normal font-sans">{s.desc}</p>
                                        </div>
                                    </div>
                                    <div className="pt-8 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                        <Link href="/contact" className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] font-sans flex items-center gap-2 group/btn">
                                            Enquire Now <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate CTA */}
            <section id="contact-cta" className="py-32 px-6 md:px-10 bg-white">
                <div className="max-w-5xl mx-auto rounded-[48px] overflow-hidden relative group">
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                            alt="Corporate CTA"
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/80" />
                    </div>

                    <div className="relative z-10 p-16 md:p-28 text-center space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-[5rem] font-serif text-white leading-[0.9]">Elevate Your Corporate Journey</h2>
                            <p className="text-white/80 text-lg font-normal font-sans max-w-xl mx-auto italic">
                                &ldquo;We redefine what business travel looks like in Africa. Efficient, luxurious, and perfectly managed.&rdquo;
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full px-12 py-5 text-[13px] font-sans font-bold tracking-[0.08em] uppercase bg-gold text-midnight hover:bg-gold/90 transition-all duration-500"
                        >
                            Request Corporate Prospectus
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main >
    );
}
