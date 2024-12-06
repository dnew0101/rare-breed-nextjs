import type { Metadata } from "next";
import "../styles/globals.css";
import Meta from "@/components/global/Meta";
import { NextUIProvider } from "@nextui-org/react";
import dynamic from 'next/dynamic';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevent FontAwesome from adding its CSS automatically

const Header = dynamic(() => import('@/components/global/Header'));
const Footer = dynamic(() => import('@/components/global/Footer'));

export const metadata: Metadata = {
  title: "Rare Breed Ink",
  description: "The best tattoo shop in Tacoma!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Meta />
      <body className="antialiased bg-black">
        <NextUIProvider>
          <main className="dark text-foreground bg-background m-0 p-0">
            <Header />
            {children}
            <Footer />
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}