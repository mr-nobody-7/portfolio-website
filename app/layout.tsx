import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import "./globals.css";

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
        className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
