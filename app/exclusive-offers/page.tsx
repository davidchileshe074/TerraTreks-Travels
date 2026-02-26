"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { LocalOffersSection } from "@/components/marketing/local-offers-section";
import Image from "next/image";

export default function ExclusiveOffersPage() {
    return (
        <main className="relative min-h-screen">
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center overflow-hidden bg-midnight">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/kkia-jump.jpg"
                        alt="Zambian Resident Specials"
                        fill
                        priority
                        className="object-cover opacity-60"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/40 to-midnight z-[1]" />

                <div className="relative z-10 container-wide">
                    <div className="max-w-3xl space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-10 h-px bg-gold" />
                            <span className="section-label mb-0 text-gold lowercase first-letter:uppercase">
                                Limited Time Resident Rates
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 1 }}
                            className="hero-title"
                        >
                            Local Resident
                            <br />
                            <span className="text-gold italic font-light">Special Offers</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="section-desc text-white/70"
                        >
                            Experience the best of Zambia with exclusive pricing designed specifically for our local residents. Adventure awaits right at your doorstep.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* The main content section */}
            <div className="bg-midnight -mt-1">
                <LocalOffersSection />
            </div>

            {/* FAQ or T&C Section if needed */}
            <section className="section-padding px-6 md:px-10 bg-midnight border-t border-white/[0.05]">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="section-title text-white">Booking Information</h2>
                    <p className="section-desc text-white/60 mx-auto">
                        All rates shown are in <span className="text-gold font-bold">Zambian Kwacha (ZMW)</span> and are valid for Zambian citizens and residents.
                        Proof of residency may be required upon check-in. Availability is limited, especially for peak dates and holidays.
                        We recommend booking in advance to secure these exclusive rates.
                    </p>
                    <div className="pt-4">
                        <p className="footer-meta">
                            TerraTreks Travel &copy; 2026 • Curated with Excellence
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
