"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import localOffers from "@/data/local-offers.json";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const LocalOffersSection = () => {
  return (
    <section className="section-padding py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Background texture – reduced opacity for better text visibility */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
      </div>
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container-wide relative z-10">
        {/* Header – Responsive typography */}
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10 items-center flex flex-col mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-lg border border-white/30 bg-white/10 text-white text-xs font-semibold tracking-wide uppercase"
          >
            <Sparkles className="w-4 h-4" />
            Citizen & Resident Exclusives
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tighter leading-[1] drop-shadow-lg [text-shadow:_2px_2px_10px_rgb(0_0_0_/_0.6)]"
            >
              The Beauty of
              <br />
              <span className="italic font-normal opacity-90">Your Backyard</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
            >
              Refined escapes architected specifically for our local community. Experience the summit of luxury with curated resident-only privilege.
            </motion.p>
          </div>
        </div>

        {/* Offers – Better mobile stacking & readability */}
        <div className="space-y-24 md:space-y-32">
          {localOffers.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-20",
                idx % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Image – Added overlay for text if needed */}
              <div className="relative w-full lg:w-1/2 aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
                <Image
                  src={offer.image}
                  alt={`${offer.title} – Luxury local offer in ${offer.location}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>

              {/* Content – Improved spacing & text shadows */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <div className="space-y-3 md:space-y-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-white text-xs md:text-sm font-semibold tracking-wide uppercase">
                    {offer.tag}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight drop-shadow-md">
                    {offer.title}
                  </h3>
                  <div className="flex items-center gap-3 md:gap-4 text-white/90 text-sm md:text-base font-medium">
                    <MapPin className="w-5 h-5" />
                    {offer.location}
                  </div>
                </div>

                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl drop-shadow-sm">
                  {offer.description}
                </p>

                {/* Rates */}
                <div className="space-y-4 md:space-y-6 border-t border-white/20 pt-6 md:pt-8">
                  <h4 className="text-sm md:text-base font-semibold tracking-wide uppercase text-white/90 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Exclusive Rates
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {offer.rates.map((rate) => (
                      <div key={rate.type} className="p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 space-y-2 hover:border-white/30 transition-all">
                        <span className="block text-sm md:text-base font-medium text-white/80 uppercase tracking-wide">{rate.type}</span>
                        <span className="block text-2xl md:text-3xl font-serif text-white drop-shadow-sm">{offer.currency} {rate.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Experiences – Responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-sm md:text-base font-semibold tracking-wide uppercase text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-white/80" />
                      Inclusions
                    </h4>
                    <ul className="space-y-3">
                      {(offer.inclusions || []).slice(0, 4).map((inc, iIdx) => (
                        <li key={iIdx} className="text-sm md:text-base text-white/80 flex items-center gap-2 font-medium drop-shadow-sm">
                          <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-sm md:text-base font-semibold tracking-wide uppercase text-white/90">
                      <Sparkles className="w-5 h-5 text-white/80" />
                      Experiences
                    </h4>
                    <ul className="space-y-3">
                      {(offer.experiences || []).slice(0, 4).map((exp, eIdx) => (
                        <li key={eIdx} className="text-sm md:text-base text-white/80 flex items-center gap-2 font-medium drop-shadow-sm">
                          <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 md:pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center gap-4 md:gap-8">
                  <Link
                    href={`/contact?offer=${encodeURIComponent(offer.title)}`}
                    className="group inline-flex items-center gap-3 md:gap-4 bg-white text-primary rounded-lg px-8 md:px-12 py-4 md:py-6 text-sm md:text-base font-semibold tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-all duration-500 w-full sm:w-auto text-center justify-center shadow-md"
                  >
                    Inquire Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-xs md:text-sm font-medium tracking-wide uppercase text-white/90">Terms & Conditions Apply</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};