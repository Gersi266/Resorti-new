"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import GoogleMap from "@/components/google-map"
import { loadContent } from "@/lib/content-loader"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    async function fetchContent() {
      setLoading(true)
      try {
        const contactContent = await loadContent("contact", language)
        setContent(contactContent)
      } catch (error) {
        console.error("Error fetching contact content:", error)
        // Set fallback content
        setContent({
          title: "Contact Us",
          description: "We'd love to hear from you. Reach out to us with any questions or to make a reservation.",
          form: {
            title: "Send Us a Message",
            firstNameLabel: "First Name",
            lastNameLabel: "Last Name",
            emailLabel: "Email Address",
            subjectLabel: "Subject",
            messageLabel: "Your Message",
            submitButton: "Send Message",
          },
          contactInfo: {
            title: "Contact Information",
            addressTitle: "Address",
            address: "Rruga Elbasan-Cerrik, Elbasan, Albania",
            phoneTitle: "Phone",
            phone: "+355 69 123 4567",
            emailTitle: "Email",
            email: "info@panoramaresort.com",
            hoursTitle: "Opening Hours",
            hours: "Monday - Sunday: 24 hours (Reception)",
          },
        })
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [language])

  if (loading || !content) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-gray-900">
        <Image src="/images/hero-1.jpg" alt="Contact Us" fill className="object-cover opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We're here to help make your stay perfect. Contact us with any questions or to book your reservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-[#E91E63]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{content.contactInfo.phoneTitle}</h3>
            <p className="text-gray-600">{content.contactInfo.phone}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-[#E91E63]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{content.contactInfo.emailTitle}</h3>
            <p className="text-gray-600">{content.contactInfo.email}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-[#E91E63]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{content.contactInfo.addressTitle}</h3>
            <p className="text-gray-600">{content.contactInfo.address}</p>
          </div>
        </div>
      </section>

      {/* Find Us Section - Simplified */}
      <section className="py-16 px-4 bg-[#FFF9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-600 mb-8">
              Located in the beautiful city of Elbasan, Panorama Resort offers easy access to local attractions. Our
              resort is nestled in a serene environment that provides the perfect balance of relaxation and adventure.
            </p>

            {/* Full-width map */}
            <div className="h-[500px] w-full rounded-lg overflow-hidden">
              <GoogleMap location={content.mapLocation} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
