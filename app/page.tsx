"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import HeroSlider from "@/components/hero-slider"
import FeaturedRooms from "@/components/featured-rooms"
import Activities from "@/components/activities"
import MenuPreview from "@/components/menu-preview"
import Testimonials from "@/components/testimonials"
import Link from "next/link"
import { loadContent } from "@/lib/content-loader"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    async function fetchContent() {
      setLoading(true)
      try {
        const homeContent = await loadContent("home", language)
        setContent(homeContent)
      } catch (error) {
        console.error("Error fetching home content:", error)
        // Set fallback content with more complete structure
        setContent({
          hero: {
            slides: [
              {
                id: 1,
                image: "/images/hero-1.jpg",
                title: "Welcome to Panorama Resort",
                subtitle: "Experience luxury and comfort in a breathtaking location",
              },
            ],
          },
          welcome: {
            title: "Welcome to Panorama Resort",
            subtitle: "Experience luxury in the mountains",
            description:
              "Nestled in a pristine location, our resort offers the perfect blend of luxury, comfort, and natural beauty.",
            image: "/tropical-resort-poolside.png",
            button: "Explore More",
          },
          features: {
            title: "Resort Features",
            subtitle: "Discover what makes our resort special",
            items: [],
          },
          roomsSection: {
            title: "Our Accommodations",
            subtitle: "Luxurious rooms and suites for a comfortable stay",
            viewAllText: "View All Rooms",
            rooms: [],
          },
          activitiesSection: {
            title: "Resort Activities",
            subtitle: "Explore the many activities available at our resort",
            viewAllText: "View All Activities",
            activities: [],
          },
          menuSection: {
            title: "Dining Experience",
            subtitle: "Savor exquisite cuisine prepared by our talented chefs",
            viewMenuText: "View Full Menu",
            categories: [],
          },
          testimonialsSection: {
            title: "Guest Testimonials",
            subtitle: "What our guests say about their experience",
            testimonials: [],
          },
          ctaSection: {
            title: "Ready for an Unforgettable Experience?",
            subtitle: "Book your stay now and discover why our guests keep coming back year after year.",
            buttonText: "Book Your Stay",
            buttonLink: "https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan",
            backgroundImage: "/tropical-resort-poolside.png",
          },
        })
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [language])

  if (loading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E91E63]"></div>
      </div>
    )
  }

  const heroSlides = content.hero?.slides || []
  const welcome = content.welcome || {}
  const features = content.features || {}
  const roomsSection = content.roomsSection || {}
  const activitiesSection = content.activitiesSection || {}
  const menuSection = content.menuSection || {}
  const testimonialsSection = content.testimonialsSection || {}
  const ctaSection = content.ctaSection || {}

  return (
    <main className="min-h-screen">
      <HeroSlider slides={heroSlides} />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">{welcome.title}</h2>
              <div className="w-20 h-1 bg-[#E91E63] mb-6"></div>
              <h3 className="text-xl text-gray-700 mb-4">{welcome.subtitle}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{welcome.description}</p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-[#E91E63] text-white rounded-lg hover:bg-[#C2185B] transition-colors"
              >
                {welcome.button} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl h-80 md:h-96">
              <img
                src={welcome.image || "/placeholder.svg"}
                alt="Resort Welcome"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#FFF9FB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">{features.title}</h2>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">{features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.items?.map((feature: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#E91E63] text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-[#880E4F]">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <FeaturedRooms
        title={roomsSection.title}
        subtitle={roomsSection.subtitle}
        rooms={roomsSection.rooms || []}
        viewAllText={roomsSection.viewAllText}
      />

      {/* Activities Section */}
      <Activities
        title={activitiesSection.title}
        subtitle={activitiesSection.subtitle}
        activities={activitiesSection.activities || []}
        viewAllText={activitiesSection.viewAllText}
      />

      {/* Menu Preview Section */}
      <MenuPreview
        title={menuSection.title}
        subtitle={menuSection.subtitle}
        categories={menuSection.categories || []}
        viewMenuText={menuSection.viewMenuText}
      />

      {/* Testimonials Section */}
      <Testimonials
        title={testimonialsSection.title}
        subtitle={testimonialsSection.subtitle}
        testimonials={testimonialsSection.testimonials || []}
      />

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${ctaSection.backgroundImage || "/tropical-resort-poolside.png"})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{ctaSection.title}</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white text-opacity-90">{ctaSection.subtitle}</p>
            <a
              href={ctaSection.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E91E63] text-white px-8 py-4 rounded-lg hover:bg-[#C2185B] transition-colors transform hover:scale-105"
            >
              {ctaSection.buttonText}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
