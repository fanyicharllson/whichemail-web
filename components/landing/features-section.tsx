"use client"

import { Mail, Brain, Lock, BarChart3, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Mail,
    title: "Track Emails by Service",
    description: "Automatically detect and organize which email you used for each service.",
  },
  {
    icon: Brain,
    title: "AI Assistant",
    description: "Use natural language to search and recover your email accounts instantly.",
  },
  {
    icon: Lock,
    title: "Biometric Security",
    description: "Access your credentials with fingerprint or face recognition.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Understand your email usage patterns and security insights.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Find any email in milliseconds with our optimized search.",
  },
  {
    icon: Shield,
    title: "Zero-Knowledge",
    description: "Your data is encrypted end-to-end. We never see your credentials.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">
            Powerful Features
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-2">
            Everything you need to manage your email credentials securely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700/20 p-6 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
