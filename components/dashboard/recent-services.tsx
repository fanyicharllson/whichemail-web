"use client"

import { Copy, Edit, Trash2, Lock } from "lucide-react"

const recentServices = [
  { id: 1, name: "Vercel", email: "user@gmail.com", category: "Development", passwordSet: true },
  { id: 2, name: "ChatGPT", email: "user@outlook.com", category: "AI Tools", passwordSet: true },
  { id: 3, name: "Notion", email: "user@gmail.com", category: "Productivity", passwordSet: false },
  { id: 4, name: "Linear", email: "user@github.com", category: "Development", passwordSet: true },
  { id: 5, name: "Figma", email: "user@gmail.com", category: "Design", passwordSet: true },
]

export default function RecentServices() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/20 transition-colors">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-800/50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Service</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Status</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentServices.map((service, index) => (
              <tr
                key={service.id}
                className={`border-b border-slate-700 hover:bg-slate-700/30 transition-colors ${
                  index === recentServices.length - 1 ? "border-b-0" : ""
                }`}
              >
                <td className="px-6 py-4">
                  <span className="font-medium text-slate-100">{service.name}</span>
                </td>
                <td className="px-6 py-4 text-slate-400">{service.email}</td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                    {service.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {service.passwordSet ? (
                    <div className="flex items-center gap-1 text-green-400">
                      <Lock size={16} />
                      <span className="text-sm">Secure</span>
                    </div>
                  ) : (
                    <span className="text-yellow-400 text-sm">⚠️ No Password</span>
                  )}
                </td>
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
