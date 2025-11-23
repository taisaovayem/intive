import type { Metadata } from "next";
import { Geist, Geist_Mono, Patrick_Hand, Cormorant_Infant, Pinyon_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  variable: "--font-patrick-hand",
  weight: "400"
});

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  variable: "--font-cormorant-infant",
  weight: "400",
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-pinyon-script",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Sắp Tết",
  description: "Còn bao nhiêu ngày nữa thì đến Tết?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${patrickHand.variable} ${cormorantInfant.variable} ${pinyonScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
