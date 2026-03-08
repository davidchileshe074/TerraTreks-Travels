"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const destinations = [
    {
        id: 1,
        name: "South Luangwa",
        tagline: "The Valley of the Leopards",
        image: "/images/south-luangwa.png",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        name: "Victoria Falls",
        tagline: "The Smoke That Thunders",
        image: "/images/victoria-falls.png",
        className: "md:col-span-2 md:row-span-1",
    },
    {
        id: 3,
        name: "Lower Zambezi",
        tagline: "Canoe Safaris & Tiger Fishing",
        image: "/images/lower-zambezi.png",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: 4,
        name: "Kafue",
        tagline: "Untamed Wilderness",
        image: "/images/zanzibar-resort-aerial.jpg",
        className: "md:col-span-1 md:row-span-1",
    },
];

export const DestinationsMosaic = () => {
    return (
        <section className="section-spacing bg-sand/30">
            <div className="container-luxury space-y-16">
                <div className="text-center max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block"
                    >
                        unforgettable places
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif text-safari-blue leading-tight mb-6"
                    >
                        Iconic <span className="italic font-normal">Zambian</span> Destinations
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[700px]">
                    {destinations.map((dest, idx) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className={`relative group overflow-hidden rounded-2xl ${dest.className}`}
                        >
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-safari-blue/90 via-safari-blue/20 to-transparent flex flex-col justify-end p-8">
                                <p className="text-gold text-[9px] font-bold tracking-widest uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    Explore
                                </p>
                                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                                    {dest.name}
                                </h3>
                                <p className="text-white/60 text-xs font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {dest.tagline}
                                </p>
                            </div>
                            <Link href="/destinations" className="absolute inset-0 z-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
