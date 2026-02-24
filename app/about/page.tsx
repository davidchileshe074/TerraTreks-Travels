"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import Image from "next/image";

const aboutImages = [
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2400", // Elephant Close-up
    "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=2400", // Sunset Leopard
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=2400", // Savannah Vista
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
        <main className="relative min-h-screen">


            {/* Cinematic Hero */}
            <section className="relative h-[85vh] flex items-end overflow-hidden bg-midnight">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={aboutImages[current]}
                            alt="About Hero"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Cinematic Layers */}
                <div className="absolute inset-0 hero-overlay z-10" />
                <div className="absolute inset-0 film-grain opacity-20 z-10" />

                <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="max-w-3xl space-y-6"
                    >
                        <p className="text-label text-gold uppercase tracking-[0.3em]">Our Legacy</p>
                        <h1 className="text-4xl md:text-9xl font-serif text-white leading-[0.85]">
                            Terra<span className="text-gold italic">Treks</span>
                        </h1>
                        <p className="text-white/85 text-lg font-normal max-w-lg leading-relaxed font-sans mt-4 italic">
                            &ldquo;Curating the intersection of untamed Africa and absolute refinement.&rdquo;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-32 px-6 md:px-10 bg-sand">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="space-y-10"
                    >
                        <div className="space-y-5">
                            <p className="text-label text-gold/80">Est. 2024</p>
                            <h2 className="text-4xl md:text-7xl font-serif text-midnight leading-[0.95]">
                                Professional
                                <br />
                                <span className="text-primary italic">Excellence</span>
                            </h2>
                        </div>
                        <div className="space-y-6 text-midnight/80 text-lg leading-relaxed font-normal font-sans max-w-xl">
                            <p>
                                TerraTreks Travels is a premier boutique travel agency
                                established in 2024. We specialize in meticulously
                                personalized, end-to-end safari and luxury travel solutions.
                            </p>
                            <p>
                                By marrying deep local expertise with prestigious global
                                partnerships, we orchestrate seamless journeys that span
                                from private aviation to the most exclusive lodges in
                                Southern Africa.
                            </p>
                        </div>
                        <div className="pt-4">
                            <button className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-midnight hover:text-gold transition-colors duration-300">
                                Discover Our Vision <div className="w-10 h-px bg-gold/30" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)]">
                            <Image
                                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200"
                                alt="Zambian Landscape"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)]">
                                <Image
                                    src="https://images.unsplash.com/photo-1523805081326-6468447d9688?auto=format&fit=crop&q=80&w=1200"
                                    alt="Safari Dining"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)]">
                                <Image
                                    src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200"
                                    alt="Lion Majesty"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="col-span-2 bg-midnight p-10 rounded-3xl text-white relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <p className="text-xl italic font-serif font-normal leading-relaxed text-white/90 relative z-10">
                                &ldquo;To connect global travelers to the soul of Africa through experiences that exceed every expectation.&rdquo;
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-32 px-6 md:px-10 bg-white relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 md:p-16 rounded-3xl bg-sand border border-midnight/[0.04] space-y-6 group hover:border-gold/15 transition-all duration-700 font-sans"
                    >
                        <div className="w-14 h-14 bg-primary/[0.06] rounded-2xl flex items-center justify-center text-primary group-hover:bg-gold group-hover:text-midnight transition-all duration-500">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-serif text-midnight">
                            Our Vision
                        </h3>
                        <p className="text-midnight/90 leading-relaxed font-normal text-xl italic font-serif">
                            &ldquo;To transform travel experiences through
                            personalised expertise and genuine passion for
                            discovery.&rdquo;
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="p-12 md:p-16 rounded-3xl bg-primary text-white space-y-6 relative overflow-hidden group font-sans"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/[0.06] blur-3xl rounded-full transition-transform duration-700 group-hover:scale-150" />
                        <div className="w-14 h-14 bg-white/[0.06] rounded-2xl flex items-center justify-center text-gold relative z-10">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-serif relative z-10">
                            Our Mission
                        </h3>
                        <p className="text-white/90 leading-relaxed font-medium text-xl italic font-serif relative z-10">
                            &ldquo;To connect people to destinations, cultures and
                            experiences exceeding expectations through expert
                            guidance, excellent service and reliable support.&rdquo;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Clients */}
            <section className="py-32 px-6 md:px-10 bg-sand">
                <div className="max-w-[1400px] mx-auto space-y-16">
                    <div className="text-center space-y-5 max-w-xl mx-auto">
                        <p className="text-label text-gold">Trusted Partnerships</p>
                        <h2 className="text-3xl md:text-5xl font-serif text-midnight">Key Relationships</h2>
                        <p className="text-midnight/80 font-normal">Industry leaders we support across Southern Africa.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Sarens Zambia", "Southin", "Batati Innovations", "North Western Chamber",
                            "United Church of Zambia", "Atutonke Investments", "NetFlow Energies",
                            "Reeluka Investments", "Happy Anna Farms", "Trident College",
                            "Martin House School", "International School of Lusaka", "ITS Southin",
                            "SANVIC Mining", "Bwacha Mining", "Cefao"
                        ].map((client, idx) => (
                            <motion.div
                                key={client}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.04 }}
                                className="flex items-center justify-center p-8 bg-white rounded-2xl border border-midnight/[0.04] hover:border-gold/15 transition-all duration-500 group"
                            >
                                <span className="text-[10px] font-bold text-midnight/50 tracking-[0.14em] uppercase text-center font-sans group-hover:text-gold transition-colors">
                                    {client}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
