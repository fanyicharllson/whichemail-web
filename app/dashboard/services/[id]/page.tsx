"use client"

import { useState } from "react"
import { ArrowLeft, Copy, Edit, Trash2, Eye, EyeOff, Share2 } from "lucide-react"
import Link from "next/link"
import { toast } from "@/lib/toast-config"

export default function ServiceDetailsPage({ params }: { params: { id: string } }) {
  const [showPassword, setShowPassword] = useState(false)

  // Mock service data - replace with actual data fetching
  const service = {
    id: params.id,
    name: "Gmail",
    email: "user@gmail.com",
    password: "SecurePassword123!",
    username: "user.name",
    category: "Email",
    createdAt: "2024-01-15",
    lastUsed: "2024-01-20",
    isFavorite: true,
    notes: "Personal email account - linked to recovery options",
  }

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast.success(`${label} copied to clipboard!`)
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      toast.error("Service deleted successfully")
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-800/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-700/50 dark:border-slate-800/50">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/dashboard/services"
            className="p-2 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-slate-300" />
          </Link>
          <div className="flex-1 px-4">
            <h1 className="text-2xl font-bold text-slate-100">{service.name}</h1>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/dashboard/services/${service.id}/edit`}
              className="p-2 hover:bg-blue-500/10 dark:hover:bg-blue-600/10 rounded-lg transition-colors text-blue-400"
            >
              <Edit size={20} />
            </Link>
            <button
              onClick={handleDelete}
              className="p-2 hover:bg-red-500/10 dark:hover:bg-red-600/10 rounded-lg transition-colors text-red-400"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Details Container */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Main Details Card */}
        <div className="bg-slate-800/50 dark:bg-slate-900/50 backdrop-blur border border-slate-700/30 dark:border-slate-800/30 rounded-2xl p-8 space-y-6">
          {/* Service Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-100">Account Information</h2>

            {/* Email */}
            <div className="p-4 bg-slate-700/30 dark:bg-slate-800/30 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-slate-100 font-medium">{service.email}</p>
              </div>
              <button
                onClick={() => handleCopy(service.email, "Email")}
                className="p-2 hover:bg-blue-500/20 dark:hover:bg-blue-600/20 rounded-lg transition-colors text-blue-400"
              >
                <Copy size={18} />
              </button>
            </div>

            {/* Username */}
            <div className="p-4 bg-slate-700/30 dark:bg-slate-800/30 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Username</p>
                <p className="text-slate-100 font-medium">{service.username}</p>
              </div>
              <button
                onClick={() => handleCopy(service.username, "Username")}
                className="p-2 hover:bg-blue-500/20 dark:hover:bg-blue-600/20 rounded-lg transition-colors text-blue-400"
              >
                <Copy size={18} />
              </button>
            </div>

            {/* Password */}
            <div className="p-4 bg-slate-700/30 dark:bg-slate-800/30 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Password</p>
                <p className="text-slate-100 font-medium">{showPassword ? service.password : "••••••••"}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-2 hover:bg-slate-600/20 dark:hover:bg-slate-700/20 rounded-lg transition-colors text-slate-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <button
                  onClick={() => handleCopy(service.password, "Password")}
                  className="p-2 hover:bg-blue-500/20 dark:hover:bg-blue-600/20 rounded-lg transition-colors text-blue-400"
                >
                  <Copy size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/30 dark:border-slate-800/30 pt-6">
            {/* Metadata */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-400">Category</p>
                <p className="text-slate-100 font-medium mt-1">{service.category}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Created</p>
                <p className="text-slate-100 font-medium mt-1">{service.createdAt}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Last Used</p>
                <p className="text-slate-100 font-medium mt-1">{service.lastUsed}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Status</p>
                <p className="text-slate-100 font-medium mt-1">{service.isFavorite ? "⭐ Favorite" : "Active"}</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          {service.notes && (
            <div className="border-t border-slate-700/30 dark:border-slate-800/30 pt-6">
              <p className="text-sm text-slate-400 mb-2">Notes</p>
              <p className="text-slate-100 p-3 bg-slate-700/20 dark:bg-slate-800/20 rounded-lg">{service.notes}</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 px-6 py-3 bg-slate-700 dark:bg-slate-800 hover:bg-slate-600 dark:hover:bg-slate-700 text-slate-100 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            <Share2 size={18} />
            Share
          </button>
          <Link
            href={`/dashboard/services/${service.id}/edit`}
            className="flex-1 px-6 py-3 bg-linear-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
          >
            <Edit size={18} />
            Edit Service
          </Link>
        </div>
      </div>
    </div>
  )
}
