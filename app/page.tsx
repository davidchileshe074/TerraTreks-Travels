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
    <main className="relative min-h-screen overflow-hidden">

      <Hero />

      {/* ── OUR PHILOSOPHY / ABOUT ── */}
      <section className="section-padding px-6 md:px-10 bg-primary/5">
        <div className="container-wide max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] uppercase text-primary/90"
            >
              Who We Are
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif text-midnight leading-tight tracking-tight"
            >
              Experts in <span className="italic font-normal opacity-80 text-primary">African Travel</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <p className="text-midnight/90 text-xl md:text-2xl leading-relaxed font-normal text-center max-w-4xl mx-auto">
              Our regional know-how spans Zambia, Zimbabwe, and Botswana, with extended routes to iconic spots like Chobe National Park, the Okavango Delta, and South Africa’s stunning Cape Town &amp; Kruger National Park. As your trusted local partner, we’re passionate about showcasing Southern Africa in its most stunning, raw, and welcoming form.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-primary">Local Knowledge</h3>
                <p className="text-midnight/80 text-base leading-relaxed font-normal tracking-wide">
                  We call this place home. We understand the seasons, the hidden treasures, and the best ways to experience them.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-primary">Hands-On Management</h3>
                <p className="text-midnight/80 text-base leading-relaxed font-normal tracking-wide">
                  Our team personally oversees every journey to ensure top-notch quality and care, from the moment you arrive to your departure.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-primary">Authenticity</h3>
                <p className="text-midnight/80 text-base leading-relaxed font-normal tracking-wide">
                  We collaborate closely with local communities, guides, and providers to create immersive and culturally respectful experiences.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-primary">Reliable Support</h3>
                <p className="text-midnight/80 text-base leading-relaxed font-normal tracking-wide">
                  We pride ourselves on our quick and seamless response times. Our reliable on-the-ground support is always there when you need it.
                </p>
              </div>
            </div>

            <div className="pt-12 text-center">
              <p className="text-midnight/90 text-xl leading-relaxed font-normal max-w-3xl mx-auto mb-8">
                Let’s turn your dream safari or holiday into a reality! Whether it’s your first time or you’re a seasoned traveller, we’re here to help you discover more — all the while enjoying comfort and fantastic value.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-primary text-white rounded-none px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-midnight transition-colors"
              >
                Start Planning <ArrowRight className="w-4 h-4 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SIGNATURE JOURNEYS ── */}


      {/* ── LOCAL RESIDENT SPECIALS ── */}



      <section className="section-padding px-6 md:px-10 bg-white overflow-hidden relative">
        <div className="container-wide space-y-24 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="space-y-6 max-w-2xl">
              <p className="section-label text-primary">
                Curated Collections
              </p>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-midnight leading-none tracking-tight">
                The Soul of
                <br />
                <span className="italic font-normal opacity-80">Southern Africa</span>
              </h2>
              <p className="text-midnight/80 text-xl leading-relaxed font-normal max-w-md">
                Handpicked destinations that capture the raw, untamed essence of the continent.
              </p>
            </div>
            <Link href="/destinations" className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.25em] uppercase font-sans text-midnight/90 hover:text-primary transition-all duration-500 group pb-2 border-b border-midnight/5 hover:border-primary">
              View All Destinations
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {destinations.slice(0, 6).map((dest, idx) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-none mb-6">
                  <Image
                    src={dest.img}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-midnight/10 group-hover:bg-midnight/0 transition-colors duration-1000" />
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-widest text-midnight">{dest.tag}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    <MapPin className="w-3 h-3" />
                    {dest.country}
                  </div>
                  <h3 className="text-3xl font-serif text-midnight group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-midnight/80 text-sm font-normal leading-relaxed line-clamp-2">
                    Discover the unparalleled beauty and rich heritage of this iconic African destination.
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-midnight/90 group-hover:text-primary transition-colors">
                    View Destination <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AIRPORT SHUTTLES & TRANSFERS ── */}
      <><section className="section-padding px-6 md:px-10 bg-white border-y border-primary/5">
        <div className="container-wide max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] uppercase text-primary/90"
            >
              Seamless Logistics
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-midnight tracking-tight leading-tight"
            >
              Airport Shuttles &amp; Transfers
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-midnight/90 text-base md:text-xl leading-relaxed font-normal"
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
                className="inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/20 pb-1 hover:border-primary transition-colors cursor-pointer"
              >
                Discover Transfer Services <ArrowRight className="w-3 h-3 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section><section className="section-padding px-6 md:px-10 bg-primary relative overflow-hidden">
          {/* Full-width parallax image */}
          <div className="absolute inset-0">
            <Image
              src="/images/corporate-travel.png"
              alt="Corporate Travel"
              fill
              className="object-cover opacity-40 grayscale-[0.2]" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
          </div>

          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="space-y-6">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-xs font-bold tracking-[0.4em] uppercase text-white/80"
                  >
                    Corporate Travel Management
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-serif text-white leading-none tracking-tight"
                  >
                    The Apex of
                    <br />
                    <span className="italic font-normal opacity-80">Business Travel</span>
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
                      <p className="text-xs font-bold uppercase tracking-widest text-white/70">{item.label}</p>
                      <p className="text-xl font-serif text-white">{item.val}</p>
                    </div>
                  ))}
                </motion.div>

                <div className="pt-6">
                  <Link
                    href="/corporate"
                    className="group inline-flex items-center gap-4 bg-primary text-white rounded-none px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl"
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
                className="hidden lg:block relative aspect-[4/5] rounded-none overflow-hidden border border-white/10 shadow-2xl"
              >
                <Image
                  src="/images/corporate-travel.png"
                  alt="Modern Executive"
                  fill
                  className="object-cover" />
                <div className="absolute inset-0 bg-midnight/20" />
              </motion.div>
            </div>
          </div>
        </section></>

      {/* ── TESTIMONIALS ── */}

      <section className="py-32 bg-primary overflow-hidden relative">
        {/* Cinematic Film Strip Effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />

        <div className="space-y-16">
          <div className="container-wide flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.4em] uppercase text-white/80">Visual Narrative</p>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">Safari <span className="italic font-normal text-6xl md:text-8xl opacity-80">Moments</span></h2>
            </div>
            <div className="max-w-xs">
              <p className="text-white/70 text-xs font-sans tracking-widest uppercase leading-relaxed">
                A non-linear journey through the untamed pulse of the continent.
              </p>
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto no-scrollbar px-6 md:px-10 pb-10 group/gallery">
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
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex-none w-[350px] md:w-[600px] aspect-[16/10] rounded-none overflow-hidden relative group cursor-crosshair shadow-2xl"
              >
                <Image
                  src={img}
                  alt="Gallery"
                  fill
                  sizes="(max-w-768px) 350px, 600px"
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/0 transition-all duration-1000" />
                <div className="absolute inset-0 border border-white/5 rounded-none pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="container-wide space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[900px]">
            {/* Artistic Main Feature */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="md:col-span-8 group relative rounded-none overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/south-luangwa.png"
                alt="Lifestyle"
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-all duration-1000" />
              <div className="absolute bottom-16 left-16 space-y-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-white/80">Wild Elegance</p>
                <h3 className="text-6xl md:text-[7rem] font-serif text-white leading-none tracking-tight">The Untamed <br /> <span className="italic font-normal">Soul</span></h3>
              </div>
            </motion.div>

            <div className="md:col-span-4 flex flex-col gap-6">
              {/* Secondary Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex-1 group relative rounded-none overflow-hidden shadow-xl"
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
                className="flex-1 group relative rounded-none overflow-hidden shadow-xl"
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
              className="group relative rounded-none overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/safari-3.jpg"
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
              className="group relative rounded-none overflow-hidden shadow-2xl"
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



      <section className="section-padding bg-primary overflow-hidden relative">
        {/* Immersive Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/safari-4.jpg"
            alt="CTA Background"
            fill
            className="object-cover opacity-20 blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary" />
        </div>

        <div className="container-wide relative z-10 text-center space-y-12">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] uppercase text-white/80"
            >
              The First Step
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-serif text-white tracking-tight leading-[0.85]"
            >
              Begin Your
              <br />
              <span className="italic font-normal opacity-80">Odyssey</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="section-desc mx-auto text-white/90 max-w-xl"
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
              className="group inline-flex items-center justify-center rounded-none px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase bg-primary text-white hover:bg-white hover:text-primary transition-all duration-700 shadow-3xl"
            >
              Design My Journey <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center rounded-none px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase border border-white/10 text-white hover:bg-white hover:text-primary transition-all duration-700 backdrop-blur-md"
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
