"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { Globe, Shield, Award, Quote, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  "/images/safari-3.jpg",
  "/images/zanzibar-beach-view.jpg",
  "/images/safari-1.jpg",
  "/images/zanzibar-resort-aerial.jpg",
  "/images/kkia-terminal.jpg",
];

const pillars = [
  {
    icon: Globe,
    title: "Local Wisdom",
    desc: "Deeply rooted in Zambian heritage with global delivery standards.",
  },
  {
    icon: Shield,
    title: "Absolute Safety",
    desc: "Uncompromising focus on guest security and operational excellence.",
  },
  {
    icon: Award,
    title: "Elite Partners",
    desc: "Affiliated with the world's most prestigious safari lodges and airlines.",
  },
];

const partners = [
  { name: "CRS", domain: "crs.org" },
  { name: "ROSS", domain: "ross.com" },
  { name: "Bata Zambia", domain: "bata.co.zm" },
  { name: "North Western Chamber", domain: "nwchamber.org.zm", localLogo: "/images/NWC logo.png" },
  { name: "Trident College", domain: "trident.co.zm" },
  { name: "First Quantum", domain: "fqml.com" },
  { name: "SANVIC Mining Zambia", domain: "sandvik.com" },
  { name: "Cefao", domain: "cfao.co.zm" },
  { name: "United Church of Zambia", domain: "uczuniversity.org" },
  { name: "Government", domain: "grz.gov.zm", localLogo: "/images/grz-logo.png" },
  { name: "Sarens Zambia", domain: "sarens.com" },
  { name: "Atutonke Investments Limited", domain: "atutonke.com", localLogo: "/images/atutonke.png" },
  { name: "NetFlow Energies Investments Limited", domain: "netflow.co" },
  { name: "Reeluka Investments", domain: "reeluka.org" },
  { name: "Prudencia Travel", domain: "prudenciatravel.com", localLogo: "/images/prudential.png" },
  { name: "Best life insurance", domain: "bestlife.co.zm" },
  { name: "Travelport", domain: "travelport.com", localLogo: "/images/Travelport_idxi6gDwib_0.png" },
  { name: "ZTA", domain: "zambia.travel", localLogo: "/images/ZTA logo.jpeg" },
  { name: "Southin", domain: "southin.com", localLogo: "/images/southin.png" },
  { name: "Batati Innovations", domain: "batati.com", localLogo: "/images/batati.png" },
  { name: "Happy Anna Farms", domain: "happyannafarms.com", localLogo: "/images/happy-anna.png" },
  { name: "Martin house school", domain: "martinhouse.org", localLogo: "/images/martin-house.png" },
  { name: "International school of Lusaka", domain: "islzambia.org", localLogo: "/images/isl.png" },
  { name: "ITS Southin Contracting Ltd", domain: "southin.com", localLogo: "/images/its-southin.png" },
  { name: "Bwacha mining Systems", domain: "bwachamining.com", localLogo: "/images/bwacha.png" },
];

