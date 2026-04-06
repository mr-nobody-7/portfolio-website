import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

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
  title: "Vivekananda Godi - Portfolio",
  description: "Personal portfolio showcasing my work",
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
