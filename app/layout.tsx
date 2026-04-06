import type { Metadata, Viewport } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import {
  absoluteUrl,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const antonFont = Anton({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const robotoFlex = Roboto_Flex({
  weight: ["100", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Full Stack Developer Portfolio | Vivekananda Godi",
    template: "%s | Vivekananda Godi",
  },
  description:
    "Full stack developer portfolio showcasing React, Next.js, Node.js, and scalable web application projects for startups and businesses.",
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Full Stack Developer Portfolio | Vivekananda Godi",
    description:
      "Explore full-stack projects built with Next.js, React, Node.js, and modern backend architecture.",
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: "Vivekananda Godi full stack developer portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer Portfolio | Vivekananda Godi",
    description:
      "Portfolio of a full stack developer specializing in Next.js, React, Node.js, and performant web applications.",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <a
            href="mailto:vivekanandagodi@gmail.com"
            className="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 -rotate-180 [writing-mode:vertical-rl] text-muted-foreground tracking-wide z-30 hover:text-primary transition-colors"
          >
            vivekanandagodi@gmail.com
          </a>
          <Navbar />
          <main className="relative z-10">{children}</main>
          <ScrollProgressIndicator />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
