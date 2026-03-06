"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { MapPin, Moon, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const packages = [
  {
    name: "Protea Chisamba Safari",
    desc: "Experience a memorable family getaway at Protea Hotel Lusaka Safari Lodge, set in a peaceful natural environment.",
    img: "/images/safari-1.jpg",
    location: "CHISAMBA",
    nights: 1,
    adults: 1,
    price: "K 3930",
    priceType: "Per Room",
  },
  {
    name: "Dubai Signature Package",
    desc: "Let us handle your Dubai visa, hotel bookings, and tours while you explore the city seamlessly.",
    img: "/images/corporate-travel.png",
    location: "Dubai",
    nights: 4,
    adults: 1,
    price: "$ 450",
    priceType: "Per Person",
  },
  {
    name: "China Business & Leisure",
    desc: "Comprehensive visa support and carefully curated travel itineraries for your trip to China.",
    img: "/images/about-2.jpeg",
    location: "China",
    nights: 5,
    adults: 1,
    price: "$ 800",
    priceType: "Per Person",
  },
  {
    name: "Sansi Kendwa Beach Resort Zanzibar",
    desc: "Sansi Beach Resort Zanzibar offers a perfect gateway for those seeking paradise and relaxation on beautiful shores.",
    img: "/images/about-1.jpeg",
    location: "Zanzibar",
    nights: 3,
    adults: 2,
    price: "$ 850",
    priceType: "Per Person",
  },
  {
    name: "Outrigger Mauritius - Embrace The Island",
    desc: "Experience the ultimate island getaway at Outrigger Mauritius Beach Resort.",
    img: "/images/about-3.jpeg",
    location: "Mauritius",
    nights: 4,
    adults: 2,
    price: "$ 1150",
    priceType: "Per Couple",
  },
  {
    name: "MUKUNI BIG 5 ACTIVITIES",
    desc: "Experience up close interactions with Africa's majestic wildlife in Livingstone.",
    img: "/images/south-luangwa.png",
    location: "LIVINGSTONE",
    nights: 1,
    adults: 1,
    price: "K 1800",
    priceType: "Per Person",
  }
];

