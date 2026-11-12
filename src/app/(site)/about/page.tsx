import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { brand, pages } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: pages.about.subhead,
};

export default function AboutPage() {
  const { about } = pages;

  return (
    <>
      <PageHero
        headline={about.headline}
        subhead={about.subhead}
        image="/images/atm3.jpg"
        cta="Get early access"
        ctaHref="/download"
      />
      <section className="relative overflow-hidden py-14 text-white md:py-28">
        <img
          src="/images/atm1.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07141c]/82" />
        <div className="section-pad page-width relative max-w-3xl space-y-12">
          <FadeIn>
            <div className="space-y-5 text-base leading-relaxed text-white/80 md:text-lg">
              {about.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
              {about.vision.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
              {about.vision.text}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
              {about.mission.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
              {about.mission.text}
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
              {about.who.title}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-white/75 md:text-lg">
              {about.who.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
              Contact
            </h2>
            <div className="mt-4 space-y-2 text-base leading-relaxed text-white/75 md:text-lg">
              <p>Business location: {brand.address}</p>
              <p>
                Support:{" "}
                <a
                  href={`mailto:${brand.supportEmail}`}
                  className="focus-ring rounded text-white transition-colors hover:text-white/85"
                >
                  {brand.supportEmail}
                </a>
              </p>
            </div>
            <div className="mt-10">
              <Button href="/how-it-works" variant="white" size="lg">
                See how it works
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
