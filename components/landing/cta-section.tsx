"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-r from-blue-600/20 to-blue-500/20 dark:from-blue-600/10 dark:to-blue-500/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-blue-500/30 dark:border-blue-400/20 p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>

          <div className="relative space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Ready to Master Your Emails?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Join thousands of users who never forget which email they used again. Start free today, no credit card
              required.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
              <Link href="/sign-up" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-lg w-full"
                >
                  Get Started Free
                </Button>
              </Link>
              <Link href="/sign-in" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-lg bg-transparent w-full"
                >
                  Sign In
                </Button>
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-2 sm:pt-4">
              Built by Fanyi Charllson • Privacy First • No Spam
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
