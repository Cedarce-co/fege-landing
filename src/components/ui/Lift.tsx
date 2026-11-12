"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type LiftProps = {
  children: React.ReactNode;
  className?: string;
  /** Scale stays inside swipe rows. Rise is for cards that have room to move. */
  mode?: "rise" | "scale";
};

export function Lift({ children, className, mode = "rise" }: LiftProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      whileHover={mode === "scale" ? { scale: 1.03 } : { y: -8, scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 340, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
