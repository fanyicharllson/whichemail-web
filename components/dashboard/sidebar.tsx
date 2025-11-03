"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Lock, MessageSquare, BarChart3, Settings, LogOut, X } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
  isMobile?: boolean
}

export default function Sidebar({ isOpen, onToggle, isMobile = false }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/services", label: "Services", icon: Lock },
    { href: "/dashboard/chat", label: "AI Assistant", icon: MessageSquare },
    { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ]

  const isActive = (href: string) => pathname === href

  if (isMobile) {
    return (
      <>
        {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={onToggle} />}
        <aside
          className={`fixed left-0 top-0 h-screen w-64 bg-slate-800 border-r border-slate-700 transition-all duration-300 flex flex-col z-40 md:hidden transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="p-6 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                WhichEmail
              </span>
            </div>
            <button onClick={onToggle} className="p-1 hover:bg-slate-700 rounded-lg transition-colors">
              <X size={20} className="text-slate-300" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onToggle}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Sign Out */}
          <div className="p-4 border-t border-slate-700">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-300 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200">
              <LogOut size={20} />
              <span className="text-sm font-medium">Sign Out</span>
            </button>
          </div>
        </aside>
      </>
    )
  }

  // Desktop sidebar
  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-slate-800 dark:bg-slate-900 border-r border-slate-700 dark:border-slate-800 transition-all duration-300 flex flex-col h-screen overflow-y-auto hidden md:flex`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-700 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          {isOpen && (
            <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              WhichEmail
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                active
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-300 hover:bg-slate-700/50 dark:hover:bg-slate-700 hover:text-white"
              }`}
            >
              <Icon size={20} />
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Sign Out */}
      <div className="p-4 border-t border-slate-700 dark:border-slate-800">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-300 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200">
          <LogOut size={20} />
          {isOpen && <span className="text-sm font-medium">Sign Out</span>}
        </button>
      </div>
    </aside>
  )
}
