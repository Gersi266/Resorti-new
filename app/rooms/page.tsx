"use client"

import { useState, useEffect } from "react"
import { Check, Clock } from "lucide-react"
import SafeImage from "@/components/safe-image"
import PreviewModal from "@/components/preview-modal"
import { loadContent } from "@/lib/content-loader"
import { useLanguage } from "@/contexts/language-context"

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [content, setContent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { language } = useLanguage()

  // Fetch content on component mount
  useEffect(() => {
    async function fetchContent() {
      setIsLoading(true)
      try {
        const roomsContent = await loadContent("rooms", language)
        setContent(roomsContent)
      } catch (error) {
        console.error("Error loading room content:", error)
        // Set fallback content
        setContent({
          title: "Our Rooms & Suites",
          rooms: [],
          amenities: {
            title: "Room Amenities",
            items: [],
          },
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchContent()
  }, [language])

  // If content is loading, show a simple loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E91E63]"></div>
      </div>
    )
  }

  // Booking link
  const bookingLink = "https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan"

  // Function to open room modal
  const openRoomModal = (room: any) => {
    setSelectedRoom(room)
  }

  // Function to close room modal
  const closeRoomModal = () => {
    setSelectedRoom(null)
  }

  // Room details component for the modal
  const RoomDetails = ({ room }: { room: any }) => (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div className="text-2xl font-bold text-[#E91E63] flex items-baseline">
          {room.price} <span className="text-sm font-normal text-gray-500 ml-1">/ night</span>
        </div>
        <div className="bg-gradient-to-r from-[#FFF9FB] to-[#F8BBD0] px-4 py-3 rounded-lg shadow-sm">
          <div className="flex items-center text-sm text-[#880E4F]">
            <Clock className="h-4 w-4 mr-2 text-[#E91E63]" />
            <span>Check-in: 12:00</span>
          </div>
          <div className="flex items-center text-sm text-[#880E4F] mt-1.5">
            <Clock className="h-4 w-4 mr-2 text-[#E91E63]" />
            <span>Check-out: 11:00</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#880E4F] mb-3 pb-2 border-b border-[#F8BBD0] flex items-center">
          <span className="bg-[#F8BBD0] w-1 h-6 rounded mr-2"></span>
          Room Details
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#880E4F] mb-3 pb-2 border-b border-[#F8BBD0] flex items-center">
          <span className="bg-[#F8BBD0] w-1 h-6 rounded mr-2"></span>
          Room Features
        </h3>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
          {room.features.map((feature: string, index: number) => (
            <li key={index} className="text-gray-600 flex items-center">
              <div className="h-5 w-5 rounded-full bg-[#F8BBD0] flex items-center justify-center mr-2 flex-shrink-0">
                <Check className="h-3.5 w-3.5 text-[#D81B60]" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={bookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-[#E91E63] to-[#C2185B] hover:from-[#C2185B] hover:to-[#B71C1C] text-white text-center font-semibold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
      >
        Book Now
      </a>
    </div>
  )

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <SafeImage
          src="/images/room-1.png"
          alt="Our Rooms"
          fill
          className="object-cover"
          fallbackSrc="/opulent-suite.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{content.title}</h1>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto">
              Experience comfort and luxury in our carefully designed accommodations
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFF9FB] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">Our Accommodations</h2>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose from our selection of comfortable and luxurious rooms
            </p>
          </div>

          {/* Room cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.rooms.map((room: any) => (
              <div
                key={room.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border border-[#F8BBD0]"
                onClick={() => openRoomModal(room)}
                style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <SafeImage
                    src={room.mainImage}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    fallbackSrc="/opulent-suite.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-[#F8BBD0] text-[#880E4F] px-4 py-1.5 rounded-full font-semibold shadow-lg">
                    {room.price} / night
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#880E4F] mb-2 group-hover:text-[#D81B60] transition-colors duration-300">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-5">{room.description}</p>

                  <div className="flex flex-wrap gap-y-3 mb-6">
                    {room.features &&
                      room.features.slice(0, 4).map((feature: string, index: number) => (
                        <div key={index} className="w-1/2 flex items-center text-gray-700">
                          <div className="h-4 w-4 rounded-full bg-[#F8BBD0] flex items-center justify-center mr-2 flex-shrink-0">
                            <Check className="h-3 w-3 text-[#D81B60]" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                  </div>

                  <button className="block w-full bg-[#F8BBD0] text-[#880E4F] text-center font-semibold py-3 rounded-lg transition-all duration-300 transform group-hover:scale-[1.02] shadow-md hover:bg-[#E91E63] hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Preview Modal */}
      {selectedRoom && (
        <PreviewModal
          isOpen={!!selectedRoom}
          onClose={closeRoomModal}
          title={selectedRoom.name}
          description={selectedRoom.description}
          images={[selectedRoom.mainImage, ...(selectedRoom.gallery || [])]}
          fallbackImage="/opulent-suite.png"
          details={<RoomDetails room={selectedRoom} />}
        />
      )}

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">Most Popular Facilities</h2>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Enjoy our premium amenities during your stay</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#E91E63]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center text-[#880E4F]">2 Swimming Pools</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#E91E63]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center text-[#880E4F]">Non-smoking Rooms</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#E91E63]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center text-[#880E4F]">Spa and Wellness</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#E91E63]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center text-[#880E4F]">Restaurant</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#E91E63]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center text-[#880E4F]">Family Rooms</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#E91E63]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center text-[#880E4F]">Free Parking</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#E91E63]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center text-[#880E4F]">Room Service</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#E91E63]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center text-[#880E4F]">Free WiFi</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#E91E63]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center text-[#880E4F]">Bar</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#E91E63]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center text-[#880E4F]">Breakfast</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#E91E63] to-[#C2185B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Book Your Stay?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white text-opacity-90">
              Contact us now to reserve your room and experience the luxury of Panorama Resort.
            </p>
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#E91E63] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
