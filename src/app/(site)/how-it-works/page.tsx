import type { Metadata } from "next";
import { HowSteps } from "@/components/sections/HowSteps";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: "How it works",
  description: pages.howItWorks.subhead,
};

export default function HowItWorksPage() {
  return <HowSteps />;
}
