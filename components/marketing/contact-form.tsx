"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, Loader2, Calendar, Users, Phone, User, Mail, Sparkles, MapPin } from "lucide-react";
import { submitContactForm } from "@/lib/actions";

export const ContactForm = () => {
    const searchParams = useSearchParams();
    const [isPending, setIsPending] = useState(false);
    const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
    const [selectedPackage, setSelectedPackage] = useState("");

    useEffect(() => {
        const pkg = searchParams.get("package") || searchParams.get("offer");
        if (pkg) setSelectedPackage(pkg);
    }, [searchParams]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsPending(true);
        setResult(null);

        const formData = new FormData(e.currentTarget);
        const response = await submitContactForm(formData);

        setResult(response);
        setIsPending(false);
        if (response.success) {
            (e.target as HTMLFormElement).reset();
        }
    }

    return (
        <div className="bg-white p-8 md:p-14 rounded-[40px] border border-midnight/[0.04] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] relative z-10 overflow-hidden group">
            {/* Cinematic background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] -z-10 group-hover:bg-gold/10 transition-colors duration-1000" />

            {result?.success ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 space-y-8"
                >
                    <div className="w-24 h-24 bg-primary/[0.08] text-primary rounded-[32px] flex items-center justify-center mx-auto rotate-12 transition-transform duration-700 hover:rotate-0">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-4xl font-serif text-midnight">Request Received</h3>
                        <p className="text-midnight/60 text-lg font-light max-w-sm mx-auto leading-relaxed">{result.message}</p>
                    </div>
                    <button
                        onClick={() => setResult(null)}
                        className="inline-flex items-center gap-2 text-primary font-bold text-[10px] border-b-2 border-primary/20 hover:border-primary pb-1 tracking-[0.25em] uppercase font-sans mt-10 transition-all"
                    >
                        Send another request
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-12">
                        {/* Section 1: Identity */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-8 h-[1px] bg-gold/30" />
                                <span className="section-label mb-0 text-gold lowercase first-letter:uppercase">Identity</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-midnight/40 ml-1 flex items-center gap-2">
                                        <User className="w-3.5 h-3.5" /> Full Name
                                    </label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="David Chileshe"
                                        className="w-full bg-sand/30 border border-midnight/[0.05] rounded-2xl px-7 py-5 focus:ring-4 focus:ring-gold/10 focus:border-gold/30 transition-all outline-none text-sm font-medium text-midnight"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-midnight/40 ml-1 flex items-center gap-2">
                                        <Mail className="w-3.5 h-3.5" /> Email Address
                                    </label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="david@example.com"
                                        className="w-full bg-sand/30 border border-midnight/[0.05] rounded-2xl px-7 py-5 focus:ring-4 focus:ring-gold/10 focus:border-gold/30 transition-all outline-none text-sm font-medium text-midnight"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-midnight/40 ml-1 flex items-center gap-2">
                                        <Phone className="w-3.5 h-3.5" /> Phone Number
                                    </label>
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        placeholder="+260 XXX XXXXXX"
                                        className="w-full bg-sand/30 border border-midnight/[0.05] rounded-2xl px-7 py-5 focus:ring-4 focus:ring-gold/10 focus:border-gold/30 transition-all outline-none text-sm font-medium text-midnight"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-midnight/40 ml-1 flex items-center gap-2">
                                        <Calendar className="w-3.5 h-3.5" /> Preferred Start Date
                                    </label>
                                    <input
                                        required
                                        name="date"
                                        type="date"
                                        className="w-full bg-sand/30 border border-midnight/[0.05] rounded-2xl px-7 py-5 focus:ring-4 focus:ring-gold/10 focus:border-gold/30 transition-all outline-none text-sm font-medium text-midnight uppercase tracking-widest"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Journey Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-8 h-[1px] bg-gold/30" />
                                <span className="section-label mb-0 text-gold lowercase first-letter:uppercase">Journey</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-midnight/40 ml-1 flex items-center gap-2">
                                        <MapPin className="w-3.5 h-3.5" /> Selected Destination
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="subject"
                                            value={selectedPackage}
                                            onChange={(e) => setSelectedPackage(e.target.value)}
                                            className="w-full bg-sand/30 border border-midnight/[0.05] rounded-2xl px-7 py-5 focus:ring-4 focus:ring-gold/10 focus:border-gold/30 transition-all outline-none appearance-none text-sm font-medium text-midnight"
                                        >
                                            <option value="">Select an interest</option>
                                            <option value="Luxury Safari">Luxury Safari</option>
                                            <option value="Corporate Travel">Corporate Travel</option>
                                            <option value="Honeymoon Package">Honeymoon Package</option>
                                            <option value="Family Safari">Family Safari</option>
                                            <option value="Victoria Falls & Chobe">Victoria Falls & Chobe Explorer</option>
                                            <option value="South Luangwa">South Luangwa Walking Safari</option>
                                            <option value="Lower Zambezi">Lower Zambezi River Retreat</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                        </select>
                                        <div className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none text-midnight/20">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-midnight/40 ml-1 flex items-center gap-2">
                                        <Users className="w-3.5 h-3.5" /> Total Guests
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="guests"
                                            className="w-full bg-sand/30 border border-midnight/[0.05] rounded-2xl px-7 py-5 focus:ring-4 focus:ring-gold/10 focus:border-gold/30 transition-all outline-none appearance-none text-sm font-medium text-midnight"
                                        >
                                            <option value="1">1 Traveler</option>
                                            <option value="2">2 Travelers</option>
                                            <option value="3">3 Travelers</option>
                                            <option value="4">4 Travelers</option>
                                            <option value="5">5+ Travelers</option>
                                            <option value="Large Group (10+)">Large Group (10+)</option>
                                        </select>
                                        <div className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none text-midnight/20">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[11px] font-bold uppercase tracking-wider text-midnight/40 ml-1 flex items-center gap-2">
                                    <Sparkles className="w-3.5 h-3.5" /> Preferred Experience
                                </label>
                                <div className="relative">
                                    <select
                                        name="requirement"
                                        className="w-full bg-sand/30 border border-midnight/[0.05] rounded-2xl px-7 py-5 focus:ring-4 focus:ring-gold/10 focus:border-gold/30 transition-all outline-none appearance-none text-sm font-medium text-midnight"
                                    >
                                        <option value="Romantic/Honeymoon">Romantic & Honeymoon Seclusion</option>
                                        <option value="Family Holiday">Family Adventure & Exploration</option>
                                        <option value="Corporate/Team Building">Corporate Retreat & Team Excellence</option>
                                        <option value="Photographic Safari">Professional Photographic Journey</option>
                                        <option value="Quick Weekend Break">Bespoke Weekend Escape</option>
                                    </select>
                                    <div className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none text-midnight/20">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        disabled={isPending}
                        className="w-full bg-midnight text-white py-7 rounded-[28px] font-bold text-[13px] tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition-all duration-500 flex items-center justify-center gap-5 disabled:opacity-50 font-sans shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] group/btn"
                    >
                        {isPending ? (
                            <>Transmitting Request... <Loader2 className="w-5 h-5 animate-spin" /></>
                        ) : (
                            <>Begin Your Journey <Send className="w-4 h-4 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-500" /></>
                        )}
                    </button>

                    <div className="flex items-center justify-center gap-6 pt-2">
                        <p className="text-[9px] text-midnight/20 uppercase tracking-[0.3em] font-sans">Secure Booking System</p>
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                        <p className="text-[9px] text-midnight/20 uppercase tracking-[0.3em] font-sans">Est. Response: 4-8 Hours</p>
                    </div>
                </form>
            )}
        </div>
    );
};
