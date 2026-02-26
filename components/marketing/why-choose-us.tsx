"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Award, HeartHandshake } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: ShieldCheck,
        title: "Expert Consultants",
        description:
            "Experienced and professional travel consultants focused on safety, comfort, and value-focused planning.",
    },
    {
        icon: Calendar,
        title: "Personalised Itineraries",
        description:
            "Bespoke travel plans meticulously designed around your interests, schedule, and budget to reduce hassle.",
    },
    {
        icon: Award,
        title: "Competitive Pricing",
        description:
            "Leveraging strong industry partnerships and global networks to secure the most competitive rates available.",
    },
    {
        icon: HeartHandshake,
        title: "24/7 Travel Support",
        description:
            "Fast problem-solving and round-the-clock assistance for travel changes, emergencies, and unexpected challenges.",
    },
];

export const WhyChooseUs = () => {
    return (
        <section className="section-padding bg-[#F9F7F2] overflow-hidden relative">
            {/* Immersive background texture */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none grayscale brightness-110">
                <div className="absolute inset-0 bg-sand/80" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                    {/* Visual Side */}
                    <div className="lg:col-span-6 relative">
                        {/* Main Featured Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl z-10"
                        >
                            <Image
                                src="/images/south-luangwa.png"
                                alt="The Safari Experience"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-midnight/10" />
                        </motion.div>

                        {/* Floating Small Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1.2 }}
                            className="absolute -bottom-10 -right-10 w-64 aspect-[4/3] rounded-[2rem] overflow-hidden border-[8px] border-[#F9F7F2] shadow-2xl z-20 hidden md:block"
                        >
                            <Image
                                src="/images/victoria-falls.png"
                                alt="Dining in the Wild"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Decorative Shape */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-6 space-y-16">
                        <div className="space-y-6">
                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="section-label"
                            >
                                The TerraTreks Advantage
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="section-title text-5xl md:text-7xl"
                            >
                                Crafted for
                                <br />
                                <span className="text-primary italic font-light">Eternity</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="section-desc max-w-lg"
                            >
                                We don't just plan trips; we architect life-defining moments. Our advantage lies in the intersection of local wisdom and global standards.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.8 }}
                                    className="group space-y-5"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary group-hover:bg-gold group-hover:text-midnight transition-colors duration-500">
                                        <feature.icon className="w-6 h-6" strokeWidth={1.2} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-serif text-midnight group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-midnight/50 text-xs leading-relaxed font-sans font-medium">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
