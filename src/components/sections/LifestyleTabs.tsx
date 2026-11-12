"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { home } from "@/content/site";
import { cn } from "@/lib/utils";

export function LifestyleTabs() {
  const { lifestyle } = home;
  const [active, setActive] = useState<string>(lifestyle.tabs[0].id);
  const current = lifestyle.tabs.find((tab) => tab.id === active) ?? lifestyle.tabs[0];
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-rv-black text-white md:min-h-[90svh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.image}
          initial={reduce ? false : { opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduce ? undefined : { opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt=""
            fill
            className="object-cover object-center opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.75)_100%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="section-pad page-width relative flex min-h-[78svh] flex-col justify-end py-12 md:min-h-[90svh] md:py-20">
        <FadeIn>
          <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            {lifestyle.headline}
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/75 md:text-lg">
            {lifestyle.body}
          </p>
        </FadeIn>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] md:flex-wrap [&::-webkit-scrollbar]:hidden">
          {lifestyle.tabs.map((tab) => {
            const selected = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "focus-ring relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-transform duration-200 active:scale-95",
                  selected ? "text-rv-black" : "bg-white/10 text-white hover:bg-white/20",
                )}
              >
                {selected ? (
                  <motion.span
                    layoutId="lifestyle-tab"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32 }
                    }
                  />
                ) : null}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mt-10 max-w-xl"
          >
            <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
              {current.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/75">
              {current.text}
            </p>
            <div className="mt-6">
              <Button href={current.href} variant="white" size="lg">
                {current.cta}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
