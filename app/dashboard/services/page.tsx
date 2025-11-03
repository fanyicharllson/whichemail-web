"use client"

import { useState } from "react"
import { Search, Grid, List, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import ServiceCard from "@/components/dashboard/service-card"
import ServiceList from "@/components/dashboard/service-list"

export default function ServicesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6 pb-24">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Services</h1>
        <p className="text-slate-400">Manage all your online accounts in one place</p>
      </div>

      {/* Controls */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input
            placeholder="Search by service name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-400"
          />
        </div>

        {/* View Toggle & Add Button */}
        <div className="flex items-center gap-2">
          <div className="flex gap-2 bg-slate-700/50 p-1 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "grid" ? "bg-blue-500 text-white" : "text-slate-400 hover:text-slate-300"
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "list" ? "bg-blue-500 text-white" : "text-slate-400 hover:text-slate-300"
              }`}
            >
              <List size={18} />
            </button>
          </div>

          <button
            onClick={() => (window.location.href = "/dashboard/services/add")}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <Plus size={18} />
            <span>Add Service</span>
          </button>
        </div>
      </div>

      {/* Content */}
      {viewMode === "grid" ? <ServiceCard searchQuery={searchQuery} /> : <ServiceList searchQuery={searchQuery} />}
    </div>
  )
}
