import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/Toaster";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const description =
  "Fege is a transaction contract solution. Build instant trust for your business. You will not sell without pay. They will not pay before they see the goods.";

const shareTitle = "Fege. You're not wrong. Your customers are also right.";

const tabTitle = `${shareTitle} ${description}`;

export const metadata: Metadata = {
  title: {
    default: tabTitle,
    template: `%s · ${tabTitle}`,
  },
  description,
  applicationName: "Fege",
  metadataBase: new URL("https://fege.africa"),
  icons: {
    icon: [{ url: "/fege-icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/fege-icon.png", type: "image/png", sizes: "512x512" }],
    shortcut: ["/fege-icon.png"],
  },
  openGraph: {
    type: "website",
    url: "https://fege.africa",
    siteName: "Fege",
    title: shareTitle,
    description,
    images: [
      {
        url: "/fegelogo.png",
        width: 1004,
        height: 650,
        alt: "Fege",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description,
    images: ["/fegelogo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
