"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/marketing/hero";
import { PackagesSection } from "@/components/marketing/packages-section";
import { ServicesGrid } from "@/components/marketing/services-grid";
import { WhyChooseUs } from "@/components/marketing/why-choose-us";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { Testimonials } from "@/components/marketing/testimonials";
import { TrustBadges } from "@/components/marketing/trust-badges";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const destinations = [
  {
    name: "Victoria Falls",
    country: "Zambia",
    tag: "Iconic",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "South Luangwa",
    country: "Zambia",
    tag: "Safari",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Lower Zambezi",
    country: "Zambia",
    tag: "River",
    img: "https://images.unsplash.com/photo-1521655010112-da27b59b1360?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Cape Town",
    country: "South Africa",
    tag: "City",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Okavango Delta",
    country: "Botswana",
    tag: "Delta",
    img: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Serengeti",
    country: "Tanzania",
    tag: "Plains",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Maasai Mara",
    country: "Kenya",
    tag: "Reserve",
    img: "https://images.unsplash.com/photo-1519066629447-267fffa62d4b?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <Hero />

      {/* ── SIGNATURE JOURNEYS ── */}
      <PackagesSection />

      {/* ── ICONIC DESTINATIONS ── */}
      <section className="py-32 px-6 md:px-10 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-5 max-w-xl">
              <p className="text-label text-gold">
                Destinations
              </p>
              <h2 className="text-4xl md:text-[4.5rem] font-serif text-midnight leading-[0.95]">
                Iconic
                <br />
                <span className="text-primary italic">Places</span>
              </h2>
            </div>
            <Link href="/destinations" className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase font-sans text-midnight/60 hover:text-gold transition-colors duration-300 group">
              View All Destinations
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {destinations.map((dest, idx) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer hover-lift"
              >
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                  className="object-cover img-pan"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/10 to-transparent group-hover:via-midnight/30 transition-all duration-700" />

                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="glass-dark px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-[0.12em] text-white/60 font-sans">
                    {dest.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 space-y-3">
                  <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] uppercase text-white/70 font-sans">
                    <MapPin className="w-3 h-3 text-gold" />
                    {dest.country}
                  </span>
                  <h3 className="text-2xl font-serif text-white">
                    {dest.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <ServicesGrid />

      {/* ── HOW IT WORKS ── */}
      <ProcessSteps />

      {/* ── WHY CHOOSE US ── */}
      <WhyChooseUs />

      {/* ── CORPORATE TRAVEL TEASER ── */}
      <section className="py-32 px-6 md:px-10 bg-midnight text-white overflow-hidden relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?auto=format&fit=crop&q=80&w=2000"
            alt="Corporate Safari Hospitality"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-2xl space-y-8">
            <p className="text-label text-gold/70">
              Corporate Excellence
            </p>
            <h2 className="text-4xl md:text-6xl font-serif leading-[0.95]">
              Elite Travel for
              <br />
              <span className="text-gold italic">Global Business</span>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed font-normal max-w-lg">
              Bespoke corporate travel management, executive retreats, and
              event coordination designed to elevate your company&apos;s
              efficiency and prestige.
            </p>
            <div className="pt-4">
              <Link
                href="/corporate"
                className="inline-flex items-center justify-center rounded-full px-10 py-5 text-[13px] font-sans font-bold tracking-[0.08em] uppercase bg-gold text-midnight hover:bg-gold/90 transition-all duration-500 button-hover-effect"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── CINEMATIC GALLERY ── */}
      <section className="py-24 bg-midnight overflow-hidden">
        <div className="space-y-12">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
            <h2 className="text-4xl font-serif text-white">Safari <span className="text-gold italic">Moments</span></h2>
            <div className="hidden md:flex gap-4">
              <div className="w-12 h-px bg-white/20 my-auto" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 font-sans my-auto">Cinematic Perspective</p>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-10 pb-10">
            {[
              "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1523805081326-6468447d9688?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1519066629447-267fffa62d4b?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1504173010664-32509aaefe4e?auto=format&fit=crop&q=80&w=1200",
              "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex-none w-[300px] md:w-[450px] aspect-video rounded-3xl overflow-hidden relative group"
              >
                <Image src={img} alt="Gallery" fill sizes="(max-w-768px) 300px, 450px" className="object-cover img-pan" />
                <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/0 transition-colors duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WILD LIFESTYLE ── */}
      <section className="py-32 px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:h-[800px]">
            <div className="md:col-span-8 group relative rounded-3xl overflow-hidden aspect-video md:aspect-auto">
              <Image
                src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=1600"
                alt="Lifestyle"
                fill
                sizes="(max-w-768px) 100vw, 66vw"
                className="object-cover img-pan"
              />
              <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/0 transition-colors duration-700" />
              <div className="absolute bottom-10 left-10 text-white space-y-2">
                <p className="text-label text-gold">Immersion</p>
                <h3 className="text-4xl font-serif">Wild Elegance</h3>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-5">
              <div className="flex-1 group relative rounded-3xl overflow-hidden aspect-square md:aspect-auto">
                <Image
                  src="https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?auto=format&fit=crop&q=80&w=1200"
                  alt="Dining"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover img-pan"
                />
                <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/0 transition-colors duration-700" />
              </div>
              <div className="flex-1 group relative rounded-3xl overflow-hidden aspect-square md:aspect-auto">
                <Image
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200"
                  alt="Refresh"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover img-pan"
                />
                <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/0 transition-colors duration-700" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:h-[500px]">
            <div className="group relative rounded-3xl overflow-hidden aspect-video md:aspect-auto">
              <Image
                src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1600"
                alt="Safari Scape"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/0 transition-colors duration-700" />
            </div>
            <div className="group relative rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1600"
                alt="Dinner in Wild"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/0 transition-colors duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ── */}
      <TrustBadges />

      {/* ── CTA SECTION ── */}
      <section className="py-32 px-6 md:px-10 bg-sand overflow-hidden relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-label text-gold">
            Ready?
          </p>
          <h2 className="text-4xl md:text-7xl font-serif text-midnight leading-[0.95]">
            Begin Your
            <br />
            <span className="text-primary italic">Journey</span>
          </h2>
          <p className="text-midnight/90 text-lg leading-relaxed font-normal max-w-lg mx-auto">
            Every great adventure starts with a conversation. Tell us where
            you want to go, and we&apos;ll design the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-10 py-5 text-[13px] font-sans font-bold tracking-[0.08em] uppercase bg-primary text-white hover:bg-primary/90 transition-all duration-500 button-hover-effect"
            >
              Design My Journey <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center rounded-full px-10 py-5 text-[13px] font-sans font-bold tracking-[0.08em] uppercase border border-midnight/15 text-midnight hover:bg-midnight hover:text-white transition-all duration-500 button-hover-effect"
            >
              Explore Journeys
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
