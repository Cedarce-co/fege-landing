import { Button } from "@/components/ui/Button";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] shrink-0" fill="currentColor">
      <path d="M16.37 12.72c-.03-2.33 1.9-3.45 1.99-3.5-1.08-1.58-2.77-1.8-3.37-1.82-1.43-.15-2.8.84-3.53.84-.73 0-1.85-.82-3.05-.8-1.57.02-3.01.91-3.82 2.31-1.63 2.83-.42 7.01 1.17 9.3.78 1.12 1.7 2.38 2.92 2.33 1.17-.05 1.61-.75 3.03-.75 1.41 0 1.81.75 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.62-.03-.01-2.46-.94-2.49-3.75zM14.7 6.3c.64-.78 1.08-1.86.96-2.94-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.04.08 2.1-.53 2.74-1.32z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] shrink-0" fill="currentColor">
      <path d="M4 3.4v17.2L20.2 12 4 3.4z" />
    </svg>
  );
}

type DownloadButtonProps = {
  variant?: "black" | "white" | "ghost" | "ghost-light";
  size?: "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

export function DownloadButton({
  variant = "black",
  size = "lg",
  className,
  children = "Download the app",
}: DownloadButtonProps) {
  return (
    <Button href="/download" variant={variant} size={size} className={className}>
      <AppleIcon />
      <PlayIcon />
      {children}
    </Button>
  );
}
