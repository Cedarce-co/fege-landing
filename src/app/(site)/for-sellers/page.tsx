import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Lift } from "@/components/ui/Lift";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { TextFlipStack } from "@/components/ui/TextFlipStack";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: "For sellers",
  description: pages.forSellers.subhead,
};

const benefits = [
  {
    id: "first-buyers",
    title: "Win first-time buyers",
    text: "Both sides accept the same terms. A held payment removes the doubt.",
  },
  {
    id: "established",
    title: "Look established",
    text: "Build instant trust for your business. Every contract carries your name and what you both agreed.",
  },
  {
    id: "delivery",
    title: "Track fulfilment",
    text: "Keep delivery, milestones and proof on the contract while the money stays held.",
  },
  {
    id: "locked",
    title: "Know when money is locked",
    text: "An instant alert the moment funds are held, before you send the goods.",
  },
  {
    id: "place",
    title: "Every contract in one place",
    text: "Track, filter and export your transactions, including open disputes.",
  },
  {
    id: "payout",
    title: "Get paid without stress",
    text: "After confirmation or a clean check window, Auto-payout goes straight to your bank.",
  },
] as const;

export default function ForSellersPage() {
  return (
    <>
      <PageHero
        headline={pages.forSellers.headline}
        subhead={pages.forSellers.subhead}
        image="/images/sabhyata-sahu-Qzcqwkq7exc-unsplash.jpg"
      />
      <section className="relative overflow-hidden py-14 text-white md:py-28">
        <img
          src="/images/atm3.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07141c]/80" />
        <div className="section-pad page-width relative">
          <TextFlipStack cards={benefits} desktopCols={3} stackHeight="h-[250px]" />

          <FadeIn delay={0.15}>
            <Lift>
              <div className="mt-12 rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-colors duration-300 hover:border-white/40 md:p-12">
                <p className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                  Why lose them?
                </p>
                <p className="mt-4 max-w-2xl text-white/70">
                  You will not sell without pay. They will not pay before they see
                  the goods. Send a contract, not an account number, and win the deal.
                </p>
                <div className="mt-8">
                  <Button href="/how-it-works" variant="white" size="lg">
                    See how it works
                  </Button>
                </div>
              </div>
            </Lift>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
