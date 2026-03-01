"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[9999]">
      {/* Tooltip (desktop only) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg hidden md:block pointer-events-none"
          >
            Chat with us on WhatsApp
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-gray-900 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href="https://wa.me/260979189370"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-xl shadow-[#25D366]/30 text-white focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 transition-all duration-300"
      >
        {/* Subtle inner glow */}
        <div className="absolute inset-1 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-current stroke-[1.8]" />

        {/* Gentle continuous pulse (less aggressive than before) */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.35, 0, 0.35],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.a>
    </div>
  );
};