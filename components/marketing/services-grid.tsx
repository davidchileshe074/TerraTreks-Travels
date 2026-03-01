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
    <section className="section-padding py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container-wide relative z-10 space-y-16 md:space-y-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div className="max-w-xl space-y-4 md:space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold tracking-[0.25em] uppercase text-primary"
            >
              Our Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight tracking-tight"
            >
              End-to-End
              <br />
              <span className="text-primary italic font-normal">Management</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md md:max-w-sm"
          >
            Beyond simple bookings, we provide a holistic travel ecosystem powered by expertise and local insight.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 flex flex-col p-6 md:p-8 min-h-[260px] md:min-h-[280px]"
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-400 mb-5 md:mb-6">
                <service.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-serif text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
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