"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const labels: Record<string, string> = {
  "/for-sellers": "For sellers",
  "/for-buyers": "For buyers",
  "/pricing": "Pricing",
  "/security": "Security",
  "/download": "Waitlist",
  "/about": "About",
};

export function Breadcrumbs({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  const pathname = usePathname();
  const current = label ?? labels[pathname];
  const reduce = useReducedMotion();

  if (!current) return null;

  return (
    <motion.nav
      aria-label="Breadcrumb"
      initial={reduce ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
        <li>
          <Link
            href="/"
            className="focus-ring rounded transition-colors duration-200 hover:text-white"
          >
            Home
          </Link>
        </li>
        <li aria-hidden className="text-white/40">
          <ChevronRight size={14} />
        </li>
        <li aria-current="page" className="font-medium text-white">
          {current}
        </li>
      </ol>
    </motion.nav>
  );
}
