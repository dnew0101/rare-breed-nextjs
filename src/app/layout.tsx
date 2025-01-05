import type { Metadata } from "next";
import "../styles/globals.css";
import Meta from "@/components/global/Meta";
import { NextUIProvider } from "@nextui-org/react";
import dynamic from 'next/dynamic';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 
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
      <body className="antialiased bg-background"
      style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <NextUIProvider>
          <main className="dark text-foreground bg-background m-0 p-0 min-h-screen">
            <div className="relative w-full">
              <Header />
              
                {/* Background animation */}
                <div className="flex animated-background fixed inset-0 z-0 pointer-events-none opacity-90 blur-xl
                md:blur-3xl animate-translateReverse">
                  <div className="absolute -top-32 -left-80 w-20 h-[160vh] blur-3xl -rotate-45 translate-x-[15vw] 
                  -translate-y-28 bg-neutral-950 animation-pulse7s mix-blend-multiply opacity-50"></div>

                  <div className="absolute -top-10 -left-40 w-60 h-[160vh] blur-3xl -rotate-45 translate-x-[25vw] 
                  -translate-y-28 bg-violet-950 animation-pulse6s mix-blend-multiply opacity-80
                  md:translate-x-[33vw] md:w-64"></div>

                  <div className="absolute -top-10 left-0 w-60 h-[160vh] blur-3xl -rotate-45 translate-x-[35vw]
                  -translate-y-28 bg-red-900 animation-pulse5s mix-blend-multiply opacity-90
                  md:translate-x-[43vw] md:w-64"></div>
                  
                  <div className="absolute -top-10 left-24 w-60 h-[160vh] blur-3xl -rotate-45 translate-x-[50vw] 
                  -translate-y-28 bg-indigo-900 animation-pulse7s mix-blend-multiply opacity-50
                  md:translate-x-[58vw] md:w-64"></div>
                  
                  <div className="absolute top-10 left-52 w-40 h-[120vh] blur-3xl -rotate-45 translate-x-[60vw] 
                  -translate-y-28 bg-neutral-950 animation-pulse7s mix-blend-multiply opacity-70"></div>                       
                </div>

                <div className="relative z-10">
                  {children}  
                  <Footer />
                </div>
            </div>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}