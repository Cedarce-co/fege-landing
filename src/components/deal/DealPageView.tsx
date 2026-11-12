"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { TextFlipStack } from "@/components/ui/TextFlipStack";
import { dealCopy, type Deal } from "@/content/deal";
import { formatNaira } from "@/lib/utils";

type DealPageViewProps = {
  deal: Deal;
};

function DealFrame({
  amount,
  action,
  verified,
}: {
  amount: string;
  action: string;
  verified: boolean;
}) {
  const badges = [
    "Money held until delivery",
    verified ? "Verified seller" : "Check the seller",
  ];

  return (
    <div className="w-[min(78vw,300px)] xl:w-[330px]">
      <div className="flex h-[200px] flex-col items-center justify-end rounded-[1.75rem] border border-white/80 bg-transparent px-5 pb-4 text-center text-white lg:h-[230px] lg:rounded-[2rem] lg:pb-5">
        <p className="text-[15px] font-medium text-white/90">Deal</p>
        <p className="mt-1 text-[3.25rem] leading-none font-medium tracking-[-0.045em] xl:text-[3.75rem]">
          {amount}
        </p>
        <span className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-rv-black">
          {action}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {badges.map((badge) => (
          <div
            key={badge}
            className="rounded-xl bg-white px-3 py-2 text-[10px] font-semibold tracking-[0.04em] text-rv-ink uppercase shadow-sm"
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DealPageView({ deal }: DealPageViewProps) {
  const reduce = useReducedMotion();
  const amount = formatNaira(deal.amount);

  return (
    <div className="bg-[#07141c] text-white">
      <section className="relative min-h-[100svh] overflow-hidden bg-[#2a2422]">
        <img
          src="/images/atm3.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />

        <header className="section-pad page-width relative z-20 flex h-[76px] items-center justify-between">
          <Link href="/" aria-label="Fege home" className="focus-ring rounded-lg">
            <BrandLogo tone="white" priority />
          </Link>
          <p className="text-[15px] font-medium text-white">fege.africa</p>
        </header>

        {/* Desktop: copy left, amount frame over the subject. One sky, no column split. */}
        <div className="section-pad page-width relative z-10 hidden min-h-[calc(100svh-76px)] items-center min-[1024px]:flex">
          <div className="w-full max-w-[460px] pb-16 xl:max-w-[520px]">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[3.6rem] leading-[1.02] font-medium tracking-[-0.045em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)] xl:text-[4.75rem]"
            >
              Pay safe.
              <br />
              Get your order.
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-[26rem] text-base leading-relaxed text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)] xl:text-lg"
            >
              A Fege contract from {deal.businessName} for {deal.quantity} {deal.productName}.
              Review the terms, pay securely, track fulfilment, then confirm when you
              see the goods.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8"
            >
              <Button size="lg">{dealCopy.payCta}</Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 lg:bottom-[3%] lg:left-[60%] lg:block"
        >
          <DealFrame amount={amount} action="Pay now" verified={deal.verified} />
        </motion.div>

        {/* Mobile: stacked copy, then the frame over the same sky */}
        <div className="relative z-10 flex min-h-[calc(100svh-76px)] flex-col min-[1024px]:hidden">
          <div className="section-pad pt-4">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[12ch] text-[2.75rem] leading-[1.05] font-medium tracking-[-0.04em] text-white sm:text-5xl"
            >
              Pay safe. Get your order.
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-md text-base leading-relaxed text-white/95"
            >
              A Fege contract from {deal.businessName} for {deal.quantity} {deal.productName}.
              Review the terms, pay securely, track fulfilment, then confirm when you
              see the goods.
            </motion.p>
            <div className="mt-6">
              <Button size="lg">{dealCopy.payCta}</Button>
            </div>
          </div>
          <div className="mt-auto flex justify-center px-5 pt-8 pb-6">
            <DealFrame amount={amount} action="Pay now" verified={deal.verified} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <img
          src="/images/atm1.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07141c]/84" />
        <div className="section-pad page-width relative">
        <Breadcrumbs label="Deal" className="mb-6" />
        <p className="text-sm font-medium text-white/60">
          Order for {deal.buyerName} · {deal.createdLabel}
        </p>
        <h2 className="mt-3 max-w-[16ch] text-4xl leading-[1.05] font-medium tracking-[-0.04em] md:text-6xl">
          {dealCopy.protectionTitle}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          {dealCopy.protectionBody}
        </p>
        <p className="mt-4 text-base text-white">{deal.productDetail}</p>

        <TextFlipStack
          className="mt-8 md:mt-12"
          desktopCols={4}
          stackHeight="h-[250px]"
          cards={dealCopy.steps.map((step, index) => ({
            id: step.title,
            number: `0${index + 1}`,
            title: step.title,
            text: step.text,
          }))}
        />
        </div>
      </section>

      <section className="bg-rv-black text-white">
        <div className="section-pad page-width py-14 md:py-16">
          <p className="text-lg font-medium md:text-xl">{dealCopy.safety}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            {deal.messagePreview}
          </p>
        </div>
      </section>
    </div>
  );
}
