import type { Metadata } from "next";
import "./globals.css";
import {JetBrains_Mono} from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google";


const mainFontFamily = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Gustavo | Desenvolvedor full-stack",
  description: "Porfolio do desenvolvedor full-stack Gustavo Esteves Guedes",
  keywords: "full-stack, desenvolvedor, front-end, back-end, desenvolvedor web, HTML, CSS, JavaScript, TypeScript, React, NextJS, NodeJS, MongoDB, MySQL, Git, GitHub, portfolio",
  authors: [{name: "Gustavo Esteves Guedes", url: "gustavoeguedes@gmail.com"}],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      
      <body
        className={`bg-slate-950 text-slate-50 ${mainFontFamily.className}`}
      >
        {children}
        <GoogleTagManager gtmId="G-Z358PB3NZT"/>
      </body>
    </html>
  );
}
