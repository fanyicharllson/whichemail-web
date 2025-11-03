"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { PasswordStrengthIndicator } from "@/components/auth/password-strength-indicator"
import { GoogleAuthButton } from "@/components/auth/google-auth-button"
import { Mail, Lock, User } from "lucide-react"

export function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLButtonElement>) => {
    // Normalize the event target so this handler can work for both inputs and the Checkbox button event.
    const target = e.target as any
    const { name, type, checked, value } = target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Backend will be handled with Appwrite
    console.log("Form submitted:", formData)
  }

  return (
    <div className="space-y-6">
      {/* Form container with glassmorphism */}
      <div className="relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/20 p-8 shadow-2xl">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-blue-600/5 rounded-3xl"></div>

        <div className="relative space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Create Account</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Join WhichEmail and never forget which email you used again.
            </p>
          </div>

          {/* Google Auth Button */}
          <GoogleAuthButton type="signup" />

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="pl-10 pr-10 bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? "✕" : "○"}
                </button>
              </div>
            </div>

            {/* Password Strength Indicator */}
            {formData.password && <PasswordStrengthIndicator password={formData.password} />}

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="terms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400">
                I agree to the{" "}
                <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!formData.agreeToTerms || isLoading}
              className="w-full h-11 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