const airlinePartners = [
  { name: "Proflight Zambia", logo: "https://logo.clearbit.com/proflight-zambia.com" },
  { name: "Qantas", logo: "https://logo.clearbit.com/qantas.com" },
  { name: "RwandAir", logo: "https://logo.clearbit.com/rwandair.com" },
  { name: "Hawaiian Airlines", logo: "https://logo.clearbit.com/hawaiianairlines.com" },
  { name: "Etihad Airways", logo: "https://logo.clearbit.com/etihad.com" },
  { name: "Air Canada", logo: "https://logo.clearbit.com/aircanada.com" },
  { name: "Swissair", logo: "https://logo.clearbit.com/swiss.com" },
  { name: "Qatar Airways", logo: "https://logo.clearbit.com/qatarairways.com" },
  { name: "Emirates", logo: "https://logo.clearbit.com/emirates.com" },
  { name: "South African Airways", logo: "https://logo.clearbit.com/flysaa.com" },
  { name: "Lufthansa", logo: "https://logo.clearbit.com/lufthansa.com" },
  { name: "Kenya Airways", logo: "https://logo.clearbit.com/kenya-airways.com" },
  { name: "Singapore Airlines", logo: "https://logo.clearbit.com/singaporeair.com" },
  { name: "KLM", logo: "https://logo.clearbit.com/klm.com" },
  { name: "Ryanair", logo: "https://logo.clearbit.com/ryanair.com" },
  { name: "British Airways", logo: "https://logo.clearbit.com/britishairways.com" },
  { name: "Egyptair", logo: "https://logo.clearbit.com/egyptair.com" },
  { name: "Turkish Airlines", logo: "https://logo.clearbit.com/turkishairlines.com" },
  { name: "Jambojet", logo: "https://logo.clearbit.com/jambojet.com" },
  { name: "Air Tanzania", logo: "https://logo.clearbit.com/airtanzania.co.tz" },
  { name: "Airlink", logo: "https://logo.clearbit.com/flyairlink.com" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F8F9FA] text-[#002E5D] font-sans pb-20">

      {/* ── SIMPLE HERO ── */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center text-center mt-20 md:mt-24">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/images/safari-3.jpg"
            alt="Safari Scenery"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 px-6 w-full flex flex-col items-center">
          <div className="relative w-72 h-32 md:w-96 md:h-40 mb-8 drop-shadow-2xl">
            <Image
              src="/terratreks-logo.png"
              alt="TerraTreks Travel Logo"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#Daba34] drop-shadow-lg tracking-widest uppercase">
            Book Your Domestic and International Flights With us
          </h2>
          <p className="text-3xl md:text-5xl font-black mb-10 text-white drop-shadow-xl tracking-wide uppercase">
            ADVENTURE AWAITS TODAY
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/packages"
              className="bg-[#002E5D] text-white font-bold py-4 px-10 rounded-full text-lg shadow-md hover:bg-[#001b38] transition-all duration-300"
            >
              Explore Packages
            </Link>
            <Link
              href="/contact"
              className="bg-[#Daba34] text-black font-bold py-4 px-10 rounded-full text-lg shadow-md hover:bg-[#c9a92e] transition-all duration-300 uppercase"
            >
              Book Now!!
            </Link>
          </div>
        </div>
      </section>

      {/* ── SPECIAL PACKAGES SECTION ── */}
      <section className="py-20 px-4 md:px-8 bg-[#F8F9FA] max-w-[1400px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#002E5D] tracking-tight uppercase" style={{ fontWeight: 900 }}>FEATURED PACKAGES & TOURS</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Explore exclusive deals with realistic rates. Choose from our curated local and international destinations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 shadow-sm flex flex-col h-full"
            >
              {/* Image & Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={pkg.img}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />

                {/* Blue location badge */}
                <div className="absolute bottom-4 left-4 bg-[#002E5D] text-white font-bold px-4 py-2 flex items-center gap-2 text-sm shadow-sm group-hover:-translate-y-1 transition-transform">
                  <MapPin className="w-4 h-4" /> {pkg.location}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-[#002E5D] mb-4 uppercase line-clamp-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                  {pkg.desc}
                </p>

                {/* Icons row */}
                <div className="flex items-center gap-6 mt-auto pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Moon className="w-5 h-5 text-[#002E5D]" />
                    <span className="text-sm font-medium">{pkg.nights} Night</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <User className="w-5 h-5 text-[#002E5D]" />
                    <span className="text-sm font-medium">{pkg.adults} Adult</span>
                  </div>
                </div>

                {/* Price and Button Row */}
                <div className="pt-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-[#002E5D] font-semibold">From</span>
                    <span className="text-2xl font-black text-[#002E5D] uppercase">{pkg.price}</span>
                  </div>
                  <Link
                    href="/packages"
                    className="bg-[#002E5D] hover:bg-[#001b38] text-white text-sm font-bold px-6 py-3 rounded-full transition-colors flex-shrink-0"
                  >
                    {pkg.priceType}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── REVIEWS BANNER ── */}
      <section className="relative w-full py-24 mb-10 overflow-hidden text-center bg-[#F8F9FA]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/safari-sunset.jpg')", opacity: 0.1 }} />
        <div className="relative z-10 w-full bg-[#002E5D]/80 py-16 backdrop-blur-sm shadow-sm text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase text-white">TOP REVIEWS</h2>
          <p className="text-lg font-medium text-white/90">FROM OUR HAPPY CLIENTS</p>
        </div>
      </section>

      {/* ── OUR CLIENTS ── */}
      <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-3xl font-black text-[#002E5D] mb-6 uppercase">OUR CLIENTS</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-4xl">
          The companies that we deal with are government, NGOs, non-governmental organizations, private sectors as well as individual clients. The following are some of our past and present clients:
        </p>
        <div className="flex flex-wrap items-center gap-12 mt-8 opacity-70">
          {/* Client logos placeholder */}
          <h1 className="text-4xl font-black text-blue-900 border-2 border-blue-900 px-6 py-4 rounded-xl">CRS</h1>
          <h1 className="text-4xl font-black text-red-600 border-2 border-red-600 px-6 py-4 rounded-xl">ROSS</h1>
          <h1 className="text-4xl font-black text-gray-800 border-2 border-gray-800 px-6 py-4 rounded-xl">Government</h1>
        </div>
      </section>

      {/* ── ASSOCIATIONS ── */}
      <section className="pt-16 pb-8 px-4 md:px-8 bg-white text-center border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-[#002E5D] mb-6 uppercase tracking-wider">
            Our Associations
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
            We are proud to be affiliated with globally recognized organizations to bring you the best travel experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            {/* IATA */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-32 h-16 mb-2">
                <Image src="/iata-logo.png" alt="IATA Accredited Agent" fill className="object-contain" />
              </div>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Accredited Agent</span>
            </div>
            {/* TAAZ */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-32 h-16 mb-2">
                <Image src="/taaz-logo.png" alt="TAAZ Member" fill className="object-contain" />
              </div>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Member</span>
            </div>
            {/* NWC */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl font-black text-[#002E5D] tracking-widest">NWC</div>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Association</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── AIRLINE PARTNERS ── */}
      <section className="py-16 px-4 md:px-8 bg-[#F8F9FA] text-center border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#002E5D] mb-4 uppercase tracking-wider">
            BOOK YOUR FLIGHTS WITH US
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto font-medium">
            We proudly work directly with over 20+ domestic and international airline partners. Adventure awaits today!
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
            {airlinePartners.map((airline) => (
              <div key={airline.name} className="flex flex-col items-center justify-center bg-white border border-gray-100 shadow-sm p-4 w-32 h-32 md:w-40 md:h-40 rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={airline.logo}
                  alt={airline.name}
                  className="w-full h-full object-contain mb-3 p-1 mix-blend-multiply opacity-90 grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if clearbit logo fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <span className="hidden text-xs font-bold uppercase text-[#002E5D] text-center leading-snug">
                  {airline.name}
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider opacity-70">Partner</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-gray-400 font-medium">
            Flight and accommodation rates are subject to availability and T and Cs apply.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
