"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/50 dark:border-slate-800/50 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          WhichEmail
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link
            href="#features"
            className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#security"
            className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Security
          </Link>
          <Link
            href="#about"
            className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 sm:w-5 h-4 sm:h-5 text-slate-600 dark:text-slate-400" />
            ) : (
              <Moon className="w-4 sm:w-5 h-4 sm:h-5 text-slate-600" />
            )}
          </button>

          <div className="hidden sm:flex items-center gap-2">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                size="sm"
                className="bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-xs sm:text-sm"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <Link href="/sign-up" className="sm:hidden">
            <Button
              size="sm"
              className="bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-xs"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
