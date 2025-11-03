"use client"

import { Lock, Eye, Key, Server, AlertCircle, Zap } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "Your credentials are encrypted with AES-256 before leaving your device. Even we cannot access your data.",
  },
  {
    icon: Key,
    title: "Zero-Knowledge Architecture",
    description: "We never store, view, or process your credentials. Everything happens on your device.",
  },
  {
    icon: Eye,
    title: "Privacy First",
    description: "No tracking, no analytics, no third-party data sharing. Your privacy is our commitment.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security with regular audits, penetration testing, and compliance certifications.",
  },
  {
    icon: AlertCircle,
    title: "Breach Detection",
    description: "Real-time monitoring alerts you if any of your emails appear in data breaches.",
  },
  {
    icon: Zap,
    title: "Instant Account Recovery",
    description: "Recover compromised accounts instantly with our automated security protocols.",
  },
]

export function SecuritySection() {
  return (
    <section
      id="security"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-black dark:from-slate-900 dark:via-slate-950 dark:to-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 mb-6">
            <Lock className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">Security First</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Enterprise-Grade Security</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Your credentials are your most valuable asset. We protect them with military-grade encryption and
            zero-knowledge architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Security badges */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Trusted by Security Professionals</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-2xl font-bold text-blue-400 mb-1">SOC 2</div>
              <div className="text-sm text-slate-400">Type II Certified</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-2xl font-bold text-blue-400 mb-1">GDPR</div>
              <div className="text-sm text-slate-400">Compliant</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-2xl font-bold text-blue-400 mb-1">CCPA</div>
              <div className="text-sm text-slate-400">Compliant</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-2xl font-bold text-blue-400 mb-1">AES-256</div>
              <div className="text-sm text-slate-400">Encryption</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
