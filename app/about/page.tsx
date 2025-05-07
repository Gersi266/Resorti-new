"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { loadContent } from "@/lib/content-loader"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    async function fetchContent() {
      setLoading(true)
      try {
        const aboutContent = await loadContent("about", language)
        setContent(aboutContent)
      } catch (error) {
        console.error("Error fetching about content:", error)
        // Set fallback content
        setContent({
          hero: {
            title: "About Us",
            subtitle: "Learn about our story, our mission, and our commitment to excellence",
            image: "/images/about-hero.jpg",
          },
          story: {
            title: "Our Story",
            content: [
              "Founded in 2005, Paradise Resort began with a simple vision: to create a sanctuary where guests could experience the perfect harmony of luxury and nature.",
              "Our founder, John Smith, discovered this pristine location during his travels and was immediately captivated by its natural beauty.",
              "Today, Paradise Resort stands as a testament to that vision, offering unparalleled service, luxurious accommodations, and unforgettable experiences to guests from around the world.",
            ],
            image: "/images/about-story.jpg",
          },
          values: {
            title: "Our Values",
            subtitle: "At Paradise Resort, our values guide everything we do.",
            items: [],
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
        <Image
          src={content.hero.image || "/placeholder.svg"}
          alt="About Paradise Resort"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.hero.title}</h1>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{content.story.title}</h2>
            <div className="w-20 h-1 bg-[#E91E63] mb-6"></div>
            {content.story.content.map((paragraph: string, index: number) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={content.story.image || "/placeholder.svg"}
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
            <h2 className="text-3xl font-bold mb-4">{content.values.title}</h2>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">{content.values.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.values.items.map((value: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#E91E63]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {value.icon === "info" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    )}
                    {value.icon === "thumbsUp" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    )}
                    {value.icon === "leaf" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65"
                      />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
