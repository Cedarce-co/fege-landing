"use client";

import Image from "next/image";
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

export type ImageFlipCard = {
  image: string;
  label: string;
  amount: string;
  alt: string;
};

type ImageFlipStackProps = {
  cards: readonly ImageFlipCard[];
  className?: string;
};

function CardFace({
  card,
  hint = false,
  priority = false,
}: {
  card: ImageFlipCard;
  hint?: boolean;
  priority?: boolean;
}) {
  return (
    <article className="relative h-full overflow-hidden rounded-[2rem] border border-white/30 bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
      <Image
        src={card.image}
        alt={card.alt}
        fill
        priority={priority}
        className="object-cover object-center"
        sizes="(max-width: 768px) 90vw, 50vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pt-16 pb-5 text-white">
        <p className="text-sm text-white/85">{card.label}</p>
        <p className="mt-1 text-2xl font-medium tracking-[-0.03em]">{card.amount}</p>
        {hint ? (
          <p className="mt-3 text-[11px] font-medium tracking-[0.08em] text-white/55 uppercase">
            Tap or swipe to flip
          </p>
        ) : null}
      </div>
    </article>
  );
}

function ActiveCard({
  card,
  reduce,
  animateEnter,
  onFlip,
}: {
  card: ImageFlipCard;
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
      aria-label={`${card.label}. Flip to next card`}
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
      <CardFace card={card} hint priority />
    </motion.button>
  );
}

export function ImageFlipStack({ cards, className }: ImageFlipStackProps) {
  const [active, setActive] = useState(0);
  const [hasFlipped, setHasFlipped] = useState(false);
  const reduce = useReducedMotion();
  const current = cards[active];
  const next = cards[(active + 1) % cards.length];

  function flip() {
    setHasFlipped(true);
    setActive((value) => (value + 1) % cards.length);
  }

  return (
    <div className={cn(className)}>
      <StackEntrance className="md:hidden">
        <motion.div
          variants={stackFrameVariants}
          className="relative mx-auto h-[300px] w-full max-w-[360px]"
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
            <CardFace card={next} />
          </motion.div>

          <motion.div variants={stackFrontVariants} className="absolute inset-0">
            <AnimatePresence mode="wait">
              <ActiveCard
                key={`${current.label}-${active}`}
                card={current}
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
          {cards.map((card, index) => (
            <button
              key={card.label}
              type="button"
              aria-label={`Go to ${card.label}`}
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
