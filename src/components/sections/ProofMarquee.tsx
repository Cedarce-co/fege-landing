"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { home } from "@/content/site";

export function ProofMarquee() {
  const { proof } = home;
  const loop = [...proof.items, ...proof.items];

  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <img
        src="/images/atm2.jpg"
        alt=""
        className="bg-drift pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#07141c]/72" />
      <div className="section-pad page-width relative text-center">
        <FadeIn>
          <h2 className="text-2xl font-medium tracking-[-0.03em] text-white/80 md:text-3xl">
            {proof.headline}
          </h2>
        </FadeIn>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#07141c] to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#07141c] to-transparent md:w-28" />
        <div className="marquee-track flex w-max gap-5 md:gap-6">
          {loop.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="skew-x-[-14deg] border border-white/75 bg-transparent px-8 py-4 text-base font-medium whitespace-nowrap text-white transition-[transform,background-color,border-color] duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 md:px-10 md:py-5 md:text-lg"
            >
              <span className="inline-block skew-x-[14deg]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
