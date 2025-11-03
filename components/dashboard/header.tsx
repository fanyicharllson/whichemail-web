"use client"

import { Menu, Search, Bell, User } from "lucide-react"
import { Input } from "@/components/ui/input"

interface DashboardHeaderProps {
  onMenuClick: () => void
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="bg-slate-800 border-b border-slate-700 px-4 md:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Mobile Menu & Search */}
        <div className="flex items-center gap-3 flex-1">
          <button onClick={onMenuClick} className="md:hidden p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <Menu size={20} className="text-slate-300" />
          </button>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-sm relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input
              placeholder="Search services..."
              className="pl-10 bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-400 focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors relative">
            <Bell size={20} className="text-slate-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <User size={20} className="text-slate-300" />
          </button>
        </div>
      </div>
    </header>
  )
}
