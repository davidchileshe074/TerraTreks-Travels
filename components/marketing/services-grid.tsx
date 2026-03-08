"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Plane, Map } from "lucide-react";

const mainServices = [
  {
    title: "Luxury Safaris",
    description: "Bespoke wilderness immersions in private conservancies and iconic game reserves.",
    icon: Map,
  },
  {
    title: "Executive Travel",
    description: "Seamless, discreet logistics tailored for high-profile corporate journeys.",
    icon: Briefcase,
  },
  {
    title: "Romantic Escapes",
    description: "Intimate, unforgettable retreats crafted for couples and milestone celebrations.",
    icon: Users,
  },
  {
    title: "Private Aviation",
    description: "Charter flights and seamless connections to Africa’s most exclusive destinations.",
    icon: Plane,
  },
];

export const ServicesGrid = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#D4AF37] text-xs md:text-sm font-bold tracking-[0.35em] uppercase mb-4"
          >
            Signature Experiences
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0F2647] leading-tight"
          >
            A Symphony of
            <span className="block md:inline italic font-normal text-[#D4AF37] ml-3 md:ml-4">
              Luxury
            </span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {mainServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.8 }}
              className="group relative p-7 md:p-9 lg:p-10 rounded-2xl bg-white border border-gray-100 hover:border-[#D4AF37]/40 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6 md:mb-7">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0F2647]/5 text-[#0F2647] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-400 shadow-sm">
                  <service.icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-serif font-bold text-[#0F2647] mb-3 md:mb-4 group-hover:text-[#D4AF37] transition-colors duration-400">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Subtle hover accent line */}
              <div className="mt-6 h-0.5 w-12 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37] transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};