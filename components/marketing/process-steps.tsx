"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Begin the Conversation",
        description:
            "Tell us about your dream journey — where, when, and who's travelling. We'll take it from there.",
    },
    {
        number: "02",
        title: "We Design Your Journey",
        description:
            "Our experts craft a bespoke itinerary tailored to your preferences, experiences, and budget.",
    },
    {
        number: "03",
        title: "Refine Every Detail",
        description:
            "We polish every element until the journey feels perfect — flights, lodges, activities, transfers.",
    },
    {
        number: "04",
        title: "Experience Africa",
        description:
            "Your adventure begins. With 24/7 support and local expertise, every moment is taken care of.",
    },
];

export const ProcessSteps = () => {
    return (
        <section className="section-padding bg-primary overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] bg-white/[0.02] rounded-none blur-[120px] pointer-events-none" />

            <div className="container-wide relative z-10 space-y-32">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/10 pb-16">
                    <div className="max-w-2xl space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold tracking-[0.4em] uppercase text-white/80"
                        >
                            The Methodology
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-title text-white"
                        >
                            Orchestrating
                            <br />
                            <span className="italic font-normal opacity-80">Excellence</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-desc text-white/70 max-w-sm mb-2"
                    >
                        A seamless, four-phase transition from aspiration to reality, handled with precision and local insight.
                    </motion.p>
                </div>

                {/* Steps Horizontal Connection */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Continuous horizontal line for LG screens */}
                    <div className="absolute top-10 left-0 w-full h-px bg-white/10 hidden lg:block" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: idx * 0.15,
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative space-y-10"
                        >
                            {/* Connector Circle */}
                            <div className="relative z-10 w-20 h-20 rounded-none bg-primary border border-white/10 flex items-center justify-center group-hover:border-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-700">
                                <span className="text-2xl font-serif font-bold text-white transition-colors">
                                    {step.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-white transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed font-sans font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
