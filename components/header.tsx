"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()

  // Define translations
  const translations = {
    en: {
      home: "Home",
      about: "About",
      rooms: "Rooms",
      activities: "Activities",
      menu: "Menu",
      contact: "Contact",
    },
    al: {
      home: "Kryefaqja",
      about: "Rreth Nesh",
      rooms: "Dhomat",
      activities: "Aktivitetet",
      menu: "Menu",
      contact: "Kontakt",
    },
  }

  // Get translations based on current language
  const t = translations[language]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <div className="relative w-auto h-12 sm:h-16 md:h-20">
              <Image
                src="/images/panorama-logo.png"
                alt="Panorama Resort Logo - Luxury mountain retreat in Elbasan, Albania"
                width={220}
                height={100}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="font-medium transition-colors text-gray-600 hover:text-[#880E4F] border-b-2 border-transparent hover:border-[#F8BBD0]"
          >
            {t.home}
          </Link>
          <Link
            href="/about"
            className="font-medium transition-colors text-gray-600 hover:text-[#880E4F] border-b-2 border-transparent hover:border-[#F8BBD0]"
          >
            {t.about}
          </Link>
          <Link
            href="/rooms"
            className="font-medium transition-colors text-gray-600 hover:text-[#880E4F] border-b-2 border-transparent hover:border-[#F8BBD0]"
          >
            {t.rooms}
          </Link>
          <Link
            href="/activities"
            className="font-medium transition-colors text-gray-600 hover:text-[#880E4F] border-b-2 border-transparent hover:border-[#F8BBD0]"
          >
            {t.activities}
          </Link>
          <Link
            href="/menu"
            className="font-medium transition-colors text-gray-600 hover:text-[#880E4F] border-b-2 border-transparent hover:border-[#F8BBD0]"
          >
            {t.menu}
          </Link>
          <Link
            href="/contact"
            className="font-medium transition-colors text-gray-600 hover:text-[#880E4F] border-b-2 border-transparent hover:border-[#F8BBD0]"
          >
            {t.contact}
          </Link>
          {/* Language Switcher */}
          <LanguageSwitcher />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <button
            onClick={toggleMenu}
            className="ml-4 focus:outline-none text-[#E91E63]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <nav className="flex flex-col px-4 py-3">
            <Link
              href="/"
              className="py-2 text-gray-600 font-medium hover:text-[#880E4F] border-l-2 border-transparent hover:border-[#F8BBD0] pl-2"
              onClick={toggleMenu}
            >
              {t.home}
            </Link>
            <Link
              href="/about"
              className="py-2 text-gray-600 font-medium hover:text-[#880E4F] border-l-2 border-transparent hover:border-[#F8BBD0] pl-2"
              onClick={toggleMenu}
            >
              {t.about}
            </Link>
            <Link
              href="/rooms"
              className="py-2 text-gray-600 font-medium hover:text-[#880E4F] border-l-2 border-transparent hover:border-[#F8BBD0] pl-2"
              onClick={toggleMenu}
            >
              {t.rooms}
            </Link>
            <Link
              href="/activities"
              className="py-2 text-gray-600 font-medium hover:text-[#880E4F] border-l-2 border-transparent hover:border-[#F8BBD0] pl-2"
              onClick={toggleMenu}
            >
              {t.activities}
            </Link>
            <Link
              href="/menu"
              className="py-2 text-gray-600 font-medium hover:text-[#880E4F] border-l-2 border-transparent hover:border-[#F8BBD0] pl-2"
              onClick={toggleMenu}
            >
              {t.menu}
            </Link>
            <Link
              href="/contact"
              className="py-2 text-gray-600 font-medium hover:text-[#880E4F] border-l-2 border-transparent hover:border-[#F8BBD0] pl-2"
              onClick={toggleMenu}
            >
              {t.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
