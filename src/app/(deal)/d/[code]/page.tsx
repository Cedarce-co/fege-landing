import type { Metadata } from "next";
import { Suspense } from "react";
import { DealPageView } from "@/components/deal/DealPageView";
import { getDeal } from "@/content/deal";
import { formatNaira } from "@/lib/utils";

type PageProps = {
  params: Promise<{ code: string }>;
};

export function generateStaticParams() {
  return [{ code: "demo" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  const deal = getDeal(code);

  return {
    title: `${deal.businessName} · ${deal.productName}`,
    description: `A Fege contract for ${formatNaira(deal.amount)}. Your money stays held until you see the goods.`,
  };
}

async function DealContent({ params }: PageProps) {
  const { code } = await params;
  const deal = getDeal(code);
  return <DealPageView deal={deal} />;
}

export default function DealRoutePage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[100svh] items-center justify-center bg-fege-fog text-fege-muted">
          Loading deal…
        </div>
      }
    >
      <DealContent params={params} />
    </Suspense>
  );
}
