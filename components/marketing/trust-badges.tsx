"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "500+", label: "Guests Yearly" },
    { value: "4.9", label: "Global Rating" },
    { value: "24/7", label: "Executive Support" },
    { value: "100%", label: "Bespoke Design" },
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
        <section className="py-32 px-6 md:px-10 bg-white overflow-hidden relative">
            <div className="container-wide space-y-32 relative z-10">
                {/* Stats Grid - Premium Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative p-12 rounded-[2.5rem] bg-[#F9F7F2]/60 hover:bg-white border border-midnight/[0.03] hover:border-gold/20 transition-all duration-700 text-center space-y-4"
                        >
                            <span className="block text-5xl md:text-7xl font-serif text-midnight/10 group-hover:text-gold/20 transition-colors duration-700 absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                                {stat.value}
                            </span>
                            <span className="relative z-10 block text-4xl md:text-5xl font-serif text-midnight tracking-tight">
                                {stat.value}
                            </span>
                            <span className="relative z-10 block text-[10px] font-bold tracking-[0.3em] uppercase text-midnight/40 font-sans">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Client Recognition */}
                <div className="space-y-16">
                    <div className="flex items-center gap-10">
                        <div className="h-px flex-1 bg-midnight/5" />
                        <p className="section-label mb-0 text-midnight/40">Trusted Partnerships</p>
                        <div className="h-px flex-1 bg-midnight/5" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
                        {clients.map((client, idx) => (
                            <motion.div
                                key={client}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 1 }}
                                className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500"
                            >
                                <span className="text-[10px] font-bold text-midnight tracking-widest uppercase text-center font-sans">
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
