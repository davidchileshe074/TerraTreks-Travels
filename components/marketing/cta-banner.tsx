"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const CTABanner = () => {
    return (
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
            <Image
                src="/images/lower-zambezi.png"
                alt="CTA Background"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-safari-blue/60 z-10" />

            <div className="relative z-20 text-center px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-serif text-white mb-8"
                >
                    Your Extraordinary <span className="italic">Journey</span> Starts Here
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="/contact"
                        className="px-10 py-5 bg-gold text-white rounded-full text-xs font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-safari-blue transition-all duration-300 shadow-2xl"
                    >
                        Request a Bespoke Itinerary
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
