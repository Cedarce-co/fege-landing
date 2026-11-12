import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { TextFlipStack } from "@/components/ui/TextFlipStack";
import { home, pages } from "@/content/site";

export const metadata: Metadata = {
  title: "Security",
  description: pages.security.subhead,
};

const securityCards = home.security.points.map((point) => ({
  id: point,
  title: point,
}));

export default function SecurityPage() {
  return (
    <>
      <PageHero
        headline={pages.security.headline}
        subhead={pages.security.subhead}
        image="/images/atm1.jpg"
        cta="See a sample contract"
        ctaHref="/d/demo"
      />
      <section className="relative overflow-hidden py-14 text-white md:py-28">
        <img
          src="/images/atm1.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07141c]/80" />
        <div className="section-pad page-width relative">
          <TextFlipStack cards={securityCards} desktopCols={2} stackHeight="h-[220px]" />

          <FadeIn delay={0.15}>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/75">
              {home.security.body}
            </p>
            <div className="mt-8">
              <Button href="/d/demo" variant="white" size="lg">
                See a sample contract
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
