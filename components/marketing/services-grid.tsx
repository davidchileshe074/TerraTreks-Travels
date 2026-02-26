"use client";

import { motion } from "framer-motion";
import {
    Plane, Building2, FileCheck, Map, Bus, Briefcase,
    ShieldPlus, Headset, CreditCard, Users, Info, Laptop,
} from "lucide-react";

const services = [
    { title: "Flight Reservations", description: "International and domestic bookings with flexible fare options and reliable airline partnerships.", icon: Plane },
    { title: "Hotel & Accommodation", description: "Comfortable, well-located stays tailored to individual, corporate, and group travel needs.", icon: Building2 },
    { title: "Visa Assistance", description: "Professional guidance and document support to navigate requirements smoothly.", icon: FileCheck },
    { title: "Bespoke Tours & Cruises", description: "Customized travel experiences and cruise itineraries matched to your interests.", icon: Map },
    { title: "Airport Transfers", description: "Safe, timely and comfortable transfers ensuring stress-free arrivals and departures.", icon: Bus },
    { title: "Corporate Travel", description: "End-to-end business travel solutions with negotiated corporate rates.", icon: Briefcase },
    { title: "Travel Insurance", description: "Authorised agents for BestLife Zambia and Prudential, protecting against all risks.", icon: ShieldPlus },
    { title: "24/7 Support", description: "Round-the-clock support to assist with changes, emergencies or challenges.", icon: Headset },
    { title: "Flexible Payments", description: "Travel financing options on selected services for convenient planning.", icon: CreditCard },
    { title: "Event Planning", description: "Full event logistics, accommodation, and transfers for conferences and retreats.", icon: Users },
    { title: "Travel Advisory", description: "Expert destination insights, safety guidance and trip planning advice.", icon: Info },
    { title: "Digital Nomad", description: "Connectivity-friendly locations and long-stay solutions for remote work.", icon: Laptop },
];

export const ServicesGrid = () => {
    return (
        <section className="section-padding px-6 md:px-10 bg-white overflow-hidden relative">
            {/* Artistic Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fcfbf7] -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container-wide space-y-24 relative z-10">
                {/* Header with Side Label */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-xl space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="section-label"
                        >
                            Our Expertise
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-title"
                        >
                            End-to-End
                            <br />
                            <span className="text-primary italic font-light">Management</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-desc max-w-sm mb-2"
                    >
                        Beyond simple bookings, we provide a holistic travel ecosystem powered by expertise and local insight.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group p-10 rounded-[2rem] bg-[#F9F7F2]/50 hover:bg-white border border-midnight/[0.03] hover:border-gold/10 hover:shadow-[0_30px_60px_rgba(182,152,89,0.06)] transition-all duration-700 flex flex-col items-start gap-8"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-gold group-hover:text-midnight transition-colors duration-500">
                                <service.icon className="w-6 h-6" strokeWidth={1.2} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-serif text-midnight transition-colors group-hover:text-primary">
                                    {service.title}
                                </h3>
                                <p className="text-midnight/50 text-xs leading-relaxed font-sans font-medium tracking-wide">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
