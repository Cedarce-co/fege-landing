import { FadeIn } from "@/components/ui/FadeIn";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { home } from "@/content/site";

export function JoinCta() {
  const { join } = home;

  return (
    <section className="relative overflow-hidden py-14 text-white md:py-28">
      <img
        src="/images/atm1.jpg"
        alt=""
        className="bg-drift pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#07141c]/72" />
      <div className="section-pad page-width relative text-center">
        <FadeIn>
          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            {join.headline}
          </h2>
          <div className="mt-8 flex justify-center">
            <DownloadButton variant="white" size="lg">{join.cta}</DownloadButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
