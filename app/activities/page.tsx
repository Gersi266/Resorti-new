"use client"

import { useState, useEffect } from "react"
import { Clock, MapPin, DollarSign } from "lucide-react"
import SafeImage from "@/components/safe-image"
import PreviewModal from "@/components/preview-modal"
import { loadContent } from "@/lib/content-loader"
import { useLanguage } from "@/contexts/language-context"

export default function ActivitiesPage() {
  const [selectedActivity, setSelectedActivity] = useState<any>(null)
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    async function fetchContent() {
      setLoading(true)
      try {
        const activitiesContent = await loadContent("activities", language)
        setContent(activitiesContent)
      } catch (error) {
        console.error("Error fetching activities content:", error)
        // Set fallback content
        setContent({
          hero: {
            title: "Resort Activities",
            subtitle: "Discover a world of relaxation, adventure, and entertainment at Panorama Resort",
            image: "/images/activities-hero.png",
          },
          activitiesSection: {
            title: "Explore Our Activities",
            subtitle: "From relaxation to adventure, we offer a variety of activities to make your stay memorable.",
            activities: [
              {
                id: 1,
                title: "Swimming Pool",
                description: "Enjoy our refreshing swimming pools with stunning views of the surrounding landscape.",
                longDescription:
                  "Our two swimming pools offer a perfect retreat for guests of all ages. The main pool features a spacious sundeck with comfortable loungers, while our second pool provides a more intimate setting for relaxation.",
                image: "/images/activity-1.png",
                duration: "Open 7:00 AM - 8:00 PM",
                difficulty: "All levels",
                hours: "Daily, 7:00 AM - 8:00 PM",
                location: "Main Resort Area",
                price: "Complimentary for guests",
              },
              {
                id: 2,
                title: "Spa & Wellness",
                description: "Relax and rejuvenate with our range of spa treatments and wellness activities.",
                longDescription:
                  "Our spa center offers a comprehensive range of treatments designed to relax and rejuvenate. From traditional massages to modern wellness therapies, our experienced staff will ensure you leave feeling refreshed.",
                image: "/images/activity-2.png",
                duration: "Treatments from 30-120 min",
                difficulty: "All levels",
                hours: "Daily, 9:00 AM - 7:00 PM",
                location: "Spa Wing",
                price: "Starting from €40",
              },
              {
                id: 3,
                title: "Mountain Hiking",
                description: "Explore the beautiful mountain trails with our experienced guides.",
                longDescription:
                  "Discover the natural beauty of the surrounding mountains with our guided hiking tours. Our experienced guides will lead you through scenic trails, sharing knowledge about local flora and fauna along the way.",
                image: "/images/activity-3.png",
                duration: "2-6 hours",
                difficulty: "Beginner to Advanced",
                hours: "Daily, 8:00 AM - 4:00 PM",
                location: "Mountain Trails",
                price: "€25 per person",
              },
              {
                id: 4,
                title: "Gourmet Dining",
                description:
                  "Savor exquisite cuisine prepared by our talented chefs using the freshest local ingredients.",
                longDescription:
                  "Our restaurant offers an unforgettable culinary experience featuring both international cuisine and local specialties. Our chefs use only the freshest ingredients, many sourced from local producers.",
                image: "/images/activity-4.png",
                duration: "Breakfast, Lunch & Dinner",
                difficulty: "All levels",
                hours: "Restaurant open 7:00 AM - 10:00 PM",
                location: "Main Restaurant",
                price: "À la carte pricing",
              },
              {
                id: 5,
                title: "Cultural Tours",
                description:
                  "Immerse yourself in local culture with guided tours to nearby historical sites and villages.",
                longDescription:
                  "Explore the rich cultural heritage of the region with our guided tours to historical sites, traditional villages, and local attractions. Learn about the fascinating history and traditions of Albania.",
                image: "/images/activity-5.png",
                duration: "Half-day and full-day tours",
                difficulty: "All levels",
                hours: "Tours depart at 9:00 AM",
                location: "Reception for departure",
                price: "From €35 per person",
              },
            ],
          },
          customActivities: {
            title: "Custom Experiences",
            description:
              "Looking for something special? We can create custom experiences tailored to your preferences.",
            features: [
              "Private dining experiences",
              "Custom adventure tours",
              "Special celebration arrangements",
              "Family-friendly activities",
              "Corporate team building",
            ],
            image: "/images/custom-activity.png",
            buttonText: "Contact Us",
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

  // Booking link
  const bookingLink = "https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan"

  // Function to open activity modal
  const openActivityModal = (activity: any) => {
    setSelectedActivity(activity)
  }

  // Function to close activity modal
  const closeActivityModal = () => {
    setSelectedActivity(null)
  }

  // Activity details component for the modal
  const ActivityDetails = ({ activity }: { activity: any }) => (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#880E4F] mb-3 pb-2 border-b border-[#F8BBD0] flex items-center">
          <span className="bg-[#F8BBD0] w-1 h-6 rounded mr-2"></span>
          Details
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{activity.longDescription}</p>

        <div className="bg-gradient-to-r from-[#FFF9FB] to-[#F8BBD0] p-5 rounded-lg mb-4 space-y-4 shadow-sm">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" />
            <div>
              <span className="font-medium text-[#880E4F]">Hours:</span>
              <span className="ml-2 text-gray-600">{activity.hours}</span>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" />
            <div>
              <span className="font-medium text-[#880E4F]">Location:</span>
              <span className="ml-2 text-gray-600">{activity.location}</span>
            </div>
          </div>

          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" />
            <div>
              <span className="font-medium text-[#880E4F]">Price:</span>
              <span className="ml-2 text-gray-600">{activity.price}</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href={bookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-[#E91E63] to-[#E91E63] hover:from-[#E91E63] hover:to-[#E91E63] text-white text-center font-semibold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
      >
        Book Now
      </a>
    </div>
  )

  const activities = content.activitiesSection?.activities || []

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <SafeImage
          src={content.hero.image || "/images/activities-hero.png"}
          alt="Resort Activities"
          fill
          className="object-cover"
          fallbackSrc="/tropical-infinity-pool.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{content.hero.title}</h1>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto">{content.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFF9FB] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">
              {content.activitiesSection?.title || "Explore Our Activities"}
            </h2>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {content.activitiesSection?.subtitle ||
                "From relaxation to adventure, we offer a variety of activities to make your stay memorable."}
            </p>
          </div>

          {/* First row - 3 activities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {activities.slice(0, 3).map((activity: any) => (
              <div
                key={activity.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border border-[#F8BBD0]"
                onClick={() => openActivityModal(activity)}
                style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <SafeImage
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    fallbackSrc={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(activity.title)}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#880E4F] group-hover:text-[#880E4F] transition-colors duration-300 mb-4">
                    {activity.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">{activity.description}</p>

                  <div className="bg-[#FFF9FB] p-4 rounded-lg mb-6 space-y-2.5 text-sm border border-[#F8BBD0]">
                    <div className="flex items-center text-[#880E4F]">
                      <Clock className="h-4 w-4 mr-2.5 text-[#E91E63] flex-shrink-0" />
                      <span className="truncate">{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-[#880E4F]">
                      <MapPin className="h-4 w-4 mr-2.5 text-[#E91E63] flex-shrink-0" />
                      <span className="truncate">{activity.difficulty}</span>
                    </div>
                  </div>

                  <button className="inline-block bg-[#F8BBD0] text-[#880E4F] font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform group-hover:scale-[1.02] shadow-md w-full text-center hover:bg-[#E91E63] hover:text-white">
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {activities.slice(3, 5).map((activity: any) => (
              <div
                key={activity.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border border-[#F8BBD0]"
                onClick={() => openActivityModal(activity)}
                style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <SafeImage
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    fallbackSrc={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(activity.title)}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#880E4F] group-hover:text-[#880E4F] transition-colors duration-300 mb-4">
                    {activity.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">{activity.description}</p>

                  <div className="bg-[#FFF9FB] p-4 rounded-lg mb-6 space-y-2.5 text-sm border border-[#F8BBD0]">
                    <div className="flex items-center text-[#880E4F]">
                      <Clock className="h-4 w-4 mr-2.5 text-[#E91E63] flex-shrink-0" />
                      <span className="truncate">{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-[#880E4F]">
                      <MapPin className="h-4 w-4 mr-2.5 text-[#E91E63] flex-shrink-0" />
                      <span className="truncate">{activity.difficulty}</span>
                    </div>
                  </div>

                  <button className="inline-block bg-[#F8BBD0] text-[#880E4F] font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform group-hover:scale-[1.02] shadow-md w-full text-center hover:bg-[#E91E63] hover:text-white">
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Activities Section */}
      {content.customActivities && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-[#FFF9FB] to-[#F8BBD0]/30 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 md:p-14 flex items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-[#880E4F] mb-6">{content.customActivities.title}</h2>
                    <p className="text-gray-700 mb-8">{content.customActivities.description}</p>
                    <ul className="space-y-3 mb-8">
                      {content.customActivities.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-[#F8BBD0] flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 text-[#E91E63]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#E91E63] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#C2185B] transition-colors shadow-md"
                    >
                      {content.customActivities.buttonText}
                    </a>
                  </div>
                </div>
                <div className="relative h-80 md:h-auto">
                  <SafeImage
                    src={content.customActivities.image}
                    alt="Custom Activities"
                    fill
                    className="object-cover"
                    fallbackSrc="/images/custom-activity.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Activity Preview Modal */}
      {selectedActivity && (
        <PreviewModal
          isOpen={!!selectedActivity}
          onClose={closeActivityModal}
          title={selectedActivity.title}
          description={selectedActivity.description}
          images={[selectedActivity.image]}
          fallbackImage={`/placeholder.svg?height=600&width=800&query=${encodeURIComponent(selectedActivity.title)}`}
          details={<ActivityDetails activity={selectedActivity} />}
        />
      )}
    </main>
  )
}
