"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { home } from "@/content/site";

const scenes = [
  "/images/atm1.jpg",
  "/images/atm3.jpg",
  "/images/atm2.jpg",
  "/images/atm1.jpg",
] as const;

export function HowSteps() {
  const reduce = useReducedMotion();
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start center", "end center"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const { steps } = home.howItWorks;

  return (
    <div className="bg-[#07141c] text-white">
      <div ref={track} className="relative bg-[#07141c]">
        <div className="pointer-events-none absolute top-0 bottom-0 left-8 z-20 w-px lg:left-[16vw]">
          <div className="absolute inset-0 bg-white/20" />
          <motion.div
            className="absolute top-0 h-full w-px origin-top bg-white"
            style={{ scaleY: progress }}
          />
        </div>

        {steps.map((step, index) => {
          const fromLeft = index % 2 === 0;

          return (
            <section key={step.number} className="relative min-h-[100svh] text-white">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={scenes[index]}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              <div className="absolute top-24 left-8 z-30 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white bg-[#07141c] text-sm font-medium lg:left-[16vw]">
                {step.number}
              </div>

              <div className="section-pad page-width step-copy relative grid min-h-[100svh] items-center gap-10 py-28 lg:grid-cols-2 lg:gap-16">
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 72, rotateX: 14 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: false, amount: 0.45 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformPerspective: 1100 }}
                  className={fromLeft ? "" : "lg:order-2"}
                >
                  <p className="text-sm font-medium tracking-[0.16em] text-white/60 uppercase">
                    Step {step.number}
                  </p>
                  <p className="mt-3 text-[5.5rem] leading-none font-medium tracking-[-0.06em] text-white/15">
                    {step.number}
                  </p>
                  <h2 className="mt-2 max-w-[14ch] text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                    {step.title}
                  </h2>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
                    {step.text}
                  </p>
                </motion.div>

                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.08 }}
                  className={fromLeft ? "lg:order-2" : ""}
                >
                  <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                    <p className="text-sm tracking-[0.12em] text-white/60 uppercase">
                      Step {step.number}
                    </p>
                    <p className="mt-3 text-2xl font-medium tracking-[-0.03em]">{step.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{step.text}</p>
                  </div>
                </motion.div>
              </div>

              {index < steps.length - 1 ? (
                <div className="absolute bottom-0 left-8 z-30 flex -translate-x-1/2 translate-y-1/2 flex-col items-center lg:left-[16vw]">
                  <div className="h-8 w-px bg-white/80" />
                  <motion.div
                    animate={reduce ? undefined : { y: [0, 8, 0] }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-[#07141c]"
                  >
                    <ArrowDown size={18} />
                  </motion.div>
                </div>
              ) : null}
            </section>
          );
        })}
      </div>

      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <img
          src="/images/atm3.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07141c]/75" />
        <div className="section-pad page-width relative text-center">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-medium tracking-[-0.04em] md:text-6xl"
          >
            {home.howItWorks.headline}
          </motion.h2>
          <div className="mt-8 flex justify-center">
            <Button href="/d/demo" variant="white" size="lg">
              See the Deal Page
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
