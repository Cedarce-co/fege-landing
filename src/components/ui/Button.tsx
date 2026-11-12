import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "black" | "white" | "ghost" | "ghost-light";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  black: "bg-[#1f1f1f] text-white hover:bg-black",
  white: "bg-white text-[#1f1f1f] hover:bg-white/90",
  ghost: "bg-transparent text-[#191c1f] hover:bg-black/5",
  "ghost-light": "bg-transparent text-white hover:bg-white/10",
};

const sizes = {
  md: "h-[42px] px-6 text-[15px]",
  lg: "h-12 px-7 text-[15px] md:h-[52px] md:px-8 md:text-base",
};

export function Button({
  href,
  children,
  variant = "black",
  size = "md",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.22)] active:translate-y-0 active:scale-[0.96]",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
