"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { toast } from "@/lib/toast-config"

export default function EditServicePage({ params }: { params: { id: string } }) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    serviceName: "Gmail",
    email: "user@gmail.com",
    password: "SecurePassword123!",
    username: "user.name",
    category: "email",
    notes: "Personal email account - linked to recovery options",
    isFavorite: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement & HTMLSelectElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Service updated successfully!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-800/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-700/50 dark:border-slate-800/50">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            href={`/dashboard/services/${params.id}`}
            className="p-2 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-slate-300" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-100">Edit Service</h1>
            <p className="text-sm text-slate-400">Update account information</p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/50 dark:bg-slate-900/50 backdrop-blur border border-slate-700/30 dark:border-slate-800/30 rounded-2xl p-8 space-y-6"
        >
          {/* Service Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Service Name *</label>
            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600/50 dark:border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600/50 dark:border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
            >
              <option value="social">Social Media</option>
              <option value="email">Email</option>
              <option value="finance">Finance</option>
              <option value="entertainment">Entertainment</option>
              <option value="productivity">Productivity</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600/50 dark:border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>

          {/* Username */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Username/ID</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600/50 dark:border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Password *</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600/50 dark:border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600/50 dark:border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
            />
          </div>

          {/* Favorite Checkbox */}
          <div className="flex items-center gap-3 p-3 bg-slate-700/30 dark:bg-slate-800/30 rounded-lg">
            <input
              type="checkbox"
              name="isFavorite"
              id="favorite"
              checked={formData.isFavorite}
              onChange={handleInputChange}
              className="w-4 h-4 rounded border-slate-600 bg-slate-700 cursor-pointer accent-blue-500"
            />
            <label htmlFor="favorite" className="text-sm font-medium text-slate-300 cursor-pointer flex-1">
              Mark as favorite
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Link
              href={`/dashboard/services/${params.id}`}
              className="flex-1 px-6 py-3 bg-slate-700 dark:bg-slate-800 hover:bg-slate-600 dark:hover:bg-slate-700 text-slate-100 rounded-lg font-medium transition-colors text-center"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/50"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
