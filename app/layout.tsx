import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import {ParticleBackground} from "@/components/ParticleBackground";

const antonFont = Anton({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-anton",
});

const robotoFlex = Roboto_Flex({
  weight: ["100", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
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
        className={`${antonFont.variable} ${robotoFlex.variable} antialiased cursor-none`}
      >
        <SmoothScrollProvider>
          <main>{children}</main>
          <ScrollProgressIndicator />
          <CustomCursor />
          <ParticleBackground />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
