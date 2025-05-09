"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { language } = useLanguage()

  useEffect(() => {
    async function fetchContent() {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`/api/content/about?lang=${language}`)
        if (!response.ok) {
          throw new Error(`Failed to fetch content: ${response.statusText}`)
        }
        const aboutContent = await response.json()
        setContent(aboutContent)
      } catch (err) {
        console.error("Error fetching about content:", err)
        setError("Failed to load content. Please try again later.")
        // Set fallback content
        setContent({
          hero: {
            title: "About Us",
            subtitle: "Learn about our story, our mission, and our commitment to excellence",
            image: "/images/about-us-cover.jpg",
          },
          story: {
            title: "Our Story",
            description:
              "Founded in 2005, Paradise Resort began with a simple vision: to create a sanctuary where guests could experience the perfect harmony of luxury and nature.",
            image: "/images/our-story.jpeg",
          },
          values: {
            title: "Our Values",
            subtitle: "At Paradise Resort, our values guide everything we do.",
            items: [],
          },
          mission: {
            title: "Our Mission",
            description:
              "At Panorama Resort, our mission is to provide an unparalleled hospitality experience that celebrates the natural beauty of Albania.",
          },
          team: {
            title: "Our Team",
            subtitle: "Meet the dedicated professionals behind Panorama Resort",
            members: [],
          },
          location: {
            title: "Our Location",
            subtitle: "Discover the beauty of Elbasan",
          },
        })
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [language])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-[#E91E63] text-white rounded hover:bg-[#C2185B]"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (!content) {
    return <div className="min-h-screen flex items-center justify-center">No content available</div>
  }

  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-gray-900">
        <Image
          src={content.hero?.image || "/placeholder.svg"}
          alt="About Paradise Resort"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.hero?.title || "About Us"}</h1>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{content.story?.title || "Our Story"}</h2>
            <div className="w-20 h-1 bg-[#E91E63] mb-6"></div>
            {content.story?.description?.split("\n\n").map((paragraph: string, index: number) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={content.story?.image || "/images/our-story.jpeg"}
              alt="Our resort story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-[#FFF9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{content.values?.title || "Our Values"}</h2>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">{content.values?.subtitle || ""}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.values?.items?.map((value: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      {content.mission && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{content.mission.title}</h2>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-gray-600">{content.mission.description}</p>
          </div>
        </section>
      )}

      {/* Team Section */}
      {content.team && content.team.members && content.team.members.length > 0 && (
        <section className="py-16 px-4 bg-[#FFF9FB]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{content.team.title}</h2>
              <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">{content.team.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.team.members.map((member: any, index: number) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location Section */}
      {content.location && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{content.location.title}</h2>
              <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">{content.location.subtitle}</p>
            </div>

            {content.location.description && (
              <div className="mb-8 max-w-3xl mx-auto">
                {content.location.description.split("\n\n").map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.6871078721774!2d20.019379915707168!3d40.92741947931095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350120c17e6bbcb%3A0x9c1aa08d42d4c3a9!2sHotel%20Panorama%20%26%20SPA!5e0!3m2!1sen!2sus!4v1620301156578!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
