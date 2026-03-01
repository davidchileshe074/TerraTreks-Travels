"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/marketing/contact-form";
import { Suspense } from "react";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            {/* Background Texture */}
            <div className="fixed inset-0 bg-white -z-10" />
            <div className="fixed inset-0 film-grain -z-10 opacity-10" />

            {/* Spacer for Navbar */}
            <div className="h-20 sm:h-24 md:h-28 lg:h-36" />

            <section className="pt-12 pb-24 px-4 sm:px-6 md:px-10">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section - Stacked on Mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 lg:mb-32">
                        {/* Left Side: Editorial Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-12 sm:space-y-16"
                        >
                            <div className="space-y-6 sm:space-y-8">
                                <p className="section-label text-primary text-sm sm:text-base">Get in Touch</p>
                                <div className="space-y-4">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-midnight leading-tight tracking-tight">
                                        Begin the
                                        <br />
                                        <span className="italic font-normal opacity-80 block sm:inline">Conversation</span>
                                    </h1>
                                    <p className="text-midnight/90 text-base sm:text-lg leading-relaxed font-normal max-w-md font-sans">
                                        Our journey designers are ready to assist you in crafting an exceptional travel experience across Southern Africa.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Details - Better Mobile Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
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
                                        transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                                        className="space-y-4 p-4 sm:p-0 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-xl"
                                    >
                                        <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary shrink-0">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-midnight/90 font-sans">
                                                {item.label}
                                            </h3>
                                            <div className="space-y-1.5">
                                                {item.values.map(v => (
                                                    <p key={v} className="text-midnight/90 font-medium text-base sm:text-sm font-sans leading-tight break-words">
                                                        {v}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <Suspense fallback={
                                <div className="h-80 sm:h-96 w-full animate-pulse bg-gradient-to-br from-white/50 to-primary/5 rounded-3xl shadow-2xl" />
                            }>
                                <ContactForm />
                            </Suspense>
                        </motion.div>
                    </div>

                    {/* Banking & Payments - Better Mobile Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-2xl p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50/50 border border-midnight/[0.06] shadow-2xl lg:shadow-none"
                    >
                        <div className="space-y-4 mb-8">
                            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-serif text-midnight">Banking Options</h3>
                            <p className="text-midnight/90 text-sm sm:text-base font-sans">For secure direct transfers and official payments.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary font-sans">Bank</p>
                                    <p className="text-lg sm:text-sm font-semibold text-midnight font-sans">FNB (Solwezi Branch)</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary font-sans">Account Name</p>
                                    <p className="text-lg sm:text-sm font-semibold text-midnight uppercase tracking-tight font-sans">TERRATREKS TRAVELS</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary font-sans">Account Number</p>
                                    <p className="text-lg sm:text-sm font-semibold text-midnight font-mono">63112834626</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary font-sans">SWIFT Code</p>
                                    <p className="text-lg sm:text-sm font-semibold text-midnight font-mono">FIRNZMLX</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-8 border-t border-midnight/[0.08] mt-12">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <p className="text-sm sm:text-xs font-bold tracking-[0.15em] uppercase text-midnight/90 font-sans">Mobile Payments Accepted:</p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase font-sans shadow-sm hover:shadow-md transition-all duration-200">
                                        PayToCell
                                    </span>
                                    <span className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase font-sans shadow-sm hover:shadow-md transition-all duration-200">
                                        MTN MoMo
                                    </span>
                                    <span className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase font-sans shadow-sm hover:shadow-md transition-all duration-200">
                                        Airtel Money
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Immersive Map Section - Mobile Optimized */}
            <section className="px-4 sm:px-6 md:px-10 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="h-96 sm:h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden border-4 border-white/60 shadow-2xl relative bg-gradient-to-br from-primary/5 to-transparent">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123114.39417937402!2d28.20455013915162!3d-15.41337446415715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b04a11f78ff%3A0x6d0e82c896565017!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2) brightness(1)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
