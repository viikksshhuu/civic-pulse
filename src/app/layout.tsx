import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CivicPulse — Citizen Issue Reporting & Tracking Platform",
    template: "%s | CivicPulse",
  },
  description:
    "Report potholes, broken lights, and civic problems in under 60 seconds. Track every issue until it's resolved. CivicPulse connects citizens directly to the people who can act.",
  keywords: [
    "civic issues",
    "pothole reporting",
    "citizen platform",
    "municipal issues",
    "India civic tech",
  ],
  openGraph: {
    title: "CivicPulse — Fix Your City. Start Here.",
    description:
      "Report, track and resolve civic issues in Indian cities. Join 18,400+ citizens making their neighbourhoods better.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-off-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
