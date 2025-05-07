"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import SafeImage from "./safe-image"
import { loadContent } from "@/lib/content-loader"
import { useLanguage } from "@/contexts/language-context"

export default function FeaturedRooms() {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    async function fetchContent() {
      setLoading(true)
      try {
        const roomsContent = await loadContent("rooms", language)
        setContent(roomsContent)
      } catch (error) {
        console.error("Error fetching rooms content:", error)
        // Set fallback content if there's an error
        setContent({
          rooms: [
            {
              id: 1,
              name: "Single Room",
              description: "Perfect for solo travelers",
              price: 60,
              mainImage: "/images/room-1.png",
            },
            {
              id: 2,
              name: "Double Room",
              description: "Ideal for couples",
              price: 67,
              mainImage: "/images/room-2.png",
            },
            {
              id: 3,
              name: "Family Room",
              description: "Spacious room for families",
              price: 80,
              mainImage: "/images/room-3.png",
            },
          ],
        })
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [language])

  if (loading || !content || !content.rooms || content.rooms.length === 0) {
    return null
  }

  // Only show the first 3 rooms
  const featuredRooms = content.rooms.slice(0, 3)

  return (
    <section className="py-16 px-4 bg-[#FFF9FB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "al" ? "Akomodimet Tona" : "Our Accommodations"}
          </h2>
          <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            {language === "al"
              ? "Përjetoni komoditet dhe luks në dhomat tona të dizajnuara me kujdes me pajisje premium"
              : "Experience comfort and luxury in our carefully designed rooms with premium amenities"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Description Box - Top Left */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#F8BBD0] p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-[#880E4F]">
              {language === "al" ? "Përjetoni Luksin" : "Experience Luxury"}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === "al"
                ? "Dhomat tona ofrojnë një kombinim perfekt të komoditetit, stilit dhe funksionalitetit. Secila dhomë është e pajisur me pajisje moderne dhe është e dizajnuar për të siguruar një qëndrim të paharrueshëm."
                : "Our rooms offer the perfect combination of comfort, style, and functionality. Each room is equipped with modern amenities and is designed to ensure an unforgettable stay."}
            </p>
            <Link
              href="/rooms"
              className="inline-block bg-[#E91E63] text-white px-4 py-2 rounded-md hover:bg-[#C2185B] transition-colors mt-auto"
            >
              {language === "al" ? "Eksploro Më Shumë" : "Explore More"}
            </Link>
          </div>

          {/* Three Rooms - Remaining Cells */}
          {featuredRooms.map((room: any) => (
            <div
              key={room.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#F8BBD0]"
            >
              <div className="relative h-64">
                <SafeImage
                  src={room.mainImage}
                  alt={room.name}
                  fill
                  className="object-cover"
                  fallbackSrc="/opulent-suite.png"
                />
                <div className="absolute top-4 right-4 bg-[#F8BBD0] text-[#880E4F] px-3 py-1 rounded-full text-sm font-medium">
                  €{room.price} / {language === "al" ? "natë" : "night"}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#880E4F]">{room.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                <Link
                  href="/rooms"
                  className="inline-block bg-[#F8BBD0] text-[#880E4F] px-4 py-2 rounded-md hover:bg-[#E91E63] hover:text-white transition-colors"
                >
                  {language === "al" ? "Shiko Detajet" : "View Details"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/rooms"
            className="inline-block bg-[#E91E63] text-white px-6 py-3 rounded-md hover:bg-[#C2185B] transition-colors"
          >
            {language === "al" ? "Shiko Të Gjitha Dhomat" : "View All Rooms"}
          </Link>
        </div>
      </div>
    </section>
  )
}
