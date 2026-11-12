import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { TextFlipStack } from "@/components/ui/TextFlipStack";
import { dealCopy } from "@/content/deal";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: "For buyers",
  description: pages.forBuyers.subhead,
};

const buyerCards = dealCopy.steps.map((step, index) => ({
  id: step.title,
  number: String(index + 1).padStart(2, "0"),
  title: step.title,
  text: step.text,
}));

export default function ForBuyersPage() {
  return (
    <>
      <PageHero
        headline={pages.forBuyers.headline}
        subhead={pages.forBuyers.subhead}
        image="/images/vitaly-gariev-AixitSFNrBc-unsplash.jpg"
        cta="Open sample Deal Page"
        ctaHref="/d/demo"
      />
      <section className="relative overflow-hidden py-14 text-white md:py-28">
        <img
          src="/images/atm2.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07141c]/80" />
        <div className="section-pad page-width relative">
          <TextFlipStack cards={buyerCards} desktopCols={2} stackHeight="h-[270px]" />

          <FadeIn delay={0.15}>
            <div className="mt-12 max-w-2xl">
              <p className="text-lg text-white/75">
                You are right not to pay before you see the goods. The seller is
                right not to send them before they are paid. Fege holds the contract.
                A real link starts with{" "}
                <span className="font-medium text-white">fege.africa</span>. We will
                never ask you to pay to a personal account number.
              </p>
              <div className="mt-6">
                <Button href="/d/demo" variant="white" size="lg">
                  Open sample Deal Page
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
