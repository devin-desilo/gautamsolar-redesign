import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gautam Solar | India's Leading Solar Module Manufacturer",
  description: "Gautam Solar is among India's top 10 solar module manufacturers with 5 GWp capacity. Providing advanced N-Type TOPCon and Mono PERC modules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}

