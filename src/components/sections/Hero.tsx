"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { home } from "@/content/site";

function AmountFrame({
  label,
  amount,
  action,
}: {
  label: string;
  amount: string;
  action: string;
}) {
  return (
    <div className="w-full">
      <div className="relative flex aspect-[178/316] w-full flex-col items-center justify-end overflow-hidden rounded-[1.75rem] border border-white/85 px-5 pb-5 text-center text-white sm:rounded-[2rem]">
        <img
          src="/gif/hero-gif.gif"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-contain"
        />
        <p className="relative text-[13px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] lg:text-[15px]">
          {label}
        </p>
        <p className="relative mt-1 text-[1.85rem] leading-none font-medium tracking-[-0.045em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] lg:text-[3.25rem]">
          {amount}
        </p>
        <span className="relative mt-3 inline-flex rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-rv-black lg:mt-4 lg:px-5 lg:py-2 lg:text-[15px]">
          {action}
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const { hero } = home;

  return (
    <section className="relative overflow-hidden bg-fege-blue lg:h-[100svh] lg:min-h-[680px]">
      <div className="page-width relative px-5 md:px-6 lg:h-full">

        {/* Text: upper-left inside shell — h1 full shell width like Revolut, sub ~300px */}
        <div className="relative z-10 pt-24 lg:pt-[7.5rem]">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[18ch] text-[2.75rem] leading-[1.05] font-medium tracking-[-0.045em] text-white sm:text-5xl lg:max-w-none lg:text-[5.25rem] lg:leading-[1.05]"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-[300px] text-base leading-relaxed text-white/95 lg:text-lg"
          >
            {hero.subhead}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7"
          >
            <DownloadButton variant="black" size="lg">
              {hero.cta}
            </DownloadButton>
          </motion.div>
        </div>
      </div>

      {/* Amount frame centered on the subject, like Revolut's card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mt-6 w-[170px] pb-6 lg:absolute lg:bottom-3 lg:left-[52%] lg:mx-0 lg:mt-0 lg:w-[280px] lg:-translate-x-1/2 lg:pb-0"
      >
        <AmountFrame
          label={hero.overlayLabel}
          amount={hero.overlayAmount}
          action={hero.overlayAction}
        />
      </motion.div>
    </section>
  );
}
