"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Begin the Conversation",
    description:
      "Share your vision — destination, dates, companions, and what matters most to you.",
  },
  {
    number: "02",
    title: "We Design Your Journey",
    description:
      "Our specialists curate a fully bespoke itinerary aligned with your desires and budget.",
  },
  {
    number: "03",
    title: "Refine & Perfect",
    description:
      "We fine-tune every detail — flights, lodges, experiences, transfers — until it’s flawless.",
  },
  {
    number: "04",
    title: "Live the Adventure",
    description:
      "Your journey begins. With 24/7 support and insider knowledge, every moment is effortless.",
  },
];

export const ProcessSteps = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-[#0F2647] text-white relative overflow-hidden">
      {/* Subtle decorative accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[60rem] h-[60rem] bg-[#D4AF37]/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[50rem] h-[50rem] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-16 pb-12 md:pb-20 border-b border-white/10">
          <div className="max-w-3xl space-y-5 md:space-y-7">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-[#D4AF37]"
            >
              Our Signature Process
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight"
            >
              Orchestrating
              <br />
              <span className="italic font-normal text-[#D4AF37]">Excellence</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg"
          >
            From your first message to your final memory — a deliberate, four-step journey guided by expertise and deep African insight.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative mt-16 md:mt-20 lg:mt-24">
          {/* Horizontal connector line (desktop only) */}
          <div className="absolute top-[5.5rem] md:top-[6.5rem] left-0 right-0 h-px bg-white/12 hidden lg:block pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.2,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-7 md:p-9 lg:p-10 hover:border-[#D4AF37]/40 hover:bg-white/[0.09] hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)] transition-all duration-500 flex flex-col"
              >
                {/* Step number circle */}
                <div className="relative z-10 mb-6 md:mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/8 border-2 border-white/15 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-500">
                    <span className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 md:space-y-4 flex-grow">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-400">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile visual connector */}
                <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 w-3 h-3 bg-white/20 rounded-full lg:hidden group-hover:bg-[#D4AF37]/60 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};