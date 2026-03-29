import type { Metadata } from "next";
import { Inter, Space_Grotesk, Cinzel, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naikini Sai Nikhil | Portfolio",
  description: "BCA Student & Python Developer passionate about Data Analysis and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space.variable} ${cinzel.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-[#0a0a0a] text-white cursor-none selection:bg-white/20">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
