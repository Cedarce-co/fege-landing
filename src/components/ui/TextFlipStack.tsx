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
  stackBackVariants,
  stackDotsVariants,
  stackFrameVariants,
  stackFrontVariants,
  stackMidVariants,
} from "@/components/ui/StackEntrance";
import { cn } from "@/lib/utils";

export type TextFlipCard = {
  id: string;
  title: string;
  text?: string;
  number?: string;
};

type TextFlipStackProps = {
  cards: readonly TextFlipCard[];
  className?: string;
  /** Desktop layout once the stack hides. */
  desktopCols?: 1 | 2 | 3 | 4;
  stackHeight?: string;
};

function CardFace({
  card,
  hint = false,
}: {
  card: TextFlipCard;
  hint?: boolean;
}) {
  return (
    <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-white/25 bg-[#0d1c26]/95 px-5 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-6">
      <div>
        {card.number ? (
          <p className="text-sm font-medium tracking-[0.08em] text-white/60 uppercase">
            {card.number}
          </p>
        ) : null}
        <p
          className={cn(
            "font-medium tracking-[-0.02em] text-white",
            card.number ? "mt-3 text-xl" : "text-xl",
            !card.text && "text-2xl leading-snug",
          )}
        >
          {card.title}
        </p>
        {card.text ? (
          <p className="mt-3 text-sm leading-relaxed text-white/70">{card.text}</p>
        ) : null}
      </div>
      {hint ? (
        <p className="mt-6 text-xs font-medium tracking-[0.08em] text-white/45 uppercase">
          Tap or swipe to flip
        </p>
      ) : (
        <span className="mt-6 block h-4" />
      )}
    </div>
  );
}

function ActiveCard({
  card,
  reduce,
  animateEnter,
  onFlip,
}: {
  card: TextFlipCard;
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
      aria-label={`${card.title}. Flip to next card`}
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
      <CardFace card={card} hint />
    </motion.button>
  );
}

const desktopGrid = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 xl:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
} as const;

export function TextFlipStack({
  cards,
  className,
  desktopCols = 2,
  stackHeight = "h-[260px]",
}: TextFlipStackProps) {
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
          className={cn("relative mx-auto w-full max-w-[360px]", stackHeight)}
        >
          <motion.div
            aria-hidden
            variants={stackBackVariants}
            className="pointer-events-none absolute inset-x-5 top-0 bottom-6 z-10"
          >
            <div className="h-full rounded-[1.75rem] border border-white/15 bg-white/10" />
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
                key={`${current.id}-${active}`}
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
              key={card.id}
              type="button"
              aria-label={`Go to ${card.title}`}
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

      <div className={cn("mt-0 hidden gap-5 md:grid", desktopGrid[desktopCols])}>
        {cards.map((card) => (
          <article
            key={card.id}
            className="h-full rounded-[2rem] border border-white/20 bg-white/10 p-7 backdrop-blur-md transition-colors duration-300 hover:border-white/40 hover:bg-white/15 md:p-8"
          >
            {card.number ? (
              <p className="text-sm font-medium tracking-[0.08em] text-white/60 uppercase">
                {card.number}
              </p>
            ) : null}
            <h2
              className={cn(
                "font-medium tracking-[-0.02em]",
                card.number ? "mt-3 text-2xl" : "text-xl",
                !card.text && "text-lg md:text-xl",
              )}
            >
              {card.title}
            </h2>
            {card.text ? (
              <p className="mt-3 text-base leading-relaxed text-white/75">{card.text}</p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
