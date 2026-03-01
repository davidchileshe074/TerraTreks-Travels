"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Begin the Conversation",
    description:
      "Tell us about your dream journey — where, when, and who's travelling. We'll take it from there.",
  },
  {
    number: "02",
    title: "We Design Your Journey",
    description:
      "Our experts craft a bespoke itinerary tailored to your preferences, experiences, and budget.",
  },
  {
    number: "03",
    title: "Refine Every Detail",
    description:
      "We polish every element until the journey feels perfect — flights, lodges, activities, transfers.",
  },
  {
    number: "04",
    title: "Experience Africa",
    description:
      "Your adventure begins. With 24/7 support and local expertise, every moment is taken care of.",
  },
];

export const ProcessSteps = () => {
  return (
    <section className="section-padding py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[50rem] h-[50rem] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10 space-y-16 md:space-y-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 pb-10 md:pb-16 border-b border-white/10">
          <div className="max-w-2xl space-y-4 md:space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-white/80"
            >
              Our Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight tracking-tight drop-shadow-md"
            >
              Orchestrating
              <br />
              <span className="italic font-normal opacity-90">Excellence</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-base md:text-lg leading-relaxed max-w-md"
          >
            A seamless four-phase journey from your first idea to unforgettable memories — guided with precision and deep local knowledge.
          </motion.p>
        </div>

        {/* Steps – Card layout with connectors */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Connecting line – visible on lg+ */}
          <div className="absolute top-[4.5rem] left-0 right-0 h-px bg-white/15 hidden lg:block" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.15,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-500"
            >
              {/* Step Number Circle */}
              <div className="relative z-10 mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white/15 transition-all duration-500">
                  <span className="text-2xl md:text-3xl font-serif font-bold text-white drop-shadow-sm">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-serif text-white leading-tight group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Small connector dot for mobile stacking visual */}
              <div className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full lg:hidden" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};