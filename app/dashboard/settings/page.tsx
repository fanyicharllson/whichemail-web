"use client"

import { useState } from "react"
import { Save, Download, LogOut, Moon, Sun, Monitor } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
  const [profile, setProfile] = useState({ name: "John Doe", email: "john@example.com" })
  const [theme, setTheme] = useState("dark")
  const [passwordStorage, setPasswordStorage] = useState(true)
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="space-y-8 pb-24 max-w-4xl">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Settings</h1>
        <p className="text-slate-400">Manage your account and preferences</p>
      </div>

      {/* Profile Section */}
      <section className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-2">Profile</h2>
          <p className="text-slate-400 text-sm">Update your personal information</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
            <Input
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <Input
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-500"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 font-medium">
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-2">Security</h2>
          <p className="text-slate-400 text-sm">Manage your security settings</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-700/30 border border-slate-700 rounded-xl hover:border-blue-500/20 transition-colors">
            <div>
              <p className="font-medium text-slate-100">Password Storage</p>
              <p className="text-sm text-slate-400">Allow WhichEmail to store encrypted passwords</p>
            </div>
            <button
              onClick={() => setPasswordStorage(!passwordStorage)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                passwordStorage ? "bg-blue-500" : "bg-slate-600"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  passwordStorage ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <button className="w-full px-4 py-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-blue-500/20 text-slate-100 rounded-xl font-medium transition-all duration-300">
            Change Password
          </button>

          <button className="w-full px-4 py-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-blue-500/20 text-slate-100 rounded-xl font-medium transition-all duration-300">
            Enable Two-Factor Authentication
          </button>
        </div>
      </section>

      {/* Preferences Section */}
      <section className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-2">Preferences</h2>
          <p className="text-slate-400 text-sm">Customize your experience</p>
        </div>

        {/* Theme */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-slate-300">Theme</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "light", label: "Light", icon: Sun },
              { id: "dark", label: "Dark", icon: Moon },
              { id: "system", label: "System", icon: Monitor },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTheme(id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                  theme === id
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-slate-600 bg-slate-700/30 hover:border-slate-500"
                }`}
              >
                <Icon size={20} className={theme === id ? "text-blue-400" : "text-slate-400"} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-between p-4 bg-slate-700/30 border border-slate-700 rounded-xl hover:border-blue-500/20 transition-colors">
          <div>
            <p className="font-medium text-slate-100">Notifications</p>
            <p className="text-sm text-slate-400">Receive updates about account changes</p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
              notifications ? "bg-blue-500" : "bg-slate-600"
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                notifications ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </section>

      {/* Data Management Section */}
      <section className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-2">Data Management</h2>
          <p className="text-slate-400 text-sm">Export or manage your data</p>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-green-500/20 text-slate-100 rounded-xl font-medium transition-all duration-300">
            <Download size={18} />
            Export All Data
          </button>

          <button className="w-full px-4 py-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-blue-500/20 text-slate-100 rounded-xl font-medium transition-all duration-300">
            Import Data
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-2">About WhichEmail</h2>
          <p className="text-slate-400 text-sm">Information about this application</p>
        </div>

        <div className="space-y-3 text-slate-300 text-sm">
          <div className="flex justify-between p-3 bg-slate-700/30 rounded-lg">
            <span>Version</span>
            <span className="font-medium">1.0.0</span>
          </div>
          <div className="flex justify-between p-3 bg-slate-700/30 rounded-lg">
            <span>Last Updated</span>
            <span className="font-medium">November 2024</span>
          </div>
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-200">
            <p>WhichEmail helps you track, organize, and manage all your online accounts securely.</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 text-slate-300 hover:text-slate-100 text-sm font-medium hover:bg-slate-700/50 rounded-lg transition-colors">
            Privacy Policy
          </button>
          <button className="flex-1 px-4 py-2 text-slate-300 hover:text-slate-100 text-sm font-medium hover:bg-slate-700/50 rounded-lg transition-colors">
            Terms of Service
          </button>
        </div>
      </section>

      {/* Sign Out Section */}
      <section className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
        <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 text-red-400 hover:text-red-300 rounded-xl font-medium transition-all duration-300">
          <LogOut size={18} />
          Sign Out
        </button>
      </section>
    </div>
  )
}
