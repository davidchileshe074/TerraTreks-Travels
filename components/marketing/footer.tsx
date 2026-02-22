import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-midnight pt-20 md:pt-28 pb-10 px-6 md:px-10 text-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Top — Brand + Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand */}
                    <div className="space-y-8 lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/terratreks-logo.png"
                                alt="TerraTreks Travel"
                                width={160}
                                height={80}
                                className="h-20 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed font-normal max-w-xs">
                            Curating luxury safari experiences and professional travel
                            solutions in the heart of Zambia and beyond.
                        </p>
                        <div className="flex gap-3">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-500 text-white/70 hover:text-midnight"
                                >
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-8">
                        <h4 className="text-label text-gold">Explore</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Safari Journeys", href: "/packages" },
                                { name: "Destinations", href: "/destinations" },
                                { name: "Corporate Travel", href: "/corporate" },
                                { name: "Romantic Escapes", href: "/romantic" },
                                { name: "About Us", href: "/about" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-white/70 hover:text-gold transition-colors duration-300 text-sm font-normal"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-8">
                        <h4 className="text-label text-gold">Contact</h4>
                        <ul className="space-y-5">
                            <li className="flex gap-4 items-start">
                                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                                <span className="text-white/80 text-sm font-normal leading-relaxed">
                                    Kankasa Office Block, Buffalo Wings,
                                    <br />
                                    Mushitala, Solwezi, Zambia
                                </span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                                <span className="text-white/80 text-sm font-normal leading-relaxed">
                                    +260 97 918 9370
                                    <br />
                                    +260 76 417 8388
                                </span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                                <span className="text-white/80 text-sm font-normal">
                                    travel@terratrekstravel.com
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Banking */}
                    <div className="space-y-8">
                        <h4 className="text-label text-gold">Payments</h4>
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] space-y-5">
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold font-sans">
                                    FNB (Solwezi)
                                </p>
                                <p className="text-sm font-mono text-white/60">
                                    6311 2834 626
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 font-sans">
                                    Swift Code
                                </p>
                                <p className="text-sm font-mono text-white/90 uppercase">
                                    FIRNZMLX
                                </p>
                            </div>
                            <div className="h-px bg-white/[0.05]" />
                            <p className="text-[11px] text-white/60 font-normal">
                                MoMo & Airtel Money accepted
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/60 font-sans">
                        &copy; {new Date().getFullYear()} TerraTreks Travels &bull; Est.
                        2024
                    </p>
                    <div className="flex gap-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 font-sans">
                        <Link
                            href="#"
                            className="hover:text-gold transition-colors duration-300"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-gold transition-colors duration-300"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
