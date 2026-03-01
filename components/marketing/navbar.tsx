"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Phone, Mail, ArrowRight } from "lucide-react";
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
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
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

  // ────────────────────────────────────────────────
  // Unified "solid" state — makes everything consistent
  // ────────────────────────────────────────────────
  const forceSolid = variant === "solid" || pathname === "/contact";
  const shouldBeSolid = forceSolid || isScrolled || isMobileMenuOpen;

  const bgClass = shouldBeSolid ? "bg-white shadow-sm" : "bg-transparent";
  const textClass = shouldBeSolid ? "text-midnight" : "text-white/90";
  const logoInvert = !shouldBeSolid && !isMobileMenuOpen;

  const hamburgerColor = shouldBeSolid ? "#111D23" : "#FFFFFF";

  return (
    <>
      {/* Top Bar - hidden when scrolled or solid */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-[110] bg-white border-b border-black/5 py-2 transition-all duration-500 overflow-hidden hidden md:block",
          shouldBeSolid || isScrolled ? "h-0 opacity-0 py-0" : "h-10 opacity-100"
        )}
      >
        <div className="container-wide flex justify-between items-center h-full">
          <div className="flex items-center gap-6">
            <a
              href="tel:+260979189370"
              className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-midnight/90 hover:text-primary transition-colors"
            >
              <Phone className="w-3 h-3 text-primary" /> +260 97 918 9370
            </a>
            <a
              href="mailto:travel@terratrekstravel.com"
              className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-midnight/90 hover:text-primary transition-colors"
            >
              <Mail className="w-3 h-3 text-primary" /> travel@terratrekstravel.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-midnight/90 hover:text-primary transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="text-midnight/90 hover:text-primary transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "fixed left-0 right-0 z-[100] transition-all duration-700",
          shouldBeSolid ? "top-0 py-4" : "md:top-10 top-0 py-6",
          bgClass
        )}
      >
        <div className="container-wide flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group relative z-50 transition-transform duration-500 hover:scale-[1.02]"
            aria-label="TerraTreks Travel Home"
          >
            <div
              className={cn(
                "relative transition-all duration-700 ease-in-out shrink-0",
                shouldBeSolid ? "w-32 h-8 md:w-40 md:h-10" : "w-36 h-9 sm:w-48 sm:h-12 md:w-52 md:h-14 lg:w-72 lg:h-20"
              )}
            >
              <Image
                src="/terratreks-logo.png"
                alt="TerraTreks Travel"
                width={300}
                height={80}
                priority
                className={cn(
                  "w-full h-full object-contain object-left transition-all duration-700",
                  logoInvert && "brightness-0 invert"
                )}
              />
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
                  textClass,
                  pathname === link.href && "text-primary"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary transition-all duration-700 group-hover:w-full",
                    pathname === link.href && "w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* CTA - Desktop */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button
                size="sm"
                className={cn(
                  "rounded-none px-8 py-6 text-xs font-bold tracking-[0.2em] uppercase shadow-md transition-luxury hover:scale-105 active:scale-95",
                  shouldBeSolid
                    ? "bg-primary text-white hover:bg-midnight"
                    : "border border-white/20 bg-transparent text-white hover:bg-white hover:text-primary"
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
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                  backgroundColor: isMobileMenuOpen ? "#111D23" : hamburgerColor,
                }}
                transition={{ duration: 0.4 }}
                className="w-6 h-0.5"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  backgroundColor: isMobileMenuOpen ? "#111D23" : hamburgerColor,
                }}
                transition={{ duration: 0.4 }}
                className="w-4 h-0.5"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                  width: isMobileMenuOpen ? "24px" : "16px",
                  backgroundColor: isMobileMenuOpen ? "#111D23" : hamburgerColor,
                }}
                transition={{ duration: 0.4 }}
                className="h-0.5"
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[90] lg:hidden"
          >
            <div className="relative z-10 h-full flex flex-col p-6 pt-20 overflow-y-auto">
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-midnight/70">Navigation</span>
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 + 0.2, duration: 0.6 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-2xl font-serif text-midnight hover:text-primary transition-colors flex items-center justify-between group",
                        pathname === link.href && "text-primary"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-auto space-y-10 pt-12 border-t border-midnight/10"
              >
                <div className="grid gap-8">
                  <div>
                    <span className="text-xs font-bold tracking-[0.4em] uppercase text-midnight/70 block mb-3">Inquiries</span>
                    <div className="space-y-2 text-lg">
                      <a href="mailto:travel@terratrekstravel.com" className="block hover:text-primary transition-colors">
                        travel@terratrekstravel.com
                      </a>
                      <a href="tel:+260979189370" className="block hover:text-primary transition-colors">
                        +260 97 918 9370
                      </a>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold tracking-[0.4em] uppercase text-midnight/70 block mb-3">Social</span>
                    <div className="flex gap-6 text-lg">
                      <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                      <a href="#" className="hover:text-primary transition-colors">Facebook</a>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full py-7 text-base font-bold tracking-wider uppercase bg-primary hover:bg-midnight text-white transition-colors">
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