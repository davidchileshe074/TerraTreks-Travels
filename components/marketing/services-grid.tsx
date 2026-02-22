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
        <section className="py-32 px-6 md:px-10 bg-white overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto space-y-20 relative z-10">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center space-y-5">
                    <p className="text-label text-gold">
                        What We Do
                    </p>
                    <h2 className="text-5xl md:text-[4.5rem] font-serif text-midnight leading-[0.95]">
                        Comprehensive
                        <br />
                        <span className="text-primary italic">Solutions</span>
                    </h2>
                    <p className="text-midnight/85 text-base leading-relaxed font-normal max-w-lg mx-auto">
                        End-to-end travel excellence for individuals, families and
                        corporate clients.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.04,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group p-8 rounded-2xl border border-midnight/[0.04] hover:border-gold/20 bg-sand/30 hover:bg-sand transition-all duration-500 space-y-5"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/[0.06] flex items-center justify-center text-primary group-hover:bg-gold group-hover:text-midnight transition-all duration-500">
                                <service.icon className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-serif font-semibold text-midnight group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-midnight/80 text-sm leading-relaxed font-normal">
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
