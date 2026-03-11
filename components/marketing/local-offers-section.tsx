"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import localOffers from "@/data/local-offers.json";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const LocalOffersSection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-[#0F2647] text-white relative overflow-hidden">
      {/* Subtle decorative glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[60rem] h-[60rem] bg-[#D4AF37]/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[50rem] h-[50rem] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-8 md:space-y-12 mb-20 md:mb-28 lg:mb-36">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/8 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-bold tracking-[0.35em] uppercase"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            Resident & Citizen Privileges
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight"
          >
            The Beauty of
            <br />
            <span className="italic font-normal text-[#D4AF37]">Your Backyard</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed"
          >
            Exclusive escapes crafted for Zambia’s discerning residents — refined luxury with meaningful local privilege.
          </motion.p>
        </div>

        {/* Offers */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {localOffers.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24",
                idx % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Image */}
              <div className="relative w-full lg:w-1/2 aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={offer.image}
                  alt={`${offer.title} – ${offer.location}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.06]"
                  quality={82}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
                <div className="space-y-4 md:space-y-6">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/15">
                    {offer.tag}
                  </span>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                    {offer.title}
                  </h3>

                  <div className="flex items-center gap-3 text-white/90 text-base md:text-lg font-medium">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                    {offer.location}
                  </div>
                </div>

                <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
                  {offer.description}
                </p>

                {/* Rates */}
                <div className="space-y-6 md:space-y-8 pt-4 md:pt-6 border-t border-white/15">
                  <h4 className="flex items-center gap-3 text-sm md:text-base font-semibold uppercase tracking-wider text-white/90">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                    Exclusive Resident Rates
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                    {offer.rates.map((rate) => (
                      <div
                        key={rate.type}
                        className="p-5 md:p-6 bg-white/[0.06] backdrop-blur-md rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-400"
                      >
                        <span className="block text-xs md:text-sm font-medium uppercase tracking-wide text-white/80 mb-1">
                          {rate.type}
                        </span>
                        <span className="block text-2xl md:text-3xl font-serif font-bold text-white">
                          {offer.currency} {rate.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions + Experiences */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-4">
                  <div className="space-y-5">
                    <h4 className="flex items-center gap-3 text-sm md:text-base font-semibold uppercase tracking-wider text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37]/80" />
                      Inclusions
                    </h4>
                    <ul className="space-y-3">
                      {(offer.inclusions || []).slice(0, 5).map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/85 text-base">
                          <CheckCircle2 className="w-4 h-4 mt-1 text-[#D4AF37]/70 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-5">
                    <h4 className="flex items-center gap-3 text-sm md:text-base font-semibold uppercase tracking-wider text-white/90">
                      <Sparkles className="w-5 h-5 text-[#D4AF37]/80" />
                      Signature Experiences
                    </h4>
                    <ul className="space-y-3">
                      {(offer.experiences || []).slice(0, 5).map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/85 text-base">
                          <Sparkles className="w-4 h-4 mt-1 text-[#D4AF37]/70 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-8 md:pt-10 flex flex-col sm:flex-row items-center gap-6 md:gap-10 border-t border-white/15">
                  <Link
                    href={`/contact?offer=${encodeURIComponent(offer.title)}`}
                    className="group inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#0F2647] font-bold text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full shadow-xl hover:bg-[#b8972e] hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                  >
                    Inquire About This Offer
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-xs md:text-sm font-medium tracking-wide uppercase text-white/70">
                    Terms & Conditions Apply
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};