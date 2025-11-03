"use client"

import { Heart, Target, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - About content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-600/10 border border-blue-500/30 mb-4 sm:mb-6">
                <Heart className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Built with Purpose
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">
                The Story Behind WhichEmail
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                WhichEmail was born from a real problem that frustrated me daily:{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  "Which email did I use for this account?"
                </span>
              </p>
              <p>
                After the tenth time resetting passwords because I couldn't remember which email I'd used, I realized
                thousands of people faced this exact issue. Password managers solved one problem, but they missed this
                critical piece of the puzzle.
              </p>
              <p>
                So I built WhichEmail—a secure, intelligent solution that helps you track, organize, and manage all your
                online accounts and the emails linked to them. No more guessing, no more forgotten passwords, no more
                security headaches.
              </p>
            </div>

            {/* Mission statement */}
            <div className="relative bg-gradient-to-br from-blue-600/10 to-blue-500/5 rounded-2xl border border-blue-500/20 p-6">
              <div className="flex gap-3">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Our Mission</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    To empower people to securely manage their digital identity by making it effortless to track and
                    recover all their email accounts across thousands of services—with zero compromises on privacy or
                    security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual showcase */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <div className="bg-gradient-to-br from-white/50 to-white/30 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/20 p-12 shadow-2xl">
                <div className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-1">
                        50K+
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Users Protected</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-1">
                        2M+
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Credentials Secured</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-1">
                        0
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Breaches (Industry First)</div>
                    </div>
                  </div>

                  {/* Creator badge */}
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-900 rounded-xl p-4 border border-slate-700/50 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Created by</div>
                      <div className="text-slate-400">A Security-First Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
