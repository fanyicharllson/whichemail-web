"use client"

import { Star, Copy, Edit, Trash2, Lock } from "lucide-react"

const services = [
  { id: 1, name: "Gmail", email: "user@gmail.com", category: "Email", icon: "📧", isFavorite: true, isSecure: true },
  {
    id: 2,
    name: "GitHub",
    email: "user@github.com",
    category: "Development",
    icon: "🐙",
    isFavorite: true,
    isSecure: true,
  },
  {
    id: 3,
    name: "Discord",
    email: "user@discord.com",
    category: "Communication",
    icon: "💜",
    isFavorite: false,
    isSecure: true,
  },
  { id: 4, name: "Figma", email: "user@figma.com", category: "Design", icon: "🎨", isFavorite: false, isSecure: true },
  {
    id: 5,
    name: "Slack",
    email: "user@slack.com",
    category: "Communication",
    icon: "⚡",
    isFavorite: true,
    isSecure: true,
  },
  {
    id: 6,
    name: "Notion",
    email: "user@outlook.com",
    category: "Productivity",
    icon: "📝",
    isFavorite: false,
    isSecure: false,
  },
  {
    id: 7,
    name: "Vercel",
    email: "user@gmail.com",
    category: "Development",
    icon: "▲",
    isFavorite: false,
    isSecure: true,
  },
  {
    id: 8,
    name: "Linear",
    email: "user@github.com",
    category: "Development",
    icon: "📋",
    isFavorite: false,
    isSecure: true,
  },
]

interface ServiceCardProps {
  searchQuery: string
}

export default function ServiceCard({ searchQuery }: ServiceCardProps) {
  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  if (filteredServices.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400 text-lg">No services found matching "{searchQuery}"</p>
        <p className="text-slate-500 text-sm mt-2">Try searching with different keywords</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredServices.map((service) => (
        <div
          key={service.id}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="text-5xl">{service.icon}</div>
            <button
              onClick={(e) => e.stopPropagation()}
              className={`p-2 rounded-lg transition-colors ${
                service.isFavorite ? "bg-yellow-500/20 text-yellow-400" : "hover:bg-slate-700 text-slate-400"
              }`}
            >
              <Star size={18} className={service.isFavorite ? "fill-current" : ""} />
            </button>
          </div>

          {/* Content */}
          <h3 className="font-bold text-lg text-slate-100 mb-1">{service.name}</h3>
          <p className="text-sm text-slate-400 mb-3 truncate">{service.email}</p>

          {/* Category & Status */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium">
              {service.category}
            </span>
            {service.isSecure && (
              <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs font-medium">
                <Lock size={12} />
                Secure
              </div>
            )}
            {!service.isSecure && (
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs font-medium">
                ⚠️ No Password
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4 border-t border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-700/50 hover:bg-slate-600 text-slate-300 rounded-lg transition-colors text-sm font-medium">
              <Copy size={14} />
              Copy
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-700/50 hover:bg-slate-600 text-slate-300 rounded-lg transition-colors text-sm font-medium">
              <Edit size={14} />
              Edit
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-700/50 hover:bg-red-500/20 text-slate-300 hover:text-red-400 rounded-lg transition-colors text-sm font-medium">
              <Trash2 size={14} />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
