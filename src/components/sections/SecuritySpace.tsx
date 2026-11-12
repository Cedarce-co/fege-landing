"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { TextFlipStack } from "@/components/ui/TextFlipStack";
import { home } from "@/content/site";

export function SecuritySpace() {
  const { security } = home;
  const cards = security.points.map((point) => ({
    id: point,
    title: point,
  }));

  return (
    <section className="relative overflow-hidden py-14 text-white md:py-28">
      <img
        src="/images/atm1.jpg"
        alt=""
        className="bg-drift pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#07141c]/72" />
      <div className="section-pad page-width relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <FadeIn>
            <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              {security.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {security.body}
            </p>
            <div className="mt-8">
              <Button href={security.href} variant="white" size="lg">
                {security.cta}
              </Button>
            </div>
          </FadeIn>

          <TextFlipStack cards={cards} desktopCols={2} stackHeight="h-[210px]" />
        </div>
      </div>
    </section>
  );
}