export default function AboutPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-[#00204A]">
      {/* ── HERO ── */}
      <section className="relative h-[80vh] md:h-screen flex items-end overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[current]}
              alt="Terratreks African journeys"
              fill
              className="object-cover brightness-[0.78] contrast-[1.04]"
              priority={current === 0}
              quality={82}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

        <div className="relative z-10 w-full px-5 sm:px-8 pb-16 sm:pb-24 md:pb-32 flex flex-col items-center text-center">
          <div className="max-w-5xl space-y-5 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-5" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/90">
                EST 2024 - SOLWEZI NORTHERN WESTERN ZAMBIA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-none drop-shadow-2xl"
            >
              The Soul of
              <br />
              <span className="text-[#D4AF37] italic">Adventure</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.2 }}
              className="mt-8 sm:mt-12"
            >
              <div className="max-w-3xl border-l-4 border-[#D4AF37] pl-6 sm:pl-8 py-2 mx-auto">
                <p className="text-white/95 text-base sm:text-lg md:text-xl font-serif italic leading-relaxed">
                  “Architecting the intersection of untamed wilderness and absolute refinement.”
                </p>
              </div>

              <div className="mt-10 sm:mt-14">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#00204A] font-bold text-sm sm:text-base md:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-xl hover:bg-[#b8972e] hover:shadow-2xl transition-all duration-300 group"
                >
                  Start Planning Your Journey
                  <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY + PILLARS ── */}
      <section className="py-20 sm:py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-sm sm:text-base font-bold tracking-widest uppercase text-[#00204A] mb-4">
              Our Philosophy
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#00204A] leading-tight">
              Professional
              <span className="italic font-normal text-[#D4AF37]"> Excellence</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center text-sm sm:text-base leading-relaxed text-[#00204A]/90 space-y-6 mb-16 md:mb-24">
            <p>
              Terratreks Travels is a professional travel agency specialising in personalised, end-to-end travel solutions — bridging local Zambian insight with international standards.
            </p>
            <p>
              From seamless flight bookings and luxury accommodations to fully managed itineraries, every journey is crafted with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="group relative p-8 md:p-10 bg-white border border-[#D4AF37]/20 rounded-2xl hover:border-[#D4AF37]/60 hover:shadow-xl transition-all duration-400 text-center"
              >
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#00204A] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-400">
                  <pillar.icon className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.8} />
                </div>
                <div className="pt-12">
                  <h3 className="text-lg md:text-xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-[#00204A]/80">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-16 md:py-20 bg-[#00204A] text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">2024</div>
            <p className="mt-3 opacity-80">Founded in Solwezi</p>
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-6">
              <img src="/iata-logo.png" alt="IATA" className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
              <img src="/taaz-logo.png" alt="TAAZ" className="h-12 sm:h-14 md:h-20 w-auto object-contain" />
              <img src="/images/ZTA logo.jpeg" alt="ZTA" className="h-12 sm:h-14 md:h-20 w-auto object-contain" />
            </div>
            <p className="opacity-90 text-sm sm:text-base font-semibold tracking-wide uppercase">Accredited & Member</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">100+</div>
            <p className="mt-3 opacity-80">Journeys Crafted</p>
          </div>
        </div>
      </section>

      {/* ── VISION, MISSION, STRATEGY, OBJECTIVES ── */}
      <section className="py-20 md:py-32 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-400 group"
            >
              <div className="w-14 h-14 bg-[#00204A]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00204A] transition-colors">
                <Quote className="w-7 h-7 text-[#00204A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-5">Our Vision</h3>
              <p className="text-base md:text-lg font-serif italic text-[#00204A]/90 leading-relaxed">
                “To transform travel through personalised expertise and genuine passion for discovery, becoming the premier window to Africa's soul.”
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-12 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-400 group"
            >
              <div className="w-14 h-14 bg-[#00204A]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00204A] transition-colors">
                <Sparkles className="w-7 h-7 text-[#00204A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-5">Our Mission</h3>
              <p className="text-base md:text-lg font-serif italic text-[#00204A]/90 leading-relaxed">
                “To connect global travelers to the soul of Africa through experiences that exceed every expectation, delivered with unwavering integrity.”
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-400"
            >
              <h3 className="text-2xl font-serif font-bold mb-3 text-[#00204A]">Our Strategy</h3>
              <p className="text-[#00204A]/80 font-serif mb-4">Terratreks focuses on delivering high-quality travel solutions through:</p>
              <ul className="space-y-3 text-[#00204A]/80 font-serif">
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">•</span> Strong global travel partnerships</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">•</span> Personalised travel planning</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">•</span> Competitive pricing through industry networks</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">•</span> Reliable travel coordination</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">•</span> Continuous customer support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-12 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-400"
            >
              <h3 className="text-2xl font-serif font-bold mb-5 text-[#00204A]">Our Objectives</h3>
              <ul className="space-y-3 text-[#00204A]/80 font-serif">
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">•</span> Deliver seamless travel experiences for individuals and organisations</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">•</span> Promote tourism opportunities locally and internationally</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">•</span> Build strong partnerships with airlines, hotels, and travel networks</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">•</span> Provide safe, reliable, and affordable travel services</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 bg-[#00204A] rounded-3xl text-white overflow-hidden relative"
          >
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">What Sets Terratreks Apart</h3>
              <ul className="space-y-4 text-white/90 text-lg font-serif">
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">✓</span> Personalised travel itineraries tailored to client needs</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">✓</span> Competitive pricing through trusted travel networks</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">✓</span> 24/7 support for travellers</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">✓</span> Experienced travel consultants</li>
                <li className="flex gap-3"><span className="text-[#D4AF37] font-bold">✓</span> Flexible payment options for selected travel packages</li>
              </ul>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm sm:text-base font-bold tracking-widest uppercase text-[#00204A] mb-4">
              Our Network
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#00204A]">
              Institutional{" "}
              <span className="italic font-normal text-[#D4AF37]">Partners</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 md:gap-8">
            {partners.map((p, i) => (
              <motion.a
                key={p.name}
                href={`https://${p.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="group flex flex-col items-center p-4 sm:p-6 bg-white border border-gray-200 rounded-xl hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="h-12 sm:h-14 w-12 sm:w-14 flex items-center justify-center mb-3">
                  <img
                    src={(p as any).localLogo || `https://www.google.com/s2/favicons?domain=${p.domain}&sz=128`}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        p.name
                      )}&background=00204A&color=D4AF37&size=128&bold=true`;
                    }}
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-center leading-tight">
                  {p.name}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16 max-w-3xl mx-auto">
            <h3 className="text-lg md:text-xl font-serif font-bold text-[#00204A] mb-3">Affiliations & Compliance</h3>
            <p className="text-sm sm:text-base text-[#00204A]/70">
              Terratreks Travels operates in compliance with Zambia travel regulations and works with recognised travel distribution systems and industry platforms to deliver the best travel solutions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}