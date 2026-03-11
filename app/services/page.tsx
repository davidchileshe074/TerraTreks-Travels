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
    description: "International & domestic bookings with real-time fares, flexible changes and full support.",
    icon: Plane,
    tag: "Global"
  },
  {
    title: "Elite Accommodation",
    description: "Handpicked luxury lodges, boutique hotels & private retreats for comfort and seclusion.",
    icon: Building2,
    tag: "Bespoke"
  },
  {
    title: "Visa & Permit Assistance",
    description: "Expert guidance, document preparation and follow-up for smooth visa & entry processes.",
    icon: FileCheck,
    tag: "Expert"
  },
  {
    title: "Tailor-Made Itineraries",
    description: "Fully custom journeys shaped around your interests, timing, group size and budget.",
    icon: Map,
    tag: "Unique"
  },
  {
    title: "Private Transfers & Ground Transport",
    description: "Reliable, comfortable and discreet airport & inter-destination transfers.",
    icon: Bus,
    tag: "Seamless"
  },
  {
    title: "Corporate & Group Travel",
    description: "End-to-end business travel management, negotiated rates and event logistics.",
    icon: Briefcase,
    tag: "B2B"
  },
  {
    title: "Comprehensive Travel Insurance",
    description: "Medical, cancellation, delay & baggage coverage through trusted international partners.",
    icon: ShieldPlus,
    tag: "Protected"
  },
  {
    title: "24/7 Concierge & Emergency Support",
    description: "Round-the-clock assistance for changes, emergencies and special requests.",
    icon: Headset,
    tag: "Always On"
  },
  {
    title: "Flexible Payment Plans",
    description: "Convenient travel payment options allowing clients to pay in instalments.",
    icon: CreditCard,
    tag: "Flexible"
  },
  {
    title: "Conference & Event Coordination",
    description: "Complete logistics for corporate retreats, incentives, workshops and celebrations.",
    icon: Users,
    tag: "Events"
  },
  {
    title: "Travel Advisory Services",
    description: "Expert guidance on travel requirements, destinations, and safety tips.",
    icon: Info,
    tag: "Informed"
  },
  {
    title: "Digital Nomad & Long-Stay Planning",
    description: "Extended-stay arrangements, reliable connectivity and work-friendly locations.",
    icon: Laptop,
    tag: "Remote"
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-white text-[#0F2647]">
      {/* ── Hero ── */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-end overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=85&w=2400"
            alt="Luxury African travel experience"
            fill
            priority
            className="object-cover brightness-[0.62] contrast-[1.08] saturate-[0.92]"
            quality={82}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2647]/90 via-[#0F2647]/65 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 w-full px-5 sm:px-8 pb-16 sm:pb-24 md:pb-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="space-y-5 sm:space-y-7"
          >
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-white/90">
              COMPREHENSIVE TRAVEL SOLUTIONS
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
              Professional Travel
              <br />
              <span className="italic font-normal text-[#D4AF37]/95">Ecosystem</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-3xl mt-4 md:mt-6">
              One trusted partner for flights, luxury stays, visas, transfers, insurance, flexible payment terms and 24/7 support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 sm:py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F2647] tracking-tight">
              Every Element of Your Journey
              <span className="block text-[#D4AF37] italic font-normal mt-2 md:mt-3">Covered with Precision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {allServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.07, duration: 0.75 }}
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-400 overflow-hidden flex flex-col min-h-[320px] sm:min-h-[340px]"
              >
                <div className="p-6 sm:p-7 md:p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0F2647]/5 rounded-xl flex items-center justify-center group-hover:bg-[#0F2647] transition-colors duration-400">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0F2647] group-hover:text-white transition-colors" strokeWidth={1.6} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 group-hover:text-[#0F2647]/80 transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F2647] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="text-sm sm:text-base font-semibold text-[#0F2647] hover:text-[#D4AF37] transition-colors flex items-center gap-2 group-hover:gap-3"
                    >
                      Enquire <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strong CTA Banner ── */}
      <section className="py-20 md:py-32 bg-[#0F2647] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_70%,#D4AF37_0%,transparent_50%)]" />

        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10 space-y-8 md:space-y-10">
          <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-[#D4AF37]/80 mx-auto" />

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
            Your Journey.
            <br />
            <span className="italic font-normal text-[#D4AF37]">Architected Personally.</span>
          </h2>

          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            We go far beyond booking — we create travel strategies tailored to your exact needs, timeline and aspirations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-8 pt-4 md:pt-6">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-[#0F2647] font-bold text-base sm:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full shadow-xl hover:bg-[#b8972e] hover:shadow-2xl transition-all duration-300"
            >
              Schedule a Personal Consultation
            </Link>

            <a
              href="tel:+260764178388"
              className="border-2 border-white/40 text-white font-semibold text-base sm:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Call an Expert Now
            </a>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}