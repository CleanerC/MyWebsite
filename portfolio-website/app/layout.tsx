import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";
import ThemeSwitch from "@/components/ThemeSwitch";

export const metadata = {
  title: "David's Portfolio",
  description: 'Personal portfolio website built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeSwitch />
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}