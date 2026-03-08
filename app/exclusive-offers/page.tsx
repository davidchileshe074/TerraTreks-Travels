"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { LocalOffersSection } from "@/components/marketing/local-offers-section";
import Image from "next/image";
import Link from "next/link";
import { Plane, MapPin, Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";


export default function ExclusiveOffersPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Hero Header – Improved visibility & responsiveness */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-end overflow-hidden bg-primary">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/kkia-jump.jpg"
            alt="Zambian resident enjoying luxury safari experience"
            fill
            priority
            className="object-cover brightness-[0.65] contrast-[1.1]"
          />
        </motion.div>

        {/* Stronger, layered overlay for reliable text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/40 z-[1]" />
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div className="absolute inset-0 noise-overlay opacity-15 z-[2]" />

        <div className="relative z-10 container-wide px-6 md:px-10 pb-16 md:pb-24 pt-12 md:pt-0 flex items-end">
          <div className="max-w-4xl space-y-6 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-px bg-white/40" />
              <span className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase text-white/90 drop-shadow-md">
                Zambian Resident Exclusive
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tighter leading-[0.92] drop-shadow-2xl [text-shadow:_2px_2px_12px_rgb(0_0_0_/_0.7)]"
            >
              Local Resident
              <br />
              <span className="italic font-normal opacity-90">Special Offers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.4 }}
              className="text-white/90 text-base md:text-xl leading-relaxed max-w-2xl drop-shadow-md"
            >
              Exclusive resident pricing on Zambia's finest safari lodges, Victoria Falls experiences, and luxury escapes — designed for Zambian citizens and residents.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Offers Content */}
      <div className="bg-primary -mt-1">
        <LocalOffersSection />
      </div>

      {/* Global Flight Specials Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase"
            >
              <Plane className="w-4 h-4" />
              Global Partner Specials
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif text-midnight tracking-tight">
              Fly Better with <span className="italic">TerraTreks</span>
            </h2>
            <p className="text-midnight/60 text-lg max-w-2xl mx-auto font-medium">
              We&apos;ve secured exclusive rates with our premium airline partners. Explore starting prices from major global hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                airline: "Emirates",
                logo: "/images/emirates-special-offer.jpg",
                tagline: "Experience the World Class",
                deals: [
                  { hub: "London Heathrow", code: "LHR", price: "$1,170" },
                  { hub: "London Gatwick", code: "LGW", price: "$1,133" },
                  { hub: "Manchester", code: "MAN", price: "$1,251" },
                  { hub: "Birmingham", code: "BHX", price: "$1,330" },
                  { hub: "Edinburgh", code: "EDI", price: "$1,392" },
                ]
              },
              {
                airline: "Qatar Airways",
                logo: "/images/qatar-airways-offer.jpg",
                tagline: "The World's Best Airline",
                deals: [
                  { hub: "London Gatwick", code: "LGW", price: "$909" },
                  { hub: "London Heathrow", code: "LHR", price: "$949" },
                  { hub: "Edinburgh", code: "EDI", price: "$1,174" },
                  { hub: "Manchester", code: "MAN", price: "$1,197" },
                  { hub: "Birmingham", code: "BHX", price: "$1,207" },
                ]
              },
              {
                airline: "Ethiopian Airlines",
                logo: "/images/ethiopian-airlines-special.jpg",
                tagline: "The New Spirit of Africa",
                deals: [
                  { hub: "London Heathrow", code: "LHR", price: "$962" },
                  { hub: "London Gatwick", code: "LGW", price: "$1,054" },
                  { hub: "Manchester", code: "MAN", price: "$1,259" },
                ]
              }
            ].map((airline, idx) => (
              <motion.div
                key={airline.airline}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-midnight/5 border border-midnight/5 flex flex-col group"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={airline.logo}
                    alt={`${airline.airline} Special Offer`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-serif text-white">{airline.airline}</h3>
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest">{airline.tagline}</p>
                  </div>
                </div>

                {/* Pricing Table */}
                <div className="p-8 flex-grow space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-midnight/5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-midnight/40">Departure Hub</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-midnight/40">From Rate</span>
                  </div>
                  <div className="space-y-4">
                    {airline.deals.map((deal) => (
                      <div key={deal.code} className="flex items-center justify-between group/line">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-midnight leading-none">{deal.hub}</span>
                          <span className="text-[10px] font-medium text-midnight/30 uppercase">{deal.code} Airport</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-serif text-primary font-bold">{deal.price}</span>
                          <ArrowUpRight className="w-4 h-4 text-primary/0 group-hover/line:text-primary/100 transition-all" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/contact?airline=${encodeURIComponent(airline.airline)}`}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-midnight text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-primary transition-colors duration-500"
                  >
                    Lock in this rate <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information / T&C Section – Cleaner & more readable */}
      <section className="section-padding py-16 md:py-24 bg-primary border-t border-white/10">
        <div className="container-wide max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight drop-shadow-md"
          >
            Important Booking Information
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/85 text-base md:text-lg leading-relaxed max-w-3xl mx-auto drop-shadow-sm"
          >
            All displayed rates are in <span className="font-semibold text-white">Zambian Kwacha (ZMW)</span> and are exclusively available to Zambian citizens and legal residents.
            Valid proof of residency (e.g., NRC, passport with Zambian residence permit) may be requested at check-in.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
          >
            Availability is limited — especially during peak seasons, public holidays, and school breaks. We strongly recommend early booking to secure these special resident rates.
          </motion.p>

          <div className="pt-6 md:pt-8">
            <p className="text-xs md:text-sm font-medium tracking-wide text-white/70">
              TerraTreks Travel © {new Date().getFullYear()} • Designed & Curated in Zambia
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}