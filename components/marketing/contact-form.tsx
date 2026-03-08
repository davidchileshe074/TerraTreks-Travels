"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CheckCircle2,
  Loader2,
  Calendar as CalendarIcon,
  Users,
  Phone,
  User,
  Mail,
  Sparkles,
  FileUp,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/lib/actions";
import { AnimatePresence, motion } from "framer-motion";

// Zod Schema (unchanged)
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(9, "Phone number is too short").max(15, "Phone number is too long"),
  travelDate: z.date({ message: "Please select a preferred travel date" }),
  experienceType: z.string().optional(),
  message: z.string().max(1500, "Message is too long (max 1500 characters)").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Floating Label Wrapper – adjusted for mobile
const FloatingInputWrapper = ({
  label,
  icon: Icon,
  error,
  children,
  required,
  className,
  hasValue: manualHasValue,
}: {
  label: string;
  icon?: any;
  error?: any;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
  hasValue?: boolean;
}) => {
  // Check if children is a valid React element and extract its value safely
  const hasValue = manualHasValue || (React.isValidElement(children) && (children.props as any).value);

  return (
    <div className={cn("relative group pt-5 sm:pt-6", className)}>
      {children}
      <label
        className={cn(
          "absolute left-0 top-1.5 sm:top-2 text-sm sm:text-base font-medium text-slate-500 pointer-events-none transition-all duration-200",
          "group-focus-within:text-[#D4AF37] group-focus-within:text-xs sm:group-focus-within:text-sm group-focus-within:-translate-y-4 sm:group-focus-within:-translate-y-5 group-focus-within:font-semibold",
          hasValue && "text-xs sm:text-sm -translate-y-4 sm:-translate-y-5 text-[#D4AF37] font-semibold"
        )}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {Icon && (
        <Icon
          className={cn(
            "absolute right-0 top-2.5 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-colors pointer-events-none",
            "group-focus-within:text-[#D4AF37]"
          )}
        />
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs sm:text-sm font-medium text-red-500 mt-1"
        >
          {error.message}
        </motion.p>
      )}
    </div>
  );
};

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      travelDate: undefined,
      experienceType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsPending(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("date", data.travelDate.toISOString());
      formData.append("subject", "General Inquiry"); // Default subject since interest is removed
      formData.append("guests", "Not Specified"); // Default value since guests is removed
      formData.append("requirement", data.experienceType || "Standard");
      formData.append("message", data.message || "");

      const response = await submitContactForm(formData);
      setResult(response);

      if (response.success) reset();
    } catch {
      setResult({
        success: false,
        message: "An unexpected error occurred. Please try again or reach us via WhatsApp.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
      <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[40px] shadow-xl sm:shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row min-h-[700px] sm:min-h-[800px] lg:min-h-[850px]">

        {/* Left Panel – reduced padding on mobile */}
        <div className="lg:w-2/5 relative bg-[#0F2647] text-white p-8 sm:p-10 md:p-16 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-45">
            <img
              src="/luxury_safari_contact_bg_1772989493468.png"
              alt="Luxury Zambian Safari Landscape"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2647]/90 via-[#0F2647]/50 to-transparent" />
          </div>

          <div className="relative z-10 space-y-8 sm:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#D4AF37]"
            >
              <Sparkles className="w-3.5 h-3.5" /> Contact Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight"
            >
              Start Your <br />
              <span className="text-[#D4AF37] font-semibold italic">Zambian</span> <br />
              Journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md"
            >
              We're here to help you plan your visit. Share your ideas with us and we'll help you organize a great trip to Zambia.
            </motion.p>
          </div>

          <div className="relative z-10 space-y-6 mt-10 hidden lg:block">
            {/* Keep contact info visible only on larger screens to save mobile space */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">Contact</p>
                <p className="text-white font-medium">travel@terratrekstravel.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 opacity-80">
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 font-serif italic text-[#D4AF37] text-lg">
                T
              </div>
              <p className="text-white/70 text-xs italic">
                “The best stories are the ones we live.”
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel: Form – adjusted padding & sizes */}
        <div className="lg:w-3/5 bg-gradient-to-br from-[#FAFAFA] to-[#F8F5F0] p-6 sm:p-8 md:p-12 lg:p-16 relative">
          <AnimatePresence mode="wait">
            {result?.success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-8 sm:space-y-10 max-w-md mx-auto px-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, stiffness: 180 }}
                  className="w-20 h-20 sm:w-28 sm:h-28 bg-[#D4AF37]/10 rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 className="w-10 h-10 sm:w-14 sm:h-14 text-[#D4AF37]" strokeWidth={1.4} />
                </motion.div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#0F2647]">
                    Message Sent
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {result.message || "We've received your request and will get back to you soon."}
                  </p>
                </div>

                <button
                  onClick={() => setResult(null)}
                  className="group flex items-center gap-3 bg-[#0F2647] text-white px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-[#D4AF37] hover:shadow-xl transition-all duration-300"
                >
                  Send Another Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm text-slate-500 mt-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                    Secure
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                    Reply in 24h
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8 sm:space-y-10 md:space-y-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-8">
                  <FloatingInputWrapper label="Full Name" icon={User} error={errors.name} required hasValue={!!watch("name")}>
                    <input
                      {...register("name")}
                      className={cn(
                        "peer w-full bg-transparent border-b-2 border-slate-300 py-2 sm:py-3 px-0 focus:border-[#D4AF37] focus:outline-none transition-all text-sm sm:text-base placeholder-transparent",
                        errors.name && "border-red-400"
                      )}
                    />
                  </FloatingInputWrapper>

                  <FloatingInputWrapper label="Email Address" icon={Mail} error={errors.email} required hasValue={!!watch("email")}>
                    <input
                      {...register("email")}
                      type="email"
                      className={cn(
                        "peer w-full bg-transparent border-b-2 border-slate-300 py-2 sm:py-3 px-0 focus:border-[#D4AF37] focus:outline-none transition-all text-sm sm:text-base placeholder-transparent",
                        errors.email && "border-red-400"
                      )}
                    />
                  </FloatingInputWrapper>

                  <FloatingInputWrapper label="Phone Number" icon={Phone} error={errors.phone} required hasValue={!!watch("phone")}>
                    <input
                      {...register("phone")}
                      type="tel"
                      className={cn(
                        "peer w-full bg-transparent border-b-2 border-slate-300 py-2 sm:py-3 px-0 focus:border-[#D4AF37] focus:outline-none transition-all text-sm sm:text-base placeholder-transparent",
                        errors.phone && "border-red-400"
                      )}
                    />
                  </FloatingInputWrapper>

                  <FloatingInputWrapper label="Travel Date" icon={CalendarIcon} error={errors.travelDate} required hasValue={!!watch("travelDate")}>
                    <DatePicker
                      selected={watch("travelDate")}
                      onChange={(date: any) => setValue("travelDate", date ?? undefined, { shouldValidate: true })}
                      dateFormat="dd MMMM yyyy"
                      minDate={new Date()}
                      placeholderText=""
                      portalId="datepicker-portal"
                      popperClassName="z-50"
                      className={cn(
                        "peer w-full bg-transparent border-b-2 border-slate-300 py-2 sm:py-3 px-0 focus:border-[#D4AF37] focus:outline-none transition-all text-sm sm:text-base cursor-pointer",
                        errors.travelDate && "border-red-400"
                      )}
                      wrapperClassName="w-full"
                    />
                  </FloatingInputWrapper>
                </div>

                <FloatingInputWrapper label="Message" icon={Sparkles} hasValue={!!watch("message")}>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 sm:py-3 px-0 focus:border-[#D4AF37] focus:outline-none transition-all text-sm sm:text-base placeholder-transparent resize-none min-h-[100px] sm:min-h-[120px]"
                  />
                </FloatingInputWrapper>

                <div className="pt-6 sm:pt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isPending}
                    type="submit"
                    className={cn(
                      "w-full py-4 sm:py-5 rounded-xl font-bold text-sm sm:text-base tracking-wider uppercase flex items-center justify-center shadow-lg transition-all duration-300",
                      isPending
                        ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                        : "bg-[#0F2647] text-white hover:bg-[#D4AF37] hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.4)]"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      {isPending ? (
                        <>
                          Sending... <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Submit <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </>
                      )}
                    </span>
                  </motion.button>

                  <p className="text-center text-xs sm:text-sm text-slate-500 mt-4 sm:mt-6 tracking-wide">
                    Privacy protected • No commitment • Personal reply
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
