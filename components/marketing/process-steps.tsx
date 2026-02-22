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
        <section className="py-32 px-6 md:px-10 bg-primary overflow-hidden relative">
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/[0.03] to-transparent pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10 space-y-20">
                {/* Header */}
                <div className="max-w-2xl space-y-5">
                    <p className="text-label text-gold/70">
                        How It Works
                    </p>
                    <h2 className="text-4xl md:text-6xl font-serif text-white leading-[0.95]">
                        Your Journey,
                        <br />
                        <span className="text-gold italic">Four Steps</span>
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: idx * 0.12,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-700 space-y-5"
                        >
                            <span className="text-5xl font-serif font-bold text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                                {step.number}
                            </span>
                            <h3 className="text-xl font-serif text-white font-semibold">
                                {step.title}
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed font-normal">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
