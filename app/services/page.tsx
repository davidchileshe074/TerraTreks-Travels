"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { ProcessSteps } from "@/components/marketing/process-steps";
import {
  Plane, Building2, FileCheck, Map, Bus, Briefcase,
  ShieldPlus, Headset, CreditCard, Users, Info, Laptop,
  ArrowRight, Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const allServices = [
  {
    title: "Flight Reservations",
    description: "International and domestic flight bookings with flexible fare options and full travel support.",
    icon: Plane,
    tag: "Global"
  },
  {
    title: "Elite Accommodation",
    description: "Luxury lodges and boutique hotels curated for comfort and absolute privacy.",
    icon: Building2,
    tag: "Bespoke"
  },
  {
    title: "Visa Assistance",
    description: "Professional guidance and document support to help you navigate global requirements.",
    icon: FileCheck,
    tag: "Expert"
  },
  {
    title: "Tailor-Made Packages",
    description: "Custom travel itineraries designed around your interests, schedule, and budget.",
    icon: Map,
    tag: "Unique"
  },
  {
    title: "Airport Transfers",
    description: "Safe, timely, and comfortable transfers for stress-free arrivals and departures.",
    icon: Bus,
    tag: "Elite"
  },
  {
    title: "Corporate Management",
    description: "End-to-end business travel solutions with negotiated corporate rates and coordination.",
    icon: Briefcase,
    tag: "B2B"
  },
  {
    title: "Travel Insurance",
    description: "Authorised agents offering coverage for medical, cancellation, and luggage protection.",
    icon: ShieldPlus,
    tag: "Secure"
  },
  {
    title: "24/7 Executive Support",
    description: "Round-the-clock assistance for travel changes, emergencies, and concierge needs.",
    icon: Headset,
    tag: "Support"
  },
  {
    title: "Flexible Financing",
    description: "Convenient travel financing and flexible payment options on selected services.",
    icon: CreditCard,
    tag: "Finance"
  },
  {
    title: "Event Coordination",
    description: "Full logistics for conferences, workshops, retreats, and luxury corporate events.",
    icon: Users,
    tag: "Events"
  },
  {
    title: "Travel Advisory",
    description: "Expert insights into safety, cultural protocols, and entry requirements.",
    icon: Info,
    tag: "Insight"
  },
  {
    title: "Digital Nomad Services",
    description: "Travel planning for remote professionals, including connectivity and long-term stays.",
    icon: Laptop,
    tag: "Modern"
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Cinematic Hero – Improved contrast & responsiveness */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-end overflow-hidden bg-primary">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2400"
            alt="TerraTreks Services – Luxury Travel Experiences"
            fill
            priority
            className="object-cover brightness-[0.65] contrast-[1.1]"
          />
        </motion.div>

        {/* Stronger overlay layers for reliable text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/40 z-[1]" />
        <div className="absolute inset-0 bg-black/35 z-[1]" />
        <div className="absolute inset-0 noise-overlay opacity-20 z-[2]" />

        <div className="relative z-10 container-wide pb-20 md:pb-32 pt-16 md:pt-0 flex items-end">
          <div className="max-w-4xl space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-white/90 drop-shadow-md">
                360° Travel Ecosystem
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-[0.9] drop-shadow-2xl [text-shadow:_2px_2px_10px_rgb(0_0_0_/_0.7)]"
            >
              Professional
              <br />
              <span className="italic font-normal opacity-90">Ecosystem</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Services Grid – Modern, readable, responsive */}
      <section className="section-padding bg-white relative overflow-hidden py-16 md:py-24">
        <div className="absolute top-20 left-0 opacity-[0.03] pointer-events-none select-none">
          <span className="text-[16rem] md:text-[20rem] font-serif font-black italic">Solutions</span>
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {allServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.9 }}
                className="group relative bg-white p-6 md:p-8 lg:p-10 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-xl transition-all duration-500 flex flex-col min-h-[340px] md:min-h-[360px]"
              >
                <div className="space-y-6 flex-1">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon strokeWidth={1.5} className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                    <span className="text-xs font-semibold tracking-wide uppercase text-gray-400">{service.tag}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-serif text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="pt-6 mt-auto flex items-center justify-between border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="text-sm md:text-base font-semibold text-gray-900 hover:text-primary transition-colors duration-300"
                  >
                    Enquire Now
                  </Link>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High Impact Consultation CTA */}
      <section className="py-24 md:py-40 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-30" />
        <div className="container-wide text-center relative z-10 space-y-10 md:space-y-12">
          <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-white/90 mx-auto" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tighter leading-[0.9] max-w-5xl mx-auto drop-shadow-lg">
            Your Strategy,
            <br />
            <span className="italic font-normal opacity-90">Individually Architected</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            We don't just provide travel services; we design travel strategies. Our consultants are ready to handle the logistics so you can focus on the journey.
          </p>
          <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            <Link
              href="/contact"
              className="bg-white text-primary rounded-lg px-8 md:px-12 py-4 md:py-6 text-sm md:text-base font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase hover:bg-gray-900 hover:text-white transition-all duration-500 shadow-xl w-full sm:w-auto"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+260979189370"
              className="text-white/90 hover:text-white transition-colors text-sm md:text-base font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase"
            >
              Speak to an Expert
            </a>
          </div>
        </div>
      </section>
            <ProcessSteps/>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}