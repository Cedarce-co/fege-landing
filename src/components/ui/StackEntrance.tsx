"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type StackEntranceProps = {
  children: React.ReactNode;
  className?: string;
};

/** Shared entrance for mobile flip stacks: rise, settle, then slight tilt in. */
export function StackEntrance({ children, className }: StackEntranceProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.12, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Back card in the peek stack. */
export const stackBackVariants = {
  hidden: { opacity: 0, y: 56, scale: 0.82, rotateX: 14 },
  show: {
    opacity: 1,
    y: 28,
    scale: 0.9,
    rotateX: 0,
    transition: { duration: 0.7, ease },
  },
};

/** Middle card in the peek stack. */
export const stackMidVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.86, rotateX: 10 },
  show: {
    opacity: 0.9,
    y: 14,
    scale: 0.95,
    rotateX: 0,
    transition: { duration: 0.7, ease },
  },
};

export const stackFrontVariants = {
  hidden: { opacity: 0, y: 56, scale: 0.88, rotateY: 28 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: { duration: 0.8, ease },
  },
};

export const stackFrameVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export const stackDotsVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};
