"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Tour Packages", href: "/packages" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = false; // Always use solid background

  return (
    <>
      {/* Main Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] py-3 md:py-4 transition-all duration-300",
          isTransparent
            ? "bg-transparent border-b-0"
            : "bg-white border-b border-gray-100 shadow-sm",
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group relative z-[110]"
            aria-label="TerraTreks Travel Home"
          >
            <div
              className={cn(
                "relative w-48 h-14 sm:w-64 sm:h-20 md:w-96 md:h-32 flex-shrink-0 rounded-xl transition-all duration-300",
                isTransparent ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/50 px-3 py-1" : ""
              )}
            >
              <Image
                src="/terratreks-logo.png"
                alt="TerraTreks Travel"
                fill
                priority
                className="object-contain object-left transition-all duration-300 saturate-150 contrast-125"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base xl:text-lg font-bold tracking-wide uppercase transition-all relative group",
                  isTransparent
                    ? pathname === link.href
                      ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                      : "text-white/95 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                    : pathname === link.href
                      ? "text-[#00204A]"
                      : "text-gray-900 hover:text-[#00204A]",
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 group-hover:w-full",
                    pathname === link.href ? "w-full" : "w-0",
                    isTransparent ? "bg-white" : "bg-[#00204A]",
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-8">
            {/* Hamburger (Mobile Only) */}
            <button
              className="lg:hidden relative z-[110] p-2 flex flex-col gap-[5px] justify-center items-center group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div
                className={cn(
                  "w-6 h-[3px] transition-all duration-300",
                  isTransparent ? "bg-white" : "bg-black",
                  isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : "",
                )}
              />
              <div
                className={cn(
                  "w-6 h-[3px] transition-all duration-300",
                  isTransparent ? "bg-white" : "bg-black",
                  isMobileMenuOpen ? "opacity-0" : "",
                )}
              />
              <div
                className={cn(
                  "w-6 h-[3px] transition-all duration-300",
                  isTransparent ? "bg-white" : "bg-black",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : "",
                )}
              />
            </button>

            <a
              href="https://wa.me/260979189370"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden sm:flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide uppercase transition-colors shadow-sm",
                isTransparent
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800",
              )}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WHATSAPP
            </a>
          </div>
        </div>
      </header>

      {/* Improved Flyout Menu Overlay (Mobile Only) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-white/98 backdrop-blur-sm z-[105] flex flex-col lg:hidden overflow-y-auto"
          >
            <div className="flex-1 flex flex-col px-5 sm:px-8 pt-20 pb-12 max-w-md mx-auto w-full">
              {/* Close button */}
              <button
                className="self-end mb-10 p-3 -mr-3 text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>

              <nav className="flex flex-col gap-6 sm:gap-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between py-4 text-2xl sm:text-3xl font-semibold tracking-tight transition-colors",
                        pathname === link.href
                          ? "text-[#00204A]"
                          : "text-gray-900 hover:text-[#00204A]",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                      {pathname === link.href ? (
                        <span className="text-[#00204A] text-xl font-bold">
                          ·
                        </span>
                      ) : (
                        <ArrowRight className="w-6 h-6 opacity-50 transition-opacity" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navLinks.length * 0.08 + 0.2,
                  duration: 0.5,
                }}
                className="mt-12 sm:mt-16"
              >
                <a
                  href="https://wa.me/260979189370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-xl font-semibold text-lg shadow-md hover:bg-[#20b858] active:bg-[#1da851] transition-colors w-full max-w-sm mx-auto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Optional footer */}
              <div className="mt-auto pt-10 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} TerraTreks
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
