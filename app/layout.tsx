import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Playfair_Display, Cormorant, Montserrat } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
})

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-serif",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Luxury Villa | Migaa Golf Estate</title>
        <meta name="description" content="Exclusive luxury villa in Migaa Golf Estate, Kiambu County, Kenya" />
      </head>
      <body className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
