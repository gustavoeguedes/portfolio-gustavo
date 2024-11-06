import type { Metadata } from "next";
import "./globals.css";
import {JetBrains_Mono} from "next/font/google"

const mainFontFamily = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Gustavo | Desenvolvedor full-stack",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}
