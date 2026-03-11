"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
    { name: "Emirates", logo: "https://www.google.com/s2/favicons?sz=128&domain=emirates.com" },
    { name: "Qatar Airways", logo: "/images/Qatar Airways_Logo_2.webp" },
    { name: "Ethiopian Airlines", logo: "https://www.google.com/s2/favicons?sz=128&domain=ethiopianairlines.com" },
    { name: "Proflight Zambia", logo: "/images/proflight.png" },
    { name: "EgyptAir", logo: "/images/egyptair-seeklogo.png" },
    { name: "Air Botswana", logo: "/images/air-botswana.jpg" },
    { name: "Travelport", logo: "/images/Travelport_idxi6gDwib_0.png" },
];

export const PartnerLogos = () => {
    return (
        <section className="py-12 bg-white border-y border-sand">
            <div className="container-luxury">
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50">
                    {partners.map((partner) => (
                        <motion.div
                            key={partner.name}
                            whileHover={{ opacity: 1, scale: 1.1 }}
                            className="grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                        >
                            <div className="relative w-12 h-12 md:w-16 md:h-16">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
