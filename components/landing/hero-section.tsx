"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lock, Zap, Shield, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight">
              <span className="text-slate-900 dark:text-white">Never Forget </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Which Email
              </span>
              <span className="text-slate-900 dark:text-white"> You Used</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-balance leading-relaxed">
              AI-powered email credential manager that helps you track, manage, and recover all your email accounts
              across services—instantly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
            <Link href="/sign-up" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-lg w-full"
              >
                Get Started Free
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              </Button>
            </Link>
            <Link href="#features" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-lg border-slate-300 dark:border-slate-700 bg-transparent w-full"
              >
                Learn More
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
              <span>Bank-grade Encryption</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <Lock className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
              <span>100% Private</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
              <span>Lightning Fast</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Multiple animated gradient layers for glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-blue-600/20 to-blue-500/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl sm:rounded-3xl blur-3xl opacity-40"></div>

          <div className="relative bg-gradient-to-br from-white/50 to-white/30 dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/30 dark:border-slate-700/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
            <div className="absolute -top-12 -right-12 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tr from-blue-400/10 to-blue-500/5 rounded-full blur-3xl"></div>

            {/* Icon elements */}
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-20 dark:opacity-30">
              <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Services Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  Instant
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Email Recovery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  99.9%
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Uptime Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
