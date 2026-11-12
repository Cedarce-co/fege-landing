"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { brand, footer } from "@/content/site";
import { cn } from "@/lib/utils";

export function Footer() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <footer className="border-t border-white/10 bg-[#07141c] text-white">
      <div className="section-pad page-width py-12 md:py-16">
        <div className="hidden gap-12 md:grid md:grid-cols-4">
          <div>
            <Link href="/" aria-label="Fege home" className="focus-ring inline-flex rounded-lg">
              <BrandLogo tone="white" size="footer" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              {brand.about}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-white">{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="focus-ring inline-block rounded text-sm text-white/65 transition-transform duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Link href="/" aria-label="Fege home" className="focus-ring inline-flex rounded-lg">
            <BrandLogo tone="white" size="footer" />
          </Link>
          <p className="mt-4 mb-6 max-w-xs text-sm leading-relaxed text-white/65">
            {brand.about}
          </p>
          {footer.columns.map((column) => {
            const isOpen = open === column.title;
            return (
              <div key={column.title} className="border-t border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-white"
                  onClick={() => setOpen(isOpen ? null : column.title)}
                >
                  {column.title}
                  <ChevronDown
                    className={cn("transition-transform", isOpen && "rotate-180")}
                    size={18}
                  />
                </button>
                {isOpen ? (
                  <ul className="space-y-3 pb-4">
                    {column.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link href={link.href} className="inline-block text-sm text-white/65 transition-transform duration-200 hover:translate-x-1 hover:text-white">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Fege. All rights reserved.</p>
          <p>Real Fege links always start with fege.africa.</p>
        </div>
      </div>
    </footer>
  );
}
