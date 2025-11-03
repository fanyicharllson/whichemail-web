"use client"

import StatCard from "@/components/dashboard/stat-card"
import { Lock, Mail, Shield, TrendingUp } from "lucide-react"
import RecentServices from "@/components/dashboard/recent-services"
import FavoritesCarousel from "@/components/dashboard/favorites-carousel"
import FloatingActionButtons from "@/components/dashboard/floating-action-buttons"

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-24">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Dashboard</h1>
        <p className="text-slate-400">Welcome back! Here's your account overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Accounts"
          value="24"
          change="2 new this week"
          trend="up"
          icon={<Lock size={24} className="text-blue-400" />}
        />
        <StatCard
          label="Emails Tracked"
          value="18"
          change="1 duplicate found"
          trend="down"
          icon={<Mail size={24} className="text-blue-400" />}
        />
        <StatCard
          label="Security Score"
          value="94%"
          change="Strong protection"
          icon={<Shield size={24} className="text-blue-400" />}
        />
        <StatCard
          label="This Month"
          value="12"
          change="Services added"
          trend="up"
          icon={<TrendingUp size={24} className="text-blue-400" />}
        />
      </div>

      {/* Favorites Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-1">Your Favorites</h2>
          <p className="text-slate-400 text-sm">Quick access to your most used services</p>
        </div>
        <FavoritesCarousel />
      </div>

      {/* Recent Services */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-1">Recent Services</h2>
          <p className="text-slate-400 text-sm">Your recently added accounts</p>
        </div>
        <RecentServices />
      </div>

      {/* Floating Action Buttons */}
      <FloatingActionButtons />
    </div>
  )
}
