import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { FlipStack } from "@/components/ui/FlipStack";
import { PageHero } from "@/components/ui/PageHero";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { brand, home, pages } from "@/content/site";

export const metadata: Metadata = {
  title: "Waitlist",
  description: pages.download.subhead,
};

export default function DownloadPage() {
  return (
    <>
      <PageHero
        headline={pages.download.headline}
        subhead={pages.download.subhead}
        image="/images/i-m-zion-KCPnPgAgz9s-unsplash.jpg"
        cta="Join the waitlist"
        ctaHref="#waitlist"
      />
      <section className="relative overflow-hidden py-14 text-white md:py-24">
        <img
          src="/images/atm3.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07141c]/82" />
        <div className="section-pad page-width relative grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <FadeIn className="min-w-0">
            <p className="text-sm font-medium tracking-[0.08em] text-white/60 uppercase">
              What Fege does
            </p>
            <h2 className="mt-3 max-w-full text-[2rem] leading-[1.15] font-medium tracking-[-0.04em] text-balance sm:text-4xl md:text-5xl">
              {brand.tagline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {home.hero.subhead}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/85">{brand.safety}</p>

            <FlipStack steps={home.howItWorks.steps} className="mt-8 md:mt-10" />
          </FadeIn>

          <FadeIn delay={0.08} className="min-w-0">
            <div id="waitlist" className="min-w-0 rounded-[2rem] border border-white/20 bg-white/10 p-5 backdrop-blur-md sm:p-7 md:p-9 lg:sticky lg:top-28">
              <h2 className="text-2xl font-medium tracking-[-0.03em]">
                Join the waitlist
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Fege is not in the App Store or Google Play yet [CONFIRM]. Leave your name
                and WhatsApp number. We will message you when you can download the app.
              </p>
              <div className="mt-6">
                <WaitlistForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
