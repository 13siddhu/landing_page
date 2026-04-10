import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./SmoothScrollProvider";
import ClientLayout from "./components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova | Autonomous Revenue Intelligence & Orchestration",
  description: "The world's first autonomous revenue engine that identifies, qualifies, and orchestrates growth across your entire digital ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <SmoothScrollProvider>
            <ClientLayout>{children}</ClientLayout>
          </SmoothScrollProvider>
        </main>
      </body>
    </html>
  );
}
