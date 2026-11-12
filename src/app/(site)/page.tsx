import { AssistantStrip } from "@/components/sections/AssistantStrip";
import { ElevateDeals } from "@/components/sections/ElevateDeals";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { FeatureReimagined } from "@/components/sections/FeatureReimagined";
import { Hero } from "@/components/sections/Hero";
import { JoinCta } from "@/components/sections/JoinCta";
import { LifestyleTabs } from "@/components/sections/LifestyleTabs";
import { Plans } from "@/components/sections/Plans";
import { ProofMarquee } from "@/components/sections/ProofMarquee";
import { SecuritySpace } from "@/components/sections/SecuritySpace";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureReimagined />
      <ProofMarquee />
      <LifestyleTabs />
      <ElevateDeals />
      <AssistantStrip />
      <SecuritySpace />
      <Plans />
      <FaqPreview />
      <JoinCta />
    </>
  );
}
