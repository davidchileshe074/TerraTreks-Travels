"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import packages from "@/data/packages.json";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const PackagesSection = () => {
    return (
        <section className="section-spacing bg-white relative overflow-hidden">
            <div className="container-luxury space-y-16">
                {/* Header */}
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block"
                    >
                        curated collections
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif text-safari-blue leading-tight mb-6"
                    >
                        Signature <span className="italic font-normal">African</span> Experiences
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-safari-blue/60 text-lg max-w-xl"
                    >
                        Handpicked journeys that blend wild adventure with unparalleled comfort.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-sand/50"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-safari-blue/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase rounded-full">
                                        {pkg.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-gold mb-3">
                                    <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {pkg.location}</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {pkg.duration}</span>
                                </div>
                                <h3 className="text-2xl font-serif text-safari-blue mb-4 group-hover:text-gold transition-colors">
                                    {pkg.title}
                                </h3>
                                <div className="mt-auto pt-6 border-t border-sand flex items-center justify-between">
                                    <div>
                                        <p className="text-[9px] font-bold tracking-widest text-safari-blue/40 uppercase">Starting at</p>
                                        <p className="text-xl font-serif text-safari-blue">{pkg.price}</p>
                                    </div>
                                    <Link
                                        href={`/packages/${pkg.id}`}
                                        className="w-12 h-12 rounded-full border border-sand flex items-center justify-center text-safari-blue group-hover:bg-safari-blue group-hover:text-white group-hover:border-safari-blue transition-all"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center pt-8">
                    <Link
                        href="/packages"
                        className="text-xs font-bold tracking-[0.3em] uppercase text-safari-blue border-b border-sand pb-2 hover:border-gold hover:text-gold transition-all"
                    >
                        View All Collections
                    </Link>
                </div>
            </div>
        </section>
    );
};
