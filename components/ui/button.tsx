"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-midnight",
            secondary: "bg-white text-primary hover:bg-gray-50",
            outline:
                "border border-primary/20 text-primary hover:bg-primary hover:text-white",
            ghost: "text-primary hover:bg-primary/5",
        };

        const sizes = {
            sm: "px-5 py-2.5 text-sm",
            md: "px-7 py-3.5 text-[12px]",
            lg: "px-10 py-5 text-sm font-semibold",
        };

        const Component = asChild ? motion(Slot) : motion.button;

        return (
            <Component
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-none font-sans font-bold tracking-[0.08em] uppercase transition-all duration-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
