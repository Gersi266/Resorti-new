"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Testimonials({ title, subtitle, testimonials }) {
  const { language } = useLanguage()

  // Translations for the component
  const translations = {
    en: {
      defaultTitle: "What Our Guests Say",
      defaultSubtitle: "Read verified reviews from guests who have experienced the Panorama Resort difference.",
      helpful: "Helpful",
      notHelpful: "Not helpful",
      defaultTestimonials: [
        {
          id: 1,
          name: "Sarah Johnson",
          location: "New York, USA",
          quote:
            "Our stay at Panorama Resort exceeded all expectations. The staff was incredibly attentive, the accommodations were luxurious, and the views were breathtaking. We can't wait to return!",
          rating: 5,
          date: "2 weeks ago",
          image: "/diverse-group.png",
        },
        {
          id: 2,
          name: "Michael Chen",
          location: "Toronto, Canada",
          quote:
            "From the moment we arrived, we felt like royalty. The resort's attention to detail is impeccable, and the activities were perfect for our family. It truly was a panoramic experience.",
          rating: 4.5,
          date: "1 month ago",
          image: "/thoughtful-asian-man.png",
        },
        {
          id: 3,
          name: "Emma Rodriguez",
          location: "London, UK",
          quote:
            "Panorama Resort is aptly named. The serene environment, combined with world-class service and amenities, made for an unforgettable vacation. The spa treatments were particularly amazing!",
          rating: 5,
          date: "3 months ago",
          image: "/woman-brown-hair.png",
        },
      ],
    },
    al: {
      defaultTitle: "Çfarë Thonë Mysafirët Tanë",
      defaultSubtitle: "Lexoni vlerësime të verifikuara nga mysafirët që kanë përjetuar diferencën e Panorama Resort.",
      helpful: "E dobishme",
      notHelpful: "Jo e dobishme",
      defaultTestimonials: [
        {
          id: 1,
          name: "Sara Xhonson",
          location: "Nju Jork, SHBA",
          quote:
            "Qëndrimi ynë në Panorama Resort tejkaloi të gjitha pritshmëritë. Stafi ishte jashtëzakonisht i vëmendshëm, akomodimet ishin luksoze dhe pamjet ishin mahnitëse. Nuk mund të presim të kthehemi!",
          rating: 5,
          date: "2 javë më parë",
          image: "/diverse-group.png",
        },
        {
          id: 2,
          name: "Majkëll Çen",
          location: "Toronto, Kanada",
          quote:
            "Nga momenti që mbërritëm, u ndjemë si mbretër. Vëmendja e resortit ndaj detajeve është e përsosur dhe aktivitetet ishin perfekte për familjen tonë. Vërtet ishte një përvojë panoramike.",
          rating: 4.5,
          date: "1 muaj më parë",
          image: "/thoughtful-asian-man.png",
        },
        {
          id: 3,
          name: "Ema Rodriguez",
          location: "Londër, MB",
          quote:
            "Panorama Resort është emëruar me vend. Mjedisi i qetë, i kombinuar me shërbim dhe komoditete të klasit botëror, krijoi një pushim të paharrueshëm. Trajtimet spa ishin veçanërisht të mrekullueshme!",
          rating: 5,
          date: "3 muaj më parë",
          image: "/woman-brown-hair.png",
        },
      ],
    },
  }

  // Use provided content or fallback to default translations
  const currentTranslation = translations[language] || translations.en
  const displayTitle = title || currentTranslation.defaultTitle
  const displaySubtitle = subtitle || currentTranslation.defaultSubtitle
  const displayTestimonials = testimonials?.length > 0 ? testimonials : currentTranslation.defaultTestimonials

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? displayTestimonials.length - 1 : prev - 1))
  }

  // Navigate to next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === displayTestimonials.length - 1 ? 0 : prev + 1))
  }

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400" size={18} aria-hidden="true" />)
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400" size={18} aria-hidden="true" />)
    }

    // Add empty stars to make 5 total
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="text-gray-300" size={18} aria-hidden="true" />)
    }

    return stars
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{displayTitle}</h2>
          <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">{displaySubtitle}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Google Review Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 overflow-hidden border border-gray-100">
            {/* Google Review Header */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" width="18" height="18" className="mr-2" aria-hidden="true">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="#4285F4"
                  />
                </svg>
                <span className="text-sm text-gray-500">Google Review</span>
              </div>
              <div className="ml-auto flex items-center">
                <span className="text-sm font-medium text-gray-700 mr-1">
                  {displayTestimonials[currentTestimonial].rating.toFixed(1)}
                </span>
                <div
                  className="flex"
                  aria-label={`Rating: ${displayTestimonials[currentTestimonial].rating} out of 5 stars`}
                >
                  {renderStars(displayTestimonials[currentTestimonial].rating)}
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="mb-6">
              <p className="text-gray-700 mb-4 leading-relaxed">"{displayTestimonials[currentTestimonial].quote}"</p>
            </div>

            {/* Reviewer Info */}
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-200">
                <Image
                  src={displayTestimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={`${displayTestimonials[currentTestimonial].name} - Guest from ${displayTestimonials[currentTestimonial].location}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{displayTestimonials[currentTestimonial].name}</h4>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{displayTestimonials[currentTestimonial].location}</span>
                  <span className="mx-2">•</span>
                  <span>{displayTestimonials[currentTestimonial].date}</span>
                </div>
              </div>
            </div>

            {/* Helpful Buttons - Google Review Style */}
            <div className="mt-6 flex items-center">
              <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 mr-4 border border-gray-200 rounded-full px-3 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                  aria-hidden="true"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                {currentTranslation.helpful}
              </button>
              <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 border border-gray-200 rounded-full px-3 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                  aria-hidden="true"
                >
                  <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                </svg>
                {currentTranslation.notHelpful}
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md -ml-5 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md -mr-5 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {displayTestimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-[#E91E63] w-6" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
