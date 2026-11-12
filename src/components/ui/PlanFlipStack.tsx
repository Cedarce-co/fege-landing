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
import { Button } from "@/components/ui/Button";
import {
  StackEntrance,
  stackDotsVariants,
  stackFrontVariants,
  stackBackVariants,
  stackFrameVariants,
  stackMidVariants,
} from "@/components/ui/StackEntrance";
import { cn } from "@/lib/utils";

export type PlanFlipCard = {
  name: string;
  price: string;
  text: string;
  cta: string;
  href?: string;
};

type PlanFlipStackProps = {
  plans: readonly PlanFlipCard[];
  className?: string;
};

function PlanFace({
  plan,
  hint = false,
}: {
  plan: PlanFlipCard;
  hint?: boolean;
}) {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-white/20 bg-[#0d1c26]/95 p-7 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
      <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">{plan.name}</h3>
      <p className="mt-3 text-4xl font-medium tracking-[-0.04em] text-white">{plan.price}</p>
      <p className="mt-4 flex-1 text-base leading-relaxed text-white/75">{plan.text}</p>
      <div className="mt-8" onClick={(event) => event.stopPropagation()}>
        <Button href={plan.href ?? "/how-it-works"} variant="white" size="lg">
          {plan.cta}
        </Button>
      </div>
      {hint ? (
        <p className="mt-5 text-xs font-medium tracking-[0.08em] text-white/45 uppercase">
          Tap or swipe to flip
        </p>
      ) : null}
    </article>
  );
}

function ActiveCard({
  plan,
  reduce,
  animateEnter,
  onFlip,
}: {
  plan: PlanFlipCard;
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
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={`${plan.name} plan. Flip to next plan`}
      className="absolute inset-x-0 top-0 bottom-8 z-30 cursor-grab touch-pan-y text-left active:cursor-grabbing"
      style={reduce ? undefined : { x, rotate, opacity, transformPerspective: 1200 }}
      drag={reduce ? false : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.85}
      onDragEnd={handleDragEnd}
      onClick={onFlip}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onFlip();
        }
      }}
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
      <PlanFace plan={plan} hint />
    </motion.div>
  );
}

export function PlanFlipStack({ plans, className }: PlanFlipStackProps) {
  const [active, setActive] = useState(0);
  const [hasFlipped, setHasFlipped] = useState(false);
  const reduce = useReducedMotion();
  const current = plans[active];
  const next = plans[(active + 1) % plans.length];

  function flip() {
    setHasFlipped(true);
    setActive((value) => (value + 1) % plans.length);
  }

  return (
    <div className={cn(className)}>
      <StackEntrance className="md:hidden">
        <motion.div
          variants={stackFrameVariants}
          className="relative mx-auto h-[340px] w-full max-w-[360px]"
        >
          <motion.div
            aria-hidden
            variants={stackBackVariants}
            className="pointer-events-none absolute inset-x-5 top-0 bottom-6 z-10"
          >
            <div className="h-full rounded-[2rem] border border-white/15 bg-white/10" />
          </motion.div>
          <motion.div
            aria-hidden
            variants={stackMidVariants}
            className="pointer-events-none absolute inset-x-2.5 top-0 bottom-4 z-20"
          >
            <PlanFace plan={next} />
          </motion.div>

          <motion.div variants={stackFrontVariants} className="absolute inset-0">
            <AnimatePresence mode="wait">
              <ActiveCard
                key={`${current.name}-${active}`}
                plan={current}
                reduce={reduce}
                animateEnter={hasFlipped}
                onFlip={flip}
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stackDotsVariants}
          className="mt-4 flex items-center justify-center gap-2"
        >
          {plans.map((plan, index) => (
            <button
              key={plan.name}
              type="button"
              aria-label={`Go to ${plan.name}`}
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
    </div>
  );
}
