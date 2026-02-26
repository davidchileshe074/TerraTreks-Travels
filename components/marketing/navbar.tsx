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
        <><header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-700",
                isSolid
                    ? "glass-nav py-3 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
                    : "bg-transparent py-4 md:py-6"
            )}
        >
            <div className="container-wide flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center group relative z-50 transition-transform duration-500 hover:scale-105" aria-label="TerraTreks Travel Home">
                    <div className="relative w-32 h-8 md:w-48 md:h-12 transition-all duration-500">
                        <Image
                            src="/terratreks-logo.png"
                            alt="TerraTreks Travel"
                            width={224}
                            height={56}
                            priority
                            className={cn(
                                "w-full h-full object-contain object-left transition-all duration-700",
                                !isSolid && !isMobileMenuOpen ? "brightness-0 invert opacity-100" : ""
                            )} />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:text-gold relative group font-sans",
                                isSolid ? "text-midnight/70" : "text-white/80",
                                pathname === link.href && "text-gold"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gold transition-all duration-700 group-hover:w-full",
                                pathname === link.href && "w-full"
                            )} />
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden lg:block">
                    <Link href="/contact">
                        <Button
                            variant={isSolid ? "primary" : "outline"}
                            size="sm"
                            className={cn(
                                "rounded-full px-10 py-6 text-[11px] font-bold tracking-[0.2em] uppercase shadow-xl transition-luxury hover:scale-105 active:scale-95",
                                !isSolid &&
                                "border-white/20 text-white hover:bg-white hover:text-midnight"
                            )}
                        >
                            <span className="flex items-center gap-2">
                                Inquire <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden relative z-[110] p-2 group"
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
        </header><AnimatePresence>
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
                                <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-midnight/40">Navigation</span>
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-xl font-serif text-midnight/90 hover:text-gold transition-luxury flex items-center justify-between group"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className={cn(pathname === link.href && "text-gold italic underline underline-offset-4 decoration-gold/30")}>{link.name}</span>
                                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 transition-luxury group-hover:opacity-100 group-hover:translate-x-0 text-gold" />
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
                                        <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-midnight/40">Inquiries</span>
                                        <div className="space-y-1">
                                            <a href="mailto:travel@terratrekstravel.com" className="block text-base font-sans font-medium hover:text-gold transition-colors">travel@terratrekstravel.com</a>
                                            <a href="tel:+260979189370" className="block text-base font-sans font-medium hover:text-gold transition-colors">+260 97 918 9370</a>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-midnight/40">Social</span>
                                        <div className="flex gap-6">
                                            <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-gold transition-colors">Instagram</a>
                                            <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-gold transition-colors">Facebook</a>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/contact" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full py-8 rounded-[2rem] text-[11px] font-bold tracking-[0.3em] uppercase bg-midnight text-white hover:bg-gold transition-luxury shadow-2xl">
                                        Design My Journey
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence></>
    );
};
