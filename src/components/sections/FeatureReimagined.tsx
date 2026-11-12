"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ImageFlipStack } from "@/components/ui/ImageFlipStack";
import { TiltCard } from "@/components/ui/TiltCard";
import { home } from "@/content/site";

export function FeatureReimagined() {
  const { feature } = home;
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-14 text-white md:py-28">
      <img
        src="/images/atm1.jpg"
        alt=""
        className="bg-drift pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#07141c]/82" />
      <div className="section-pad page-width relative text-center">
        <FadeIn>
          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl lg:text-[3.5rem]">
            {feature.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {feature.body}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={feature.href} variant="white" size="lg">
              {feature.cta}
            </Button>
          </div>
        </FadeIn>
      </div>

      <div className="section-pad page-width relative mt-10 md:mt-14">
        <ImageFlipStack cards={feature.cards} />

        <div className="hidden gap-6 md:grid md:grid-cols-2">
          {feature.cards.map((card, index) => (
            <FadeIn
              key={card.label}
              delay={0.08 * index}
              from={index === 0 ? "left" : "right"}
              className="h-full"
            >
              <TiltCard className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/30 bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      initial={reduce ? false : { scale: 1.08 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 86vw, 50vw"
                      />
                    </motion.div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-6 pt-16 pb-5 text-white">
                      <p className="text-sm text-white/85">{card.label}</p>
                      <p className="mt-1 text-2xl font-medium tracking-[-0.03em]">
                        {card.amount}
                      </p>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
