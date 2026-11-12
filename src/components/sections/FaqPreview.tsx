"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { home } from "@/content/site";
import { cn } from "@/lib/utils";

export function FaqPreview() {
  const { faq } = home;
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="relative overflow-hidden py-14 text-white md:py-28">
      <img
        src="/images/atm2.jpg"
        alt=""
        className="bg-drift pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#07141c]/84" />
      <div className="section-pad page-width relative">
        <FadeIn>
          <h2 className="text-center text-4xl font-medium tracking-[-0.04em] md:text-5xl">
            {faq.headline}
          </h2>
        </FadeIn>

        <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
          {faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <FadeIn key={item.q} delay={0.04 * index}>
                <div>
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between gap-4 rounded-xl px-2 py-5 text-left transition-[transform,background-color] duration-200 hover:bg-white/8 active:scale-[0.99]"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="text-lg font-medium tracking-[-0.02em]">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "shrink-0 text-white/60 transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      size={20}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-base leading-relaxed text-white/70">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
