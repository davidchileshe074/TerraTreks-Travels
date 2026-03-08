import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-safari-blue text-white py-20 overflow-hidden">
            <div className="container-luxury">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/5 pb-20">
                    {/* Company Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif">TerraTreks</h3>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Pioneering luxury safari experiences and executive travel solutions across Southern Africa. Architecture for the modern explorer.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Mail].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">The Collection</h4>
                        <ul className="space-y-4">
                            {["Home", "About Us", "Our Services", "Tour Packages", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">Core Expertise</h4>
                        <ul className="space-y-4">
                            {["Luxury Safaris", "Executive Travel", "Romantic Escapes", "Private Aviation", "Corporate Retreats"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">Concierge</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-gold shrink-0" />
                                <p className="text-sm text-white/60">Plot No. 2954, Kankasa Office Block, Solwezi, Zambia</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-gold shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-sm text-white/60">+260 97 918 9370</p>
                                    <p className="text-sm text-white/60">+260 76 417 8388</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase">
                        © {new Date().getFullYear()} TerraTreks Limited. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                            <Link key={item} href="#" className="text-[10px] font-bold tracking-widest text-white/30 uppercase hover:text-gold transition-colors">{item}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
