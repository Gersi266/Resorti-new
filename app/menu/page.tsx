"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePageContent } from "@/hooks/use-page-content"
import { useLanguage } from "@/contexts/language-context"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { language } = useLanguage()
  const { content, loading, error, refetch } = usePageContent("menu")

  // Fallback content in case of errors
  const fallbackContent = {
    hero: {
      title: "Our Menu",
      image: "/images/menu-generic.png",
    },
    disclaimer: {
      title: "Please Note:",
      text: "The photos are illustrative. We do not accept off-menu orders. Please let us know if you have any food allergies!",
    },
    overview: {
      title: "Culinary Excellence",
      description: "At Paradise Resort, we pride ourselves on offering exceptional dining experiences.",
    },
    dining: {
      options: [],
    },
    categoryNav: {
      title: "Menu Categories",
      allText: "All",
    },
    categories: [],
    privateDining: {
      title: "Private Dining Experience",
      description: "For special occasions, we offer exclusive private dining experiences.",
      buttonText: "Inquire Now",
      image: "/images/menu-generic.png",
    },
  }

  // Use fallback content if there's an error or no content
  const displayContent = content || fallbackContent

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E91E63]"></div>
      </div>
    )
  }

  // Menu categories and items with fallback
  const menuCategories = displayContent.categories || []

  return (
    <main className="min-h-screen py-16">
      {/* Error notification if there was an error */}
      {error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50 shadow-md">
          <div className="flex items-center">
            <div className="py-1">
              <p className="font-bold">Error loading menu</p>
              <p className="text-sm">{error}</p>
            </div>
            <div className="ml-4">
              <button
                onClick={refetch}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-gray-900">
        <Image
          src={displayContent.hero?.image || "/images/menu-generic.png"}
          alt="Panorama Resort dining experience - Exquisite cuisine and culinary delights"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{displayContent.hero?.title || "Dining Experience"}</h1>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-[#FFF9FB] py-4 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white p-4 rounded-lg shadow-md border border-[#F8BBD0]">
            <p className="text-[#880E4F] font-medium">
              <span className="font-bold">{displayContent.disclaimer?.title || "Please Note:"}</span>{" "}
              {displayContent.disclaimer?.text ||
                "The photos are illustrative. We do not accept off-menu orders. Please let us know if you have any food allergies!"}
            </p>
          </div>
        </div>
      </section>

      {/* Dining Overview Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{displayContent.overview?.title || "Culinary Excellence"}</h2>
          <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            {displayContent.overview?.description ||
              "At Paradise Resort, we pride ourselves on offering exceptional dining experiences. Our talented chefs use only the freshest local ingredients to create memorable culinary delights that will satisfy even the most discerning palates."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(displayContent.dining?.options || []).map((option: any, index: number) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[#E91E63]" aria-hidden="true">
                  {option.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Categories Quick Navigation */}
      {menuCategories.length > 0 && (
        <section className="py-8 px-4 bg-[#FFF9FB]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">{displayContent.categoryNav?.title || "Menu Categories"}</h2>
              <div className="w-16 h-1 bg-[#E91E63] mx-auto mt-2"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full shadow-sm transition duration-300 ${
                  selectedCategory === "all"
                    ? "bg-[#E91E63] text-white"
                    : "bg-white text-[#880E4F] border border-[#F8BBD0] hover:bg-[#F8BBD0]"
                }`}
                aria-pressed={selectedCategory === "all"}
              >
                {displayContent.categoryNav?.allText || "All"}
              </button>
              {menuCategories.map((category: any) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full shadow-sm transition duration-300 ${
                    selectedCategory === category.id
                      ? "bg-[#E91E63] text-white"
                      : "bg-white text-[#880E4F] border border-[#F8BBD0] hover:bg-[#F8BBD0]"
                  }`}
                  aria-pressed={selectedCategory === category.id}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Menu Sections */}
      {menuCategories.length > 0 ? (
        menuCategories.map(
          (category: any) =>
            (selectedCategory === "all" || selectedCategory === category.id) && (
              <section key={category.id} id={category.id} className="py-8 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-2">
                  <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                  <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-2"></div>
                  <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-4">{category.description}</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#F8BBD0]">
                  <div className="relative h-64">
                    <Image
                      src={category.image || `/images/menu-${category.id}.png`}
                      alt={`${category.name} - Menu category featuring ${category.description || "delicious dishes"}`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to a generic image if specific one doesn't exist
                        e.currentTarget.src = "/images/menu-generic.png"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold">{category.name}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-8">
                      {(category.items || []).map((item: any, index: number) => (
                        <div
                          key={index}
                          className="border-b border-[#F8BBD0] pb-8 last:border-0 last:pb-0 hover:bg-[#FFF9FB] transition-colors p-4 rounded-lg -mx-4 group"
                        >
                          <div className="flex flex-col md:flex-row gap-4">
                            {/* Circular image for menu item */}
                            <div className="flex-shrink-0">
                              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#F8BBD0] shadow-md group-hover:border-[#E91E63] transition-colors">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={`${item.name} - ${category.name} dish`}
                                  width={96}
                                  height={96}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  onError={(e) => {
                                    // Fallback to a placeholder if image doesn't exist
                                    e.currentTarget.src = `/placeholder.svg?height=96&width=96&query=${encodeURIComponent(`${category.name} ${item.name} food dish`)}`
                                  }}
                                />
                              </div>
                            </div>

                            {/* Menu item details */}
                            <div className="flex-grow">
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#880E4F] transition-colors">
                                  {item.name}
                                </h3>
                                <div className="px-4 py-1 bg-[#F8BBD0] text-[#880E4F] font-bold rounded-full inline-block self-start sm:self-auto group-hover:bg-[#E91E63] group-hover:text-white transition-colors">
                                  {typeof item.price === "number" ? `${item.price} ALL` : item.price}
                                </div>
                              </div>
                              <p className="text-gray-600 mb-2 group-hover:text-gray-700 transition-colors">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ),
        )
      ) : (
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Menu Coming Soon</h2>
            <p className="text-gray-600">
              We're currently updating our menu. Please check back later for our delicious offerings.
            </p>
          </div>
        </section>
      )}

      {/* Private Dining Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-[#F8BBD0]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={displayContent.privateDining?.image || "/images/menu-generic.png"}
                alt="Private dining experience at Panorama Resort - Exclusive culinary events"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {displayContent.privateDining?.title || "Private Dining Experience"}
                </h2>
                <p className="text-gray-600 mb-6">
                  {displayContent.privateDining?.description ||
                    "For special occasions, we offer exclusive private dining experiences. From romantic dinners on the beach to family celebrations in our private dining room, our team will create a memorable culinary journey tailored to your preferences."}
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#F8BBD0] text-[#880E4F] font-semibold px-8 py-3 rounded-lg hover:bg-[#E91E63] hover:text-white transition duration-300 transform hover:scale-105 shadow-md"
                >
                  {displayContent.privateDining?.buttonText || "Inquire Now"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
