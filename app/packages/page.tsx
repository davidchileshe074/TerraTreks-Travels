"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import packages from "@/data/packages.json";
import { MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LocalOffersSection } from "@/components/marketing/local-offers-section";

export default function PackagesPage() {
  return (
    <main className="relative min-h-screen bg-white text-[#0F2647]">
      {/* ── Hero ── */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-end overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/company teretrek image.jpg"
            alt="Terratreks Signature Journey"
            fill
            priority
            className="object-cover object-[center_30%] brightness-[0.62] contrast-[1.08] saturate-[0.9]"
            quality={82}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2647]/90 via-[#0F2647]/60 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 w-full px-5 sm:px-8 pb-16 sm:pb-24 md:pb-32 max-w-6xl mx-auto">
          <div className="max-w-4xl space-y-6 md:space-y-10">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="inline-block text-[#D4AF37] text-xs sm:text-sm font-bold tracking-[0.4em] uppercase"
            >
              2025 Signature Collection
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[0.92] tracking-tight drop-shadow-2xl"
            >
              Signature
              <br />
              <span className="italic font-normal text-[#D4AF37]">Journeys</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.4 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 font-serif italic max-w-3xl border-l-4 border-[#D4AF37]/60 pl-6 md:pl-8 leading-relaxed"
            >
              “Every itinerary is a masterpiece — curated to reveal the authentic soul of Africa.”
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Packages Grid ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16 mb-16 md:mb-24">
            <div className="max-w-3xl space-y-5 md:space-y-7">
              <p className="text-[#D4AF37] text-sm md:text-base font-bold tracking-[0.35em] uppercase">
                Curated Masterpieces
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                Architected for
                <span className="block md:inline italic text-[#D4AF37] ml-3 md:ml-4 font-normal">
                  Discovery
                </span>
              </h2>
            </div>

            <p className="text-[#0F2647]/80 text-base md:text-lg leading-relaxed max-w-md">
              A handpicked selection of Africa’s most exclusive and whispered-about experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9 lg:gap-12">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.9 }}
                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Image + Overlay */}
                <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-gradient-to-br from-[#0F2647] to-[#1A3A6A]">
                  {pkg.image ? (
                    <Image
                      src={pkg.image}
                      alt={`${pkg.title} – ${pkg.location}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-[1.08]"
                      quality={80}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/40 text-xl font-bold">
                      {pkg.location}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Tag + Hover Arrow */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                    <span className="px-4 py-2 bg-[#D4AF37] text-[#0F2647] text-xs md:text-sm font-bold uppercase rounded-full shadow-md">
                      {pkg.tag || "Signature"}
                    </span>

                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-400 transform group-hover:scale-110">
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-center gap-5 md:gap-6 mb-4 text-white/90 text-sm md:text-base">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {pkg.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {pkg.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight drop-shadow-md">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="p-6 md:p-8 mt-auto flex items-center justify-between border-t border-gray-100">
                  <div>
                    <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-gray-500">
                      From
                    </p>
                    <p className="text-2xl md:text-3xl font-serif font-bold text-[#0F2647]">
                      {pkg.price}
                    </p>
                  </div>

                  <Link
                    href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                    className="group inline-flex items-center gap-2 text-sm md:text-base font-semibold text-[#0F2647] hover:text-[#D4AF37] transition-colors"
                  >
                    Inquire Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LocalOffersSection />

      {/* ── Custom CTA ── */}
      <section className="py-20 md:py-32 bg-[#0F2647] text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-8 md:space-y-12">
          <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-[#D4AF37]/70 mx-auto" />

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
            Seeking something
            <br />
            <span className="italic font-normal text-[#D4AF37]">truly bespoke?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
            Our private consultants specialize in creating completely custom journeys — shaped entirely around your vision, timeline and desires.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#D4AF37] text-[#0F2647] font-bold text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full shadow-xl hover:bg-[#b8972e] hover:shadow-2xl transition-all duration-300"
          >
            Begin Your Custom Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}