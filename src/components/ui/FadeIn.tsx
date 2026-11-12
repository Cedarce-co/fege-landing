"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  from?: "up" | "left" | "right";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 36,
  from = "up",
}: FadeInProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const offset =
    from === "left" ? { x: -40, y: 0 } : from === "right" ? { x: 40, y: 0 } : { x: 0, y };

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, scale: 0.96, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px", amount: 0.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
