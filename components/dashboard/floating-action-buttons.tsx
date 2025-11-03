"use client"

import { Plus, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
      {/* AI Chat Button */}
      <Link
        href="/dashboard/chat"
        className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group relative dark:from-purple-600 dark:to-pink-600"
      >
        <MessageCircle size={24} />
        <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-950 text-slate-100 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-slate-700 dark:border-slate-800">
          AI Assistant
        </span>
      </Link>

      {/* Add Service Button */}
      <Link
        href="/dashboard/services/add"
        className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group relative dark:from-blue-600 dark:to-blue-700"
      >
        <Plus size={24} />
        <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-950 text-slate-100 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-slate-700 dark:border-slate-800">
          Add Service
        </span>
      </Link>
    </div>
  )
}
