"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/marketing/contact-form";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen">
            <Navbar variant="solid" />

            {/* Background Texture */}
            <div className="fixed inset-0 bg-sand -z-10" />
            <div className="fixed inset-0 film-grain -z-10 opacity-30" />

            {/* Spacer for Navbar */}
            <div className="h-28 md:h-36" />

            <section className="py-20 px-6 md:px-10">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left Side: Editorial Text */}
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="space-y-8"
                        >
                            <p className="text-label text-gold">Get in Touch</p>
                            <div className="space-y-4">
                                <h1 className="text-6xl md:text-8xl font-serif text-midnight leading-[0.9]">
                                    Begin the
                                    <br />
                                    <span className="text-primary italic">Conversation</span>
                                </h1>
                                <p className="text-midnight/90 text-lg md:text-xl max-w-md font-normal leading-relaxed font-sans">
                                    Our journey designers are ready to assist you in crafting an exceptional travel experience across Southern Africa.
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {[
                                {
                                    icon: Phone,
                                    label: "Telephone",
                                    values: ["+260 97 918 9370", "+260 76 417 8388"]
                                },
                                {
                                    icon: Mail,
                                    label: "Email",
                                    values: ["travel@terratrekstravel.com", "anna@terratrekstravel.com"]
                                },
                                {
                                    icon: MapPin,
                                    label: "Visit Us",
                                    values: ["Kankasa Office Block", "Mushitala, Solwezi, Zambia"]
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
                                    className="space-y-4"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-midnight/[0.04] flex items-center justify-center text-gold">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-midnight/60 font-sans">{item.label}</h3>
                                        <div className="space-y-0.5">
                                            {item.values.map(v => (
                                                <p key={v} className="text-midnight/90 font-medium text-sm font-sans tracking-tight">{v}</p>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </section>

            {/* Immersive Map Section */}
            <section className="py-24 px-6 md:px-10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="h-[600px] w-full rounded-[48px] overflow-hidden border border-midnight/[0.06] shadow-2xl relative">
                        <div className="absolute inset-0 bg-midnight/5 -z-10" />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123114.39417937402!2d28.20455013915162!3d-15.41337446415715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b04a11f78ff%3A0x6d0e82c896565017!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2) brightness(1)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        {/* Overlay to catch clicks and style if needed */}
                        <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 rounded-[48px]" />
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
