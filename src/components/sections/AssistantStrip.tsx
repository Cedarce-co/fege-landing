"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { home } from "@/content/site";

export function AssistantStrip() {
  const { assistant } = home;
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-14 text-white md:py-28">
      <motion.img
        src="/images/atm2.jpg"
        alt=""
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1f5f7d]/70" />
      <div className="section-pad page-width relative text-center">
        <FadeIn>
          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            {assistant.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">
            {assistant.body}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={assistant.href} variant="white" size="lg">
              {assistant.cta}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
