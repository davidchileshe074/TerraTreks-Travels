"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { MapPin, Moon, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  "/images/safari-3.jpg",
  "/images/zanzibar-beach-view.jpg",
  "/images/safari-1.jpg",
  "/images/victoria-falls.png",
];

const packages = [
  {
    name: "Honeymoon Escape Zanzibar",
    desc: "A romantic 5N/6D getaway at Aldiana Club Zanzibar Kwanza. Includes flights, transfers, and island excursions.",
    img: "/images/zanzibar-resort-aerial.jpg",
    location: "ZANZIBAR",
    nights: 5,
    adults: 2,
    price: "K 45,000",
    priceType: "Per Person",
  },
  {
    name: "Dubai Luxury Holiday",
    desc: "Complete 3-night luxury stay with Emirates flights, Burj Khalifa tour, and Desert Safari included.",
    img: "/images/dubai.png",
    location: "DUBAI",
    nights: 3,
    adults: 2,
    price: "$ 1500",
    priceType: "Per Person",
  },
  {
    name: "Nsofu Lodge-Lower Zambezi National Park",
    desc: "Luxury safari experience in the heart of Lower Zambezi. Professional game drives, boat cruises, and elite accommodation.",
    img: "/images/lower-zambezi.png",
    location: "LOWER ZAMBEZI",
    nights: 3,
    adults: 2,
    price: "K 12,500",
    priceType: "Per Person",
  },
  {
    name: "Experience Easter in Egypt",
    desc: "A 4N/5D journey through Cairo, Luxor & Aswan with professional guides and guided tours.",
    img: "/images/egypt.png",
    location: "EGYPT",
    nights: 4,
    adults: 2,
    price: "$ 780",
    priceType: "Per Person",
  },
  {
    name: "Easter Discover Qatar",
    desc: "Discover futuristic skylines with a 4N/5D package. Includes eVisa, Desert Safari, and Souq tours.",
    img: "/images/qatar.png",
    location: "QATAR",
    nights: 4,
    adults: 2,
    price: "$ 635",
    priceType: "Per Person",
  },
  {
    name: "Protea Chisamba Safari",
    desc: "Memorable family getaway at Protea Hotel Lusaka Safari Lodge in a peaceful natural environment.",
    img: "/images/safari-1.jpg",
    location: "CHISAMBA",
    nights: 1,
    adults: 1,
    price: "K 3930",
    priceType: "Per Room",
  },
  {
    name: "Ethiopian Airlines Special Offer",
    desc: "Exclusive flight deals from London and Manchester. Fly with the best of Africa to your favorite global destinations.",
    img: "/images/ethiopian-airlines-special.jpg",
    location: "GLOBAL",
    nights: 0,
    adults: 1,
    price: "From £420",
    priceType: "Flight Only",
  },
];

const airlinePartners = [
  { name: "Proflight Zambia", domain: "flyzambia.com", image: "/images/proflight.png" },
  { name: "Qantas", domain: "qantas.com" },
  { name: "RwandAir", domain: "rwandair.com" },
  { name: "Hawaiian Airlines", domain: "hawaiianairlines.com" },
  { name: "Etihad Airways", domain: "etihad.com" },
  { name: "Air Canada", domain: "aircanada.com" },
  { name: "Swissair", domain: "swiss.com" },
  { name: "Qatar Airways", domain: "qatarairways.com", image: "/images/Qatar Airways_Logo_2.webp" },
  { name: "Emirates", domain: "emirates.com" },
  { name: "South African Airways", domain: "flysaa.com" },
  { name: "Lufthansa", domain: "lufthansa.com" },
  { name: "Kenya Airways", domain: "kenya-airways.com" },
  { name: "Singapore Airlines", domain: "singaporeair.com" },
  { name: "KLM", domain: "klm.com" },
  { name: "Ryanair", domain: "ryanair.com" },
  { name: "British Airways", domain: "britishairways.com" },
  { name: "Egyptair", domain: "egyptair.com", image: "/images/egyptair-seeklogo.png" },
  { name: "Air Botswana", domain: "airbotswana.co.bw", image: "/images/air-botswana.jpg" },
  { name: "Turkish Airlines", domain: "turkishairlines.com" },
  { name: "Jambojet", domain: "jambojet.com" },
  { name: "Air Tanzania", domain: "airtanzania.co.tz" },
  { name: "Airlink", domain: "flyairlink.com" },
];

