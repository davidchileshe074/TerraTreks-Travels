import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="footer-padding bg-primary pt-32 pb-16 text-white relative overflow-hidden">
            {/* Background Texture/Art */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.05] skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />

            <div className="container-wide relative z-10">
                {/* Branding & Overlay Text */}
                <div className="absolute top-0 left-0 opacity-[0.03] pointer-events-none select-none -translate-y-1/2">
                    <span className="text-[25rem] font-serif font-black italic tracking-tighter">Odyssey</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 mb-32 relative">
                    {/* Brand Identity */}
                    <div className="lg:col-span-5 space-y-12">
                        <Link href="/" className="inline-block transition-transform duration-500 hover:scale-105">
                            <Image
                                src="/terratreks-logo.png"
                                alt="TerraTreks Travel"
                                width={300}
                                height={80}
                                className="h-20 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-white/70 text-lg md:text-xl font-serif italic leading-relaxed max-w-md">
                            &ldquo;Crafting the intersection of untamed wilderness and absolute refinement, one journey at a time.&rdquo;
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="group w-14 h-14 rounded-none bg-white/[0.02] border border-white/[0.05] flex items-center justify-center hover:bg-midnight transition-all duration-700 hover:shadow-2xl"
                                >
                                    <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-16 md:gap-24">
                        <div className="space-y-10">
                            <h4 className="section-label text-primary mb-0">Navigate</h4>
                            <ul className="space-y-6">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "About Us", href: "/about" },
                                    { name: "Services", href: "/services" },
                                    { name: "Tour Packages", href: "/packages" },
                                    { name: "Tours", href: "/packages" },
                                    { name: "Booking", href: "/contact" },
                                    { name: "Contact", href: "/contact" },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-white/70 hover:text-white transition-luxury text-xs font-bold tracking-[0.2em] uppercase"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-10">
                            <h4 className="section-label text-primary mb-0">Contact</h4>
                            <div className="space-y-8">
                                <div className="space-y-1">
                                    <span className="text-xs font-bold tracking-widest text-white/90 uppercase">Inquiries</span>
                                    <a href="mailto:travel@terratrekstravel.com" className="block text-sm text-white/90 hover:text-primary transition-colors">travel@terratrekstravel.com</a>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs font-bold tracking-widest text-white/90 uppercase">WhatsApp</span>
                                    <a href="tel:+260979189370" className="block text-sm text-white/90 hover:text-primary transition-colors">+260 97 918 9370</a>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs font-bold tracking-widest text-white/90 uppercase">Location</span>
                                    <p className="text-sm text-white/90">Buffalo Wings, Solwezi, Zambia</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <h4 className="section-label text-primary mb-0">Experience</h4>
                            <div className="space-y-8">
                                <div className="p-8 rounded-none bg-white/[0.02] border border-white/[0.05] space-y-6 hover:border-primary/20 transition-all duration-700 group/bank">
                                    <div className="space-y-2">
                                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/90">Official Account</span>
                                        <p className="text-sm font-serif text-white">FNB Solwezi</p>
                                        <p className="text-xs font-mono text-primary italic">6311 2834 626</p>
                                    </div>
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/70 group-hover/bank:text-primary transition-colors">
                                        Secure Booking <ArrowUp className="w-3 h-3 rotate-45" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/90">
                            &copy; {new Date().getFullYear()} TerraTreks Travels &bull; EST. 2024
                        </span>
                    </div>

                    <div className="flex gap-12">
                        <Link href="#" className="text-xs font-bold tracking-[0.3em] uppercase text-white/90 hover:text-white transition-colors">Legal</Link>
                        <Link href="#" className="text-xs font-bold tracking-[0.3em] uppercase text-white/90 hover:text-white transition-colors">Privacy</Link>
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs font-bold tracking-[0.3em] uppercase text-white hover:text-white transition-colors flex items-center gap-2">
                            Back to Top <ArrowUp className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
