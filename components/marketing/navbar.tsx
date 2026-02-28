"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Tour Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
];

export const Navbar = ({ variant }: { variant?: "transparent" | "solid" }) => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        // Reset scroll state on pathname change
        setIsScrolled(window.scrollY > 20);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const isSolid = variant === "solid" || isScrolled || isMobileMenuOpen || pathname === "/contact";

    return (
        <>
            {/* Top Bar - Luciano Style */}
            <div className={cn(
                "fixed top-0 left-0 right-0 z-[110] bg-white border-b border-black/5 py-2 transition-all duration-500 overflow-hidden hidden md:block",
                isScrolled ? "h-0 opacity-0 py-0" : "h-10 opacity-100"
            )}>
                <div className="container-wide flex justify-between items-center h-full">
                    <div className="flex items-center gap-6">
                        <a href="tel:+260979189370" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-midnight/90 hover:text-primary transition-colors">
                            <Phone className="w-3 h-3 text-primary" /> +260 97 918 9370
                        </a>
                        <a href="mailto:travel@terratrekstravel.com" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-midnight/90 hover:text-primary transition-colors">
                            <Mail className="w-3 h-3 text-primary" /> travel@terratrekstravel.com
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-midnight/90 hover:text-primary transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
                        <a href="#" className="text-midnight/90 hover:text-primary transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
                    </div>
                </div>
            </div>

            <header
                className={cn(
                    "fixed left-0 right-0 z-[100] transition-all duration-700",
                    isScrolled ? "top-0 py-3 glass-nav shadow-sm" : "md:top-10 top-0 py-6 bg-transparent",
                    isSolid && !isScrolled ? "bg-white py-6" : ""
                )}
            >
                <div className="container-wide flex items-center justify-between gap-4 md:gap-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group relative z-50 transition-transform duration-500 hover:scale-[1.02]" aria-label="TerraTreks Travel Home">
                        <div className={cn(
                            "relative transition-all duration-700 ease-in-out shrink-0",
                            isScrolled
                                ? "w-32 h-8 md:w-40 md:h-10"
                                : "w-36 h-9 sm:w-48 sm:h-12 md:w-52 md:h-14 lg:w-72 lg:h-20"
                        )}>
                            <Image
                                src="/terratreks-logo.png"
                                alt="TerraTreks Travel"
                                width={300}
                                height={80}
                                priority
                                className={cn(
                                    "w-full h-full object-contain object-left transition-all duration-700",
                                    !isScrolled && !isSolid && !isMobileMenuOpen ? "brightness-0 invert opacity-100" : ""
                                )} />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:text-primary relative group font-sans",
                                    isScrolled || isSolid ? "text-midnight" : "text-white/90",
                                    pathname === link.href && "text-primary"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary transition-all duration-700 group-hover:w-full",
                                    pathname === link.href && "w-full"
                                )} />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <Link href="/contact">
                            <Button
                                size="sm"
                                className={cn(
                                    "rounded-none px-8 py-6 text-xs font-bold tracking-[0.2em] uppercase shadow-md transition-luxury hover:scale-105 active:scale-95 bg-primary text-white hover:bg-midnight",
                                    !isScrolled && !isSolid &&
                                    "border border-white/20 bg-transparent text-white hover:bg-white hover:text-primary"
                                )}
                            >
                                <span className="flex items-center gap-2">
                                    Make an Enquiry <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden relative z-[110] p-2 -mr-2 group"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <div className="flex flex-col gap-1.5 w-6 items-end">
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: "#111D23" } : { rotate: 0, y: 0, backgroundColor: isSolid ? "#111D23" : "#FFFFFF" }}
                                className="w-6 h-0.5 transition-colors duration-500" />
                            <motion.span
                                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: isSolid ? "#111D23" : "#FFFFFF" }}
                                className="w-4 h-0.5 transition-colors duration-500" />
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: -45, y: -8, width: "24px", backgroundColor: "#111D23" } : { rotate: 0, y: 0, width: "16px", backgroundColor: isSolid ? "#111D23" : "#FFFFFF" }}
                                className="h-0.5 transition-colors duration-500" />
                        </div>
                    </button>
                </div>
            </header>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 glass-mobile-menu z-[90] lg:hidden overflow-hidden"
                    >
                        <div className="absolute inset-0 noise-overlay opacity-30" />

                        <div className="relative z-10 h-full flex flex-col p-6 pt-20 shrink-0 overflow-y-auto">
                            <div className="flex flex-col gap-4">
                                <span className="text-xs font-bold tracking-[0.4em] uppercase text-midnight/90">Navigation</span>
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-xl font-serif text-midnight/90 hover:text-primary transition-luxury flex items-center justify-between group"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className={cn(pathname === link.href && "text-primary italic underline underline-offset-4 decoration-primary/30")}>{link.name}</span>
                                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 transition-luxury group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="mt-auto space-y-12 border-t border-midnight/5 pt-12"
                            >
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="space-y-3">
                                        <span className="text-xs font-bold tracking-[0.4em] uppercase text-midnight/90">Inquiries</span>
                                        <div className="space-y-1">
                                            <a href="mailto:travel@terratrekstravel.com" className="block text-base font-sans font-medium hover:text-primary transition-colors">travel@terratrekstravel.com</a>
                                            <a href="tel:+260979189370" className="block text-base font-sans font-medium hover:text-primary transition-colors">+260 97 918 9370</a>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <span className="text-xs font-bold tracking-[0.4em] uppercase text-midnight/90">Social</span>
                                        <div className="flex gap-6">
                                            <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors">Instagram</a>
                                            <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors">Facebook</a>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/contact" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full py-8 rounded-[2rem] text-sm font-bold tracking-[0.3em] uppercase bg-primary text-white hover:bg-midnight transition-luxury shadow-2xl">
                                        Design My Journey
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
