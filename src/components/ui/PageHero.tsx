"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  headline: string;
  subhead: string;
  cta?: string;
  ctaHref?: string;
  image?: string;
  crumb?: string;
};

export function PageHero({
  headline,
  subhead,
  cta = "See how it works",
  ctaHref = "/how-it-works",
  image = "/images/atm1.jpg",
  crumb,
}: PageHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[62svh] overflow-hidden md:min-h-[78svh]">
      <img src={image} alt="" className="bg-drift absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,16,14,0.28)_0%,rgba(20,16,14,0.2)_28%,rgba(20,16,14,0.5)_100%)]" />
      <Breadcrumbs
        label={crumb}
        className="section-pad page-width absolute inset-x-0 top-[4.75rem] z-10 md:top-24"
      />
      <div className="section-pad page-width relative flex min-h-[62svh] flex-col justify-end pt-28 pb-12 md:min-h-[78svh] md:pt-36 md:pb-24">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-4xl text-4xl font-medium tracking-[-0.04em] text-white md:text-6xl lg:text-7xl"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-5 max-w-xl text-base text-white/85 md:text-lg"
        >
          {subhead}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16 }}
          className="mt-8"
        >
          <Button href={ctaHref} variant="white" size="lg">
            {cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
