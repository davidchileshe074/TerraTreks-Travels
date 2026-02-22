"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Journeys", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Corporate", href: "/corporate" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export const Navbar = ({ variant = "transparent" }: { variant?: "transparent" | "solid" }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isSolid = variant === "solid" || isScrolled;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-10",
                isSolid
                    ? "glass-nav md:glass-nav py-4 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] bg-transparent md:bg-savannah/80"
                    : "bg-transparent py-4 md:py-6"
            )}
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-between pointer-events-auto">
                {/* Logo */}
                <Link href="/" className="flex items-center group transition-all duration-500 relative z-50" aria-label="TerraTreks Travel Home">
                    <div className="relative w-36 h-10 md:w-64 md:h-16 transition-all duration-500">
                        <Image
                            src="/terratreks-logo.png"
                            alt="TerraTreks Travel"
                            width={256}
                            height={64}
                            priority
                            className={cn(
                                "w-full h-full object-contain object-left transition-all duration-500",
                                !isSolid && !isMobileMenuOpen ? "brightness-0 invert opacity-100" : ""
                            )}
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:text-gold relative group font-sans",
                                isSolid ? "text-midnight/90" : "text-white/90"
                            )}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden lg:block">
                    <Button
                        variant={isSolid ? "primary" : "outline"}
                        size="sm"
                        className={cn(
                            "rounded-full px-7",
                            !isSolid &&
                            "border-white/20 text-white hover:bg-white hover:text-midnight"
                        )}
                    >
                        Inquire
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden relative z-50 p-2 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    <div className="flex flex-col gap-1.5 w-6 items-end">
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: "#111D23" } : { rotate: 0, y: 0, backgroundColor: isSolid ? "#111D23" : "#FFFFFF" }}
                            className="w-6 h-0.5 transition-colors"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: isSolid ? "#111D23" : "#FFFFFF" }}
                            className="w-4 h-0.5 transition-colors"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -8, width: "24px", backgroundColor: "#111D23" } : { rotate: 0, y: 0, width: "16px", backgroundColor: isSolid ? "#111D23" : "#FFFFFF" }}
                            className="h-0.5 transition-colors"
                        />
                    </div>
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 glass-mobile-menu z-40 flex flex-col p-6 pt-32 gap-10 lg:hidden overflow-y-auto"
                    >
                        {/* Mobile Menu Logo branding if needed */}
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-midnight/30 px-2">Menu</span>
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: idx * 0.05,
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }}
                                    key={link.name}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-3xl font-serif text-midnight/90 hover:text-gold transition-all duration-300 flex items-center justify-between group px-2 py-1"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span>{link.name}</span>
                                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 transition-luxury group-hover:opacity-100 group-hover:translate-x-0 text-gold" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-auto space-y-12 pb-10"
                        >
                            <div className="space-y-8">
                                <Link href="/contact" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full py-7 rounded-2xl text-[10px] font-bold tracking-[0.3em] uppercase bg-midnight text-white hover:bg-gold transition-all duration-500">
                                        Begin your journey
                                    </Button>
                                </Link>

                                {/* Contact Details */}
                                <div className="space-y-6 pt-8 border-t border-midnight/[0.08]">
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-midnight/30">Get in touch</span>
                                    <div className="grid grid-cols-1 gap-5">
                                        <a href="tel:+260979189370" className="flex items-center gap-4 text-midnight/80 text-sm hover:text-gold transition-luxury group">
                                            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-500">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            <span className="font-sans font-medium">+260 97 918 9370</span>
                                        </a>
                                        <a href="mailto:travel@terratrekstravel.com" className="flex items-center gap-4 text-midnight/80 text-sm hover:text-gold transition-luxury group">
                                            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-500">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <span className="font-sans font-medium">travel@terratrekstravel.com</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex flex-col gap-6">
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-midnight/30">Connect with us</span>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-midnight/60 hover:text-white hover:bg-gold transition-all duration-500" aria-label="Follow on Instagram">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-midnight/60 hover:text-white hover:bg-gold transition-all duration-500" aria-label="Follow on Facebook">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-midnight/20 text-[9px] font-bold tracking-[0.4em] uppercase font-sans pt-6 border-t border-midnight/[0.03]">
                                <span>Solwezi, Zambia</span>
                                <span>EST. 2024</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
