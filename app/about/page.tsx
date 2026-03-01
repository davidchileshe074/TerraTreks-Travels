"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import Image from "next/image";
import { Sparkles, Quote, Globe, Shield, Award } from "lucide-react";

const aboutImages = [
  "/images/about-1.jpeg",
  "/images/about-2.jpeg",
  "/images/about-3.jpeg",
  "/images/kkia-jump.jpg",
  "/images/safari-1.jpg",
  "/images/kkia-outside.jpg",
  "/images/safari-2.jpg",
  "/images/kkia-terminal.jpg",
  "/images/safari-3.jpg",
  "/images/safari-4.jpg",
];

const pillars = [
  {
    icon: Globe,
    title: "Local Wisdom",
    desc: "Deeply rooted in Zambian heritage with global delivery standards."
  },
  {
    icon: Shield,
    title: "Absolute Safety",
    desc: "Uncompromising focus on guest security and operational excellence."
  },
  {
    icon: Award,
    title: "Elite Partners",
    desc: "Affiliated with the world's most prestigious safari lodges and airlines."
  }
];

export default function AboutPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-white">
      {/* Cinematic Background Slider – Improved contrast & mobile scaling */}
      <section className="relative h-[80vh] md:h-screen flex items-end overflow-hidden bg-primary">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={aboutImages[current]}
              alt="TerraTreks African adventure and heritage imagery"
              fill
              priority={current === 0}
              className="object-cover brightness-[0.75] contrast-[1.05]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Stronger overlays for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div className="absolute inset-0 film-grain opacity-15 z-[2]" />

        <div className="relative z-10 container-wide px-6 md:px-10 pt-[20vh] md:pt-[25vh] pb-16 md:pb-24">
          <div className="max-w-4xl space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-white/90 drop-shadow-md">
                Established 2024
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-[0.9] drop-shadow-2xl [text-shadow:_2px_2px_12px_rgb(0_0_0_/_0.7)]"
            >
              The Soul of
              <br />
              <span className="italic font-normal opacity-90">Adventure</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="text-white/90 text-lg md:text-2xl font-serif italic max-w-3xl border-l-4 border-primary/60 pl-6 md:pl-8 drop-shadow-md leading-relaxed"
            >
              “TerraTreks was founded on a singular vision: to architect the intersection of untamed wilderness and absolute refinement.”
            </motion.p>
          </div>
        </div>
      </section>

      {/* Narrated Section – Better spacing & readability */}
      <section className="section-padding py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-10 md:top-20 right-0 opacity-[0.02] pointer-events-none select-none">
          <span className="text-[15rem] md:text-[25rem] font-serif font-black italic">Heritage</span>
        </div>

        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-center relative z-10">
          <div className="lg:col-span-6 space-y-12 md:space-y-16">
            <div className="space-y-6">
              <p className="section-label text-primary text-sm md:text-base">Our Philosophy</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-midnight leading-tight tracking-tight">
                Professional
                <br />
                <span className="italic font-normal opacity-80">Excellence</span>
              </h2>
              <div className="space-y-6 text-midnight/90 text-base md:text-lg leading-relaxed font-sans max-w-xl">
                <p>
                  TerraTreks Travels is a professional travel agency specialising in personalised, end-to-end travel solutions. We bridge the gap between local wisdom and global delivery standards.
                </p>
                <p>
                  By orchestrating seamless flight bookings, luxury accommodation, and complete itinerary management, we ensure that every journey is handled with the precision of a master architect.
                </p>
              </div>
            </div>

            {/* Pillar Grid – Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-8 border-t border-midnight/5">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="space-y-4 text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start">
                    <pillar.icon className="w-10 h-10 md:w-12 md:h-12 text-primary opacity-70" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-base md:text-lg font-bold tracking-wide uppercase text-midnight">{pillar.title}</h4>
                  <p className="text-sm md:text-base text-midnight/80 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative aspect-[4/5] md:aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about-2.jpeg"
                alt="Zambian landscape and cultural majesty"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision – Improved contrast */}
      <section className="section-padding py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-15" />
        <div className="container-wide relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-10 md:p-16 lg:p-24 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 space-y-8 hover:bg-white/[0.08] transition-all duration-500">
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-white/80 mx-auto md:mx-0" />
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-serif text-white">Our Vision</h3>
              <p className="text-xl md:text-2xl font-serif text-white/85 italic leading-relaxed drop-shadow-md">
                “To transform travel experiences through personalised expertise and genuine passion for discovery.”
              </p>
            </div>
          </div>
          <div className="p-10 md:p-16 lg:p-24 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 space-y-8 hover:bg-white/[0.08] transition-all duration-500">
            <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-white/80 mx-auto md:mx-0" />
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-serif text-white">Our Mission</h3>
              <p className="text-xl md:text-2xl font-serif text-white/85 italic leading-relaxed drop-shadow-md">
                “To connect global travelers to the soul of Africa through experiences that exceed every expectation.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid – Cleaner & responsive */}
      <section className="section-padding py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container-wide space-y-12 md:space-y-16">
          <div className="text-center space-y-6">
            <p className="section-label text-primary text-sm md:text-base">The Network</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-midnight leading-tight tracking-tight">
              Institutional <span className="italic font-normal opacity-80">Partners</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              "Sarens Zambia", "Southin", "Batati", "NW Chamber",
              "Trident", "ISL", "SANVIC", "Cefao",
              "UCZ", "Atutonke", "NetFlow", "Reeluka"
            ].map((client, idx) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.8 }}
                className="group h-24 md:h-32 flex items-center justify-center p-4 md:p-6 bg-primary/5 rounded-lg border border-midnight/5 hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              >
                <span className="text-xs md:text-sm font-bold tracking-wider uppercase text-midnight/50 group-hover:text-midnight/90 text-center transition-colors">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="pt-12 md:pt-16 text-center">
            <p className="text-sm md:text-base font-medium tracking-wide text-midnight/60 max-w-3xl mx-auto leading-relaxed">
              TerraTreks Travels operates in full compliance with Zambian travel regulations and is an active member of recognised travel industry bodies.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}