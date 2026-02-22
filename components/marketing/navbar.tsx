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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-2 md:px-10",
                isSolid
                    ? "glass-nav md:glass-nav py-4 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] bg-transparent md:bg-savannah/80"
                    : "bg-transparent py-4"
            )}
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group" aria-label="TerraTreks Travel Home">
                    <div className="relative w-80 h-20 md:w-80 md:h-24 transition-all duration-500 -ml-10 md:-ml-3">
                        <Image
                            src="/terratreks-logo.png"
                            alt="TerraTreks Travel"
                            width={320}
                            height={96}
                            priority
                            className={cn(
                                "w-full h-full object-contain transition-all duration-500 scale-150 md:scale-110",
                                !isSolid ? "brightness-0 invert opacity-100" : ""
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
                    className="lg:hidden relative z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-midnight" />
                    ) : (
                        <Menu
                            className={cn(
                                "w-6 h-6",
                                isSolid ? "text-midnight" : "text-white"
                            )}
                        />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 1 }}
                        className="fixed inset-0 glass-mobile-menu z-40 flex flex-col p-8 pt-28 gap-8 lg:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.1 + idx * 0.08,
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    key={link.name}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-4xl font-serif text-midnight/90 hover:text-gold transition-luxury flex items-center justify-between group"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span>{link.name}</span>
                                        <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 transition-luxury group-hover:opacity-100 group-hover:translate-x-0 text-gold" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-auto space-y-10 pb-6"
                        >
                            <div className="space-y-6">
                                <Link href="/contact" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full py-6 rounded-2xl text-xs tracking-[0.2em]">
                                        Begin the Conversation
                                    </Button>
                                </Link>

                                {/* Contact Details */}
                                <div className="grid grid-cols-1 gap-4 pt-4 border-t border-midnight/[0.05]">
                                    <a href="tel:+260979189370" className="flex items-center gap-3 text-midnight/70 text-sm hover:text-gold transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center">
                                            <Phone className="w-3.5 h-3.5" />
                                        </div>
                                        +260 97 918 9370
                                    </a>
                                    <a href="mailto:travel@terratrekstravel.com" className="flex items-center gap-3 text-midnight/70 text-sm hover:text-gold transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center">
                                            <Mail className="w-3.5 h-3.5" />
                                        </div>
                                        travel@terratrekstravel.com
                                    </a>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-4">
                                    <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-midnight/30 font-sans">Connect</h4>
                                    <div className="flex gap-3">
                                        <a href="#" className="w-10 h-10 rounded-full border border-midnight/10 flex items-center justify-center text-midnight/60 hover:text-gold hover:border-gold transition-all" aria-label="Follow on Instagram">
                                            <Instagram className="w-4 h-4" />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full border border-midnight/10 flex items-center justify-center text-midnight/60 hover:text-gold hover:border-gold transition-all" aria-label="Follow on Facebook">
                                            <Facebook className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-midnight/25 text-[10px] font-bold tracking-[0.3em] uppercase font-sans">
                                <span>Solwezi, Zambia</span>
                                <span>Est. 2024</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
