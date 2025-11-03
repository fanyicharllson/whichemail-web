"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useRef } from "react"

const favoriteServices = [
  { id: 1, name: "Gmail", email: "user@gmail.com", icon: "📧" },
  { id: 2, name: "GitHub", email: "user@github.com", icon: "🐙" },
  { id: 3, name: "Discord", email: "user@discord.com", icon: "💜" },
  { id: 4, name: "Figma", email: "user@figma.com", icon: "🎨" },
  { id: 5, name: "Slack", email: "user@slack.com", icon: "⚡" },
  { id: 6, name: "Twitter", email: "user@twitter.com", icon: "𝕏" },
]

export default function FavoritesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative group">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
      >
        <ChevronRight size={20} />
      </button>

      {/* Carousel */}
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {favoriteServices.map((service) => (
          <div
            key={service.id}
            className="flex-shrink-0 w-48 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group/card"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{service.icon}</div>
              <button className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
              </button>
            </div>
            <h3 className="font-bold text-slate-100 mb-1">{service.name}</h3>
            <p className="text-sm text-slate-400 truncate">{service.email}</p>
            <button className="mt-4 w-full py-2 px-3 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
