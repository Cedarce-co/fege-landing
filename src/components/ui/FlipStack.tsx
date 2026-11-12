"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type PanInfo,
} from "framer-motion";
import {
  StackEntrance,
  stackDotsVariants,
  stackFrontVariants,
  stackBackVariants,
  stackFrameVariants,
  stackMidVariants,
} from "@/components/ui/StackEntrance";
import { cn } from "@/lib/utils";

export type FlipStep = {
  number: string;
  title: string;
  text: string;
};

type FlipStackProps = {
  steps: readonly FlipStep[];
  className?: string;
};

function StepFace({
  step,
  hint = false,
}: {
  step: FlipStep;
  hint?: boolean;
}) {
  return (
    <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/25 bg-[#0d1c26]/95 px-5 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-6">
      <div>
        <p className="text-sm font-medium text-white/60">{step.number}</p>
        <p className="mt-3 text-xl font-medium tracking-[-0.02em] text-white">
          {step.title}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/70">{step.text}</p>
      </div>
      {hint ? (
        <p className="mt-8 text-xs font-medium tracking-[0.08em] text-white/45 uppercase">
          Tap or swipe to flip
        </p>
      ) : (
        <span className="mt-8 block h-4" />
      )}
    </div>
  );
}

function ActiveCard({
  step,
  reduce,
  animateEnter,
  onFlip,
}: {
  step: FlipStep;
  reduce: boolean | null;
  animateEnter: boolean;
  onFlip: () => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-160, 160], [-14, 14]);
  const opacity = useTransform(x, [-180, 0, 180], [0.45, 1, 0.45]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (Math.abs(info.offset.x) > 80 || Math.abs(info.velocity.x) > 500) {
      onFlip();
    }
  }

  return (
    <motion.button
      type="button"
      aria-label={`Step ${step.number}. Flip to next step`}
      className="absolute inset-x-0 top-0 bottom-8 z-30 cursor-grab touch-pan-y text-left active:cursor-grabbing"
      style={reduce ? undefined : { x, rotate, opacity, transformPerspective: 1200 }}
      drag={reduce ? false : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.85}
      onDragEnd={handleDragEnd}
      onClick={onFlip}
      initial={
        reduce || !animateEnter ? false : { opacity: 0, rotateY: 70, scale: 0.94 }
      }
      animate={{ opacity: 1, rotateY: 0, scale: 1, x: 0 }}
      exit={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, rotateY: -95, x: -36, scale: 0.92 }
      }
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
    >
      <StepFace step={step} hint />
    </motion.button>
  );
}

export function FlipStack({ steps, className }: FlipStackProps) {
  const [active, setActive] = useState(0);
  const [hasFlipped, setHasFlipped] = useState(false);
  const reduce = useReducedMotion();
  const current = steps[active];
  const next = steps[(active + 1) % steps.length];

  function flip() {
    setHasFlipped(true);
    setActive((value) => (value + 1) % steps.length);
  }

  return (
    <div className={cn(className)}>
      <StackEntrance className="md:hidden">
        <motion.div
          variants={stackFrameVariants}
          className="relative mx-auto h-[280px] w-full max-w-[360px] pt-4"
        >
          <motion.div
            aria-hidden
            variants={stackBackVariants}
            className="pointer-events-none absolute inset-x-5 top-0 bottom-6 z-10"
          >
            <div className="h-full rounded-[1.5rem] border border-white/15 bg-white/10" />
          </motion.div>
          <motion.div
            aria-hidden
            variants={stackMidVariants}
            className="pointer-events-none absolute inset-x-2.5 top-0 bottom-4 z-20"
          >
            <StepFace step={next} />
          </motion.div>

          <motion.div variants={stackFrontVariants} className="absolute inset-0">
            <AnimatePresence mode="wait">
              <ActiveCard
                key={`${current.number}-${active}`}
                step={current}
                reduce={reduce}
                animateEnter={hasFlipped}
                onFlip={flip}
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stackDotsVariants}
          className="mt-5 flex items-center justify-center gap-2"
        >
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              aria-label={`Go to step ${step.number}`}
              aria-current={index === active}
              onClick={() => {
                setHasFlipped(true);
                setActive(index);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === active ? "w-6 bg-white" : "w-2 bg-white/30",
              )}
            />
          ))}
        </motion.div>
      </StackEntrance>

      <ol className="hidden space-y-4 md:block">
        {steps.map((step) => (
          <li key={step.number}>
            <div className="rounded-[1.5rem] border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-md transition-colors duration-300 hover:border-white/40 hover:bg-white/15">
              <p className="text-sm font-medium text-white/60">{step.number}</p>
              <p className="mt-2 text-lg font-medium tracking-[-0.02em]">
                {step.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
