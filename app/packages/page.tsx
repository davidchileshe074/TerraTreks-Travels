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
    <main className="relative min-h-screen bg-white">
      {/* Cinematic Hero Header – Enhanced contrast & responsiveness */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-end overflow-hidden bg-primary">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1523805081326-6468447d9688?auto=format&fit=crop&q=80&w=2400"
            alt="Luxury African safari landscape – Signature Journeys"
            fill
            priority
            className="object-cover brightness-[0.7] contrast-[1.1]"
          />
        </motion.div>

        {/* Stronger overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/30 z-[1]" />
        <div className="absolute inset-0 bg-black/35 z-[1]" />
        <div className="absolute inset-0 film-grain opacity-15 z-[2]" />

        <div className="relative z-10 container-wide px-6 md:px-10 pb-20 md:pb-32 pt-16 md:pt-0 flex items-end">
          <div className="max-w-4xl space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-white/90 drop-shadow-md">
                The 2024 Collection
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-[0.9] drop-shadow-2xl [text-shadow:_2px_2px_12px_rgb(0_0_0_/_0.7)]"
            >
              Signature
              <br />
              <span className="italic font-normal opacity-90">Journeys</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="text-white/90 text-lg md:text-2xl font-serif italic max-w-3xl border-l-4 border-primary/60 pl-6 md:pl-8 drop-shadow-md leading-relaxed"
            >
              “Every itinerary is a masterpiece of logistics and luxury, curated to reveal the soul of Africa.”
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator – Hide on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 right-12 z-20 hidden md:flex items-center gap-6"
        >
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/90 [writing-mode:vertical-rl] rotate-180">
            Scroll to explore
          </span>
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Collection Grid – Improved readability & mobile layout */}
      <section className="section-padding py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container-wide space-y-16 md:space-y-24 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
            <div className="max-w-2xl space-y-5">
              <p className="section-label text-primary text-sm md:text-base">Masterpiece Collection</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-midnight leading-tight tracking-tight">
                Architected for
                <br />
                <span className="italic font-normal opacity-80">Discovery</span>
              </h2>
            </div>
            <div className="max-w-xs space-y-6">
              <p className="text-midnight/80 text-base md:text-lg leading-relaxed font-medium">
                A curated selection of the continent's most whispered-about experiences.
              </p>
              <div className="h-px w-full bg-midnight/10" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: idx * 0.08 }}
                className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 min-h-[520px] md:min-h-[580px]"
              >
                {/* Image Container */}
                <div className="relative h-80 md:h-[450px] overflow-hidden flex-shrink-0">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.title} – Luxury safari in ${pkg.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:via-black/30 transition-all duration-700" />

                  {/* Top Metadata */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                    <span className="px-4 py-2 bg-primary/90 text-white text-xs md:text-sm font-bold tracking-wider uppercase rounded">
                      {pkg.tag}
                    </span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  {/* Bottom Metadata */}
                  <div className="absolute bottom-6 left-6 right-6 space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex flex-wrap items-center gap-4 md:gap-6">
                      <span className="flex items-center gap-2 text-white/90 text-xs md:text-sm font-bold tracking-wide uppercase">
                        <MapPin className="w-4 h-4" />
                        {pkg.location}
                      </span>
                      <span className="flex items-center gap-2 text-white/90 text-xs md:text-sm font-bold tracking-wide uppercase">
                        <Clock className="w-4 h-4" />
                        {pkg.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-tight tracking-tight drop-shadow-md">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Pricing Strip */}
                <div className="p-6 md:p-8 mt-auto flex items-center justify-between border-t border-gray-100">
                  <div className="space-y-1">
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500">Investment from</p>
                    <p className="text-xl md:text-2xl font-serif text-midnight font-medium">{pkg.price}</p>
                  </div>
                  <Link
                    href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                    className="text-sm md:text-base font-semibold tracking-wide text-midnight hover:text-primary border-b border-midnight/20 pb-1 hover:border-primary transition-all duration-300"
                  >
                    Inquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resident Specials Integration */}
      <LocalOffersSection />

      {/* Call to Action Divider – Responsive & polished */}
      <section className="py-24 md:py-40 bg-white text-center container-wide relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-primary/30 mx-auto opacity-50" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-midnight leading-tight">
            Looking for something <br className="hidden sm:block" />
            <span className="text-primary font-normal not-italic">truly unique?</span>
          </h2>
          <p className="text-midnight/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Our private consultants are specialists in crafting completely bespoke itineraries tailored to your specific vision.
          </p>
          <div className="pt-6 md:pt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 text-sm md:text-base font-bold tracking-[0.3em] uppercase text-midnight hover:text-primary transition-colors"
            >
              Begin Custom Design
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}