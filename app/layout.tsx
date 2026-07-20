import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { glacialIndifference, segoeUI, ubuntu } from "../utils/fonts";
import { ThemeProvider } from "../utils/themeContext";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chavania",
  description: "Chavania is a platform that connects local and international merchants with buyers, enabling borderless trade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${glacialIndifference.variable} ${segoeUI.variable} ${ubuntu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
