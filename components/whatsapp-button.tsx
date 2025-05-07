"use client"

import { Phone } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/355692070062"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#F8BBD0] text-[#E91E63] p-4 rounded-full shadow-lg hover:bg-[#880E4F] hover:text-white transition-colors z-50 transform hover:scale-110 duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <Phone size={24} />
    </a>
  )
}
