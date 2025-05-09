import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import { ContentProvider } from "@/contexts/content-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

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
        <LanguageProvider>
          <ContentProvider>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
            {process.env.NODE_ENV === "development" && <div id="dev-tools-container"></div>}
          </ContentProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
