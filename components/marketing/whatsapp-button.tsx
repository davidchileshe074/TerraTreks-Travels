"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
            {/* Pulse Effect */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[#25D366] rounded-2xl"
            />

            <motion.a
                href="https://wa.me/260979189370"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-14 h-14 bg-[#25D366] rounded-2xl shadow-lg shadow-[#25D366]/20 flex items-center justify-center text-white"
                aria-label="Chat with us on WhatsApp"
            >
                <MessageCircle className="w-6 h-6 fill-current" />
            </motion.a>
        </div>
    );
};
