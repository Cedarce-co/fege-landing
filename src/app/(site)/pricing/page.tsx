import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { PlanFlipStack } from "@/components/ui/PlanFlipStack";
import { TiltCard } from "@/components/ui/TiltCard";
import { PageHero } from "@/components/ui/PageHero";
import { home, pages } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: pages.pricing.subhead,
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        headline={pages.pricing.headline}
        subhead={pages.pricing.subhead}
        image="/images/atm2.jpg"
      />
      <section className="relative overflow-hidden py-14 text-white md:py-28">
        <img
          src="/images/atm3.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07141c]/74" />
        <div className="section-pad page-width relative">
          <PlanFlipStack plans={home.plans.items} />

          <div className="hidden gap-5 md:grid md:grid-cols-2">
            {home.plans.items.map((plan, index) => (
              <FadeIn key={plan.name} delay={0.08 * index}>
                <TiltCard className="h-full">
                  <article className="flex h-full flex-col rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                    <h2 className="text-2xl font-medium">{plan.name}</h2>
                    <p className="mt-3 text-4xl font-medium tracking-[-0.04em]">
                      {plan.price}
                    </p>
                    <p className="mt-4 flex-1 text-base text-white/75">{plan.text}</p>
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
          <FadeIn delay={0.15}>
            <p className="mt-10 max-w-2xl text-base text-white/75">
              The fee is part of the contract you both see before anyone pays.
              [CONFIRM fee details]. Your first five protected transactions are free
              [CONFIRM].
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
