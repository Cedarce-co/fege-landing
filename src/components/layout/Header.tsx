"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Button } from "@/components/ui/Button";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";

type HeaderProps = {
  variant?: "overlay" | "solid";
};

export function Header({ variant = "overlay" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const solid = variant === "solid" || scrolled || open;
  const links = nav.filter((item) => item.href !== "/how-it-works");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "border-b border-white/10 bg-[#07141c]/90 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="page-width grid h-[72px] grid-cols-[1fr_auto] items-center px-5 md:h-[80px] md:px-6 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          aria-label="Fege home"
          className="focus-ring justify-self-start rounded-lg transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <BrandLogo tone="white" priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring group relative rounded-lg text-[15px] font-medium text-white/90 transition-colors hover:text-white",
              )}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <Button
            href="/how-it-works"
            variant="white"
            size="md"
          >
            How it works
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "focus-ring justify-self-end inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
            "text-white",
          )}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            className="border-t border-white/10 bg-[#07141c] lg:hidden"
          >
            <div className="section-pad flex flex-col gap-1 py-4">
              {links.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block rounded-xl px-3 py-3 text-base font-medium text-white"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Button
                href="/how-it-works"
                variant="white"
                className="mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                How it works
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
