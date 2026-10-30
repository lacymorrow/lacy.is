import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { ThemeProvider, ThemeToggle } from "@/components/ui/theme";
import { cn } from "@/lib/utils";

import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

import { Toaster } from "@/components/ui/sonner";
import { SITE_URL } from "~/site";

const title = "Lacy Morrow";
const description =
  "Lacy Morrow builds software. Juno, Shipkit, Lacy Shell, CrossOver, fly5 and Build and Serve, all in one place.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${title}` },
  description,
  authors: [{ name: "Lacy Morrow", url: "https://lacymorrow.com" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title,
    description,
    url: SITE_URL,
    siteName: "lacy.is",
    images: [
      { url: `${SITE_URL}/api/og`, width: 1200, height: 630, alt: "lacy.is" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/api/og`],
    creator: "@lacybuilds",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          defer
          src="https://analytics.lacy.sh/script.js"
          data-website-id="878d3543-4405-4200-acf4-822f2bbe981b"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <div className="absolute bottom-4 right-4">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
