"use client"

import type React from "react"
import Sidebar from "@/components/dashboard/sidebar"
import DashboardHeader from "@/components/dashboard/header"
import { useState } from "react"
import { ToastProvider } from "@/lib/toast-config"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <ToastProvider>
      <div className="flex h-screen bg-slate-900 dark:bg-slate-950 text-slate-100">
        {/* Mobile Sidebar */}
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} isMobile={true} />

        {/* Desktop Sidebar */}
        <Sidebar isOpen={true} onToggle={() => setSidebarOpen(!sidebarOpen)} isMobile={false} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 overflow-auto">
            <div className="p-4 md:p-6 lg:p-8">{children}</div>
          </main>
        </div>
      </div>
    </ToastProvider>
  )
}
