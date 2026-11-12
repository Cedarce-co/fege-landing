"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { PlanFlipStack } from "@/components/ui/PlanFlipStack";
import { TiltCard } from "@/components/ui/TiltCard";
import { home } from "@/content/site";

export function Plans() {
  const { plans } = home;

  return (
    <section className="relative overflow-hidden py-14 text-white md:py-28">
      <img
        src="/images/atm3.jpg"
        alt=""
        className="bg-drift pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#07141c]/74" />
      <div className="section-pad page-width relative">
        <FadeIn>
          <p className="text-sm font-medium tracking-[0.08em] text-white/60 uppercase">
            {plans.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">
            {plans.headline}
          </h2>
        </FadeIn>

        <PlanFlipStack plans={plans.items} className="mt-8 md:mt-12" />

        <div className="mt-8 hidden gap-5 md:mt-12 md:grid md:grid-cols-2">
          {plans.items.map((plan, index) => (
            <FadeIn key={plan.name} delay={0.08 * index}>
              <TiltCard className="h-full">
                <article className="flex h-full flex-col rounded-[2rem] border border-white/20 bg-white/10 p-7 backdrop-blur-md md:p-9">
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-4xl font-medium tracking-[-0.04em]">
                    {plan.price}
                  </p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-white/75">
                    {plan.text}
                  </p>
                  <div className="mt-8">
                    <Button
                      href={"href" in plan ? plan.href : "/how-it-works"}
                      variant="white"
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </article>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
