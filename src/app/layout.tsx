import type { Metadata } from "next";
import { DM_Sans, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

const description =
  "Samson Iweibo is an independent frontend developer from Nigeria building thoughtful interfaces, real products, and interactive experiments.";

export const metadata: Metadata = {
  title: "Samson Iweibo · Frontend Developer",
  description,
  keywords: ["Samson Iweibo", "Frontend Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Samson Iweibo · Frontend Developer",
    description,
    type: "website",
    siteName: "Samson Iweibo",
  },
  twitter: {
    card: "summary",
    title: "Samson Iweibo · Frontend Developer",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
