"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Award, HeartHandshake } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: ShieldCheck,
        title: "Expert Consultants",
        description:
            "Experienced, trained travel consultants who prioritise your safety and the absolute value of your journey.",
    },
    {
        icon: Calendar,
        title: "Bespoke Itineraries",
        description:
            "Custom-crafted travel plans that save you time and reduce the hassle of complex logistics.",
    },
    {
        icon: Award,
        title: "Best Value",
        description:
            "Leveraging vast industry networks and negotiated supplier rates to provide the finest value.",
    },
    {
        icon: HeartHandshake,
        title: "24/7 Support",
        description:
            "On-the-move assistance and rapid problem-solving for travellers, wherever you are in the world.",
    },
];

export const WhyChooseUs = () => {
    return (
        <section className="py-32 px-6 md:px-10 bg-sand overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800"
                            alt="Luxury Safari Lodge"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-8 -right-8 hidden md:block w-64 aspect-square rounded-2xl overflow-hidden border-[6px] border-sand shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?auto=format&fit=crop&q=80&w=800"
                            alt="Safari Dining"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Content */}
                <div className="space-y-12">
                    <div className="space-y-5">
                        <p className="text-label text-gold">
                            The TerraTreks Advantage
                        </p>
                        <h2 className="text-4xl md:text-6xl font-serif text-midnight leading-[0.95]">
                            Crafting Memories
                            <br />
                            <span className="text-primary italic">
                                That Last Forever
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="space-y-4"
                            >
                                <div className="w-11 h-11 bg-primary/[0.06] rounded-xl flex items-center justify-center text-primary">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-serif font-semibold text-midnight">
                                    {feature.title}
                                </h3>
                                <p className="text-midnight/80 text-sm leading-relaxed font-normal">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
