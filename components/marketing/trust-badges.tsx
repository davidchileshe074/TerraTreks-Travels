"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "500+", label: "Guests Yearly" },
    { value: "4.9", label: "Rating" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Custom" },
];

const clients = [
    "Sarens Zambia",
    "Southin",
    "Batati Innovations",
    "North Western Chamber",
    "Trident College",
    "International School of Lusaka",
    "SANVIC Mining",
    "Cefao",
];

export const TrustBadges = () => {
    return (
        <section className="py-24 px-6 md:px-10 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto space-y-20">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="text-center space-y-2 p-8 rounded-2xl bg-sand/50"
                        >
                            <span className="text-4xl md:text-5xl font-serif font-bold text-primary">
                                {stat.value}
                            </span>
                            <span className="block text-label text-midnight/85">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Client trust strip */}
                <div className="space-y-8">
                    <p className="text-label text-center text-midnight/75 uppercase tracking-[0.2em]">
                        Trusted by leading organizations
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {clients.map((client, idx) => (
                            <motion.div
                                key={client}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-center justify-center p-6 rounded-2xl border border-midnight/[0.04] hover:border-gold/20 transition-all duration-500 bg-sand/10"
                            >
                                <span className="text-[11px] font-bold text-midnight/75 tracking-[0.15em] uppercase text-center font-sans hover:text-gold transition-colors duration-300">
                                    {client}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
