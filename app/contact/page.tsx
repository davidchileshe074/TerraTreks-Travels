"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/marketing/footer";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Clock, CreditCard } from "lucide-react";
import { ContactForm } from "@/components/marketing/contact-form";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white to-[#FAFAFA] text-[#0F2647] overflow-x-hidden">
      {/* Subtle Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.03)_0%,transparent_50%)] -z-10 pointer-events-none" />

      {/* Navbar Spacer – smaller on mobile */}
      <div className="h-20 sm:h-24 md:h-28 lg:h-36" />

      {/* Main Content */}
      <section className="pt-10 pb-20 sm:pb-24 md:pb-32 px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Hero – scaled down for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-24 md:mb-32 lg:mb-40"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Contact TerraTreks
          </motion.span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-tight">
            Get in
            <br className="hidden sm:block" />
            <span className="italic font-semibold text-[#D4AF37] relative inline-block">
              Touch
              <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#0F2647]/80 max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-light">
            We're here to help you plan your visit to Southern Africa. Just send us a message and we'll get back to you soon.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="w-full"
          >
            <Suspense fallback={<div className="h-[700px] sm:h-[800px] md:h-[900px] bg-gradient-to-br from-slate-50 to-white animate-pulse rounded-2xl sm:rounded-[40px] shadow-xl" />}>
              <ContactForm />
            </Suspense>
          </motion.div>

          {/* Quick Contact Cards – smaller padding/text on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                icon: Phone,
                title: "Speak With Us",
                items: ["+260 97 918 9370", "+260 76 417 8388"],
                hrefPrefix: "tel:",
              },
              {
                icon: Mail,
                title: "Write To Us",
                items: ["travel@terratrekstravel.com", "anna@terratrekstravel.com"],
                hrefPrefix: "mailto:",
              },
              {
                icon: MapPin,
                title: "Find Us",
                items: ["Solwezi, Zambia", "Plot No. 2954, Kankasa Block"],
              },
            ].map((contact, idx) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                className="group relative p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-white border border-slate-100 hover:border-[#D4AF37]/40 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-5 sm:space-y-6 lg:space-y-8">
                  <div className="w-12 h-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-slate-50 flex items-center justify-center text-[#0F2647] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500 shadow-sm">
                    <contact.icon className="w-6 h-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 stroke-[1.6]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#D4AF37] uppercase tracking-widest mb-3 sm:mb-4 lg:mb-5">
                      {contact.title}
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {contact.items.map((item, i) => (
                        <div key={i}>
                          {contact.hrefPrefix ? (
                            <a
                              href={`${contact.hrefPrefix}${item.replace(/\s+/g, "")}`}
                              className="block text-lg sm:text-xl lg:text-2xl font-serif font-medium text-[#0F2647] hover:text-[#D4AF37] transition-colors"
                            >
                              {item}
                            </a>
                          ) : (
                            <p className="text-lg sm:text-xl lg:text-2xl font-serif font-medium text-[#0F2647]">{item}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Payment & Trust Section – tightened up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20 sm:mt-24 lg:mt-32 max-w-4xl lg:max-w-5xl mx-auto p-6 sm:p-8 lg:p-12 xl:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#FAFAFA] to-white border border-slate-100 shadow-xl lg:shadow-2xl backdrop-blur-sm"
        >
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-4 sm:mb-6">
              Secure & Seamless Payments
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-[#0F2647]/80 max-w-2xl lg:max-w-3xl mx-auto">
              Tailored options for your comfort and confidence — every step protected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Bank Transfer */}
            <motion.div
              whileHover={{ scale: 1.015, y: -4 }}
              className="space-y-6 sm:space-y-8 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl bg-white/70 border border-gray-100/50 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 lg:w-16 rounded-xl sm:rounded-2xl bg-[#0F2647]/5 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 sm:w-7 lg:w-8 text-[#0F2647]" />
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold">Bank Transfer</h4>
              </div>
              <div className="space-y-4 sm:space-y-5 text-base sm:text-lg">
                <div className="space-y-1">
                  <span className="block text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-medium">Bank</span>
                  <p className="font-bold">FNB – Solwezi Branch</p>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-medium">Account Name</span>
                  <p className="font-bold uppercase">TERRATREKS TRAVELS</p>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-medium">Account Number</span>
                  <p className="font-mono font-bold tracking-wide">63112834626</p>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-medium">SWIFT / BIC</span>
                  <p className="font-mono font-bold">FIRNZMLX</p>
                </div>
              </div>
            </motion.div>

            {/* Mobile Money */}
            <motion.div
              whileHover={{ scale: 1.015, y: -4 }}
              className="space-y-6 sm:space-y-8 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl bg-white/70 border border-gray-100/50 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 lg:w-16 rounded-xl sm:rounded-2xl bg-[#0F2647]/5 flex items-center justify-center">
                  <Phone className="w-6 h-6 sm:w-7 lg:w-8 text-[#0F2647]" />
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold">Mobile Money</h4>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {["PayToCell", "MTN MoMo", "Airtel Money"].map((method) => (
                    <span
                      key={method}
                      className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/30 text-sm sm:text-base font-semibold uppercase tracking-wider hover:bg-[#D4AF37]/20 hover:shadow-md transition-all"
                    >
                      {method}
                    </span>
                  ))}
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-[#0F2647]/80 leading-relaxed">
                  Instant, trusted across Zambia — your funds move securely and swiftly.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-sm sm:text-base md:text-lg text-slate-600">
            <div className="flex items-center gap-2 sm:gap-3">
              <ShieldCheck className="w-5 h-5 sm:w-6 text-[#D4AF37]" />
              Fully Secure Transactions
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="w-5 h-5 sm:w-6 text-[#D4AF37]" />
              Confirmation Within Hours
            </div>
          </div>
        </motion.div>
      </section>

      {/* Map – reduced height on mobile */}
      <section className="px-5 sm:px-6 lg:px-12 pb-16 sm:pb-20 md:pb-24 lg:pb-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white shadow-xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 z-10 pointer-events-none transition-opacity group-hover:opacity-0 duration-700" />
          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 px-4 text-center">
            <div className="bg-white/90 backdrop-blur-lg px-6 sm:px-10 py-4 sm:py-6 rounded-xl sm:rounded-2xl shadow-2xl">
              <p className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-[#0F2647] mb-2 sm:mb-3">
                Visit Our Office in Solwezi
              </p>
              <a
                href="https://maps.google.com/..." // ← replace with actual directions link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 text-[#D4AF37] font-medium text-sm sm:text-base hover:underline"
              >
                Get Directions <ArrowRight className="w-4 h-4 sm:w-5" />
              </a>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123114.39417937402!2d28.20455013915162!3d-15.41337446415715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b04a11f78ff%3A0x6d0e82c896565017!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] grayscale-[0.35] group-hover:grayscale-0 contrast-110 transition-all duration-700"
          />
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}