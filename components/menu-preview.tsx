"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
}

export default function MenuPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const { language } = useLanguage()

  // Translations
  const translations = {
    en: {
      title: "A Taste of Our Menu",
      subtitle: "Explore a selection of our finest dishes, crafted with fresh ingredients and culinary expertise.",
      viewFullMenu: "View Full Menu",
      menuItems: [
        {
          id: 1,
          name: "Village Salad",
          description: "Fresh tomatoes, cucumbers, peppers, olives, and feta cheese with olive oil",
          price: "€8",
          image: "/images/menu/village-salad.png",
          category: "Salads",
        },
        {
          id: 2,
          name: "Seafood Risotto",
          description: "Creamy risotto with fresh seafood and herbs",
          price: "€16",
          image: "/images/menu/seafood-risotto.png",
          category: "Pasta & Risotto",
        },
        {
          id: 3,
          name: "Grilled Sea Bass",
          description: "Fresh sea bass grilled to perfection with lemon and herbs",
          price: "€22",
          image: "/images/menu/sea-bass.png",
          category: "Fish",
        },
        {
          id: 4,
          name: "Beef Steak",
          description: "Premium cut beef steak cooked to your preference",
          price: "€25",
          image: "/images/menu/tomahawk-steak.png",
          category: "Meat",
        },
        {
          id: 5,
          name: "Tiramisu",
          description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
          price: "€7",
          image: "/images/menu/tiramisu.png",
          category: "Desserts",
        },
        {
          id: 6,
          name: "Margherita Pizza",
          description: "Traditional pizza with tomato sauce, mozzarella, and fresh basil",
          price: "€12",
          image: "/images/menu/margherita.png",
          category: "Pizza",
        },
      ],
    },
    al: {
      title: "Një Shije e Menusë Sonë",
      subtitle:
        "Eksploroni një përzgjedhje të pjatave tona më të mira, të përgatitura me përbërës të freskët dhe ekspertizë kulinare.",
      viewFullMenu: "Shiko Menunë e Plotë",
      menuItems: [
        {
          id: 1,
          name: "Sallatë Fshati",
          description: "Domate të freskëta, kastravecë, speca, ullinj dhe djathë feta me vaj ulliri",
          price: "€8",
          image: "/images/menu/village-salad.png",
          category: "Sallata",
        },
        {
          id: 2,
          name: "Rizoto me Fruta Deti",
          description: "Rizoto kremëz me fruta deti të freskëta dhe erëza",
          price: "€16",
          image: "/images/menu/seafood-risotto.png",
          category: "Pasta & Rizoto",
        },
        {
          id: 3,
          name: "Levrek i Pjekur",
          description: "Levrek i freskët i pjekur në perfeksion me limon dhe erëza",
          price: "€22",
          image: "/images/menu/sea-bass.png",
          category: "Peshk",
        },
        {
          id: 4,
          name: "Biftek Viçi",
          description: "Biftek viçi premium i gatuar sipas preferencës suaj",
          price: "€25",
          image: "/images/menu/tomahawk-steak.png",
          category: "Mish",
        },
        {
          id: 5,
          name: "Tiramisu",
          description: "Ëmbëlsirë klasike italiane me biskota të njoma në kafe dhe krem maskarponë",
          price: "€7",
          image: "/images/menu/tiramisu.png",
          category: "Ëmbëlsira",
        },
        {
          id: 6,
          name: "Pica Margarita",
          description: "Picë tradicionale me salcë domatesh, mocarela dhe borzilok të freskët",
          price: "€12",
          image: "/images/menu/margherita.png",
          category: "Pica",
        },
      ],
    },
  }

  const currentTranslation = translations[language] || translations.en
  const menuItems = currentTranslation.menuItems

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleItems >= menuItems.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, menuItems.length - visibleItems) : prevIndex - 1))
  }

  // Get currently visible items
  const currentItems = menuItems.slice(currentIndex, currentIndex + visibleItems)

  // If we don't have enough items from the current index, wrap around to the beginning
  if (currentItems.length < visibleItems) {
    currentItems.push(...menuItems.slice(0, visibleItems - currentItems.length))
  }

  return (
    <section className="py-16 px-4 bg-[#FFF9FB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentTranslation.title}</h2>
          <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">{currentTranslation.subtitle}</p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md text-[#E91E63] hover:text-[#D81B60] transition-colors -ml-4 md:ml-0"
            aria-label="Previous menu items"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md text-[#E91E63] hover:text-[#D81B60] transition-colors -mr-4 md:mr-0"
            aria-label="Next menu items"
          >
            <ChevronRight size={24} />
          </button>

          {/* Menu Items Carousel */}
          <div className="overflow-hidden px-6">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                      aria-label={item.name}
                    ></div>
                    <div className="absolute top-0 right-0 bg-[#E91E63] text-white px-3 py-1 rounded-bl-lg font-medium">
                      {item.price}
                    </div>
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white px-3 py-1 rounded-tr-lg text-sm font-medium">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-block bg-[#F8BBD0] text-[#880E4F] px-8 py-3 rounded-lg font-semibold hover:bg-[#E91E63] hover:text-white transition-colors mt-8"
          >
            {currentTranslation.viewFullMenu}
          </Link>
        </div>
      </div>
    </section>
  )
}
