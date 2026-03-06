import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#002E5D] text-white py-16 px-4 md:px-8 font-sans">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-16">

                {/* Contact Us */}
                <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide">Contact Us</h3>
                    <div className="space-y-4 text-gray-400">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 shrink-0 text-[#Daba34]" />
                            <p className="text-sm">Buffalo Wings, Solwezi,<br />Zambia</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#Daba34]" />
                                <div className="flex flex-col">
                                    <a href="tel:+260979189370" className="hover:text-white transition-colors text-sm">+260 97 918 9370</a>
                                    <a href="tel:+260764178388" className="hover:text-white transition-colors text-sm">+260 76 417 8388</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#Daba34]" />
                                <div className="flex flex-col">
                                    <a href="mailto:travel@terratrekstravel.com" className="hover:text-white transition-colors text-sm">travel@terratrekstravel.com</a>
                                    <a href="mailto:anna@terratrekstravel.com" className="hover:text-white transition-colors text-sm">anna@terratrekstravel.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reservations */}
                <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide">Reservations</h3>
                    <div className="space-y-4 text-gray-400">
                        <p className="text-sm leading-relaxed">
                            For booking inquiries and quick responses, reach out to our dedicated reservations team on WhatsApp.
                        </p>
                        <a
                            href="https://wa.me/260979189370"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#Daba34] hover:text-white transition-colors mt-2 uppercase font-bold text-sm tracking-wide"
                        >
                            <Phone className="w-4 h-4 fill-current" /> Chat with Reservations
                        </a>
                    </div>
                </div>

                {/* Working Hours */}
                <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide">Working Hours</h3>
                    <div className="space-y-4 text-gray-400">
                        <div className="flex justify-between text-sm py-2 border-b border-gray-800">
                            <span>Mon - Fri</span>
                            <span>08:00 AM - 17:00 PM</span>
                        </div>
                        <div className="flex justify-between text-sm py-2 border-b border-gray-800">
                            <span>Saturday</span>
                            <span>08:30 AM - 12:30 PM</span>
                        </div>
                        <div className="flex justify-between text-sm py-2 border-b border-gray-800 text-[#Daba34] font-medium">
                            <span>Sunday & Holidays</span>
                            <span>Closed</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar: Copyright and Socials */}
            <div className="max-w-[1400px] mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} TerraTreks Travels. All Rights Reserved.
                </p>

                <div className="flex items-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#Daba34] hover:border-[#Daba34] hover:text-white transition-all text-gray-400">
                        <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#Daba34] hover:border-[#Daba34] hover:text-white transition-all text-gray-400">
                        <Instagram className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
