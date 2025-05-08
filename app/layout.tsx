import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import { ContentProvider } from "@/contexts/content-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { DevTools } from "@/components/dev-tools"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Panorama Resort",
  description: "Experience luxury and comfort in our scenic mountain retreat",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContentProvider>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
            <DevTools />
          </LanguageProvider>
        </ContentProvider>
      </body>
    </html>
  )
}
