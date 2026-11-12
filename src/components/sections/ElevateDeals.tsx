"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { home } from "@/content/site";
import { cn } from "@/lib/utils";

export function ElevateDeals() {
  const { elevate } = home;
  const [active, setActive] = useState<string>(elevate.tabs[0].id);
  const current = elevate.tabs.find((tab) => tab.id === active) ?? elevate.tabs[0];
  const reduce = useReducedMotion();

  return (
    <section className="bg-rv-ink py-14 text-white md:py-28">
      <div className="section-pad page-width">
        <FadeIn from="left">
          <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            {elevate.headline}
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
            {elevate.body}
          </p>
        </FadeIn>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] md:flex-wrap [&::-webkit-scrollbar]:hidden">
          {elevate.tabs.map((tab) => {
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
                    layoutId="elevate-tab"
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

        <div className="mt-8 grid items-center gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-image"}
              initial={reduce ? false : { opacity: 0, rotateY: 14, scale: 1.04 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, rotateY: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 1100 }}
              className="relative order-1 overflow-hidden rounded-[1.75rem] lg:order-2 lg:rounded-[2rem]"
            >
              <div className="relative aspect-[16/10] bg-black lg:aspect-[4/3]">
                <Image
                  src={current.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-copy"}
              className="order-2 lg:order-1"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                {current.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                {current.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
