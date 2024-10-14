import type { Metadata } from "next";
import "../styles/globals.css";
import Meta from "@/components/global/Meta";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { Montserrat } from "next/font/google";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevent FontAwesome from adding its CSS automatically



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400'],
  style: ['normal', 'italic'],
  variable: "--font-montserrat",
});

// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Rare Breed Ink",
  description: "The best tattoo shop in town!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Meta />
      <body className={`${montserrat.variable} antialiased bg-black`}>
        <NextUIProvider>
          <main className="dark text-foreground bg-background">
            <Header />
            {children}
            <Footer />
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}