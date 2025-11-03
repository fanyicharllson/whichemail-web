"use client"

import { Star, Copy, Edit, Trash2, Lock } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Gmail",
    email: "user@gmail.com",
    category: "Email",
    isFavorite: true,
    isSecure: true,
    addedDate: "2024-01-15",
  },
  {
    id: 2,
    name: "GitHub",
    email: "user@github.com",
    category: "Development",
    isFavorite: true,
    isSecure: true,
    addedDate: "2024-01-10",
  },
  {
    id: 3,
    name: "Discord",
    email: "user@discord.com",
    category: "Communication",
    isFavorite: false,
    isSecure: true,
    addedDate: "2024-01-08",
  },
  {
    id: 4,
    name: "Figma",
    email: "user@figma.com",
    category: "Design",
    isFavorite: false,
    isSecure: true,
    addedDate: "2024-01-05",
  },
  {
    id: 5,
    name: "Slack",
    email: "user@slack.com",
    category: "Communication",
    isFavorite: true,
    isSecure: true,
    addedDate: "2024-01-01",
  },
]

interface ServiceListProps {
  searchQuery: string
}

export default function ServiceList({ searchQuery }: ServiceListProps) {
  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  if (filteredServices.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400 text-lg">No services found matching "{searchQuery}"</p>
      </div>
    )
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-800/50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Service</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Added</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service, index) => (
              <tr
                key={service.id}
                className={`border-b border-slate-700 hover:bg-slate-700/30 transition-colors ${
                  index === filteredServices.length - 1 ? "border-b-0" : ""
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {service.isFavorite && <Star size={16} className="text-yellow-400 fill-yellow-400" />}
                    <span className="font-medium text-slate-100">{service.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-400">{service.email}</td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                    {service.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {service.isSecure ? (
                    <div className="flex items-center gap-1 text-green-400">
                      <Lock size={16} />
                      <span className="text-sm">Secure</span>
                    </div>
                  ) : (
                    <span className="text-yellow-400 text-sm">⚠️ No Password</span>
                  )}
                </td>
                <td className="px-6 py-4 text-slate-400 text-sm">{service.addedDate}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors text-slate-300 hover:text-slate-100">
                      <Copy size={16} />
                    </button>
                    <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors text-slate-300 hover:text-slate-100">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-slate-300 hover:text-red-400">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
