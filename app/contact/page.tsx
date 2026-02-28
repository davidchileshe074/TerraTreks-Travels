"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/marketing/contact-form";
import { Suspense } from "react";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen">


            {/* Background Texture */}
            <div className="fixed inset-0 bg-white -z-10" />
            <div className="fixed inset-0 film-grain -z-10 opacity-10" />

            {/* Spacer for Navbar */}
            <div className="h-28 md:h-36" />

            <section className="section-padding px-6 md:px-10">
                <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left Side: Editorial Text */}
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="space-y-8"
                        >
                            <p className="section-label text-primary">Get in Touch</p>
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-7xl font-serif text-midnight leading-none tracking-tight">
                                    Begin the
                                    <br />
                                    <span className="italic font-normal opacity-80">Conversation</span>
                                </h1>
                                <p className="text-midnight/90 text-lg leading-relaxed font-normal max-w-md font-sans">
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
                                    values: ["Plot No. 2954, Kankasa Office Block", "Buffalo Wings, Mushitala", "Kansanshi Road, Solwezi, Zambia"]
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
                                    className="space-y-4"
                                >
                                    <div className="w-10 h-10 rounded-none bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-midnight/90 font-sans">{item.label}</h3>
                                        <div className="space-y-0.5">
                                            {item.values.map(v => (
                                                <p key={v} className="text-midnight/90 font-medium text-sm font-sans tracking-tight">{v}</p>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Banking & Payments */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="p-10 rounded-none bg-white border border-midnight/[0.05] shadow-2xl space-y-8"
                        >
                            <div className="space-y-2">
                                <h3 className="text-2xl font-serif text-midnight">Banking Options</h3>
                                <p className="text-midnight/90 text-sm font-sans">For secure direct transfers and official payments.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary font-sans">Bank</p>
                                        <p className="text-sm font-semibold text-midnight">FNB (Solwezi Branch)</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary font-sans">Account Name</p>
                                        <p className="text-sm font-semibold text-midnight uppercase tracking-tight">TERRATREKS TRAVELS</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary font-sans">Account Number</p>
                                        <p className="text-sm font-semibold text-midnight font-mono">63112834626</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary font-sans">SWIFT Code</p>
                                        <p className="text-sm font-semibold text-midnight font-mono">FIRNZMLX</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-midnight/[0.04] flex flex-wrap gap-6 items-center">
                                <p className="text-xs font-bold tracking-[0.2em] uppercase text-midnight/90 font-sans">Mobile Payments Accepted:</p>
                                <div className="flex gap-4 items-center">
                                    <span className="px-3 py-1 rounded-none bg-primary/5 text-xs font-bold text-primary uppercase font-sans">PayToCell</span>
                                    <span className="px-3 py-1 rounded-none bg-primary/5 text-xs font-bold text-primary uppercase font-sans">MTN MoMo</span>
                                    <span className="px-3 py-1 rounded-none bg-primary/5 text-xs font-bold text-primary uppercase font-sans">Airtel Money</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Suspense fallback={<div className="h-96 w-full animate-pulse bg-white/50 rounded-[40px]" />}>
                            <ContactForm />
                        </Suspense>
                    </motion.div>
                </div>
            </section>

            {/* Immersive Map Section */}
            <section className="section-padding px-6 md:px-10">
                <div className="container-wide">
                    <div className="h-[600px] w-full rounded-none overflow-hidden border border-midnight/[0.06] shadow-2xl relative">
                        <div className="absolute inset-0 bg-primary/5 -z-10" />
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
                        <div className="absolute inset-0 pointer-events-none border-[8px] border-white/50" />
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
