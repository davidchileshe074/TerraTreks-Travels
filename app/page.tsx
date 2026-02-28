"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/marketing/hero";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const destinations = [
  {
    name: "Victoria Falls",
    country: "Zambia",
    tag: "Iconic",
    img: "/images/victoria-falls.png",
  },
  {
    name: "South Luangwa",
    country: "Zambia",
    tag: "Safari",
    img: "/images/south-luangwa.png",
  },
  {
    name: "Lower Zambezi",
    country: "Zambia",
    tag: "River",
    img: "/images/lower-zambezi.png",
  },
  {
    name: "Cape Town",
    country: "South Africa",
    tag: "City",
    img: "/images/corporate-travel.png",
  },
  {
    name: "Okavango Delta",
    country: "Botswana",
    tag: "Delta",
    img: "/images/safari-sunset.jpg",
  },
  {
    name: "Serengeti",
    country: "Tanzania",
    tag: "Plains",
    img: "/images/safari-sunset.jpg",
  },
  {
    name: "Maasai Mara",
    country: "Kenya",
    tag: "Reserve",
    img: "/images/safari-sunset.jpg",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <Hero />

      {/* ── SIGNATURE JOURNEYS ── */}


      {/* ── LOCAL RESIDENT SPECIALS ── */}



      <section className="section-padding px-6 md:px-10 bg-white overflow-hidden relative">
        {/* Subtle Background Text */}
        <div className="absolute top-0 right-0 py-20 opacity-[0.02] pointer-events-none select-none">
          <span className="text-[20rem] font-serif font-bold italic leading-none">Safari</span>
        </div>

        <div className="container-wide space-y-24 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="space-y-6 max-w-2xl">
              <p className="section-label">
                Iconic Destinations
              </p>
              <h2 className="section-title">
                The Soul of
                <br />
                <span className="text-primary italic font-light">Southern Africa</span>
              </h2>
              <p className="section-desc max-w-md text-bold text-white-500">
                A curated collection of the continent's most whispered-about landmarks and untamed horizons.
              </p>
            </div>
            <Link href="/destinations" className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase font-sans text-midnight/40 hover:text-gold transition-all duration-500 group pb-2 border-b border-midnight/5 hover:border-gold">
              View All Destinations
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            {/* Featured Large Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-7 group relative rounded-[3rem] overflow-hidden cursor-pointer"
            >
              <Image
                src={destinations[0].img}
                alt={destinations[0].name}
                fill
                className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent group-hover:via-midnight/40 transition-all duration-700" />
              <div className="absolute top-8 left-8">
                <span className="card-tag bg-white/10 backdrop-blur-md border border-white/20">Featured Experience</span>
              </div>
              <div className="absolute bottom-12 left-12 space-y-4">
                <span className="card-meta text-white/80">
                  <MapPin className="w-4 h-4 text-gold" />
                  {destinations[0].country}
                </span>
                <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight">
                  {destinations[0].name}
                </h3>
                <p className="text-white/60 max-w-xs font-normal text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  A spectacle of raw power and ethereal beauty where the Zambezi falls into eternity.
                </p>
              </div>
            </motion.div>

            {/* Right Column Grid */}
            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {destinations.slice(1, 5).map((dest, idx) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="group relative rounded-[2rem] overflow-hidden cursor-pointer aspect-[3/4] sm:aspect-auto"
                >
                  <Image
                    src={dest.img}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 space-y-2">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gold/80 block">{dest.country}</span>
                    <h3 className="text-xl font-serif text-white">{dest.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <section className="section-padding px-6 md:px-10 bg-midnight relative overflow-hidden">
        {/* Full-width parallax image */}
        <div className="absolute inset-0">
          <Image
            src="/images/corporate-travel.png"
            alt="Corporate Travel"
            fill
            className="object-cover opacity-40 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="section-label text-gold/80"
                >
                  Corporate Travel Management
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="section-title text-white"
                >
                  The Apex of
                  <br />
                  <span className="text-gold italic font-light">Business Travel</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="section-desc text-white/80 max-w-lg"
                >
                  Seamlessly merging high-stakes efficiency with unparalleled luxury. We manage the logistics, so you can focus on the vision.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-10 border-t border-white/10 pt-10"
              >
                {[
                  { label: "Coordination", val: "Elite" },
                  { label: "Network", val: "Global" },
                  { label: "Support", val: "24/7" }
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{item.label}</p>
                    <p className="text-xl font-serif text-white">{item.val}</p>
                  </div>
                ))}
              </motion.div>

              <div className="pt-6">
                <Link
                  href="/corporate"
                  className="group inline-flex items-center gap-4 bg-white text-midnight rounded-full px-10 py-5 text-[13px] font-bold tracking-widest uppercase hover:bg-gold transition-all duration-500"
                >
                  Experience Excellence <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="hidden lg:block relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl"
            >
              <Image
                src="/images/corporate-travel.png"
                alt="Modern Executive"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-midnight/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}

      <section className="py-32 bg-midnight overflow-hidden relative">
        {/* Cinematic Film Strip Effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />

        <div className="space-y-16">
          <div className="container-wide flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="space-y-4">
              <p className="section-label text-gold/70">Visual Narrative</p>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">Safari <span className="text-gold italic font-light text-6xl md:text-8xl">Moments</span></h2>
            </div>
            <div className="max-w-xs">
              <p className="text-white/40 text-xs font-sans tracking-widest uppercase leading-relaxed">
                A non-linear journey through the untamed pulse of the continent.
              </p>
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto no-scrollbar px-6 md:px-10 pb-10 group/gallery">
            {[
              "/images/victoria-falls.png",
              "/images/south-luangwa.png",
              "/images/lower-zambezi.png",
              "/images/corporate-travel.png",
              "/images/south-luangwa.png",
              "/images/victoria-falls.png",
              "/images/lower-zambezi.png",
              "/images/corporate-travel.png",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex-none w-[350px] md:w-[600px] aspect-[16/10] rounded-[2.5rem] overflow-hidden relative group cursor-crosshair shadow-2xl"
              >
                <Image
                  src={img}
                  alt="Gallery"
                  fill
                  sizes="(max-w-768px) 350px, 600px"
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-midnight/30 group-hover:bg-midnight/0 transition-all duration-1000" />
                <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand/30">
        <div className="container-wide space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[900px]">
            {/* Artistic Main Feature */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="md:col-span-8 group relative rounded-[3rem] overflow-hidden"
            >
              <Image
                src="/images/south-luangwa.png"
                alt="Lifestyle"
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/0 transition-all duration-1000" />
              <div className="absolute bottom-16 left-16 space-y-4">
                <p className="section-label text-gold">Wild Elegance</p>
                <h3 className="text-6xl md:text-8xl font-serif text-white leading-none">The Untamed <br /> <span className="italic font-light">Soul</span></h3>
              </div>
            </motion.div>

            <div className="md:col-span-4 flex flex-col gap-6">
              {/* Secondary Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex-1 group relative rounded-[2.5rem] overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/lower-zambezi.png"
                  alt="Dining"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-midnight/20" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-white text-xl font-serif">Epicurean Journeys</p>
                </div>
              </motion.div>

              {/* Secondary Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex-1 group relative rounded-[2.5rem] overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/corporate-travel.png"
                  alt="Refresh"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-midnight/20" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-white text-xl font-serif">Sanctuary of Peace</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Wide Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="group relative rounded-[3rem] overflow-hidden"
            >
              <Image
                src="/images/south-luangwa.png"
                alt="Safari Scape"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-midnight/10 group-hover:bg-midnight/0 transition-colors duration-1000" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="group relative rounded-[3rem] overflow-hidden"
            >
              <Image
                src="/images/victoria-falls.png"
                alt="Dinner in Wild"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-midnight/10 group-hover:bg-midnight/0 transition-colors duration-1000" />
            </motion.div>
          </div>
        </div>
      </section>



      <section className="section-padding bg-midnight overflow-hidden relative">
        {/* Immersive Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/south-luangwa.png"
            alt="CTA Background"
            fill
            className="object-cover opacity-20 blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight" />
        </div>

        <div className="container-wide relative z-10 text-center space-y-12">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label text-gold/60"
            >
              The First Step
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[8rem] font-serif text-white tracking-tight leading-[0.85]"
            >
              Begin Your
              <br />
              <span className="text-gold italic font-light">Odyssey</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="section-desc mx-auto text-white/60 max-w-xl"
          >
            Every great story starts with a single intention. Tell us which horizon calls to you, and we will orchestrate the rest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full px-12 py-6 text-[13px] font-bold tracking-[0.2em] uppercase bg-gold text-midnight hover:bg-white transition-all duration-700 shadow-3xl"
            >
              Design My Journey <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center rounded-full px-12 py-6 text-[13px] font-bold tracking-[0.2em] uppercase border border-white/10 text-white hover:bg-white hover:text-midnight transition-all duration-700 backdrop-blur-md"
            >
              Explore the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
