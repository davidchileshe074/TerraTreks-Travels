"use client";

import { motion } from "framer-motion";
import { Tag, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const SideTabs = () => {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] hidden lg:flex flex-col gap-px">
            <Link href="/exclusive-offers">
                <motion.div
                    whileHover={{ x: -10 }}
                    className="bg-primary text-white py-6 px-3 flex flex-col items-center gap-4 rounded-l-xl shadow-2xl cursor-pointer transition-colors hover:bg-midnight"
                >
                    <span className="vertical-text text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap">
                        Special <br /> Offers
                    </span>
                    <Tag className="w-4 h-4 rotate-90" />
                </motion.div>
            </Link>

            <Link href="/services">
                <motion.div
                    whileHover={{ x: -10 }}
                    className="bg-midnight text-white py-6 px-3 flex flex-col items-center gap-4 rounded-l-xl shadow-2xl cursor-pointer transition-colors hover:bg-primary border-t border-white/10"
                >
                    <span className="vertical-text text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap">
                        Our <br /> Service
                    </span>
                    <ShieldCheck className="w-4 h-4" />
                </motion.div>
            </Link>
        </div>
    );
};
