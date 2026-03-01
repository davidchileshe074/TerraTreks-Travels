"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/marketing/hero";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { SideTabs } from "@/components/marketing/side-tabs";
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
    img: "/images/safari-1.jpg",
  },
  {
    name: "Serengeti",
    country: "Tanzania",
    tag: "Plains",
    img: "/images/safari-2.jpg",
  },
  {
    name: "Maasai Mara",
    country: "Kenya",
    tag: "Reserve",
    img: "/images/safari-3.jpg",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">

      <Hero />

      {/* ── OUR PHILOSOPHY / ABOUT ── */}
      <section className="section-padding px-6 md:px-10 py-16 md:py-24 bg-primary/5">
        <div className="container-wide max-w-5xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-primary/90"
            >
              Who We Are
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-midnight leading-tight tracking-tight"
            >
              Experts in <span className="italic font-normal opacity-80 text-primary">African Travel</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-10 text-center md:text-left"
          >
            <p className="text-midnight/90 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              Our regional know-how spans Zambia, Zimbabwe, and Botswana, with extended routes to iconic spots like Chobe National Park, the Okavango Delta, and South Africa’s stunning Cape Town & Kruger National Park. As your trusted local partner, we’re passionate about showcasing Southern Africa in its most stunning, raw, and welcoming form.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8 md:pt-10">
              {[
                { title: "Local Knowledge", desc: "We call this place home. We understand the seasons, the hidden treasures, and the best ways to experience them." },
                { title: "Hands-On Management", desc: "Our team personally oversees every journey to ensure top-notch quality and care, from the moment you arrive to your departure." },
                { title: "Authenticity", desc: "We collaborate closely with local communities, guides, and providers to create immersive and culturally respectful experiences." },
                { title: "Reliable Support", desc: "We pride ourselves on our quick and seamless response times. Our reliable on-the-ground support is always there when you need it." },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-serif text-primary">{item.title}</h3>
                  <p className="text-midnight/80 text-base md:text-lg leading-relaxed tracking-wide">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-10 md:pt-12 text-center">
              <p className="text-midnight/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">
                Let’s turn your dream safari or holiday into a reality! Whether it’s your first time or you’re a seasoned traveller, we’re here to help you discover more — all the while enjoying comfort and fantastic value.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary text-white rounded-lg px-8 md:px-10 py-4 md:py-5 text-sm md:text-base font-bold tracking-widest uppercase hover:bg-midnight transition-all duration-300 shadow-md"
              >
                Start Planning <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Curated Destinations ── */}
      <section className="section-padding px-6 md:px-10 py-16 md:py-24 bg-white overflow-hidden relative">
        <div className="container-wide space-y-16 md:space-y-24 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10">
            <div className="space-y-5 max-w-2xl">
              <p className="section-label text-primary text-sm md:text-base">
                Curated Collections
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-midnight leading-tight tracking-tight">
                The Soul of
                <br />
                <span className="italic font-normal opacity-80">Southern Africa</span>
              </h2>
              <p className="text-midnight/80 text-lg md:text-xl leading-relaxed max-w-md">
                Handpicked destinations that capture the raw, untamed essence of the continent.
              </p>
            </div>
            <Link href="/destinations" className="inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-[0.25em] uppercase text-midnight/90 hover:text-primary transition-all duration-500 group pb-1 border-b border-midnight/10 hover:border-primary">
              View All Destinations
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {destinations.slice(0, 6).map((dest, idx) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.9 }}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={dest.img}
                    alt={`${dest.name}, ${dest.country} – ${dest.tag} Destination`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-midnight rounded">
                      {dest.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wide text-primary">
                    <MapPin className="w-4 h-4" />
                    {dest.country}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-midnight group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-midnight/70 text-sm md:text-base leading-relaxed line-clamp-2">
                    Discover the unparalleled beauty and rich heritage of this iconic African destination.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-midnight/80 group-hover:text-primary transition-colors">
                    View Destination <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Airport Shuttles & Transfers ── */}
      <section className="section-padding px-6 md:px-10 py-16 md:py-24 bg-white border-y border-primary/5">
        <div className="container-wide max-w-4xl mx-auto text-center space-y-10 md:space-y-12">
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-primary/90"
            >
              Seamless Logistics
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif text-midnight tracking-tight leading-tight"
            >
              Airport Shuttles & Transfers
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-midnight/90 text-base md:text-lg lg:text-xl leading-relaxed"
          >
            <p>
              We offer reliable, safe, and professional airport transfer services in Zambia, including Livingstone Airport (LVI), Lusaka International Airport (LUN), and Victoria Falls Airport (VFA). Our private shuttles are perfect for travellers seeking comfortable transportation to hotels, lodges, and safari destinations across Zambia and neighbouring countries.
            </p>
            <p>
              We also provide cross-border transfers to Chobe National Park (Botswana), Hwange National Park (Zimbabwe), and Kasane, with knowledgeable local drivers and air-conditioned vehicles. Ideal for solo travellers, families, tour groups, and business visitors, our services ensure a smooth journey from airport arrivals to your final destination.
            </p>

            <div className="pt-8 flex justify-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
              >
                Discover Transfer Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Corporate Travel ── */}
      <section className="section-padding px-6 md:px-10 py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/corporate-travel.png"
            alt="Corporate Travel Background"
            fill
            className="object-cover opacity-50 grayscale-[0.3] brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/60" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-10 text-white">
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-white/80 drop-shadow-md"
                >
                  Corporate Travel Management
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight drop-shadow-2xl [text-shadow:_2px_2px_12px_rgb(0_0_0_/_0.6)]"
                >
                  The Apex of
                  <br />
                  <span className="italic font-normal opacity-90">Business Travel</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-lg lg:text-xl text-white/90 max-w-lg leading-relaxed"
                >
                  Seamlessly merging high-stakes efficiency with unparalleled luxury. We manage the logistics, so you can focus on the vision.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-8 md:gap-12 border-t border-white/15 pt-8"
              >
                {[
                  { label: "Coordination", val: "Elite" },
                  { label: "Network", val: "Global" },
                  { label: "Support", val: "24/7" },
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/70">{item.label}</p>
                    <p className="text-xl md:text-2xl font-serif text-white">{item.val}</p>
                  </div>
                ))}
              </motion.div>

              <div className="pt-6">
                <Link
                  href="/corporate"
                  className="group inline-flex items-center gap-4 bg-white text-primary rounded-lg px-8 md:px-10 py-4 md:py-5 text-sm md:text-base font-bold tracking-widest uppercase hover:bg-midnight hover:text-white transition-all duration-500 shadow-xl"
                >
                  Experience Excellence <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="hidden lg:block relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src="/images/corporate-travel.png"
                alt="Executive Business Travel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials / Gallery ── */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />

        <div className="container-wide relative z-10 space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-white/80">Visual Narrative</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
                Safari <span className="italic font-normal opacity-80 text-5xl md:text-7xl lg:text-8xl">Moments</span>
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="text-white/70 text-sm md:text-base tracking-wide leading-relaxed">
                A non-linear journey through the untamed pulse of the continent.
              </p>
            </div>
          </div>

          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-8 md:pb-10 no-scrollbar snap-x snap-mandatory">
            {[
              "/images/victoria-falls.png",
              "/images/safari-4.jpg",
              "/images/lower-zambezi.png",
              "/images/safari-1.jpg",
              "/images/south-luangwa.png",
              "/images/safari-2.jpg",
              "/images/corporate-travel.png",
              "/images/safari-3.jpg",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="flex-none w-[85vw] sm:w-[70vw] md:w-[500px] lg:w-[600px] aspect-[16/10] rounded-xl overflow-hidden relative shadow-2xl snap-center"
              >
                <Image
                  src={img}
                  alt="Safari moment gallery"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute inset-0 border border-white/5 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Images Grid ── */}
      <section className="section-padding px-6 md:px-10 py-16 md:py-24 bg-primary/5">
        <div className="container-wide space-y-8 md:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px] lg:h-[900px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="md:col-span-8 group relative rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/south-luangwa.png"
                alt="Wild Elegance – South Luangwa"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 space-y-3 text-white">
                <p className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-white/90 drop-shadow-md">
                  Wild Elegance
                </p>
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight drop-shadow-2xl">
                  The Untamed <br />
                  <span className="italic font-normal">Soul</span>
                </h3>
              </div>
            </motion.div>

            <div className="md:col-span-4 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex-1 group relative rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/lower-zambezi.png"
                  alt="Epicurean Journeys – Lower Zambezi"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-xl md:text-2xl font-serif drop-shadow-md">Epicurean Journeys</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex-1 group relative rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/corporate-travel.png"
                  alt="Sanctuary of Peace"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-xl md:text-2xl font-serif drop-shadow-md">Sanctuary of Peace</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px] md:h-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="group relative rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/safari-3.jpg"
                alt="Safari Landscape"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="group relative rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/victoria-falls.png"
                alt="Victoria Falls Experience"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding px-6 md:px-10 py-24 md:py-40 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/safari-4.jpg"
            alt="Adventure Background"
            fill
            className="object-cover opacity-25 blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/50" />
        </div>

        <div className="container-wide relative z-10 text-center space-y-10 md:space-y-12">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-white/80 drop-shadow-md"
            >
              The First Step
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[0.9] drop-shadow-2xl [text-shadow:_2px_2px_12px_rgb(0_0_0_/_0.7)]"
            >
              Begin Your
              <br />
              <span className="italic font-normal opacity-90">Odyssey</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg lg:text-xl text-white/90 max-w-xl mx-auto leading-relaxed"
          >
            Every great story starts with a single intention. Tell us which horizon calls to you, and we will orchestrate the rest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 pt-8"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-lg px-10 md:px-12 py-5 md:py-6 text-sm md:text-base font-bold tracking-[0.2em] uppercase bg-white text-primary hover:bg-midnight hover:text-white transition-all duration-500 shadow-xl w-full sm:w-auto"
            >
              Design My Journey <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center rounded-lg px-10 md:px-12 py-5 md:py-6 text-sm md:text-base font-bold tracking-[0.2em] uppercase border border-white/20 text-white hover:bg-white hover:text-primary transition-all duration-500 backdrop-blur-sm w-full sm:w-auto"
            >
              Explore the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <SideTabs />
      <WhatsAppButton />
    </main>
  );
}