"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import Image from "next/image";

const galleryItems = [
    { type: "image", src: "/images/gallery/Ethan%20.jpeg", title: "Adventure", category: "Gallery" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0003.jpg", title: "Safari Sunset", category: "Safari" },
    { type: "image", src: "/images/safari-3.jpg", title: "The Golden Hour", category: "Safari" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0004.jpg", title: "African Plains", category: "Heritage" },
    { type: "image", src: "/images/gallery/WhatsApp%20Image%202026-02-22%20at%208.02.25%20PM.jpeg", title: "Team", category: "Gallery" },
    { type: "video", src: "/images/gallery/VID-20260312-WA0021.mp4", title: "Untamed Motion", category: "Action" },
    { type: "video", src: "/images/gallery/WhatsApp%20Video%202026-03-11%20at%208.00.26%20AM.mp4", title: "Journey", category: "Gallery" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0006.jpg", title: "Nature's Echo", category: "Wildlife" },
    { type: "image", src: "/images/zanzibar-beach-view.jpg", title: "Turquoise Bliss", category: "Beach" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0007.jpg", title: "Coastal Retreat", category: "Beach" },
    { type: "image", src: "/images/gallery/WhatsApp%20Image%202026-03-11%20at%208.00.25%20AM.jpeg", title: "Explore", category: "Gallery" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0008.jpg", title: "Elephants in Harmony", category: "Wildlife" },
    { type: "video", src: "/images/gallery/better%20.mp4", title: "Experience", category: "Gallery" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0009.jpg", title: "Wild Horizon", category: "Safari" },
    { type: "image", src: "/images/victoria-falls.png", title: "The Smoke that Thunders", category: "Nature" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0010.jpg", title: "Luxury Tent", category: "Luxury" },
    { type: "video", src: "/images/gallery/go.mp4", title: "Travel", category: "Gallery" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0011.jpg", title: "Bush Picnic", category: "Experience" },
    { type: "image", src: "/images/lower-zambezi.png", title: "River Rhythms", category: "Wildlife" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0012.jpg", title: "Morning Dew", category: "Nature" },
    { type: "video", src: "/images/gallery/half.mp4", title: "Landscapes", category: "Gallery" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0013.jpg", title: "Grand Terminal", category: "Travel" },
    { type: "image", src: "/images/corporate-travel.png", title: "Executive Precision", category: "Corporate" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0014.jpg", title: "Skyline Views", category: "City" },
    { type: "image", src: "/images/gallery/image.jpeg", title: "Memories", category: "Gallery" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0015.jpg", title: "Serene Waters", category: "Nature" },
    { type: "image", src: "/images/safari-1.jpg", title: "Untamed Beauty", category: "Wildlife" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0016.jpg", title: "Cultural Heart", category: "Culture" },
    { type: "image", src: "/images/gallery/kkai.jpeg", title: "Scenic Views", category: "Gallery" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0017.jpg", title: "Golden Grasslands", category: "Safari" },
    { type: "video", src: "/images/gallery/mae.mp4", title: "Moments", category: "Gallery" },
    { type: "image", src: "/images/zanzibar-resort-aerial.jpg", title: "Island Sanctuary", category: "Luxury" },
    { type: "image", src: "/images/gallery/IMG-20260312-WA0020.jpg", title: "Zambian Pride", category: "Heritage" },
    { type: "video", src: "/images/gallery/ok.mp4", title: "Wilderness", category: "Gallery" },
    { type: "image", src: "/images/south-luangwa.png", title: "Safari Soul", category: "Nature" },
    { type: "image", src: "/images/gallery/owner.jpeg", title: "Leadership", category: "Gallery" },
    { type: "image", src: "/images/egypt.png", title: "Ancient Echoes", category: "Culture" },
    { type: "image", src: "/images/gallery/owner2.jpeg", title: "Vision", category: "Gallery" },
    { type: "image", src: "/images/dubai.png", title: "Desert Futurism", category: "City" },
    { type: "video", src: "/images/gallery/to.mp4", title: "Discovery", category: "Gallery" }
];

export default function GalleryPage() {
    return (
        <main className="relative min-h-screen bg-white text-[#00204A]">
            {/* ── HERO ── */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#00204A]">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/images/safari-2.jpg"
                        alt="Gallery Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
                    >
                        The Visual <span className="italic font-normal text-[#D4AF37]">Narrative</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-sm"
                    >
                        Capturing the spirit of adventure
                    </motion.p>
                </div>
            </section>

            {/* ── GALLERY GRID ── */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-5 sm:px-8">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 3) * 0.1 }}
                                className="relative group overflow-hidden rounded-2xl break-inside-avoid"
                            >
                                <div className="relative aspect-[4/5] sm:aspect-auto">
                                    {item.type === "video" ? (
                                        <video
                                            src={item.src}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full sm:h-auto object-cover transition-transform duration-700 group-hover:scale-110 aspect-[4/5] sm:aspect-auto"
                                        />
                                    ) : (
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            width={800}
                                            height={1000}
                                            className="w-full h-full sm:h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 pointer-events-none">
                                        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.category}</span>
                                        <h3 className="text-white text-2xl font-serif font-bold">{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