export default function Home() {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#F8F9FA] text-[#00204A] font-sans pb-20">
      {/* ── SLIDING HERO ── */}
      <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

        <AnimatePresence>
          <motion.div
            key={currentImageIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIdx]}
              alt="Terratreks Scenery"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 px-6 w-full flex flex-col items-center pt-16 md:pt-20">
          <div className="mb-8 text-center flex flex-col items-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tighter leading-none flex items-baseline text-white"
            >
              <span>Terratreks</span>
            </h1>

            <div className="h-[2px] w-28 bg-[#D4AF37] my-4 shadow-xl" />

            <p
              className="text-base sm:text-lg md:text-xl font-sans font-bold tracking-[0.35em] text-white/95 uppercase"
            >
              Travel
            </p>
          </div>

          <h2
            className="text-sm sm:text-base md:text-lg font-bold mb-4 text-[#D4AF37] tracking-widest uppercase"
          >
            Book Your Domestic and International Flights With Us
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-10 text-white tracking-widest uppercase mt-3"
          >
            Adventure Awaits Today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="/packages"
              className="bg-[#00204A] text-white font-bold py-3 px-6 sm:py-3.5 sm:px-8 rounded-full text-sm sm:text-base shadow-md hover:bg-[#001533] transition-all duration-300"
            >
              Explore Packages
            </Link>
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black font-bold py-3 px-6 sm:py-3.5 sm:px-8 rounded-full text-sm sm:text-base shadow-md hover:bg-[#B5952F] transition-all duration-300 uppercase"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── SPECIAL PACKAGES SECTION ── */}
      <section className="py-20 px-4 md:px-8 bg-[#F8F9FA] max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00204A] mb-6 tracking-tight uppercase">
            FEATURED PACKAGES & TOURS
          </h2>
          <p className="text-gray-800 text-lg font-medium max-w-2xl mx-auto">
            Explore exclusive deals with realistic rates. Choose from our
            curated local and international destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full cursor-pointer rounded-xl overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#00204A]">
                {pkg.img && (
                  <Image
                    src={pkg.img}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                )}

                <div className="absolute bottom-4 left-4 bg-[#00204A] text-white font-bold px-4 py-2 flex items-center gap-2 text-sm shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
                  <MapPin className="w-4 h-4" /> {pkg.location}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#00204A] mb-4 uppercase line-clamp-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-800 text-base leading-relaxed mb-6 line-clamp-3 font-medium">
                  {pkg.desc}
                </p>

                <div className="flex items-center gap-6 mt-auto pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-800">
                    <Moon className="w-5 h-5 text-[#00204A]" />
                    <span className="text-base font-semibold">
                      {pkg.nights} Night
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800">
                    <User className="w-5 h-5 text-[#00204A]" />
                    <span className="text-base font-semibold">
                      {pkg.adults} Adult
                    </span>
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-[#00204A] font-semibold">
                      From
                    </span>
                    <span className="text-2xl font-bold text-[#00204A] uppercase">
                      {pkg.price}
                    </span>
                  </div>
                  <Link
                    href="/packages"
                    className="bg-[#00204A] hover:bg-[#001533] text-white text-sm font-bold px-6 py-3 rounded-full transition-colors flex-shrink-0"
                  >
                    {pkg.priceType}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ASSOCIATIONS ── */}
      <section className="py-24 px-4 md:px-8 bg-white text-center border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00204A] mb-6 uppercase tracking-tight">
            Our Associations
          </h2>
          <p className="text-gray-700 text-lg font-medium mb-16 max-w-2xl mx-auto">
            We are proud to be affiliated with globally recognized organizations
            to bring you the best travel experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="group bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center gap-4 w-64">
              <div className="relative w-32 h-16 transition-all duration-300">
                <Image
                  src="/iata-logo.png"
                  alt="IATA Accredited Agent"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-[2px] w-8 bg-[#D4AF37]" />
              <span className="text-xs text-gray-700 font-bold uppercase tracking-[0.2em]">
                Accredited Agent
              </span>
            </div>

            <div className="group bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center gap-4 w-64">
              <div className="relative w-32 h-16 transition-all duration-300">
                <Image
                  src="/taaz-logo.png"
                  alt="TAAZ Member"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-[2px] w-8 bg-[#D4AF37]" />
              <span className="text-xs text-gray-700 font-bold uppercase tracking-[0.2em]">
                Member
              </span>
            </div>

            <div className="group bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center gap-4 w-64">
              <div className="relative w-32 h-16 transition-all duration-300">
                <Image
                  src="/images/Travelport_idxi6gDwib_0.png"
                  alt="Travelport Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-[2px] w-8 bg-[#D4AF37]" />
              <span className="text-xs text-gray-700 font-bold uppercase tracking-[0.2em]">
                Global Partner
              </span>
            </div>

            <div className="group bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center gap-4 w-64">
              <div className="relative w-32 h-16 transition-all duration-300">
                <Image
                  src="/images/ZTA logo.jpeg"
                  alt="Zambia Tourism Agency"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-[2px] w-8 bg-[#D4AF37]" />
              <span className="text-xs text-gray-700 font-bold uppercase tracking-[0.2em]">
                Tourism Agency
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── AIRLINE PARTNERS SLIDER ── */}
      <section className="py-24 bg-[#F8F9FA] border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00204A] mb-6 uppercase tracking-tight">
            BOOK YOUR FLIGHTS WITH US
          </h2>
          <p className="text-gray-700 text-lg font-medium max-w-2xl mx-auto">
            We proudly work directly with over 20+ domestic and international
            airline partners. Adventure awaits today!
          </p>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...airlinePartners, ...airlinePartners].map((airline, idx) => (
              <div
                key={`${airline.name}-${idx}`}
                className="flex flex-col items-center justify-center bg-white border border-gray-100 shadow-sm p-4 w-32 h-32 md:w-44 md:h-44 rounded-2xl flex-shrink-0"
              >
                <img
                  src={airline.image || `https://www.google.com/s2/favicons?domain=${airline.domain}&sz=128`}
                  alt={airline.name}
                  className="w-12 h-12 md:w-20 md:h-20 object-contain mb-3"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="block text-[10px] md:text-xs font-bold uppercase text-[#00204A] text-center leading-tight">
                  {airline.name}
                </span>
                <div className="h-[2px] w-4 bg-[#D4AF37] my-2" />
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] opacity-80">
                  Partner
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <p className="mt-20 text-sm text-gray-500 font-semibold tracking-wide uppercase max-w-xl mx-auto border-t border-gray-200 pt-8 opacity-75">
            Flight and accommodation rates are subject to availability and T and
            Cs apply.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}