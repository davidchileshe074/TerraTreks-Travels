"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { submitContactForm } from "@/lib/actions";

export const ContactForm = () => {
    const [isPending, setIsPending] = useState(false);
    const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

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
        <div className="bg-white p-10 md:p-14 rounded-3xl border border-midnight/[0.04] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.04)] relative z-10">
            {result?.success ? (
                <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 bg-primary/[0.06] text-primary rounded-2xl flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-serif text-midnight">Message Sent</h3>
                        <p className="text-midnight/60 text-sm font-light max-w-sm mx-auto">{result.message}</p>
                    </div>
                    <button
                        onClick={() => setResult(null)}
                        className="text-primary font-bold text-xs border-b border-primary pb-0.5 tracking-[0.1em] uppercase font-sans mt-4"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-label text-midnight/85 block">Full Name</label>
                            <input
                                required
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-sand/60 border border-midnight/[0.08] rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-gold/20 focus:border-gold/30 transition-all outline-none text-sm font-normal text-midnight placeholder:text-midnight/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-label text-midnight/85 block">Email Address</label>
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                                className="w-full bg-sand/60 border border-midnight/[0.08] rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-gold/20 focus:border-gold/30 transition-all outline-none text-sm font-normal text-midnight placeholder:text-midnight/50"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-label text-midnight/85 block">Subject</label>
                        <select name="subject" className="w-full bg-sand/60 border border-midnight/[0.08] rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-gold/20 focus:border-gold/30 transition-all outline-none appearance-none text-sm font-normal text-midnight">
                            <option>Luxury Safari Inquiry</option>
                            <option>Corporate Travel</option>
                            <option>Honeymoon Packages</option>
                            <option>General Question</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-label text-midnight/85 block">Message</label>
                        <textarea
                            required
                            name="message"
                            rows={5}
                            placeholder="Tell us about your dream trip..."
                            className="w-full bg-sand/60 border border-midnight/[0.08] rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-gold/20 focus:border-gold/30 transition-all outline-none resize-none text-sm font-normal text-midnight placeholder:text-midnight/50"
                        />
                    </div>
                    <button
                        disabled={isPending}
                        className="w-full bg-primary text-secondary py-5 rounded-2xl font-bold text-[12px] tracking-[0.2em] uppercase hover:bg-primary/95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 font-sans shadow-lg shadow-primary/10 button-hover-effect"
                    >
                        {isPending ? (
                            <>Processing... <Loader2 className="w-4 h-4 animate-spin" /></>
                        ) : (
                            <>Send Message <Send className="w-4 h-4" /></>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
};
