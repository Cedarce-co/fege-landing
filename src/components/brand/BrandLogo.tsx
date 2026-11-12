import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  /** `white` for dark/photo backgrounds; `ink` for light surfaces */
  tone?: "white" | "ink";
  /** `header` is largest; `footer` stays prominent but slightly smaller */
  size?: "header" | "footer";
  className?: string;
  priority?: boolean;
};

const SIZES = {
  header: 56,
  footer: 48,
} as const;

/** Standalone Fege mark — never pair with the word “Fege”. */
export function BrandLogo({
  tone = "ink",
  size = "header",
  className,
  priority = false,
}: BrandLogoProps) {
  const height = SIZES[size];

  return (
    <Image
      src="/fegelogo-nobg.png"
      alt="Fege"
      width={372}
      height={423}
      unoptimized
      loading="eager"
      fetchPriority={priority ? "high" : "auto"}
      // Inline size so browser cache / CSS order cannot shrink the mark
      style={{
        height,
        width: "auto",
        maxWidth: "none",
        filter: tone === "ink" ? "brightness(0)" : undefined,
      }}
      className={cn("block", className)}
    />
  );
}
