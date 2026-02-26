"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import {
    Plane, Building2, FileCheck, Map, Bus, Briefcase,
    ShieldPlus, Headset, CreditCard, Users, Info, Laptop,
    ArrowRight, Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const allServices = [
    {
        title: "Flight Reservations",
        description: "International and domestic flight bookings with flexible fare options and full travel support.",
        icon: Plane,
        tag: "Global"
    },
    {
        title: "Elite Accommodation",
        description: "Luxury lodges and boutique hotels curated for comfort and absolute privacy.",
        icon: Building2,
        tag: "Bespoke"
    },
    {
        title: "Visa Assistance",
        description: "Professional guidance and document support to help you navigate global requirements.",
        icon: FileCheck,
        tag: "Expert"
    },
    {
        title: "Tailor-Made Pakages",
        description: "Custom travel itineraries designed around your interests, schedule, and budget.",
        icon: Map,
        tag: "Unique"
    },
    {
        title: "Airport Transfers",
        description: "Safe, timely, and comfortable transfers for stress-free arrivals and departures.",
        icon: Bus,
        tag: "Elite"
    },
    {
        title: "Corporate Management",
        description: "End-to-end business travel solutions with negotiated corporate rates and coordination.",
        icon: Briefcase,
        tag: "B2B"
    },
    {
        title: "Travel Insurance",
        description: "Authorised agents offering coverage for medical, cancellation, and luggage protection.",
        icon: ShieldPlus,
        tag: "Secure"
    },
    {
        title: "24/7 Executive Support",
        description: "Round-the-clock assistance for travel changes, emergencies, and concierge needs.",
        icon: Headset,
        tag: "Support"
    },
    {
        title: "Flexible Financing",
        description: "Convenient travel financing and flexible payment options on selected services.",
        icon: CreditCard,
        tag: "Finance"
    },
    {
        title: "Event Coordination",
        description: "Full logistics for conferences, workshops, retreats, and luxury corporate events.",
        icon: Users,
        tag: "Events"
    },
    {
        title: "Travel Advisory",
        description: "Expert insights into safety, cultural protocols, and entry requirements.",
        icon: Info,
        tag: "Insight"
    },
    {
        title: "Digital Nomad Services",
        description: "Travel planning for remote professionals, including connectivity and long-term stays.",
        icon: Laptop,
        tag: "Modern"
    }
];

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen bg-white">
            {/* Cinematic Hero */}
            <section className="relative h-[80vh] flex items-end overflow-hidden bg-midnight">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2400"
                        alt="TerraTreks Services"
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent z-[1]" />
                <div className="absolute inset-0 noise-overlay opacity-30 z-[2]" />

                <div className="relative z-10 container-wide pb-32">
                    <div className="max-w-4xl space-y-10">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2 }}
                            >
                                <span className="section-label text-gold/80">360° Travel Ecosystem</span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-6xl md:text-[8rem] font-serif text-white tracking-tighter leading-[0.85]"
                            >
                                Professional
                                <br />
                                <span className="text-gold italic font-light">Ecosystem</span>
                            </motion.h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid - Modern Mosaic */}
            <section className="section-padding bg-[#F9F7F2] relative overflow-hidden">
                <div className="absolute top-20 left-0 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[20rem] font-serif font-black italic">Solutions</span>
                </div>

                <div className="container-wide relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {allServices.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative bg-white p-12 rounded-[2.5rem] border border-midnight/[0.03] hover:bg-white hover:border-gold/20 hover:shadow-3xl transition-all duration-700 flex flex-col"
                            >
                                <div className="space-y-8 flex-1">
                                    <div className="flex justify-between items-start">
                                        <div className="w-16 h-16 bg-[#F9F7F2] rounded-2xl flex items-center justify-center text-midnight group-hover:bg-gold group-hover:text-midnight transition-all duration-700">
                                            <service.icon strokeWidth={1} className="w-8 h-8" />
                                        </div>
                                        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-midnight/20">{service.tag}</span>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-serif text-midnight leading-tight group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-midnight/40 text-[11px] leading-relaxed font-bold tracking-wider uppercase">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-10 flex items-center justify-between border-t border-midnight/5">
                                    <Link href="/contact" className="text-[10px] font-bold tracking-[0.2em] uppercase text-midnight hover:text-gold transition-colors">Enquire Now</Link>
                                    <ArrowRight className="w-4 h-4 text-midnight/20 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* High Impact Consultation CTA */}
            <section className="py-40 bg-midnight relative overflow-hidden">
                <div className="absolute inset-0 noise-overlay opacity-30" />
                <div className="container-wide text-center relative z-10 space-y-12">
                    <Sparkles className="w-16 h-16 text-gold/20 mx-auto" />
                    <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-[0.85] max-w-5xl mx-auto">
                        Your Strategy,
                        <br />
                        <span className="text-gold italic font-light">Individually Architected</span>
                    </h2>
                    <p className="section-desc max-w-2xl mx-auto text-white/40 mb-12">
                        We don't just provide travel services; we design travel strategies. Our consultants are ready to handle the logistics so you can focus on the journey.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Link
                            href="/contact"
                            className="bg-gold text-midnight rounded-full px-12 py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-all duration-700 w-full sm:w-auto shadow-2xl"
                        >
                            Schedule a Consultation
                        </Link>
                        <a href="tel:+260979189370" className="text-white/40 hover:text-white transition-colors text-[10px] font-bold tracking-[0.4em] uppercase">Speak to an Expert</a>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
